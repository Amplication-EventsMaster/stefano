import { Order } from "../order/Order";
import { Preorder } from "../preorder/Preorder";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  preorders?: Array<Preorder>;
  updatedAt: Date;
};
