"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyReactProvider = MyReactProvider;
exports.default = void 0;
function _react() {
  const data = _interopRequireDefault(require("react"));
  _react = function () {
    return data;
  };
  return data;
}
function _react2() {
  const data = require("@teambit/react.mounter");
  _react2 = function () {
    return data;
  };
  return data;
}
/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */
// eslint-disable-next-line react/prop-types
function MyReactProvider({
  children
}) {
  return /*#__PURE__*/_react().default.createElement("div", null, children);
}

/**
 * to replace that mounter component for different purposes, just return a function
 * that uses ReactDOM to render a node to a div.
 */
// @ts-ignore
var _default = (0, _react2().createMounter)(MyReactProvider);
exports.default = _default;

//# sourceMappingURL=mounter.js.map