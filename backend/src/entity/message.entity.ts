import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { GroupEntity } from "./group.entity";

@Entity({ name: 'messages' })
export class MessageEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  text: string;

  @Column({ default: false })
  wasEdited: Boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.messages, {
    onDelete: 'SET NULL',
  })
  user: UserEntity;

  @ManyToOne(() => GroupEntity, (group) => group.messages, {
    onDelete: 'CASCADE',
  })
  group: GroupEntity;
}
