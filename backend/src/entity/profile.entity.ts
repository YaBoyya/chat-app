import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  // TBD
  // @Column()
  // picture: File;

  @Column()
  pseudonym: string;
}