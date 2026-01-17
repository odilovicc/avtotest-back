import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('tests')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.testService.findOne(id);
  }

  @Post()
  async create(@Body() testData: any) {
    return this.testService.create(testData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() testData: any) {
    return this.testService.update(id, testData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.testService.remove(id);
  }
}
