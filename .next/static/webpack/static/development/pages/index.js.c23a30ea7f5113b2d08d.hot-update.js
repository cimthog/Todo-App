webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/TodoItem.js":
/*!**************************************!*\
  !*** ./pages/components/TodoItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/firecoder/Documents/WebPractices/React/TodoApp/pages/components/TodoItem.js";





var TodoItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoItem, _React$Component);

  function TodoItem() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoItem).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return this.props.todos.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-lg-4",
          key: todo.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card border-success mb-3",
          style: {
            maxWidth: "20rem"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, "Todo ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faWindowClose"],
          style: {
            color: "red",
            float: "right",
            cursor: 'pointer'
          },
          onClick: _this.props.deleteTodo.bind(_this, todo.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          className: "card-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, todo.description))));
      });
    }
  }]);

  return TodoItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TodoItem.propTypes = {
  todos: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

/***/ })

})
//# sourceMappingURL=index.js.c23a30ea7f5113b2d08d.hot-update.js.map