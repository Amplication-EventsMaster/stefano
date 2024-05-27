import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WarehouseWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  location?: StringNullableFilter;
};
