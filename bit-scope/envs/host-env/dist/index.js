"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MyReactEnv", {
  enumerable: true,
  get: function () {
    return _myReactEnv().MyReactEnv;
  }
});
exports.default = void 0;
function _myReactEnv() {
  const data = require("./my-react-env.bit-env");
  _myReactEnv = function () {
    return data;
  };
  return data;
}
var _default = _myReactEnv().MyReactEnv;
exports.default = _default;

//# sourceMappingURL=index.js.map