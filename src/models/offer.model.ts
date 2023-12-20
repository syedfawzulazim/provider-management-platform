import { ProviderModel } from "./provider.model";

interface IOfferModel{
  id: number;
  agreementId: number;
  skills: string[];
  experienceLevel: string;
  salary: string;
  provider: ProviderModel;
  createdAt?: Date;
  updatedAt?: Date;
}

export class OfferModel {
  public id: number;
  public agreementId: number;
  public skills: string[];
  public experienceLevel: string;
  public salary: string;
  public provider: ProviderModel;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IOfferModel) {
  this.id= props.id;
  this.agreementId= props.agreementId;
  this.skills= props.skills;
  this.experienceLevel= props.experienceLevel;
  this.salary= props.salary;
  this.provider= props.provider;
  this.createdAt= props.createdAt;
  this.updatedAt= props.createdAt;
  }
}