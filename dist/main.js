/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    /* background-color: black; */\r\n    margin: 0 auto;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n.headerTitle {\r\n   border-bottom: 4px black solid;\r\n   grid-area: header;\r\n   padding-top: 20px;\r\n   height: 40px;\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n.pageTitleDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.mainContent {\r\n    justify-content: center;\r\n    display: flex;\r\n    grid-area: main;\r\n    padding: 30px 200px 20px 0px;\r\n}\r\n\r\n.sidebar {\r\n    \r\n    grid-area: sidebar;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    /* align-content: center; */\r\n    border-right: 4px aliceblue solid;\r\n}\r\n\r\n\r\n.sidebar p {\r\n    padding-left: 20px;\r\n    font-size: 30px;\r\n    \r\n}\r\n\r\n.sidebar li {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    \r\n}\r\n\r\n.projectItems {\r\n    margin-top: -30px;\r\n    \r\n}\r\n\r\n.sidebar li:hover {\r\n    cursor: pointer;\r\n    color: antiquewhite;\r\n}\r\n\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-areas: \r\n        \"header header header\"\r\n        \"sidebar main main\";\r\n        /* \"sidebar main main\"; */\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    grid-template-columns: 0.325fr 2fr;\r\n    grid-template-rows: 0.1fr 2fr;\r\n    \r\n  \r\n    \r\n}\r\n\r\n\r\n/* button css */\r\n\r\n.button-box {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn {\r\n    --fancy-button-gradient-0: #8d49fd;\r\n    --fancy-button-gradient-50: #7f56f3;\r\n    --fancy-button-gradient-100: #5691f3;\r\n    --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);\r\n    --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);\r\n    --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);\r\n    --fancy-button-shine-top: #e9d1ff;\r\n    --fancy-button-shine-bottom: #adfff9;\r\n    font-family: 'Poppins';\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    line-height: 21px;\r\n    text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);\r\n    padding: 0;\r\n    margin: 0;\r\n    appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    overflow: hidden;\r\n    position: relative;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-gradient-0) 0%, var(--fancy-button-gradient-50) 50%, var(--fancy-button-gradient-100) 100%);\r\n    box-shadow: 0px 4px 12px rgba(9, 14, 60, 0.15), 0px 2px 8px rgba(9, 12, 60, 0.15), 0px 1px 3px var(--fancy-button-inner-shadow-top-lg), inset 0px 1px 1px var(--fancy-button-inner-shadow-top), inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);\r\n  }\r\n\r\n  .btn:hover {\r\n    transform: scale(1.2);\r\n  }\r\n  \r\n  .btn:before, .btn:after {\r\n    content: '';\r\n    position: absolute;\r\n    border-radius: inherit;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn:before {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: var(--fancy-button-shine-top);\r\n    width: 96px;\r\n    height: 6px;\r\n    top: -3px;\r\n    opacity: 0.6;\r\n    filter: blur(6px);\r\n    transition: opacity 0.25s;\r\n  }\r\n  \r\n  .btn:after {\r\n    inset: 0;\r\n    background-size: cover;\r\n    z-index: 2;\r\n    opacity: 0.3;\r\n    mix-blend-mode: overlay;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn span {\r\n    display: block;\r\n    padding: 12px 24px;\r\n    border-radius: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-shine-top), transparent 8px);\r\n    background-position: 0 -6px;\r\n    background-repeat: no-repeat;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn span:before, .btn span:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    border-radius: 50%;\r\n    background-color: var(--fancy-button-shine-bottom);\r\n    transition: opacity 0.25s, transform 0.25s;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn span:before {\r\n    width: 92px;\r\n    height: 8px;\r\n    bottom: -4px;\r\n    opacity: 0.75;\r\n    filter: blur(6px);\r\n  }\r\n  \r\n  .btn span:after {\r\n    width: 112px;\r\n    height: 1px;\r\n    bottom: 0;\r\n    opacity: 0.9;\r\n    filter: blur(1px);\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    transform: translateX(-50%) scale(1.25);\r\n  }\r\n  \r\n  .btn:hover span:after {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n  /* form styling */\r\n\r\n  .form {\r\n    width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    border-radius: 10px;\r\n    padding: 20px 40px;\r\n    background-color: rgba(245, 245, 245, 0.034);\r\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.192);\r\n    transition: .2s linear;\r\n  }\r\n\r\n  .form:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n\r\n  .form button {\r\n    align-self: flex-end;\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n    padding: 5px 20px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: rgba(255, 255, 255, 0.74);\r\n    box-shadow: 2px 2px 10px rgba(124, 124, 124, 0.192);\r\n  }\r\n\r\n  form input {\r\n    height: 25px;\r\n    width: 100%;\r\n    border: 0.5px solid black;\r\n    background-color: transparent;\r\n    color: black;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n    position: relative;\r\n  }\r\n  \r\n  form input:focus {\r\n    outline: none;\r\n    background-color: rgba(173, 173, 173, 0.233);\r\n    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.137);\r\n  }\r\n\r\n\r\n  form label {\r\n    font-size: 14px;\r\n    margin-bottom: -10.6px;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,cAAc;IACd,2DAA2D;AAC/D;;AAEA;IACI,gBAAgB;AACpB;;;;AAIA;GACG,8BAA8B;GAC9B,iBAAiB;GACjB,iBAAiB;GACjB,YAAY;;;AAGf;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;;AAErB;;;;;;;AAOA;IACI,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,4BAA4B;AAChC;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,2BAA2B;IAC3B,iCAAiC;AACrC;;;AAGA;IACI,kBAAkB;IAClB,eAAe;;AAEnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb;;2BAEuB;QACnB,yBAAyB;IAC7B,YAAY;IACZ,iBAAiB;IACjB,kCAAkC;IAClC,6BAA6B;;;;AAIjC;;;AAGA,eAAe;;AAEf;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,yDAAyD;IACzD,wDAAwD;IACxD,4DAA4D;IAC5D,iCAAiC;IACjC,oCAAoC;IACpC,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,+CAA+C;IAC/C,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,2JAA2J;IAC3J,0PAA0P;EAC5P;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,SAAS;IACT,2BAA2B;IAC3B,+CAA+C;IAC/C,WAAW;IACX,WAAW;IACX,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;EAC3B;;EAEA;IACE,QAAQ;IACR,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,oBAAoB;EACtB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,4FAA4F;IAC5F,2BAA2B;IAC3B,4BAA4B;IAC5B,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,2BAA2B;IAC3B,kBAAkB;IAClB,kDAAkD;IAClD,0CAA0C;IAC1C,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,WAAW;IACX,YAAY;IACZ,aAAa;IACb,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,SAAS;IACT,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,UAAU;EACZ;;;EAGA,iBAAiB;;EAEjB;IACE,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,4CAA4C;IAC5C,6CAA6C;IAC7C,sBAAsB;EACxB;;EAEA;IACE,qBAAqB;EACvB;;;EAGA;IACE,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,2CAA2C;IAC3C,mDAAmD;EACrD;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,4CAA4C;IAC5C,mDAAmD;EACrD;;;EAGA;IACE,eAAe;IACf,sBAAsB;EACxB","sourcesContent":["body {\r\n    /* background-color: black; */\r\n    margin: 0 auto;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n.headerTitle {\r\n   border-bottom: 4px black solid;\r\n   grid-area: header;\r\n   padding-top: 20px;\r\n   height: 40px;\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n.pageTitleDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.mainContent {\r\n    justify-content: center;\r\n    display: flex;\r\n    grid-area: main;\r\n    padding: 30px 200px 20px 0px;\r\n}\r\n\r\n.sidebar {\r\n    \r\n    grid-area: sidebar;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    /* align-content: center; */\r\n    border-right: 4px aliceblue solid;\r\n}\r\n\r\n\r\n.sidebar p {\r\n    padding-left: 20px;\r\n    font-size: 30px;\r\n    \r\n}\r\n\r\n.sidebar li {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    \r\n}\r\n\r\n.projectItems {\r\n    margin-top: -30px;\r\n    \r\n}\r\n\r\n.sidebar li:hover {\r\n    cursor: pointer;\r\n    color: antiquewhite;\r\n}\r\n\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-areas: \r\n        \"header header header\"\r\n        \"sidebar main main\";\r\n        /* \"sidebar main main\"; */\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    grid-template-columns: 0.325fr 2fr;\r\n    grid-template-rows: 0.1fr 2fr;\r\n    \r\n  \r\n    \r\n}\r\n\r\n\r\n/* button css */\r\n\r\n.button-box {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn {\r\n    --fancy-button-gradient-0: #8d49fd;\r\n    --fancy-button-gradient-50: #7f56f3;\r\n    --fancy-button-gradient-100: #5691f3;\r\n    --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);\r\n    --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);\r\n    --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);\r\n    --fancy-button-shine-top: #e9d1ff;\r\n    --fancy-button-shine-bottom: #adfff9;\r\n    font-family: 'Poppins';\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    line-height: 21px;\r\n    text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);\r\n    padding: 0;\r\n    margin: 0;\r\n    appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    overflow: hidden;\r\n    position: relative;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-gradient-0) 0%, var(--fancy-button-gradient-50) 50%, var(--fancy-button-gradient-100) 100%);\r\n    box-shadow: 0px 4px 12px rgba(9, 14, 60, 0.15), 0px 2px 8px rgba(9, 12, 60, 0.15), 0px 1px 3px var(--fancy-button-inner-shadow-top-lg), inset 0px 1px 1px var(--fancy-button-inner-shadow-top), inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);\r\n  }\r\n\r\n  .btn:hover {\r\n    transform: scale(1.2);\r\n  }\r\n  \r\n  .btn:before, .btn:after {\r\n    content: '';\r\n    position: absolute;\r\n    border-radius: inherit;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn:before {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: var(--fancy-button-shine-top);\r\n    width: 96px;\r\n    height: 6px;\r\n    top: -3px;\r\n    opacity: 0.6;\r\n    filter: blur(6px);\r\n    transition: opacity 0.25s;\r\n  }\r\n  \r\n  .btn:after {\r\n    inset: 0;\r\n    background-size: cover;\r\n    z-index: 2;\r\n    opacity: 0.3;\r\n    mix-blend-mode: overlay;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn span {\r\n    display: block;\r\n    padding: 12px 24px;\r\n    border-radius: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-shine-top), transparent 8px);\r\n    background-position: 0 -6px;\r\n    background-repeat: no-repeat;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn span:before, .btn span:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    border-radius: 50%;\r\n    background-color: var(--fancy-button-shine-bottom);\r\n    transition: opacity 0.25s, transform 0.25s;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn span:before {\r\n    width: 92px;\r\n    height: 8px;\r\n    bottom: -4px;\r\n    opacity: 0.75;\r\n    filter: blur(6px);\r\n  }\r\n  \r\n  .btn span:after {\r\n    width: 112px;\r\n    height: 1px;\r\n    bottom: 0;\r\n    opacity: 0.9;\r\n    filter: blur(1px);\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    transform: translateX(-50%) scale(1.25);\r\n  }\r\n  \r\n  .btn:hover span:after {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n  /* form styling */\r\n\r\n  .form {\r\n    width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    border-radius: 10px;\r\n    padding: 20px 40px;\r\n    background-color: rgba(245, 245, 245, 0.034);\r\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.192);\r\n    transition: .2s linear;\r\n  }\r\n\r\n  .form:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n\r\n  .form button {\r\n    align-self: flex-end;\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n    padding: 5px 20px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: rgba(255, 255, 255, 0.74);\r\n    box-shadow: 2px 2px 10px rgba(124, 124, 124, 0.192);\r\n  }\r\n\r\n  form input {\r\n    height: 25px;\r\n    width: 100%;\r\n    border: 0.5px solid black;\r\n    background-color: transparent;\r\n    color: black;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n    position: relative;\r\n  }\r\n  \r\n  form input:focus {\r\n    outline: none;\r\n    background-color: rgba(173, 173, 173, 0.233);\r\n    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.137);\r\n  }\r\n\r\n\r\n  form label {\r\n    font-size: 14px;\r\n    margin-bottom: -10.6px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const addButton = () => {
    const button = document.createElement('button');
    const span = document.createElement('span');
    const menuDiv = document.getElementById('sidemenu');
    const buttonDiv = document.createElement('div');

    buttonDiv.classList.add('button-box');

    span.innerHTML = 'Add Task';

    button.classList.add('btn');
    button.setAttribute('id', 'task-button');
    button.appendChild(span);
    buttonDiv.appendChild(button);

    menuDiv.appendChild(buttonDiv)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addButton);

/***/ }),

/***/ "./src/components/createPage.js":
/*!**************************************!*\
  !*** ./src/components/createPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/components/form.js");
// import './style.css';



const createPage = () => {
    //code here for the home page 
    //*create elements
    const content = document.getElementById('content');
    const titleH3 = document.createElement('h4');
    const titleDiv = document.createElement('div');
    const sidebarDiv = document.createElement('div');
    const mainContentDiv = document.createElement('div');
    const inboxListUL = document.createElement('ul');
    const projectTitle = document.createElement('p');
    const projectUL = document.createElement('ul');
    const pageTitleDiv = document.createElement('div');
    const todoListtDiv = document.createElement('div');
    
    //add id
    mainContentDiv.setAttribute('id', 'main');
    
    

    //* add detail to elements 
    titleH3.innerHTML = 'Todo App';
    projectTitle.innerHTML = 'Projects';
   

    const inBoxItems = ['Inbox', 'Today', 'This Week'];
    inBoxItems.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = item;
        inboxListUL.appendChild(li);
    });

    //*Handle adding projects 
    const projectItems = ['Placeholder', 'Home', 'Gym'];
    projectItems.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        projectUL.appendChild(li);
    });

    

    

    //*add classes
    titleDiv.classList.add('headerTitle');
    pageTitleDiv.classList.add('pageTitleDiv');
    // introTitle.classList.add('pageTitle');
    // titleH3.classList.add('pageTitle');
    sidebarDiv.classList.add('sidebar');
    sidebarDiv.setAttribute('id', 'sidemenu');
    mainContentDiv.classList.add('mainContent');
    projectUL.classList.add('projectItems');
    todoListtDiv.setAttribute('id','todo-list');
   
    //*Append side bar and main content to content div
    // going to use a grid to create the menu I want
    
    content.appendChild(titleDiv);
    content.appendChild(sidebarDiv);
    content.appendChild(mainContentDiv);
    // title title title
    // sidebar main main
    //sidebar main main 
    titleDiv.appendChild(pageTitleDiv);
    pageTitleDiv.appendChild(titleH3);
    
    (0,_button__WEBPACK_IMPORTED_MODULE_0__["default"])();
    sidebarDiv.appendChild(inboxListUL);
    sidebarDiv.appendChild(projectTitle);
    sidebarDiv.appendChild(projectUL);
    mainContentDiv.appendChild(todoListtDiv);
    // console.log('contact');
    // console.log(content);

    // taskForm();
    // const form = document.getElementById('todoForm');
    // form.style.display = 'none';

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const taskForm = () => {
    const div = document.getElementById('todo-list');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    

    //create labels
    const taskLabel = document.createElement('label');
    const dateLabel = document.createElement('label');

    taskLabel.innerText = 'Task';
    dateLabel.innerText = 'Due Date';
    
    //create input
    const todoDescription = document.createElement("input");

    todoDescription.setAttribute("type", "text");
    todoDescription.setAttribute("name", 'description');
    todoDescription.setAttribute("placeholder", "Please enter a task");
    todoDescription.attributes.required = "required";

    //create  due date
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'text');
    dueDate.setAttribute('placeholder', 'Due Date?');

    //create button

    const submitTask = document.createElement("button");
    submitTask.setAttribute("type", "submit");
    submitTask.innerText = 'Submit';
    submitTask.setAttribute('id', 'submit');

    form.classList.add('form');
    form.setAttribute('id', 'todoForm');

    form.appendChild(taskLabel);
    form.appendChild(todoDescription);
    form.appendChild(dateLabel);
    form.appendChild(dueDate);
    form.appendChild(submitTask);
    div.appendChild(form);


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskForm);



/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//* TODO Object
const todo = (description, dueDate) => {
    

    return { description:description, dueDate:dueDate }
}

const todo1 = todo('do laundry ', 'today');


//*Projects will act as list 
const projects = (name)=> {
    const projectList = [];
    
    //Adding task to project
    const addTask = (todo) => {
        projectList.push(todo);
    }

    // const deleteTask = () => {
    
    // }


    return {name:name, addTask, projectList }
}

// const project1 = projects('Home');

// project1.addTask(todo1);

// console.log(project1.projectList);





















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ todo,  projects });














/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo */ "./src/components/todo.js");
/* harmony import */ var _components_createPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createPage */ "./src/components/createPage.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button */ "./src/components/button.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");







(0,_components_createPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
const addTask = document.getElementById('task-button');


addTask.addEventListener('click', function(e) {
    e.preventDefault();
    (0,_components_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
    addTask.setAttribute('disabled', 'disabled');
    
    
});

















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVQYWdlLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9jb21wb25lbnRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyVGl0bGUge1xcclxcbiAgIGJvcmRlci1ib3R0b206IDRweCBibGFjayBzb2xpZDtcXHJcXG4gICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgXFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5wYWdlVGl0bGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5tYWluQ29udGVudCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBncmlkLWFyZWE6IG1haW47XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggMjAwcHggMjBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgXFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICAgIGJvcmRlci1yaWdodDogNHB4IGFsaWNlYmx1ZSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGViYXIgcCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgbGkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEl0ZW1zIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7XFxyXFxuICAgICAgICAvKiBcXFwic2lkZWJhciBtYWluIG1haW5cXFwiOyAqL1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMzI1ZnIgMmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDJmcjtcXHJcXG4gICAgXFxyXFxuICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGJ1dHRvbiBjc3MgKi9cXHJcXG5cXHJcXG4uYnV0dG9uLWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC0wOiAjOGQ0OWZkO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC01MDogIzdmNTZmMztcXHJcXG4gICAgLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMTAwOiAjNTY5MWYzO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctdG9wOiByZ2JhKDIzMywgMjA5LCAyNTUsIDAuMik7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy10b3AtbGc6IHJnYmEoOSwgMTIsIDYwLCAwLjEpO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctYm90dG9tOiByZ2JhKDEzNywgMjIyLCAyNDYsIDAuMyk7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLXNoaW5lLXRvcDogI2U5ZDFmZjtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24tc2hpbmUtYm90dG9tOiAjYWRmZmY5O1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDAuNXB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTApIDAlLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtNTApIDUwJSwgdmFyKC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTEwMCkgMTAwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDksIDE0LCA2MCwgMC4xNSksIDBweCAycHggOHB4IHJnYmEoOSwgMTIsIDYwLCAwLjE1KSwgMHB4IDFweCAzcHggdmFyKC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy10b3AtbGcpLCBpbnNldCAwcHggMXB4IDFweCB2YXIoLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcCksIGluc2V0IDBweCAtMXB4IDNweCB2YXIoLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LWJvdHRvbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuOmJlZm9yZSwgLmJ0bjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS10b3ApO1xcclxcbiAgICB3aWR0aDogOTZweDtcXHJcXG4gICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgIHRvcDogLTNweDtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjphZnRlciB7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0biBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1mYW5jeS1idXR0b24tc2hpbmUtdG9wKSwgdHJhbnNwYXJlbnQgOHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHNwYW46YmVmb3JlLCAuYnRuIHNwYW46YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYW5jeS1idXR0b24tc2hpbmUtYm90dG9tKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xcclxcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHNwYW46YmVmb3JlIHtcXHJcXG4gICAgd2lkdGg6IDkycHg7XFxyXFxuICAgIGhlaWdodDogOHB4O1xcclxcbiAgICBib3R0b206IC00cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxyXFxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHNwYW46YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMTEycHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46aG92ZXIgc3BhbjpiZWZvcmUge1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46aG92ZXIgc3BhbjpiZWZvcmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMS4yNSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46aG92ZXIgc3BhbjphZnRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBmb3JtIHN0eWxpbmcgKi9cXHJcXG5cXHJcXG4gIC5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjAzNCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTkyKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICAuZm9ybSBidXR0b24ge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDEyNCwgMTI0LCAxMjQsIDAuMTkyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0gaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBmb3JtIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDE3MywgMTczLCAwLjIzMyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTM3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIGZvcm0gbGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0xMC42cHg7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7O0FBSUE7R0FDRyw4QkFBOEI7R0FDOUIsaUJBQWlCO0dBQ2pCLGlCQUFpQjtHQUNqQixZQUFZOzs7QUFHZjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCOzs7Ozs7O0FBT0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiOzsyQkFFdUI7UUFDbkIseUJBQXlCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLDZCQUE2Qjs7OztBQUlqQzs7O0FBR0EsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLHlEQUF5RDtJQUN6RCx3REFBd0Q7SUFDeEQsNERBQTREO0lBQzVELGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJKQUEySjtJQUMzSiwwUEFBMFA7RUFDNVA7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0RkFBNEY7SUFDNUYsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtEQUFrRDtJQUNsRCwwQ0FBMEM7SUFDMUMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7OztFQUdBLGlCQUFpQjs7RUFFakI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsNkNBQTZDO0lBQzdDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7O0VBR0E7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLG1EQUFtRDtFQUNyRDs7O0VBR0E7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXJUaXRsZSB7XFxyXFxuICAgYm9yZGVyLWJvdHRvbTogNHB4IGJsYWNrIHNvbGlkO1xcclxcbiAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgIGhlaWdodDogNDBweDtcXHJcXG4gICBcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2VUaXRsZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgcGFkZGluZzogMzBweCAyMDBweCAyMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggYWxpY2VibHVlIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZWJhciBwIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0SXRlbXMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIjtcXHJcXG4gICAgICAgIC8qIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7ICovXFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zMjVmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMmZyO1xcclxcbiAgICBcXHJcXG4gIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYnV0dG9uIGNzcyAqL1xcclxcblxcclxcbi5idXR0b24tYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTA6ICM4ZDQ5ZmQ7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTUwOiAjN2Y1NmYzO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC0xMDA6ICM1NjkxZjM7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy10b3A6IHJnYmEoMjMzLCAyMDksIDI1NSwgMC4yKTtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcC1sZzogcmdiYSg5LCAxMiwgNjAsIDAuMSk7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy1ib3R0b206IHJnYmEoMTM3LCAyMjIsIDI0NiwgMC4zKTtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24tc2hpbmUtdG9wOiAjZTlkMWZmO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1zaGluZS1ib3R0b206ICNhZGZmZjk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMC41cHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMCkgMCUsIHZhcigtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC01MCkgNTAlLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMTAwKSAxMDAlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoOSwgMTQsIDYwLCAwLjE1KSwgMHB4IDJweCA4cHggcmdiYSg5LCAxMiwgNjAsIDAuMTUpLCAwcHggMXB4IDNweCB2YXIoLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcC1sZyksIGluc2V0IDBweCAxcHggMXB4IHZhcigtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctdG9wKSwgaW5zZXQgMHB4IC0xcHggM3B4IHZhcigtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctYm90dG9tKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46YmVmb3JlLCAuYnRuOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFuY3ktYnV0dG9uLXNoaW5lLXRvcCk7XFxyXFxuICAgIHdpZHRoOiA5NnB4O1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgdG9wOiAtM3B4O1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuOmFmdGVyIHtcXHJcXG4gICAgaW5zZXQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS10b3ApLCB0cmFuc3BhcmVudCA4cHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC02cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjpiZWZvcmUsIC5idG4gc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS1ib3R0b20pO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjpiZWZvcmUge1xcclxcbiAgICB3aWR0aDogOTJweDtcXHJcXG4gICAgaGVpZ2h0OiA4cHg7XFxyXFxuICAgIGJvdHRvbTogLTRweDtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAxMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmJlZm9yZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjI1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIGZvcm0gc3R5bGluZyAqL1xcclxcblxcclxcbiAgLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMDM0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC5mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xOTIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTczLCAxNzMsIDAuMjMzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzcpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9ybSBsYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwLjZweDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcblxyXG5jb25zdCBhZGRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVtZW51Jyk7XHJcbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWJveCcpO1xyXG5cclxuICAgIHNwYW4uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcclxuXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWJ1dHRvbicpO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRCdXR0b247IiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBhZGRCdXR0b24gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB0YXNrRm9ybSBmcm9tIFwiLi9mb3JtXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xyXG4gICAgLy9jb2RlIGhlcmUgZm9yIHRoZSBob21lIHBhZ2UgXHJcbiAgICAvLypjcmVhdGUgZWxlbWVudHNcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgdGl0bGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGluYm94TGlzdFVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRvZG9MaXN0dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAvL2FkZCBpZFxyXG4gICAgbWFpbkNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vKiBhZGQgZGV0YWlsIHRvIGVsZW1lbnRzIFxyXG4gICAgdGl0bGVIMy5pbm5lckhUTUwgPSAnVG9kbyBBcHAnO1xyXG4gICAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IGluQm94SXRlbXMgPSBbJ0luYm94JywgJ1RvZGF5JywgJ1RoaXMgV2VlayddO1xyXG4gICAgaW5Cb3hJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS5pbm5lclRleHQgPSBpdGVtO1xyXG4gICAgICAgIGluYm94TGlzdFVMLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vKkhhbmRsZSBhZGRpbmcgcHJvamVjdHMgXHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBbJ1BsYWNlaG9sZGVyJywgJ0hvbWUnLCAnR3ltJ107XHJcbiAgICBwcm9qZWN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGl0ZW07XHJcbiAgICAgICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vKmFkZCBjbGFzc2VzXHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpO1xyXG4gICAgcGFnZVRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3BhZ2VUaXRsZURpdicpO1xyXG4gICAgLy8gaW50cm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlVGl0bGUnKTtcclxuICAgIC8vIHRpdGxlSDMuY2xhc3NMaXN0LmFkZCgncGFnZVRpdGxlJyk7XHJcbiAgICBzaWRlYmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgIHNpZGViYXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlbWVudScpO1xyXG4gICAgbWFpbkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnQnKTtcclxuICAgIHByb2plY3RVTC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbXMnKTtcclxuICAgIHRvZG9MaXN0dERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1saXN0Jyk7XHJcbiAgIFxyXG4gICAgLy8qQXBwZW5kIHNpZGUgYmFyIGFuZCBtYWluIGNvbnRlbnQgdG8gY29udGVudCBkaXZcclxuICAgIC8vIGdvaW5nIHRvIHVzZSBhIGdyaWQgdG8gY3JlYXRlIHRoZSBtZW51IEkgd2FudFxyXG4gICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckRpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcclxuICAgIC8vIHRpdGxlIHRpdGxlIHRpdGxlXHJcbiAgICAvLyBzaWRlYmFyIG1haW4gbWFpblxyXG4gICAgLy9zaWRlYmFyIG1haW4gbWFpbiBcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHBhZ2VUaXRsZURpdik7XHJcbiAgICBwYWdlVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVIMyk7XHJcbiAgICBcclxuICAgIGFkZEJ1dHRvbigpO1xyXG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChpbmJveExpc3RVTCk7XHJcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RVTCk7XHJcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvTGlzdHREaXYpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG5cclxuICAgIC8vIHRhc2tGb3JtKCk7XHJcbiAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJyk7XHJcbiAgICAvLyBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTsiLCJcclxuY29uc3QgdGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XHJcbiAgICBcclxuXHJcbiAgICAvL2NyZWF0ZSBsYWJlbHNcclxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cclxuICAgIHRhc2tMYWJlbC5pbm5lclRleHQgPSAnVGFzayc7XHJcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcclxuICAgIFxyXG4gICAgLy9jcmVhdGUgaW5wdXRcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCAnZGVzY3JpcHRpb24nKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlBsZWFzZSBlbnRlciBhIHRhc2tcIik7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uYXR0cmlidXRlcy5yZXF1aXJlZCA9IFwicmVxdWlyZWRcIjtcclxuXHJcbiAgICAvL2NyZWF0ZSAgZHVlIGRhdGVcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0R1ZSBEYXRlPycpO1xyXG5cclxuICAgIC8vY3JlYXRlIGJ1dHRvblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xyXG4gICAgc3VibWl0VGFzay5pbm5lclRleHQgPSAnU3VibWl0JztcclxuICAgIHN1Ym1pdFRhc2suc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcclxuXHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvRm9ybScpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2spO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrRm9ybTtcclxuXHJcbiIsIi8vKiBUT0RPIE9iamVjdFxyXG5jb25zdCB0b2RvID0gKGRlc2NyaXB0aW9uLCBkdWVEYXRlKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4geyBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbiwgZHVlRGF0ZTpkdWVEYXRlIH1cclxufVxyXG5cclxuY29uc3QgdG9kbzEgPSB0b2RvKCdkbyBsYXVuZHJ5ICcsICd0b2RheScpO1xyXG5cclxuXHJcbi8vKlByb2plY3RzIHdpbGwgYWN0IGFzIGxpc3QgXHJcbmNvbnN0IHByb2plY3RzID0gKG5hbWUpPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcclxuICAgIFxyXG4gICAgLy9BZGRpbmcgdGFzayB0byBwcm9qZWN0XHJcbiAgICBjb25zdCBhZGRUYXNrID0gKHRvZG8pID0+IHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtuYW1lOm5hbWUsIGFkZFRhc2ssIHByb2plY3RMaXN0IH1cclxufVxyXG5cclxuLy8gY29uc3QgcHJvamVjdDEgPSBwcm9qZWN0cygnSG9tZScpO1xyXG5cclxuLy8gcHJvamVjdDEuYWRkVGFzayh0b2RvMSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0MS5wcm9qZWN0TGlzdCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgdG9kbywgIHByb2plY3RzIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL2NvbXBvbmVudHMvdG9kbyc7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGVQYWdlJztcclxuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuaW1wb3J0IHRhc2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuXHJcblxyXG5jcmVhdGVQYWdlKCk7XHJcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKTtcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGFza0Zvcm0oKTtcclxuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgXHJcbiAgICBcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=