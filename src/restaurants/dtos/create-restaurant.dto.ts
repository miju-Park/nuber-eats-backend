import { ArgsType, Field } from '@nestjs/graphql';

/**
 * InputType : object 형태로 @Args에 전달되어야 하고
 * ArgType : object를 각각 하나씩 @Args에 전달
 */
@ArgsType()
export class CreateRestaurantDto {
  @Field((is) => String)
  name: string;
  @Field((is) => Boolean)
  isVegan: boolean;
  @Field((is) => String)
  address: string;
  @Field((is) => String)
  ownerName: string;
}
