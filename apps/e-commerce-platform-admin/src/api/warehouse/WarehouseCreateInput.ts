import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type WarehouseCreateInput = {
  capacity?: number | null;
  item?: ItemWhereUniqueInput | null;
  location?: string | null;
};
