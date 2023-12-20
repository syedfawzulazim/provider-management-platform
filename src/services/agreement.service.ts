import { AgreementRepository } from "../repositories/agreement.repository";
import { ModelFactory } from "../utils/model-factory";
import { AgreementModel } from "../models";
import { DeepPartial } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateAgreementDto } from "../dtos/updateAgreementDto";

@Injectable()
export class AgreementService{
  constructor(private agreementRepository: AgreementRepository) {
  }

  async create(dto: DeepPartial<AgreementModel>):Promise<AgreementModel>{
    const agreement = ModelFactory.create(AgreementModel, dto);
    return await this.agreementRepository.insert(agreement);
  }

  async getAll():Promise<AgreementModel[]>{
    return await this.agreementRepository.getAll();
  }

  async getAgreementById(id: number):Promise<AgreementModel>{
    const agreement =  await this.agreementRepository.findOne(id);
    if(!agreement){
      throw new NotFoundException(`Could not find agreement with id: ${id}`);
    }
    return agreement;
  }

  async updateAgreementById(id: number, dto: UpdateAgreementDto): Promise<AgreementModel>{
    const updatedAgreement = ModelFactory.create(AgreementModel, dto);
    const agreement = await this.agreementRepository.findOne(id);
    if (!agreement){
      throw new NotFoundException(`Could not find agreement with id: ${id}`);
    }
    return await this.agreementRepository.update(agreement.id, updatedAgreement);
  }
}