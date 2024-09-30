import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    Inject,
    Query,
    } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { CACHE_MANAGER, CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";
import { FilterDto } from "src/modules/pagination/dto/filter.dto";

@Controller("projects")
export class ProjectsController {

    constructor(
        private readonly projectsService: ProjectsService) {}
        

    @Post()
    create(
        @Body() createProjectDto: CreateProjectDto,
    ) {
        return this.projectsService.create(createProjectDto);
    }

    @Get()
    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30000)
    findAll(@Query() filter?: FilterDto) {
        return this.projectsService.findAllPaginated(filter);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.projectsService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateProjectDto: UpdateProjectDto,
    ) {
        return this.projectsService.update(+id, updateProjectDto);
    }
    
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.projectsService.remove(+id);
    }
}
    