import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dtos";
import { EntityManager } from "typeorm";

@Injectable({})
export class AuthService{
  constructor(private readonly manager: EntityManager) {
  }

  signup(dto: AuthDto){

  }

  signin(){

  }
}