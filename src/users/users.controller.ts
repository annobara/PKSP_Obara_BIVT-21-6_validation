import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/user.dto";
import { NotFoundExceptionFilter } from "src/filters/not-found-exception.filter";
import { BadRequestExceptionFilter } from "src/filters/bad-request-exception.filter";
import { InternalServerExceptionFilter } from "src/filters/internal-server-error.filters";


@ApiTags('Пользователи')
@Controller('users')
@UseFilters(NotFoundExceptionFilter, BadRequestExceptionFilter, InternalServerExceptionFilter)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    findAll() {
       return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateUser: CreateUserDto) {
        return this.usersService.update(+id, updateUser);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createUser: CreateUserDto) {
        return this.usersService.create(createUser);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
       return this.usersService.remove(+id);
     }
}