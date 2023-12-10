import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ProviderModel } from "../models";
import { ProviderSignupDto } from "../dtos/provider-signup.dto";

@Entity({name: 'provider'})
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string

  @Column()
  name: string;

  @Column()
  address: string

  @Column()
  existsSince: string;

  @Column()
  validFrom: string;

  @Column()
  validUntil: string;

  @Column()
  masterAgreementType: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static fromModel(model: ProviderSignupDto): ProviderEntity{
    const entity = new ProviderEntity();
    entity.email = model.email;
    entity.password = model.password;
    entity.name = model.name;
    entity.address = model.address;
    entity.existsSince = model.existsSince;
    entity.validFrom = model.validFrom;
    entity.validUntil = model.validUntil;
    entity.masterAgreementType = model.masterAgreementType;
    return entity;
  }

  toModel(): ProviderModel {
    return new ProviderModel({
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      address: this.address,
      existsSince: this.existsSince,
      validFrom: this.validFrom,
      validUntil: this.validUntil,
      masterAgreementType: this.masterAgreementType,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}