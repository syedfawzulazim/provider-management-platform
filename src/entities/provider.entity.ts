import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ProviderModel } from "../models";
import { OfferEntity } from "./offer.entity";
import { ProviderResponseDto } from "../dtos";
import { DealEntity } from "./deal.entity";

@Entity({name: 'provider'})
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  rule: string;

  @Column()
  contractName: string;

  @Column()
  existSince: string;

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
  offers: OfferEntity[];

  @OneToMany(() => DealEntity, (deal) => deal.provider)
  deal: DealEntity;

  static fromModel(model: ProviderModel): ProviderEntity{
    const entity = new ProviderEntity();
    entity.phone = model.phone;
    entity.rule = model.rule;
    entity.name = model.name;
    entity.contractName = model.contractName;
    entity.address = model.address;
    entity.existSince = model.existSince;
    entity.validFrom = model.validFrom;
    entity.validUntil = model.validUntil;
    entity.masterAgreementType = model.masterAgreementType;
    return entity;
  }

  toModel(): ProviderModel {
    return new ProviderModel({
      id: this.id,
      phone: this.phone,
      rule: this.rule,
      name: this.name,
      contractName: this.contractName,
      address: this.address,
      existSince: this.existSince,
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
      rule: this.rule,
      phone: this.phone,
      name: this.name,
      contract: this.contractName,
      address: this.address,
      existSince: this.existSince,
      validFrom: this.validFrom,
      validUntil: this.validUntil,
      masterAgreementType: this.masterAgreementType,
    }
  }
}