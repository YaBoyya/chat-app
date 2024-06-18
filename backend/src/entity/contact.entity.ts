import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'contacts' })
export class ContactEntity{
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @ManyToOne(() => UserEntity, (user) => user.contacts, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.contactsOf, {
    onDelete: 'CASCADE',
  })
  contact: UserEntity;
}