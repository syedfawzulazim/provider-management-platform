import { EntityManager } from "typeorm";
import { AgreementModel } from "../models/agreement.model";
import { Injectable } from "@nestjs/common";
import { AgreementEntity } from "../entities/agreement.entity";
import { UpdateAgreementDto } from "../dtos/updateAgreementDto";
import { CreateAgreementDto } from "../dtos";
import { compareSync } from "bcrypt";

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

  async update(id: number, updatedAgreement: AgreementModel): Promise<void> {
    const x= await this.manager.update<AgreementEntity>(
      AgreementEntity,
      id,
      AgreementEntity.fromModel(updatedAgreement),
    );
    console.log()
  }
}