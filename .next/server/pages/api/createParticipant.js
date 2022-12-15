"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/createParticipant";
exports.ids = ["pages/api/createParticipant"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n    console.log(\"prisma\", prisma);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2xCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ2xDLENBQUM7SUFDREMsU0FBU0UsT0FBT0YsTUFBTTtJQUN0QkcsUUFBUUMsR0FBRyxDQUFDLFVBQVVKO0FBQ3hCLENBQUM7QUFFRCxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbGliL3ByaXNtYS5qcz83NTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IHByaXNtYTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xuICBjb25zb2xlLmxvZygncHJpc21hJywgcHJpc21hKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/createParticipant.js":
/*!****************************************!*\
  !*** ./pages/api/createParticipant.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    console.log(\"handler\");\n    console.log(res);\n    const { name , email , score  } = req.body;\n    const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].participants.create({\n        data: {\n            name: name,\n            email: email,\n            score: score\n        }\n    });\n    console.log(\"result\", result);\n    res.json(result);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlUGFydGljaXBhbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxFQUFFRyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFDdkMsTUFBTUMsU0FBUyxNQUFNVix1RUFBMEIsQ0FBQztRQUM5Q2EsTUFBTTtZQUNKUCxNQUFNQTtZQUNOQyxPQUFPQTtZQUNQQyxPQUFPQTtRQUNUO0lBQ0Y7SUFDQUosUUFBUUMsR0FBRyxDQUFDLFVBQVVLO0lBQ3RCUCxJQUFJVyxJQUFJLENBQUNKO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vcGFnZXMvYXBpL2NyZWF0ZVBhcnRpY2lwYW50LmpzP2UwNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZygnaGFuZGxlcicpO1xuICBjb25zb2xlLmxvZyhyZXMpO1xuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBzY29yZSB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5wYXJ0aWNpcGFudHMuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgc2NvcmU6IHNjb3JlLFxuICAgIH0sXG4gIH0pO1xuICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcbiAgcmVzLmpzb24ocmVzdWx0KTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJlbWFpbCIsInNjb3JlIiwiYm9keSIsInJlc3VsdCIsInBhcnRpY2lwYW50cyIsImNyZWF0ZSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createParticipant.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createParticipant.js"));
module.exports = __webpack_exports__;

})();