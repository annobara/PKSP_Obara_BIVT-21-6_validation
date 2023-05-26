import { GenresService } from './genres.service';
import { Genre } from './genres.entity';
import { Controller, Get, Put, Post, Delete, Param, Body} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Жанры')
@Controller('genres')
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