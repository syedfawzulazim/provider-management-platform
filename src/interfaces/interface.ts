export interface ISigninTokenResponse {
  userId: number,
  email: string,
  access_token: string,
}

export interface IDeadline {
  deadline: Date;
  teamDeadline: Date;
  contractDeadline: Date;
}