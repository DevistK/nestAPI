import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return '모든 영화를 가져옴';
  }
  @Get('search')
  search(@Query('name') searchingYear: string) {
    return `영화 제목 : ${searchingYear}으로 검색합니다.`;
  }
  @Get(':id')
  getMovie(@Param('id') id: string) {
    return `하나의 영화를 가져옴 ${id}`;
  }
  @Post()
  create(@Body() movieData: object) {
    return movieData;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `${id}번 영화를 삭제합니다.`;
  }
  @Patch(':id')
  path(@Param('id') id: string, @Body() updateData: object) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
