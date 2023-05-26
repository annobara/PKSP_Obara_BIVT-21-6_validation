import { BooksService } from './books.service';
import { Book } from './books.entity';
import { Controller, Get, Put, Post, Delete, Param, Body, Res, Render, UsePipes, ValidationPipe} from '@nestjs/common';
import { CreateBookDto } from './dto/book.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Книги')
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    @Get()
    findAll(){
        return this.booksService.findAll();
    }
      
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.booksService.findOne(+id);
    }
   
    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateBook: CreateBookDto) {
        return this.booksService.update(+id, updateBook);
    }
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createBook: CreateBookDto) {
        return this.booksService.create(createBook);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
       return this.booksService.remove(+id);
     }
}