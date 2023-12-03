import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { SignupDto, SigninDto } from "src/dtos";
import { EntityManager } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserModel } from "../models/user.model";
import * as bcrypt from 'bcrypt';

@Injectable({})
export class AuthService{
  constructor(private readonly manager: EntityManager) {}

  async signup(dto: SignupDto): Promise<UserModel>{
    const user = await this.manager.findOne(UserEntity, {email: dto.email});
    if (!user){
      throw new HttpException('Email address already Taken...', HttpStatus.CONFLICT);
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(dto.password, salt);
    dto.password = hash;

    const userEntity = this.manager.create(UserEntity, UserEntity.fromModel(dto));
    const savedUserEntity = await this.manager.save(UserEntity, userEntity);
    return savedUserEntity.toModel();
  }

  async signin(dto: SigninDto){
    const user = await this.manager.findOne(UserEntity, {email: dto.email});
    if (!user){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const isMatch = await bcrypt.compare(dto.password, user.password);

    if(user && isMatch){

    }
    return user;
  }
}