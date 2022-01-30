import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) { }

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get(':id')
  getMovie(@Param('id') movieId: string): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: object) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieService.deleteOne(id);
  }

  @Patch(':id')
  path(@Param('id') id: string, @Body() updateData: object) {
    return this.movieService.update(id, updateData);
  }
}
