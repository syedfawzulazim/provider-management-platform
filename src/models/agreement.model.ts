export class AgreementModel {
  id: number;
  userId: number;
  title: string;
  position: string;
  description: string;
  salary: string;
  skill: string;
  cycle: string;
  jobStartDate: string;
  jobEndDate: string;
  startContractDate: string;
  endContractDate: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<AgreementModel>) {
    Object.assign(this, data);
  }
}