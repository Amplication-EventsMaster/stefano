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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsInt,
} from "class-validator";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";
import { WarehouseUpdateManyWithoutItemsInput } from "./WarehouseUpdateManyWithoutItemsInput";

@InputType()
class ItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stock?: number | null;

  @ApiProperty({
    required: false,
    type: () => WarehouseUpdateManyWithoutItemsInput,
  })
  @ValidateNested()
  @Type(() => WarehouseUpdateManyWithoutItemsInput)
  @IsOptional()
  @Field(() => WarehouseUpdateManyWithoutItemsInput, {
    nullable: true,
  })
  warehouses?: WarehouseUpdateManyWithoutItemsInput;
}

export { ItemUpdateInput as ItemUpdateInput };
