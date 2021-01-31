/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/one.js":
/*!********************!*\
  !*** ./src/one.js ***!
  \********************/
/***/ ((module) => {

eval("let a = 10;\n\nfunction add (x, y) {\n  return x + y;\n}\n\nmodule.exports = { a, add };\n\n//# sourceURL=webpack://webpack_test/./src/one.js?");

/***/ }),

/***/ "./src/two.js":
/*!********************!*\
  !*** ./src/two.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { a, add } = __webpack_require__(/*! ./one */ \"./src/one.js\");\n\n\nfunction add2 () {\n  add(1, 2);\n}\nlet b = add(a, 100);\n\nmodule.exports = { b, add2 };\n\n//# sourceURL=webpack://webpack_test/./src/two.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("\n/*\n查看webpack.config.js\n*/\n\nconst { add2 } = __webpack_require__(/*! ./two */ \"./src/two.js\")\n\nconsole.log(add2());\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");
})();

/******/ })()
;