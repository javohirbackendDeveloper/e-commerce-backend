import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { SearchService } from "./search.service";
import { ApiTags, ApiOperation, ApiQuery, ApiBody } from "@nestjs/swagger";

@ApiTags("products_service/search")
@Controller("search")
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  // @Get()
  // @ApiOperation({ summary: "Search products by query string" })
  // @ApiQuery({
  //   name: "q",
  //   type: String,
  //   description: "Search keyword",
  //   required: true,
  // })
  // async searchProduct(@Query("q") query: string) {
  //   return this.searchService.search(query);
  // }
}
