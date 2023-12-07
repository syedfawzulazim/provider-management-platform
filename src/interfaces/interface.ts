export interface ISigninTokenResponse {
  userId: number,
  email: string,
  access_token: string,
}

export interface IDeadline {
  deadline: string;
  teamDeadline: string;
  contractDeadline: string;
}