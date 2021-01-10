import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  /**
   * forRoot : GraphQL Module을 Root로 설정
   */
  imports: [
    GraphQLModule.forRoot({
      /**
       * Schema 파일 정의없이 Code로 Schema 자동 정의
       */
      autoSchemaFile: true,//파일로 저장하지 않는다는 뜻
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}