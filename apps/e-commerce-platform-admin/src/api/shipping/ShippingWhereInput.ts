import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ShippingWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  shippingDate?: DateTimeNullableFilter;
};
