import { SortOrder } from "../../util/SortOrder";

export type ShippingOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  shippingDate?: SortOrder;
  updatedAt?: SortOrder;
};
