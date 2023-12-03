import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dtos";
import { EntityManager } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserModel } from "../models/user.model";


@Injectable({})
export class AuthService{
  constructor(private readonly manager: EntityManager) {}

  async signup(dto: AuthDto): Promise<UserModel>{
    const userEntity = this.manager.create(UserEntity, UserEntity.fromModel(dto));
    const user = await this.manager.findOne(UserEntity, {email: dto.email});
    if (user){
      throw new HttpException('Email address already Taken...', HttpStatus.CONFLICT);
    }

    const savedUserEntity = await this.manager.save(UserEntity, userEntity);
    return savedUserEntity.toModel();
  }

  signin(){

  }
}