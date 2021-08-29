import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly config: ConfigService,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<[boolean, string?]> {
    // check that email does not exists
    // create user  //& hashing password
    // return ok
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        // make error
        return [false, 'There is a user with that email already'];
      }
      await this.users.save(this.users.create({ email, password, role }));
      return [true];
    } catch (e) {
      return [false, "Couldn't create account"];
    }
  }
  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    // make a JWT and give it to the user
    try {
      // find user with email
      const user = await this.users.findOne({ email });
      if (!user) {
        return {
          ok: false,
          error: `User not found`,
        };
      }
      // check if password is correct
      const passwordCorrect = await user.checkPassword(password);
      if (!passwordCorrect) {
        return {
          ok: false,
          error: 'Wrong password',
        };
      }
      return {
        ok: true,
        token: jwt.sign({ id: email }, this.config.get('SECRET_KEY')),
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
