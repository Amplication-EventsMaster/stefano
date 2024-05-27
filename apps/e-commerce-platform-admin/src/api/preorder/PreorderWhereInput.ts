import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PreorderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  item?: StringNullableFilter;
  preorderDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
};
