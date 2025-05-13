import { Body, Controller, Get, Query } from "@nestjs/common";
import { SearchService } from "./search.service";
import { FilterQueryDto } from "./dto/filterQuery.dto";

@Controller("search")
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchProduct(@Query("q") query: string) {
    return this.searchService.search(query);
  }

  @Get("filter")
  async filterProducts(@Body() filter: FilterQueryDto) {
    return this.searchService.filterProducts(filter);
  }
}
