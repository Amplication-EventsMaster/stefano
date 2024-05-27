import { SortOrder } from "../../util/SortOrder";

export type WarehouseOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
};
