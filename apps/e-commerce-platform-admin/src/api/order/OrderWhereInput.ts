import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ShippingListRelationFilter } from "../shipping/ShippingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  orderDate?: DateTimeNullableFilter;
  shippings?: ShippingListRelationFilter;
  status?: StringNullableFilter;
};
