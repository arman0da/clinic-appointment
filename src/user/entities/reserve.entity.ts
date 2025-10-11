import { EntityName } from "common/enum/entity-name.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity(EntityName.Reserve)
export class ReserveEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  userId: number;

  @Column()
  clinicId: number;

  @Column()
  doctorId: number;

  @Column()
  datetime: Date;

  @Column()
  status: string;
}
