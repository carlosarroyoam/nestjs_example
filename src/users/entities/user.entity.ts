import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 16, unique: true })
  username: string;

  @Column({ length: 80 })
  password: string;

  @Column({ name: 'api_key', length: 80, unique: true })
  apiKey: string;

  @Column({ width: 1, default: true })
  activo: boolean;
}
