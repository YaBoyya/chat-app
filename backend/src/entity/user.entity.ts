import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";
import { ProfileEntity } from "./profile.entity";
import { MessageEntity } from "./message.entity";
import { UserGroupEntity } from "./usergroup.entity";

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ unique: true })
  username: string;
  
  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  @OneToOne(() => ProfileEntity, { cascade: true })
  @JoinColumn()
  profile: ProfileEntity;

  // list of users contacts
  @OneToMany(() => ContactEntity, (contact) => contact.user)
  contacts: ContactEntity[];
  
  // contacts that have user in their list
  @OneToMany(() => ContactEntity, (contact) => contact.contact)
  contactsOf: ContactEntity[];

  @OneToMany(() => MessageEntity, (message) => message.user)
  messages: MessageEntity[];

  @OneToMany(() => UserGroupEntity, (userGroup) => userGroup.user)
  userGroups: UserGroupEntity[];
}
