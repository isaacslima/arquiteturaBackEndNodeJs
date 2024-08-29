import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty({ message: "O nome do projeto precisa ser definido"})
    @IsString()
    name: string;

    @IsNotEmpty({ message: "A descrição precisa ser definida"})
    @IsString()
    description: string;
}