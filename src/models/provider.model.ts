interface IProviderModel{
  id: number;
  name: string;
  address: string;
  phone: string;
  rule: string;
  contractName: string;
  masterAgreementType: string;
  existSince: string;
  validFrom: string;
  validUntil: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ProviderModel {
  public id: number;
  public name: string;
  public address: string;
  public phone: string;
  public rule: string
  public contractName: string
  public masterAgreementType: string;
  public existSince: string;
  public validFrom: string;
  public validUntil: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IProviderModel) {
  this.id= props.id;
  this.phone= props.phone;
  this.rule= props.rule;
  this.name= props.name;
  this.address= props.address;
  this.contractName= props.contractName;
  this.existSince= props.existSince;
  this.validFrom= props.validFrom;
  this.validUntil= props.validUntil;
  this.masterAgreementType= props.masterAgreementType;
  this.createdAt= props.createdAt;
  this.updatedAt= props.createdAt;
  }
}