import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'full_name',
    length: 25,
  })
  fullname: string;

  @Column({ length: 256 })
  email: string;

  @Column({ length: 256 })
  password: string;
}
