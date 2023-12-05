import { IDeadline } from "../interfaces";

export class AgreementModel {
  id: number;
  title: string;
  description: string;
  skills: string[];
  validFrom: Date;
  validUntil: Date;
  cycle: string;
  materialGroup: string;
  dailyRateIndicator: string;
  deadline: IDeadline;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<AgreementModel>) {
    Object.assign(this, data);
  }
}