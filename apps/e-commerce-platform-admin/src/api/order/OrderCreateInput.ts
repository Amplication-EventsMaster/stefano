import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutOrdersInput } from "./ItemCreateNestedManyWithoutOrdersInput";
import { ShippingCreateNestedManyWithoutOrdersInput } from "./ShippingCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  shippings?: ShippingCreateNestedManyWithoutOrdersInput;
  status?: string | null;
};
