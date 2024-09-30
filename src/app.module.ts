import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmConfig } from './modules/config/typeorm/typeorm.module';

@Module({
  imports: [
    ProjectsModule, UsersModule, TasksModule, TypeOrmConfig, 
    CacheModule.register(
      { 
        isGlobal: true,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
