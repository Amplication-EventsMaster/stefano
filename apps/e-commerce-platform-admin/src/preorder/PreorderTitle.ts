import { Preorder as TPreorder } from "../api/preorder/Preorder";

export const PREORDER_TITLE_FIELD = "item";

export const PreorderTitle = (record: TPreorder): string => {
  return record.item?.toString() || String(record.id);
};
