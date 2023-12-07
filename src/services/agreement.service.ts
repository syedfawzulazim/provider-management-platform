import { AgreementRepository } from "../repositories/agreement.repository";
import { ModelFactory } from "../utils/model-factory";
import { AgreementModel } from "../models/agreement.model";
import { DeepPartial } from "typeorm";
import { Injectable } from "@nestjs/common";

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
    return await this.agreementRepository.findOne(id);
  }
}