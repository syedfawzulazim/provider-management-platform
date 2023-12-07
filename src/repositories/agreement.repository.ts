import { EntityManager } from "typeorm";
import { AgreementModel } from "../models/agreement.model";
import { Injectable } from "@nestjs/common";
import { AgreementEntity } from "../entities/agreement.entity";

@Injectable()
export class AgreementRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async insert(agreement: AgreementModel):Promise<AgreementModel>{
    const agreementEntity = await this.manager.save<AgreementEntity>(
      await this.manager.create<AgreementEntity>(
      AgreementEntity,
      AgreementEntity.fromModel(agreement),
      ),
    );
    return agreementEntity.toModel();
  }

  async getAll(): Promise<AgreementModel[]>{
    return await this.manager.find(AgreementEntity);
  }

  async findOne(id: number): Promise<AgreementModel>{
    return await this.manager.findOne(AgreementEntity, id);
  }
}