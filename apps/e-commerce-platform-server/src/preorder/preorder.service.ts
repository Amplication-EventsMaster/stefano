import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreorderServiceBase } from "./base/preorder.service.base";

@Injectable()
export class PreorderService extends PreorderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
