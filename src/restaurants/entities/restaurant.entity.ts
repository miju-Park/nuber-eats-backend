import { Field, ObjectType } from '@nestjs/graphql';

/**
 * GraphQL : ObjectType - 객체 정의
 */
@ObjectType()
export class Restaurant {
  @Field((is) => String)
  name: string;
  @Field((is) => Boolean)
  isVegan: boolean;
  @Field((is) => String)
  address: string;
  @Field((is) => String)
  ownerName: string;
}
