import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>
  ) {}

  async findAll(): Promise<Test[]> {
    return this.testRepository.find({ order: { orderIndex: 'ASC' } });
  }

  async findOne(id: string): Promise<Test> {
    return this.testRepository.findOne({ where: { id } });
  }

  async create(testData: any): Promise<Test> {
    const test = this.testRepository.create(testData);
    const savedTest = await this.testRepository.save(test);
    return Array.isArray(savedTest) ? savedTest[0] : savedTest;
  }

  async update(id: string, testData: any): Promise<Test> {
    await this.testRepository.update(id, testData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.testRepository.delete(id);
  }
}
