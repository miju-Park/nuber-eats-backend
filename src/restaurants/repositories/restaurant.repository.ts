import { MutationOutput } from 'src/common/dot/output.dto';
import { User } from 'src/users/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async checkIsOwner(
    restaurantId: number,
    owner: User,
  ): Promise<MutationOutput> {
    const restaurant = await this.findOne(restaurantId);
    if (!restaurant) {
      return {
        ok: false,
        error: 'Restaurant Not Found',
      };
    }
    if (owner.id !== restaurant.ownerId) {
      return {
        ok: false,
        error: "You can't edit restaruant that you don't own",
      };
    }
    return {
      ok: true,
    };
  }
}
