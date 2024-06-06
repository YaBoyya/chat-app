import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'contacts' })
export class Contact{
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @ManyToOne(() => User, (user) => user.contacts, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => User, (user) => user.contactsOf, {
    onDelete: 'CASCADE',
  })
  contact: User;
}