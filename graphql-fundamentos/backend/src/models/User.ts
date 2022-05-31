import { Length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User{
    @Field(_type => ID)
    id: string;

    @Field()
    @Length(10,50)
    name: String;
}