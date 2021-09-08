import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from './repositories/category.repository';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { CategoryResolver, RestaurantsResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  //Import TypeORM의 Repository
  imports: [
    TypeOrmModule.forFeature([RestaurantRepository, CategoryRepository]),
  ],
  providers: [RestaurantsResolver, CategoryResolver, RestaurantService],
})
export class RestaurantsModule {}
