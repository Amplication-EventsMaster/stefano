import { Module } from "@nestjs/common";
import { PreorderModuleBase } from "./base/preorder.module.base";
import { PreorderService } from "./preorder.service";
import { PreorderController } from "./preorder.controller";
import { PreorderResolver } from "./preorder.resolver";

@Module({
  imports: [PreorderModuleBase],
  controllers: [PreorderController],
  providers: [PreorderService, PreorderResolver],
  exports: [PreorderService],
})
export class PreorderModule {}
