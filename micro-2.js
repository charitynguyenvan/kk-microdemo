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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const addMethod = (eventMessage) => {
  const {a, b} = eventMessage
  const sum = parseInt(a) + parseInt(b)
  return { sum }
}
/* harmony export (immutable) */ __webpack_exports__["addMethod"] = addMethod;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    'ch1': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch2': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch3': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch4': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch5': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch6': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch7': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch8': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch9': {
      controller: 'DemoController',
      method: 'addMethod'
    },
    'ch10': {
      controller: 'DemoController',
      method: 'addMethod'
    },
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DemoController": 2,
	"./DemoController.js": 2
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channels__ = __webpack_require__(3);




const sub = __WEBPACK_IMPORTED_MODULE_0_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */])
const pub = __WEBPACK_IMPORTED_MODULE_0_redis___default.a.createClient(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */])

// subscribe all channels
for(let mChannel in __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* default */]) {

  let handler = __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* default */][mChannel]
  let method = __webpack_require__(4)("./" + handler.controller)[handler.method]

  // console.log(mChannel, message);

  sub.on('message', (channel, message) => {
    if(channel == mChannel) {
      console.log(mChannel, message);
      const eventMessage = JSON.parse(message)
      const eventId = eventMessage.eventId

      pub.publish(channel + '.' + eventId, JSON.stringify(method(eventMessage)))
    }
  })
  sub.subscribe(mChannel)
}


/***/ })
/******/ ]);