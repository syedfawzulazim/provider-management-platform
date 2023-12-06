import { EntityManager } from "typeorm";
import { AgreementModel } from "../models/agreement.model";
import { Injectable } from "@nestjs/common";
import { AgreementEntity } from "../entities/agreement.entity";

@Injectable()
export class AgreementRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async insert(agreement: AgreementModel){
    const agreementEntity = await this.manager.save<AgreementEntity>(
      await this.manager.create<AgreementEntity>(
      AgreementEntity,
      AgreementEntity.fromModel(agreement),
      ),
    );
    console.log(agreementEntity)
    return agreementEntity.toModel();
  }

  async getAll(){
console.log(123)
  }
}