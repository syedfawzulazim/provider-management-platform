import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IDeadline } from "../interfaces";
import { AgreementModel } from "../models/agreement.model";

@Entity({name: 'agreement'})
export class AgreementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  description: string

  @Column('json')
  skills: string[];

  @Column()
  validFrom: Date;

  @Column()
  validUntil: Date;

  @Column()
  cycle: string;

  @Column()
  materialGroup: string;

  @Column()
  dailyRateIndicator: string;

  @Column({type: 'json'})
  deadline: IDeadline;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

static fromModel(model: AgreementModel): AgreementEntity{
    const entity = new AgreementEntity();
    entity.userId = model.userId;
    entity.title = model.title;
    entity.description = model.description;
    entity.skills = model.skills;
    entity.validFrom = model.validFrom;
    entity.validUntil = model.validUntil;
    entity.cycle = model.cycle;
    entity.materialGroup = model.materialGroup;
    entity.dailyRateIndicator = model.dailyRateIndicator;
    entity.deadline = model.deadline;
    return entity;
  }

  toModel(): AgreementModel {
    return new AgreementModel({
      id: this.id,
      userId: this.userId,
      title: this.title,
      description: this.description,
      skills: this.skills,
      validFrom: this.validFrom,
      validUntil: this.validUntil,
      cycle: this.cycle,
      materialGroup: this.materialGroup,
      dailyRateIndicator: this.dailyRateIndicator,
      deadline: this.deadline,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}