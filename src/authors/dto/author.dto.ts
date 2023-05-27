import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateAuthorDto{
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsPositive()
    @IsInt()
    birthyear: number;

    @IsNotEmpty()
    @IsString()
    country: string;
}