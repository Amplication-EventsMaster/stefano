/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Preorder } from "./Preorder";
import { PreorderCountArgs } from "./PreorderCountArgs";
import { PreorderFindManyArgs } from "./PreorderFindManyArgs";
import { PreorderFindUniqueArgs } from "./PreorderFindUniqueArgs";
import { CreatePreorderArgs } from "./CreatePreorderArgs";
import { UpdatePreorderArgs } from "./UpdatePreorderArgs";
import { DeletePreorderArgs } from "./DeletePreorderArgs";
import { Customer } from "../../customer/base/Customer";
import { PreorderService } from "../preorder.service";
@graphql.Resolver(() => Preorder)
export class PreorderResolverBase {
  constructor(protected readonly service: PreorderService) {}

  async _preordersMeta(
    @graphql.Args() args: PreorderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Preorder])
  async preorders(
    @graphql.Args() args: PreorderFindManyArgs
  ): Promise<Preorder[]> {
    return this.service.preorders(args);
  }

  @graphql.Query(() => Preorder, { nullable: true })
  async preorder(
    @graphql.Args() args: PreorderFindUniqueArgs
  ): Promise<Preorder | null> {
    const result = await this.service.preorder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Preorder)
  async createPreorder(
    @graphql.Args() args: CreatePreorderArgs
  ): Promise<Preorder> {
    return await this.service.createPreorder({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Preorder)
  async updatePreorder(
    @graphql.Args() args: UpdatePreorderArgs
  ): Promise<Preorder | null> {
    try {
      return await this.service.updatePreorder({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Preorder)
  async deletePreorder(
    @graphql.Args() args: DeletePreorderArgs
  ): Promise<Preorder | null> {
    try {
      return await this.service.deletePreorder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async getCustomer(
    @graphql.Parent() parent: Preorder
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
