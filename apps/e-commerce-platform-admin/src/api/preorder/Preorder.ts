import { Customer } from "../customer/Customer";

export type Preorder = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  item: string | null;
  preorderDate: Date | null;
  quantity: number | null;
  updatedAt: Date;
};
