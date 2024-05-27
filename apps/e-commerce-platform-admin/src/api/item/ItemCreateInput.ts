import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { WarehouseCreateNestedManyWithoutItemsInput } from "./WarehouseCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  stock?: number | null;
  warehouses?: WarehouseCreateNestedManyWithoutItemsInput;
};
