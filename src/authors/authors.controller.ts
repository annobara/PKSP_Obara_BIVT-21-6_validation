import { AuthorsService } from './authors.service';
import { Author } from './author.entity';
import { Controller, Get, Put, Post, Delete, Param, Body, UsePipes, ValidationPipe, UseFilters} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAuthorDto } from './dto/author.dto';
import { NotFoundExceptionFilter } from 'src/filters/not-found-exception.filter';
import { BadRequestExceptionFilter } from 'src/filters/bad-request-exception.filter';
import { InternalServerExceptionFilter } from 'src/filters/internal-server-error.filters';


@Controller('authors')
@ApiTags('Авторы')
@UseFilters(NotFoundExceptionFilter, BadRequestExceptionFilter, InternalServerExceptionFilter)
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}
    @Get()
    findAll() {
        return this.authorsService.findAll();
    }
    @Get('incomplete')
    findIncomplete(){
       return this.authorsService.findIncomplete();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authorsService.findOne(+id);
    }
    
    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateAuthor: CreateAuthorDto) {
        return this.authorsService.update(+id, updateAuthor);
    }

    @ApiOperation({summary: 'создание автора'})
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createAuthor: CreateAuthorDto) {
        return this.authorsService.create(createAuthor);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
       return this.authorsService.remove(+id);
    }
}