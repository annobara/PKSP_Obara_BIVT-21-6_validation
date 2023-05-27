import { BooksService } from './books.service';
import { Controller, Get, Put, Post, Delete, Param, Body, UsePipes, ValidationPipe, UseFilters} from '@nestjs/common';
import { CreateBookDto } from './dto/book.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundExceptionFilter } from 'src/filters/not-found-exception.filter';
import { BadRequestExceptionFilter } from 'src/filters/bad-request-exception.filter';
import { InternalServerExceptionFilter } from 'src/filters/internal-server-error.filters';


@ApiTags('Книги')
@Controller('books')
@UseFilters(NotFoundExceptionFilter, BadRequestExceptionFilter, InternalServerExceptionFilter)
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