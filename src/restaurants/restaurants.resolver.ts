import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
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
  constructor(private readonly restauntService: RestaurantService) {}
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restauntService.getAll();
  }
  @Mutation((returns) => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantInput: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restauntService.createRestaurant(createRestaurantInput);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
