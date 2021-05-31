import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

/**
 * InputType : object 형태로 @Args에 전달되어야 하고
 * ArgType : object를 각각 하나씩 @Args에 전달
 */
@InputType()
/**
 * base type(Restaurant)는 InputType 이여야 하는데, Restaurant는 ObjectType
 * -> 세번째 인자 decorators에 InputType이라고 명시해줌
 */
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
