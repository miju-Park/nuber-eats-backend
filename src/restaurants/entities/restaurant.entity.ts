import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * GraphQL : ObjectType - 객체 정의,
 *                    -  자동으로 스키마를 빌드하는데 사용
 * -----
 * Entiry: TypeORM이 DB에 저장하는데 사용
 */
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((is) => Number)
  id: number;

  @Field((is) => String)
  @Column()
  name: string;

  @Field((is) => Boolean)
  @Column()
  isVegan: boolean;

  @Field((is) => String)
  @Column()
  address: string;

  @Field((is) => String)
  @Column()
  ownerName: string;
}
