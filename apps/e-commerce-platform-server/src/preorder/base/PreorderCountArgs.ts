/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PreorderWhereInput } from "./PreorderWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PreorderCountArgs {
  @ApiProperty({
    required: false,
    type: () => PreorderWhereInput,
  })
  @Field(() => PreorderWhereInput, { nullable: true })
  @Type(() => PreorderWhereInput)
  where?: PreorderWhereInput;
}

export { PreorderCountArgs as PreorderCountArgs };