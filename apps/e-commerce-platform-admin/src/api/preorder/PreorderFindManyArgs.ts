import { PreorderWhereInput } from "./PreorderWhereInput";
import { PreorderOrderByInput } from "./PreorderOrderByInput";

export type PreorderFindManyArgs = {
  where?: PreorderWhereInput;
  orderBy?: Array<PreorderOrderByInput>;
  skip?: number;
  take?: number;
};
