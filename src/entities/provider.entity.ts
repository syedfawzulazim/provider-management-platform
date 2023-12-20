import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ProviderModel } from "../models";
import { OfferEntity } from "./offer.entity";
import { ProviderResponseDto } from "../dtos";

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

  @OneToMany(() => OfferEntity, (offer) => offer.provider)
  offers: OfferEntity[]

  static fromModel(model: ProviderModel): ProviderEntity{
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

  toDto(): ProviderResponseDto {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      address: this.address,
      existsSince: this.existsSince,
      validFrom: this.validFrom,
      validUntil: this.validUntil,
      masterAgreementType: this.masterAgreementType,
    }
  }
}