import { EntityName } from "common/enum/entity-name.enum";
import { ClinicEntity } from "src/clinic/entities/clinic.entity";
// import { ClinicEntity } from "src/clinic/entities/clinic.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity(EntityName.Category)
export class CategoryEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @OneToMany(() => ClinicEntity, (clinic) => clinic.category)
  clinics: ClinicEntity[];
}
