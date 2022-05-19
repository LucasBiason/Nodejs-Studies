import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date

  constructor(){
      if(!this.id){
          this.id=uuid();
      }
  }

}