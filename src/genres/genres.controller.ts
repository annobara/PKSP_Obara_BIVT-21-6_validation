import { GenresService } from './genres.service';
import { Genre } from './genres.entity';
import { Controller, Get, Put, Post, Delete, Param, Body, UseFilters} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundExceptionFilter } from 'src/filters/not-found-exception.filter';
import { BadRequestExceptionFilter } from 'src/filters/bad-request-exception.filter';
import { InternalServerExceptionFilter } from 'src/filters/internal-server-error.filters';


@ApiTags('Жанры')
@Controller('genres')
@UseFilters(NotFoundExceptionFilter, BadRequestExceptionFilter, InternalServerExceptionFilter)
export class GenresController {
    constructor(private readonly genresService: GenresService) {}
    @Get()
    findAll() {
       return this.genresService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.genresService.findOne(+id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateGenre: Genre) {
        return this.genresService.update(+id, updateGenre);
    }
    @Post()
    create(@Body() createGenre: Genre) {
        return this.genresService.create(createGenre);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
       return this.genresService.remove(+id);
     }
}