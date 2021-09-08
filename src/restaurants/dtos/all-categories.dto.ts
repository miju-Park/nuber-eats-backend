import { Field, ObjectType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dot/output.dto';
import { Category } from '../entities/category.entity';

@ObjectType()
export class AllCategoriesOutput extends MutationOutput {
  @Field((type) => [Category], { nullable: true })
  categories?: Category[];
}
