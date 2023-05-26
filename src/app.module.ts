import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module'
import { BooksModule } from './books/books.module'
import { GenresModule } from './genres/genres.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageModule } from './storage/storage.module';
import { UserModule } from './users/users.module';



@Module({
  imports: [
    AuthorsModule, 
    BooksModule, 
    GenresModule, 
    StorageModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'education',
      password: 'password',
      host: 'localhost',
      synchronize: false,
      logging: 'all',
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
