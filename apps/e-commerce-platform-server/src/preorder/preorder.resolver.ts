import * as graphql from "@nestjs/graphql";
import { PreorderResolverBase } from "./base/preorder.resolver.base";
import { Preorder } from "./base/Preorder";
import { PreorderService } from "./preorder.service";

@graphql.Resolver(() => Preorder)
export class PreorderResolver extends PreorderResolverBase {
  constructor(protected readonly service: PreorderService) {
    super(service);
  }
}
