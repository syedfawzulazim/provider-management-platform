import { EntityManager } from "typeorm";
import { CreateAgreementDto } from "../dtos";
import { AgreementModel } from "../models/agreement.model";

export class AgreementRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async create(agreement: AgreementModel){

  }

  async getAll(){

  }
}