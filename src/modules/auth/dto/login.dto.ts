import { IsNotEmpty } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: "O email é obrigatório."})
    email: string;

    @IsNotEmpty({ message: "A senha é obrigatória."})
    password: string;
}