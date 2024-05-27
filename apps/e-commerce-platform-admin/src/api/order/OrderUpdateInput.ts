import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutOrdersInput } from "./ItemUpdateManyWithoutOrdersInput";
import { ShippingUpdateManyWithoutOrdersInput } from "./ShippingUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  shippings?: ShippingUpdateManyWithoutOrdersInput;
  status?: string | null;
};
