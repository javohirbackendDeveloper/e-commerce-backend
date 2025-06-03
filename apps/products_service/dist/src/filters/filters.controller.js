"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersController = void 0;
const common_1 = require("@nestjs/common");
const filters_service_1 = require("./filters.service");
const create_filter_dto_1 = require("./dto/create-filter.dto");
const update_filter_dto_1 = require("./dto/update-filter.dto");
let FiltersController = class FiltersController {
    constructor(filtersService) {
        this.filtersService = filtersService;
    }
    create(createGeneralFilterDto) {
        return this.filtersService.create(createGeneralFilterDto);
    }
    findAll() {
        return this.filtersService.findAll();
    }
    findOne(id) {
        return this.filtersService.findOne(id);
    }
    update(id, updateFilterDto) {
        return this.filtersService.update(id, updateFilterDto);
    }
    remove(id) {
        return this.filtersService.remove(id);
    }
    getFiltersByCategoryId(categoryId) {
        return this.filtersService.getFiltersByCategoryId(categoryId);
    }
    createSpecificFilter(createSpecificDto) {
        return this.filtersService.createSpecificFilter(createSpecificDto);
    }
    findAllSpecificFilters() {
        return this.filtersService.findAllSpecific();
    }
    removeSpecific(id) {
        return this.filtersService.removeSpecificFilter(id);
    }
    createValue(createValueDto) {
        return this.filtersService.createValue(createValueDto);
    }
    removeValue(id) {
        return this.filtersService.deleteValue(id);
    }
};
exports.FiltersController = FiltersController;
__decorate([
    (0, common_1.Post)("general"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateGeneralFilterDto]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("general"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("general/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)("general/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_filter_dto_1.UpdateFilterDto]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("general/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("specific/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "getFiltersByCategoryId", null);
__decorate([
    (0, common_1.Post)("specific"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateSpecificFilterDto]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "createSpecificFilter", null);
__decorate([
    (0, common_1.Get)("specific"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "findAllSpecificFilters", null);
__decorate([
    (0, common_1.Delete)("specific/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "removeSpecific", null);
__decorate([
    (0, common_1.Post)("value"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filter_dto_1.CreateFilterValue]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "createValue", null);
__decorate([
    (0, common_1.Delete)("value/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiltersController.prototype, "removeValue", null);
exports.FiltersController = FiltersController = __decorate([
    (0, common_1.Controller)("filters"),
    __metadata("design:paramtypes", [filters_service_1.FiltersService])
], FiltersController);
//# sourceMappingURL=filters.controller.js.map