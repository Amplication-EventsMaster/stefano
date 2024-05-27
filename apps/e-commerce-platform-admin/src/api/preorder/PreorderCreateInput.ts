import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PreorderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  item?: string | null;
  preorderDate?: Date | null;
  quantity?: number | null;
};
