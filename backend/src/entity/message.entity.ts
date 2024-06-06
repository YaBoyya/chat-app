import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Group } from "./group.entity";
import { group } from "console";

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  text: string;

  @Column({ default: false })
  wasEdited: Boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.messages, {
    onDelete: 'SET NULL',
  })
  user: User;

  @ManyToOne(() => Group, (group) => group.messages, {
    onDelete: 'CASCADE',
  })
  group: Group;
}
