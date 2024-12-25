import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
    export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  password: string;
}