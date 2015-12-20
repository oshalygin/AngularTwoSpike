System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ApplicationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ApplicationComponent = (function () {
                function ApplicationComponent() {
                }
                ApplicationComponent = __decorate([
                    core_1.Component({
                        selector: "hello-world",
                        template: "\n    <div>\n        <h2>Foobaru World</h2>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ApplicationComponent);
                return ApplicationComponent;
            })();
            exports_1("ApplicationComponent", ApplicationComponent);
        }
    }
});
//# sourceMappingURL=application.component.js.map