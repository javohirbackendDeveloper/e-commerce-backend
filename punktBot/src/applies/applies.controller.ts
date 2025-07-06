import { Controller } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller("applies")
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @MessagePattern("get_applies_punkts")
  async getAppliedPunkts() {
    return this.appliesService.getAppliedPunkts();
  }
  @MessagePattern("get_repairing_punkts")
  async getRepairingPunkts() {
    return this.appliesService.getRepairingPunkts();
  }
  @MessagePattern("get_one_repairing_punkt")
  async get_one_repairing_punkt(@Payload() id: string) {
    return this.appliesService.get_one_repairing_punkt(id);
  }

  @MessagePattern("changeToRepair")
  async changeToRepair(@Payload() punktId: string) {
    return this.appliesService.changeToRepair(punktId);
  }
  @MessagePattern("deletePunkt")
  async deletePunkt(@Payload() punktId: string) {
    return this.appliesService.deletePunkt(punktId);
  }
}
