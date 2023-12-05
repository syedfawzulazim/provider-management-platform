import { CreateAgreementDto } from "../dtos";
import { AgreementRepository } from "../repositories/agreement.repository";
import { ModelFactory } from "../utils/model-factory";
import { AgreementModel } from "../models/agreement.model";
import { DeepPartial } from "typeorm";

export class AgreementService{
  constructor(private readonly agreementRepository: AgreementRepository) {
  }

  async create(dto: DeepPartial<AgreementModel>){
    const agreement = ModelFactory.create(AgreementModel, dto);
    return '123'
    //return await this.agreementRepository.create(agreement);
  }

  async getAll(){

  }
}