interface IProviderModel{
  id: number;
  email: string;
  password: string
  name: string;
  address: string;
  existsSince: string;
  validFrom: string;
  validUntil: string;
  masterAgreementType: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ProviderModel {
  public id: number;
  public email: string;
  public password: string
  public name: string;
  public address: string;
  public existsSince: string;
  public validFrom: string;
  public validUntil: string;
  public masterAgreementType: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IProviderModel) {
  this.id= props.id;
  this.email= props.email;
  this.password= props.password;
  this.name= props.name;
  this.address= props.address;
  this.existsSince= props.existsSince;
  this.validFrom= props.validFrom;
  this.validUntil= props.validUntil;
  this.masterAgreementType= props.masterAgreementType;
  this.createdAt= props.createdAt;
  this.updatedAt= props.createdAt;
  }
}