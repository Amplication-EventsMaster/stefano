/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ItemCreateNestedManyWithoutOrdersInput } from "./ItemCreateNestedManyWithoutOrdersInput";
import { ShippingCreateNestedManyWithoutOrdersInput } from "./ShippingCreateNestedManyWithoutOrdersInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ItemCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ItemCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ItemCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  items?: ItemCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ShippingCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ShippingCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ShippingCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  shippings?: ShippingCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;
}

export { OrderCreateInput as OrderCreateInput };
