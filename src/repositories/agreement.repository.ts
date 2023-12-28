import { EntityManager, Like } from "typeorm";
import { AgreementModel } from "../models";
import { Injectable } from "@nestjs/common";
import { AgreementEntity } from "../entities";

@Injectable()
export class AgreementRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async insert(agreement: AgreementModel):Promise<AgreementModel>{
    const agreementEntity = await this.manager.save<AgreementEntity>(
      this.manager.create<AgreementEntity>(
        AgreementEntity,
        AgreementEntity.fromModel(agreement)
      )
    );
    return agreementEntity.toModel();
  }

  async getAll(): Promise<AgreementModel[]>{
    return await this.manager.find(AgreementEntity);
  }

  async filterBySalaryAndSkill(row?: number, skill?: string): Promise<AgreementModel[]>{
    if (row && skill){
      return await this.manager
        .createQueryBuilder(AgreementEntity, 'entity')
        .where("entity.skill like :skill", { skill:`%${skill}%` })
        .orderBy('CAST(entity.salary AS INTEGER)', 'ASC')
        .take(row)
        .getMany()


    }
    return await this.manager.find(AgreementEntity);
  }

  async findOne(id: number): Promise<AgreementEntity>{
    return await this.manager.findOne(AgreementEntity, id);
  }

  async update(id: number, updatedAgreement: AgreementModel): Promise<AgreementModel> {
    await this.manager.update<AgreementEntity>(
      AgreementEntity,
      id,
      AgreementEntity.fromModel(updatedAgreement),
    );
    return await this.manager.findOne(AgreementEntity, id);
  }
}