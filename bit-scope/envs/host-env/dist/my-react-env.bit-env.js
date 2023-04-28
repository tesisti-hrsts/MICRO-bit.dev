"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("core-js/modules/es.array.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MyReactEnv = void 0;
function _defineProperty2() {
  const data = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
  _defineProperty2 = function () {
    return data;
  };
  return data;
}
function _react() {
  const data = require("@teambit/react.react-env");
  _react = function () {
    return data;
  };
  return data;
}
function _preview() {
  const data = require("@teambit/preview.react-preview");
  _preview = function () {
    return data;
  };
  return data;
}
function _application() {
  const data = require("@teambit/application");
  _application = function () {
    return data;
  };
  return data;
}
function _reactApps() {
  const data = require("@teambit/react.apps.react-app-types");
  _reactApps = function () {
    return data;
  };
  return data;
}
function _hostAppTransformer() {
  const data = require("./host-app-transformer.cjs");
  _hostAppTransformer = function () {
    return data;
  };
  return data;
}
/**
 * this webpack transformer changes the output bundle to a module federation host app.
 * it is used here for the app’s component preview
 */

class MyReactEnv extends _react().ReactEnv {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2().default)(this, "name", 'mf-host-env');
  }
  preview() {
    return _preview().ReactPreview.from({
      /* modify the component’s preview to simulate a module federation host app */
      transformers: [_hostAppTransformer().moduleFederationHostAppTransformer]
    });
  }
  apps() {
    return _application().AppTypeList.from([_reactApps().ReactAppType.from()]);
  }
}
exports.MyReactEnv = MyReactEnv;
var _default = new MyReactEnv();
exports.default = _default;

//# sourceMappingURL=my-react-env.bit-env.js.map