import { Shipping as TShipping } from "../api/shipping/Shipping";

export const SHIPPING_TITLE_FIELD = "address";

export const ShippingTitle = (record: TShipping): string => {
  return record.address?.toString() || String(record.id);
};
