import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

/**
 * InputType : object 형태로 @Args에 전달되어야 하고
 * ArgType : object를 각각 하나씩 @Args에 전달
 */
@ArgsType()
export class CreateRestaurantDto {
  @Field((is) => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field((is) => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field((is) => String)
  @IsString()
  address: string;

  @Field((is) => String)
  @IsString()
  ownerName: string;
}
