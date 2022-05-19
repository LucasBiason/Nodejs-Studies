import { hashPassword } from '@foal/core';
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import Profile from "./profile";

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  async setPassword(password: string) {
    this.password = await hashPassword(password);
  }

  @Column()
  profile_id: string;

  @OneToOne(type => Profile)
  @JoinColumn({ name: "profile_id" })
  profile: Profile;

}
