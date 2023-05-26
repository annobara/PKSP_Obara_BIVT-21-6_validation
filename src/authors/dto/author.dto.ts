import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAuthorDto{
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNumber()
    @IsString()
    birthyear: number;

    @IsNotEmpty()
    @IsString()
    country: string;
}