import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/user.dto";

@ApiTags('Пользователи')
@Controller('users')
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