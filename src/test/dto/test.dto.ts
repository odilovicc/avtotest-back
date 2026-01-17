import { IsString, IsNotEmpty, IsNumber, IsArray, IsOptional } from 'class-validator';

export class Variant {
  id: string;
  text: string;
}

export class CreateTestDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsArray()
  @IsNotEmpty()
  variants: Variant[];

  @IsString()
  @IsNotEmpty()
  correctVariantId: string;

  @IsString()
  @IsOptional()
  explanation?: string;

  @IsNumber()
  @IsNotEmpty()
  topicId: number;

  @IsNumber()
  @IsNotEmpty()
  orderIndex: number;
}

export class UpdateTestDto {
  @IsString()
  @IsOptional()
  question?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsArray()
  @IsOptional()
  variants?: Variant[];

  @IsString()
  @IsOptional()
  correctVariantId?: string;

  @IsString()
  @IsOptional()
  explanation?: string;

  @IsNumber()
  @IsOptional()
  topicId?: number;

  @IsNumber()
  @IsOptional()
  orderIndex?: number;
}