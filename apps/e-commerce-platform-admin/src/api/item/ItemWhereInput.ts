import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WarehouseListRelationFilter } from "../warehouse/WarehouseListRelationFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  stock?: IntNullableFilter;
  warehouses?: WarehouseListRelationFilter;
};
