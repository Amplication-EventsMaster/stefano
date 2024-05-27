import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShippingCreateInput = {
  address?: string | null;
  order?: OrderWhereUniqueInput | null;
  shippingDate?: Date | null;
};
