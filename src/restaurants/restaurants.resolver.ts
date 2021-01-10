import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

/**
 * Decorater로 resolver, graphql 연결
 */
/**
 * 아래는 필수로 설정하지 않아도 됨
 * ex) @Resolver() 로만 써도 된다.
 */
@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  @Query((returns) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
