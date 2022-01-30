import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update.movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find((movie) => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`해당 영화 ${id}번을 찾을 수 없습니다.`);
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.movies = this.movies.filter((movie) => movie.id !== id);
    }

    create(movieData: CreateMovieDTO) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        });
    }

    update(id: number, updateData: UpdateMovieDTO) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({ ...movie, ...updateData })
    }
}


// DTO를 쓰자 (코드 간결 , 타입 유효성 검사)
// class-validator , class-transformer => Pipe 와 함께 type 검사에 유용함
