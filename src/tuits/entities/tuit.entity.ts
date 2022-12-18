import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tuits' })
export class Tuit {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  message: string;
}
