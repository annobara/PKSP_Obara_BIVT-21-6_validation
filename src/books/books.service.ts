import { Injectable } from '@nestjs/common';
import { Book } from 'src/books/books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Author } from 'src/authors/author.entity';
import { Genre } from 'src/genres/genres.entity';
import { CreateBookDto } from './dto/book.dto';


@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>
    ) {}
  
    async create(bookDto: CreateBookDto): Promise<Book>{
        const book = this.bookRepository.create()
        book.title = bookDto.title;
        book.year = bookDto.year;
        book.price = bookDto.price;
        const author = await this.authorRepository.findOneBy({
            author_id: bookDto.author
        });
        book.author = author;
        const genres = await this.genreRepository.findBy({
            genre_id: In(bookDto.genres)
        })
        book.genres = genres;
        await this.bookRepository.save(book);
        return book;

    }
    findOne(id: number): Promise<Book> {
        return this.bookRepository.findOne({
            where: {book_id: id },
            relations: {author: true, genres: true}
        });
    }
    async findAll(): Promise<Book[]> {
         const books = await this.bookRepository.find({
            relations: {author: true, genres: true}
         });
         return books
    }

    async update(id: number, updatedBook: CreateBookDto) {
        const book = await this.bookRepository.findOne({
            where: { book_id: id}
        });
        book.title = updatedBook.title;
        book.price = updatedBook.price;
        book.year = updatedBook.year;
        book.genres = await this.genreRepository.findBy({
            genre_id: In(updatedBook.genres)
        })
        book.author = await this.authorRepository.findOneBy({
            author_id: updatedBook.author
        });
        await this.bookRepository.save(book);
        return book;
    }
    remove(id: number) {
       this.bookRepository.delete({book_id: id});
     }  
}