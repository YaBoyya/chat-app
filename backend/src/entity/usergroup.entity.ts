import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { GroupEntity } from "./group.entity";

@Entity({ name: 'userGroups '})
export class UserGroupEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ type: "timestamptz", default: () => 'NOW()' })
  createAt: Date;

  @Column()
  userAlias: string;

  @ManyToOne(() => UserEntity, (user) => user.userGroups, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(() => GroupEntity, (group) => group.groupUsers, {
    onDelete: 'CASCADE',
  })
  group: GroupEntity;
}