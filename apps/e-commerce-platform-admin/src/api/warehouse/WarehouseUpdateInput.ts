import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type WarehouseUpdateInput = {
  capacity?: number | null;
  item?: ItemWhereUniqueInput | null;
  location?: string | null;
};
