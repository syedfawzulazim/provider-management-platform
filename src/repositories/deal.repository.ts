import { DeepPartial, EntityManager } from "typeorm";
import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { DealModel } from "../models";
import { DealEntity } from "../entities";

@Injectable()
export class DealRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async create(dealEntity : DealEntity, agreementId: number):Promise<DealModel>{
    const deal = await this.findOneByAgreementId(agreementId);
    if(!deal){
      const savedDealEntity = await this.manager.save<DealEntity>(dealEntity);
      return savedDealEntity.toModel();
    }
    throw new ConflictException(`Deal already exist for the agreement id: ${agreementId}`)
  }

  async find(): Promise<DeepPartial<DealModel[]>>{
    const dealEntities = await this.manager.find(DealEntity, {
      relations: ['offer', 'agreement', 'provider']
    });
    return dealEntities.map(entity => entity.toDto());
  }

  async findOneByAgreementId(id: number): Promise<DeepPartial<DealModel>>{
    const dealEntity = await this.manager.findOne(DealEntity, id);
    return dealEntity ? dealEntity.toModel() : null;
  }
  //
  // async update(id: number, materialGroupModel: MaterialGroupModel){
  //   await this.manager.update<MaterialGroupModel>(
  //     MaterialGroupEntity,
  //     id,
  //     MaterialGroupEntity.fromModel(materialGroupModel),
  //   );
  //   return await this.manager.findOne(MaterialGroupEntity, id);
  // }
}