import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  //Import TypeORM의 Repository
  imports: [TypeOrmModule.forFeature([Restaurant, Category])],
  providers: [RestaurantsResolver, RestaurantService],
})
export class RestaurantsModule {}
