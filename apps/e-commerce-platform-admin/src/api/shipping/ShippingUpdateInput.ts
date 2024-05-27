import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShippingUpdateInput = {
  address?: string | null;
  order?: OrderWhereUniqueInput | null;
  shippingDate?: Date | null;
};
