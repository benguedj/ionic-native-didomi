'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Didomi = /** @class */ (function (_super) {
    tslib.__extends(Didomi, _super);
    function Didomi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Didomi.prototype.injectConsent = function () { return core.cordova(this, "injectConsent", {}, arguments); };
    Didomi.pluginName = "Didomi";
    Didomi.plugin = "cordova-plugin-didomi";
    Didomi.pluginRef = "navigator.didomi";
    Didomi.repo = "https://github.com/benguedj/cordova-plugin-didomi";
    Didomi.install = "";
    Didomi.installVariables = [];
    Didomi.platforms = ["Android", "iOS"];
    Didomi.decorators = [
        { type: core$1.Injectable }
    ];
    return Didomi;
}(core.IonicNativePlugin));

exports.Didomi = Didomi;
