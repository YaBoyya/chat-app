import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserGroup } from "./usergroup.entity";
import { Message } from "./message.entity";

@Entity({ name: 'groups' })
export class Group {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ default: true })
  isPrivate: Boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  // TODO Delete Groups when no one is UserGroup
  @OneToMany(() => UserGroup, (userGroup) => userGroup.group, {
    cascade: true,
  })
  groupUsers: UserGroup[];

  @OneToMany(() => Message, (message) => message.group, {
    cascade: true,
  })
  messages: Message[];
}