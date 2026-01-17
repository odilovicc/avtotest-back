import { IsArray } from 'class-validator';

export class ImportTestDto {
  @IsArray()
  tests: any[];
}