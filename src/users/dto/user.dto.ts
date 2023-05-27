import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    age: number;
}