import { Order } from "../order/Order";
import { Warehouse } from "../warehouse/Warehouse";

export type Item = {
  createdAt: Date;
  id: string;
  name: string | null;
  order?: Order | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
  warehouses?: Array<Warehouse>;
};
