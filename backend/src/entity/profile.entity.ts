import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profiles' })
export class ProfileEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  // TBD
  // @Column()
  // picture: File;

  @Column({ nullable: true })
  pseudonym: string;
}