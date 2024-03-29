import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PickType,
} from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dot/output.dto';
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
export class CreateRestaurantInputType extends PickType(Restaurant, [
  'name',
  'coverImg',
  'address',
]) {
  @Field((type) => String)
  categoryName: string;
}

@ObjectType()
export class CreateRestarantOutput extends MutationOutput {}
