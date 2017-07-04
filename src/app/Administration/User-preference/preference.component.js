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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../_services/index");
var PreferenceComponent = (function () {
    function PreferenceComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    PreferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    return PreferenceComponent;
}());
PreferenceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'preference-app',
        templateUrl: "preference.html",
        styleUrls: ['/src/style.css'],
    }),
    __metadata("design:paramtypes", [index_1.UserService])
], PreferenceComponent);
exports.PreferenceComponent = PreferenceComponent;
//# sourceMappingURL=preference.component.js.map