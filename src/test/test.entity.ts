import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Variant {
  id: string; // "A", "B", "C" yoki uuid
  text: string;
}

@Entity('tests')
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  question: string;

  @Column({ type: 'varchar', nullable: true })
  image?: string;

  @Column({ type: 'jsonb' })
  variants: Variant[];

  @Column({ type: 'varchar' })
  correctVariantId: string; // "A" yoki variant uuid

  @Column({ type: 'text', nullable: true })
  explanation?: string;

  @Column({ type: 'int' })
  topicId: number;

  @Column({ type: 'int' })
  orderIndex: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}