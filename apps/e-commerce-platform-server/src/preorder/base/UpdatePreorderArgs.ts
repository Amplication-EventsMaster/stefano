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
import { PreorderWhereUniqueInput } from "./PreorderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PreorderUpdateInput } from "./PreorderUpdateInput";

@ArgsType()
class UpdatePreorderArgs {
  @ApiProperty({
    required: true,
    type: () => PreorderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PreorderWhereUniqueInput)
  @Field(() => PreorderWhereUniqueInput, { nullable: false })
  where!: PreorderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PreorderUpdateInput,
  })
  @ValidateNested()
  @Type(() => PreorderUpdateInput)
  @Field(() => PreorderUpdateInput, { nullable: false })
  data!: PreorderUpdateInput;
}

export { UpdatePreorderArgs as UpdatePreorderArgs };