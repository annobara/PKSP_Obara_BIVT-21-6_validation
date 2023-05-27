import { StorageService } from './storage.service';
import { Controller, Get, Put, Post, Delete, Param, Body, UsePipes, ValidationPipe, UseFilters} from '@nestjs/common';
import { CreateStorageDto } from './dto/storage.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundExceptionFilter } from 'src/filters/not-found-exception.filter';
import { BadRequestExceptionFilter } from 'src/filters/bad-request-exception.filter';
import { InternalServerExceptionFilter } from 'src/filters/internal-server-error.filters';

@ApiTags('Склад')
@Controller('storage')
@UseFilters(NotFoundExceptionFilter, BadRequestExceptionFilter, InternalServerExceptionFilter)
export class StorageController {
    constructor(private readonly storageService: StorageService) {}
    @Get()
    findAll() {
       return this.storageService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.storageService.findOne(+id);
    }
    
    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateStorage: CreateStorageDto) {
        return this.storageService.update(+id, updateStorage);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createStorage: CreateStorageDto) {
        return this.storageService.create(createStorage);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
       return this.storageService.remove(+id);
     }
}