import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { WarehouseUpdateManyWithoutItemsInput } from "./WarehouseUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  stock?: number | null;
  warehouses?: WarehouseUpdateManyWithoutItemsInput;
};
