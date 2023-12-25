import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { IDeadline } from "../interfaces";
import { AgreementModel } from "../models";
import { DealEntity } from "./deal.entity";

@Entity({name: 'agreement'})
export class AgreementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  position: string;

  @Column()
  skill: string;

  @Column()
  salary: string;

  @Column()
  description: string

  @Column()
  cycle: string;

  @Column()
  jobStartDate: string;

  @Column()
  jobEndDate: string;

  @Column()
  startContractDate: string;

  @Column()
  endContractDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => DealEntity, (deal) => deal.agreement)
  deal: DealEntity;

static fromModel(model: AgreementModel): AgreementEntity{
    const entity = new AgreementEntity();
    entity.userId = model.userId;
    entity.title = model.title;
    entity.position = model.position;
    entity.description = model.description;
    entity.skill = model.skill;
    entity.salary = model.salary;
    entity.cycle = model.cycle;
    entity.jobStartDate = model.jobStartDate;
    entity.jobEndDate = model.jobEndDate;
    entity.startContractDate = model.startContractDate;
    entity.endContractDate = model.endContractDate;
    return entity;
  }

  toModel(): AgreementModel {
    return new AgreementModel({
      id: this.id,
      userId: this.userId,
      title: this.title,
      position: this.position,
      description: this.description,
      skill: this.skill,
      salary: this.salary,
      cycle: this.cycle,
      jobStartDate: this.jobStartDate,
      jobEndDate: this.jobEndDate,
      startContractDate: this.startContractDate,
      endContractDate: this.endContractDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}