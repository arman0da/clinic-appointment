import { EntityName } from "common/enum/entity-name.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity(EntityName.User)
export class UserEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  mobile: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  otp_code: string;

  @Column({ nullable: true })
  otp_expires_in: Date;

  @Column({ nullable: true })
  last_change_password: Date;
}
