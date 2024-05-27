import { Item } from "../item/Item";

export type Warehouse = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  item?: Item | null;
  location: string | null;
  updatedAt: Date;
};
