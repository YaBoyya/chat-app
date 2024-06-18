import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserGroupEntity } from "./usergroup.entity";
import { MessageEntity } from "./message.entity";

@Entity({ name: 'groups' })
export class GroupEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ default: true })
  isPrivate: Boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  // TODO Delete Groups when no one is UserGroupEntity
  @OneToMany(() => UserGroupEntity, (userGroup) => userGroup.group, {
    cascade: true,
  })
  groupUsers: UserGroupEntity[];

  @OneToMany(() => MessageEntity, (message) => message.group, {
    cascade: true,
  })
  messages: MessageEntity[];
}