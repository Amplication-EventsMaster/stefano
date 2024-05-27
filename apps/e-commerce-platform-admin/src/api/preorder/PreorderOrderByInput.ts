import { SortOrder } from "../../util/SortOrder";

export type PreorderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  preorderDate?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
