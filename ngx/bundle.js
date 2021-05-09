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
    Didomi.prototype.shareConsent = function () { return core.cordova(this, "shareConsent", {}, arguments); };
    Didomi.pluginName = "DidomiSDK";
    Didomi.plugin = "cordova-plugin-didomisdk";
    Didomi.pluginRef = "navigator.didomi";
    Didomi.repo = "https://github.com/benguedj/cordova-plugin-didomisdk";
    Didomi.install = "";
    Didomi.installVariables = [];
    Didomi.platforms = ["Android", "iOS"];
    Didomi.decorators = [
        { type: core$1.Injectable }
    ];
    return Didomi;
}(core.IonicNativePlugin));

exports.Didomi = Didomi;
