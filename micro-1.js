/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const config = {
    // host: 'kajkai-redis.xqeh4j.0001.apse1.cache.amazonaws.com',
    host: 'localhost',
    port: 6379
}

/* harmony default export */ __webpack_exports__["a"] = (config);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_v4__);





const app = __WEBPACK_IMPORTED_MODULE_0_express___default()()

console.log('fsfs', __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default()());

const store = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])
const test = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])

app.get('/microdemo', (req, res) => {
  const sub = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])
  const pub = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])

  const { a, b } = req.query
  const eventId = __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default()()

  console.log(a, b);

  pub.publish('ch1', JSON.stringify({
    eventId,
    a,
    b
  }))

  sub.on('message', (channel, message) => {
    console.log(channel, message)

    if(message == 'OK') {
      res.send(message)
    } else {
      res.send(message)
    }

    sub.unsubscribe()
    sub.quit()
    pub.quit()
  })

  sub.subscribe('ch1.' + eventId)
})


app.listen(1234)

/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ })
/******/ ]);