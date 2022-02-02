import { Module } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports: [Movie],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule { }
