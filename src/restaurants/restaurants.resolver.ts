import { SetMetadata } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { User, UserRole } from 'src/users/entities/user.entity';
import {
  CreateRestarantOutput,
  CreateRestaurantInputType,
} from './dtos/create-restaurant.dto';
import {
  EditRestaurantInput,
  EditRestaurantOutput,
} from './dtos/edit-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

/**
 * Decorater로 resolver, graphql 연결
 */
/**
 * 아래는 필수로 설정하지 않아도 됨
 * ex) @Resolver() 로만 써도 된다.
 */
@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  //Resolver에 Service를 연결
  constructor(private readonly restaurantService: RestaurantService) {}

  @Mutation((returns) => CreateRestarantOutput)
  @Role(['Owner'])
  async createRestaurant(
    @AuthUser() authUser: User,
    @Args('input') createRestaurantInput: CreateRestaurantInputType,
  ): Promise<CreateRestarantOutput> {
    return this.restaurantService.createRestaurant(
      authUser,
      createRestaurantInput,
    );
  }

  @Mutation((types) => EditRestaurantOutput)
  @Role(['Owner'])
  editRestaurant(
    @AuthUser() owner: User,
    @Args('input') editRestaurantInput: EditRestaurantInput,
  ): Promise<EditRestaurantOutput> {
    return this.restaurantService.editRestaurant(owner, editRestaurantInput);
  }
}
