import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationOutput {
  @Field((types) => String, { nullable: true })
  error?: string;

  @Field((types) => Boolean)
  ok: boolean;
}
