import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { Shipping } from "../shipping/Shipping";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  items?: Array<Item>;
  orderDate: Date | null;
  shippings?: Array<Shipping>;
  status: string | null;
  updatedAt: Date;
};
