import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  DeepPartial, OneToMany
} from "typeorm";
import { OfferModel } from "../models";
import { ProviderEntity } from "./provider.entity";
import { DealEntity } from "./deal.entity";

@Entity({name: 'offer'})
export class OfferEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  agreementId: number

  @Column("simple-array")
  skills: string[];

  @Column()
  experienceLevel: string

  @Column()
  salary: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => ProviderEntity, (provider) => provider.offers)
  provider: ProviderEntity;

  @OneToMany(() => DealEntity, (deal) => deal.offer)
  deal: DealEntity;

  static fromModel(model: OfferModel): OfferEntity{
    const entity = new OfferEntity();
    entity.agreementId = model.agreementId;
    entity.skills = model.skills;
    entity.experienceLevel = model.experienceLevel;
    entity.salary = model.salary;
    return entity;
  }

  toModel(): OfferModel {
    return new OfferModel({
      id: this.id,
      agreementId: this.agreementId,
      skills: this.skills,
      experienceLevel: this.experienceLevel,
      salary: this.salary,
      provider: this.provider,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }

  toDto(): DeepPartial<OfferModel> {
    return{
      id: this.id,
      agreementId: this.agreementId,
      skills: this.skills,
      experienceLevel: this.experienceLevel,
      salary: this.salary,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}