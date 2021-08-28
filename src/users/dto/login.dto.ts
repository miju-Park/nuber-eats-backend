import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dot/output.dto';
import { User } from '../entities/user.entity';

@InputType()
export class LoginInput extends PickType(User, ['password', 'email']) {}

@ObjectType()
export class LoginOutput extends MutationOutput {
  @Field((types) => String, { nullable: true })
  token?: string;
}
