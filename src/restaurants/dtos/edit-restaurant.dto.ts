import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dot/output.dto';
import { CreateRestaurantInputType } from './create-restaurant.dto';

@InputType()
export class EditRestaurantInput extends PartialType(
  CreateRestaurantInputType,
) {
  @Field((type) => Number)
  restaurantId: number;
}

@ObjectType()
export class EditRestaurantOutput extends MutationOutput {}
