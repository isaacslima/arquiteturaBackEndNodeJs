import {
    IsNotEmpty,
    IsString,
    IsStrongPassword
    } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
    
}
