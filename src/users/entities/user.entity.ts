import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

enum UserRole {
  Owner,
  Client,
  Delivery,
}

//Graphql 에 enum 등록
registerEnumType(UserRole, { name: 'UserRole' });

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field((types) => String)
  email: string;

  @Column()
  @Field((types) => String)
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  @Field((types) => UserRole)
  role: UserRole;
}
