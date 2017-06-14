(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);




const app = __WEBPACK_IMPORTED_MODULE_0_express___default()()


const store = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])
const test = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])

store.on('pmessage', (pattern, channel, message) => {
  console.log(pattern, channel, message)

  test.publish('test', JSON.stringify({
    'charity': 'is testing'
  }))
})

store.psubscribe('R*')

app.get('/microdemo',(req, res) => {
  const sub = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])
  const pub = __WEBPACK_IMPORTED_MODULE_1_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])

  const p1 = req.query.p1
  const p2 = req.query.p2

  pub.publish('Request', JSON.stringify({
    p1,
    p2
  }))

  sub.on('message', (channel, message) => {
    console.log(channel, message)

    if(message == 'OK') {
      res.json({
        'hello': 'World'
      })
    } else {
      res.json({
        'goodbye': 'World'
      })
    }

    sub.unsubscribe()
    sub.quit()
    pub.quit()
  })

  sub.subscribe('Response')
})


app.listen(1234)

/* harmony default export */ __webpack_exports__["a"] = (app);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("aws-serverless-express");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const config = {
    host: 'kajkai-redis.xqeh4j.0001.apse1.cache.amazonaws.com',
    // host: 'localhost',
    port: 6379
}

/* harmony default export */ __webpack_exports__["a"] = (config);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_serverless_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_serverless_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_serverless_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_1__ = __webpack_require__(0);


const server = __WEBPACK_IMPORTED_MODULE_0_aws_serverless_express___default.a.createServer(__WEBPACK_IMPORTED_MODULE_1__service_1__["a" /* default */])
const handler = (event, context) => {
  console.log("EVENT: " + JSON.stringify(event))
  __WEBPACK_IMPORTED_MODULE_0_aws_serverless_express___default.a.proxy(server, event, context)
}
/* harmony default export */ __webpack_exports__["default"] = (handler);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ })
/******/ ])));