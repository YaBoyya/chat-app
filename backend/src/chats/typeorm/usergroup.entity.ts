import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Group } from "./group.entity";

@Entity({ name: 'userGroups '})
export class UserGroup {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ type: "timestamptz", default: () => 'NOW()' })
  createAt: Date;

  @Column()
  userAlias: string;

  @ManyToOne(() => User, (user) => user.userGroups, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Group, (group) => group.groupUsers, {
    onDelete: 'CASCADE',
  })
  group: Group;
}