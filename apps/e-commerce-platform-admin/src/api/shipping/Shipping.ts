import { Order } from "../order/Order";

export type Shipping = {
  address: string | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  shippingDate: Date | null;
  updatedAt: Date;
};
