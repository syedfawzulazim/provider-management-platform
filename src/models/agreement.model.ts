import { IDeadline } from "../interfaces";

export class AgreementModel {
  id: number;
  userId: number;
  title: string;
  description: string;
  skills: string[];
  validFrom: string;
  validUntil: string;
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