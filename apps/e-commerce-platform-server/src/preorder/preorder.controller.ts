import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreorderService } from "./preorder.service";
import { PreorderControllerBase } from "./base/preorder.controller.base";

@swagger.ApiTags("preorders")
@common.Controller("preorders")
export class PreorderController extends PreorderControllerBase {
  constructor(protected readonly service: PreorderService) {
    super(service);
  }
}
