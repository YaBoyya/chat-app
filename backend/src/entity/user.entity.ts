import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { Profile } from "./profile.entity";
import { Message } from "./message.entity";
import { UserGroup } from "./usergroup.entity";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ unique: true })
  username: string;
  
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  @JoinColumn()
  @OneToOne(() => Profile, {
    cascade: true,
  })
  profile: Profile;

  // list of users contacts
  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
  
  // contacts that have user in their list
  @OneToMany(() => Contact, (contact) => contact.contact)
  contactsOf: Contact[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @OneToMany(() => UserGroup, (userGroup) => userGroup.user)
  userGroups: UserGroup[];
}
