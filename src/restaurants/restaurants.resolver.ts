import { Query, Resolver } from '@nestjs/graphql';

/**
 * Decorater로 resolver, graphql 연결
 */
@Resolver()
export class RestaurantsResolver {
  @Query((returns) => Boolean)
  isPizzaGood() {
    return true;
  }
}
