import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import Category from "./categories"

@Entity("videos")
export default class Video {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @CreateDateColumn()
  created_at: Date

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id"})
  category: Category

  constructor(){
      if(!this.id){
          this.id=uuid();
      }
  }

}