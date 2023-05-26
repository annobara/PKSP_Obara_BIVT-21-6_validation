import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";


export class CreateBookDto {
    @ApiProperty({example: 'Анна Каренина', description: 'название книги'})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: '1999', description: 'год издания'})
    @IsNotEmpty()
    @IsNumber()
    year: number;

    @ApiProperty({example: '499', description: 'цена'})
    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    price: number;

    @ApiProperty({example: '4', description: 'уникальный идентификатор автора'})
    @IsNumber()
    @Min(1)
    author: number;
    
    @ApiProperty({example: [1, 2], description: 'спискок идентификаторов жанров'})
    @IsArray()
    genres: number[]; //у книги могут быть только уже созданный автор и созданные жанры
}