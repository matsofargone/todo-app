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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    /* background-color: black; */\r\n    margin: 0 auto;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n.headerTitle {\r\n   border-bottom: 4px black solid;\r\n   grid-area: header;\r\n   padding-top: 20px;\r\n   height: 40px;\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n.pageTitleDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.mainContent {\r\n    justify-content: center;\r\n    display: flex;\r\n    grid-area: main;\r\n    padding: 30px 200px 20px 0px;\r\n}\r\n\r\n.sidebar {\r\n    \r\n    grid-area: sidebar;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    /* align-content: center; */\r\n    border-right: 4px aliceblue solid;\r\n}\r\n\r\n\r\n.sidebar p {\r\n    padding-left: 20px;\r\n    font-size: 30px;\r\n    \r\n}\r\n\r\n.sidebar li {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    \r\n}\r\n\r\n.projectItems {\r\n    margin-top: -30px;\r\n    \r\n}\r\n\r\n.sidebar li:hover {\r\n    cursor: pointer;\r\n    color: antiquewhite;\r\n}\r\n\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-areas: \r\n        \"header header header\"\r\n        \"sidebar main main\";\r\n        /* \"sidebar main main\"; */\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    grid-template-columns: 0.325fr 2fr;\r\n    grid-template-rows: 0.1fr 2fr;\r\n    \r\n  \r\n    \r\n}\r\n\r\n\r\n/* button css */\r\n\r\n\r\n.button-box {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px 10px;\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n.btn {\r\n    --fancy-button-gradient-0: #8d49fd;\r\n    --fancy-button-gradient-50: #7f56f3;\r\n    --fancy-button-gradient-100: #5691f3;\r\n    --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);\r\n    --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);\r\n    --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);\r\n    --fancy-button-shine-top: #e9d1ff;\r\n    --fancy-button-shine-bottom: #adfff9;\r\n    font-family: 'Poppins';\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    line-height: 21px;\r\n    text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);\r\n    padding: 0;\r\n    margin: 0;\r\n    appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    overflow: hidden;\r\n    position: relative;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-gradient-0) 0%, var(--fancy-button-gradient-50) 50%, var(--fancy-button-gradient-100) 100%);\r\n    box-shadow: 0px 4px 12px rgba(9, 14, 60, 0.15), 0px 2px 8px rgba(9, 12, 60, 0.15), 0px 1px 3px var(--fancy-button-inner-shadow-top-lg), inset 0px 1px 1px var(--fancy-button-inner-shadow-top), inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);\r\n  }\r\n\r\n  .btn:hover {\r\n    transform: scale(1.2);\r\n  }\r\n  \r\n  .btn:before, .btn:after {\r\n    content: '';\r\n    position: absolute;\r\n    border-radius: inherit;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn:before {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: var(--fancy-button-shine-top);\r\n    width: 96px;\r\n    height: 6px;\r\n    top: -3px;\r\n    opacity: 0.6;\r\n    filter: blur(6px);\r\n    transition: opacity 0.25s;\r\n  }\r\n  \r\n  .btn:after {\r\n    inset: 0;\r\n    background-size: cover;\r\n    z-index: 2;\r\n    opacity: 0.3;\r\n    mix-blend-mode: overlay;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn span {\r\n    display: block;\r\n    padding: 12px 24px;\r\n    border-radius: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-shine-top), transparent 8px);\r\n    background-position: 0 -6px;\r\n    background-repeat: no-repeat;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn span:before, .btn span:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    border-radius: 50%;\r\n    background-color: var(--fancy-button-shine-bottom);\r\n    transition: opacity 0.25s, transform 0.25s;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn span:before {\r\n    width: 92px;\r\n    height: 8px;\r\n    bottom: -4px;\r\n    opacity: 0.75;\r\n    filter: blur(6px);\r\n  }\r\n  \r\n  .btn span:after {\r\n    width: 112px;\r\n    height: 1px;\r\n    bottom: 0;\r\n    opacity: 0.9;\r\n    filter: blur(1px);\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    transform: translateX(-50%) scale(1.25);\r\n  }\r\n  \r\n  .btn:hover span:after {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n  /* form styling */\r\n\r\n  .form {\r\n    width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    border-radius: 10px;\r\n    padding: 20px 40px;\r\n    background-color: rgba(245, 245, 245, 0.034);\r\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.192);\r\n    transition: .2s linear;\r\n    z-index: 1;\r\n  }\r\n\r\n  .form:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n\r\n  .form button {\r\n    align-self: flex-end;\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n    padding: 5px 20px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: rgba(255, 255, 255, 0.74);\r\n    box-shadow: 2px 2px 10px rgba(124, 124, 124, 0.192);\r\n  }\r\n\r\n  form input {\r\n    height: 25px;\r\n    width: 100%;\r\n    border: 0.5px solid black;\r\n    background-color: transparent;\r\n    color: black;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n    position: relative;\r\n  }\r\n  \r\n  form input:focus {\r\n    outline: none;\r\n    background-color: rgba(173, 173, 173, 0.233);\r\n    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.137);\r\n  }\r\n\r\n\r\n  form label {\r\n    font-size: 14px;\r\n    margin-bottom: -10.6px;\r\n  }\r\n\r\n  #projectName {\r\n    margin-left: 10px;\r\n    width: 80px;\r\n    color: black;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    /* background-color: black; */\r\n    margin: 0 auto;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n.headerTitle {\r\n   border-bottom: 4px black solid;\r\n   grid-area: header;\r\n   padding-top: 20px;\r\n   height: 40px;\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n.pageTitleDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.mainContent {\r\n    justify-content: center;\r\n    display: flex;\r\n    grid-area: main;\r\n    padding: 30px 200px 20px 0px;\r\n}\r\n\r\n.sidebar {\r\n    \r\n    grid-area: sidebar;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    /* align-content: center; */\r\n    border-right: 4px aliceblue solid;\r\n}\r\n\r\n\r\n.sidebar p {\r\n    padding-left: 20px;\r\n    font-size: 30px;\r\n    \r\n}\r\n\r\n.sidebar li {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    \r\n}\r\n\r\n.projectItems {\r\n    margin-top: -30px;\r\n    \r\n}\r\n\r\n.sidebar li:hover {\r\n    cursor: pointer;\r\n    color: antiquewhite;\r\n}\r\n\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-areas: \r\n        \"header header header\"\r\n        \"sidebar main main\";\r\n        /* \"sidebar main main\"; */\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    grid-template-columns: 0.325fr 2fr;\r\n    grid-template-rows: 0.1fr 2fr;\r\n    \r\n  \r\n    \r\n}\r\n\r\n\r\n/* button css */\r\n\r\n\r\n.button-box {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px 10px;\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n.btn {\r\n    --fancy-button-gradient-0: #8d49fd;\r\n    --fancy-button-gradient-50: #7f56f3;\r\n    --fancy-button-gradient-100: #5691f3;\r\n    --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);\r\n    --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);\r\n    --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);\r\n    --fancy-button-shine-top: #e9d1ff;\r\n    --fancy-button-shine-bottom: #adfff9;\r\n    font-family: 'Poppins';\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    line-height: 21px;\r\n    text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);\r\n    padding: 0;\r\n    margin: 0;\r\n    appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    overflow: hidden;\r\n    position: relative;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-gradient-0) 0%, var(--fancy-button-gradient-50) 50%, var(--fancy-button-gradient-100) 100%);\r\n    box-shadow: 0px 4px 12px rgba(9, 14, 60, 0.15), 0px 2px 8px rgba(9, 12, 60, 0.15), 0px 1px 3px var(--fancy-button-inner-shadow-top-lg), inset 0px 1px 1px var(--fancy-button-inner-shadow-top), inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);\r\n  }\r\n\r\n  .btn:hover {\r\n    transform: scale(1.2);\r\n  }\r\n  \r\n  .btn:before, .btn:after {\r\n    content: '';\r\n    position: absolute;\r\n    border-radius: inherit;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn:before {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: var(--fancy-button-shine-top);\r\n    width: 96px;\r\n    height: 6px;\r\n    top: -3px;\r\n    opacity: 0.6;\r\n    filter: blur(6px);\r\n    transition: opacity 0.25s;\r\n  }\r\n  \r\n  .btn:after {\r\n    inset: 0;\r\n    background-size: cover;\r\n    z-index: 2;\r\n    opacity: 0.3;\r\n    mix-blend-mode: overlay;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn span {\r\n    display: block;\r\n    padding: 12px 24px;\r\n    border-radius: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background-image: linear-gradient(to bottom, var(--fancy-button-shine-top), transparent 8px);\r\n    background-position: 0 -6px;\r\n    background-repeat: no-repeat;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn span:before, .btn span:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    border-radius: 50%;\r\n    background-color: var(--fancy-button-shine-bottom);\r\n    transition: opacity 0.25s, transform 0.25s;\r\n    will-change: transform;\r\n  }\r\n  \r\n  .btn span:before {\r\n    width: 92px;\r\n    height: 8px;\r\n    bottom: -4px;\r\n    opacity: 0.75;\r\n    filter: blur(6px);\r\n  }\r\n  \r\n  .btn span:after {\r\n    width: 112px;\r\n    height: 1px;\r\n    bottom: 0;\r\n    opacity: 0.9;\r\n    filter: blur(1px);\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .btn:hover span:before {\r\n    transform: translateX(-50%) scale(1.25);\r\n  }\r\n  \r\n  .btn:hover span:after {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n  /* form styling */\r\n\r\n  .form {\r\n    width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    border-radius: 10px;\r\n    padding: 20px 40px;\r\n    background-color: rgba(245, 245, 245, 0.034);\r\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.192);\r\n    transition: .2s linear;\r\n    z-index: 1;\r\n  }\r\n\r\n  .form:hover {\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n\r\n  .form button {\r\n    align-self: flex-end;\r\n  }\r\n\r\n  button {\r\n    border: none;\r\n    padding: 5px 20px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: rgba(255, 255, 255, 0.74);\r\n    box-shadow: 2px 2px 10px rgba(124, 124, 124, 0.192);\r\n  }\r\n\r\n  form input {\r\n    height: 25px;\r\n    width: 100%;\r\n    border: 0.5px solid black;\r\n    background-color: transparent;\r\n    color: black;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    transition: .2s linear;\r\n    position: relative;\r\n  }\r\n  \r\n  form input:focus {\r\n    outline: none;\r\n    background-color: rgba(173, 173, 173, 0.233);\r\n    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.137);\r\n  }\r\n\r\n\r\n  form label {\r\n    font-size: 14px;\r\n    margin-bottom: -10.6px;\r\n  }\r\n\r\n  #projectName {\r\n    margin-left: 10px;\r\n    width: 80px;\r\n    color: black;\r\n  }"],"sourceRoot":""}]);
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


const addButton = (name, div) => {
    const button = document.createElement('button');
    const span = document.createElement('span');
    // const menuDiv = document.getElementById('sidemenu');
    const buttonDiv = document.createElement('div');

    buttonDiv.classList.add('button-box');

    span.innerHTML = 'Add ' + name;

    button.classList.add('btn');
    button.setAttribute('id', name + '-button');
    button.appendChild(span);
    buttonDiv.appendChild(button);

    div.appendChild(buttonDiv)

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
   

    const inBoxItems = ['Home'];
    inBoxItems.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = item;
        inboxListUL.appendChild(li);
    });

    // //*Handle adding projects 
    // const projectItems = ['Test'];
    // projectItems.forEach(item => {
    //     let li = document.createElement('li');
    //     li.innerHTML = item;
    //     projectUL.appendChild(li);
    // });

    

    

    //*add classes
    titleDiv.classList.add('headerTitle');
    pageTitleDiv.classList.add('pageTitleDiv');
    // introTitle.classList.add('pageTitle');
    // titleH3.classList.add('pageTitle');
    sidebarDiv.classList.add('sidebar');
    sidebarDiv.setAttribute('id', 'sidemenu');
    mainContentDiv.classList.add('mainContent');
    projectUL.classList.add('projectItems');
    projectUL.setAttribute('id', 'projects');
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
    
    (0,_button__WEBPACK_IMPORTED_MODULE_0__["default"])('Task', sidebarDiv);
    sidebarDiv.appendChild(inboxListUL);
    sidebarDiv.appendChild(projectTitle);
    sidebarDiv.appendChild(projectUL);
    (0,_button__WEBPACK_IMPORTED_MODULE_0__["default"])('Project', sidebarDiv);
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
    const projectNameLabel = document.createElement('label');

    taskLabel.innerText = 'Task';
    dateLabel.innerText = 'Due Date';
    projectNameLabel.innerText = 'Project Name';
    
    //create input
    const todoDescription = document.createElement("input");

    todoDescription.setAttribute("type", "text");
    todoDescription.setAttribute("name", 'description');
    todoDescription.setAttribute("placeholder", "Please enter a task");
    todoDescription.setAttribute("required", "");
    todoDescription.setAttribute('id', 'description');
    
    

    //create  due date
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'duedate');

    //create project feild
    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'name');

    

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
    form.appendChild(projectNameLabel);
    form.appendChild(projectName);
    form.appendChild(submitTask);
    div.appendChild(form);

    form.style.display = 'none';

    


}







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskForm);



/***/ }),

/***/ "./src/components/projectForm.js":
/*!***************************************!*\
  !*** ./src/components/projectForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectForm = () => {

    const projectListDiv = document.getElementById('sidemenu');
    const projectNameForm = document.createElement('form');
    projectNameForm.setAttribute('method', 'post');
    projectNameForm.setAttribute('id', 'projectform');

    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('name', 'project-name');
    projectNameInput.setAttribute('placeholder', 'Project Name');
    projectNameInput.setAttribute('required', "");
    projectNameInput.setAttribute('id', "projectName");


    const submitProjectName = document.createElement("button");
    submitProjectName.setAttribute("type", "submit");
    submitProjectName.innerText = 'Submit';
    submitProjectName.setAttribute('id', 'submit-project');


    projectNameForm.appendChild(projectNameInput);
    projectNameForm.appendChild(submitProjectName);
    projectListDiv.appendChild(projectNameForm);

    projectNameForm.style.display = 'none';


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);

/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
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





//* TODO Object
const todo = (description, dueDate, project) => {
    

    return { description:description, dueDate:dueDate, project:project }
}

const todo1 = todo('do laundry ', 'today');







































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
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _components_projectForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projectForm */ "./src/components/projectForm.js");








//!Utility Functions 
 const clearForm = (form) => form.reset();
 const showForm = (form) => form.style.display = 'flex';
 const hideForm = (form) => form.style.display = 'none';
 const disableButton = (button) => button.setAttribute('disabled', 'disabled');
 const enableButton = (button) => button.removeAttribute('disabled');

 //* adding submissions to list


 const addProjecttoUI = (name) => {
    const projectItems = ['Test'];
    const projectMenuList = document.getElementById('projects');
    console.log(projectMenuList);
    const li = document.createElement('li');
    li.innerText = name;
    projectItems.push(li);
    projectItems.forEach(item => {
        projectMenuList.appendChild(li);
    });


 }




;(0,_components_createPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
const addTask = document.getElementById('Task-button');
const addProject = document.getElementById('Project-button');
(0,_components_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_projectForm__WEBPACK_IMPORTED_MODULE_4__["default"])();


//!Views
const tasks = [];
//!Work on function ---Array returns extra blank submission after two entries 
const displayTasks = (item) => {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    // const taskName = document.getElementById('description').value;
    
   
    tasks.push(item);
    console.log(tasks);
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] === ' ') {
             return;
            }
        li.innerText = tasks[i].description 
        todoList.appendChild(li);
        
        
    }
}

const testTodo = (0,_components_todo__WEBPACK_IMPORTED_MODULE_1__.todo)('Test', '10/10/2020', 'TESTING');
displayTasks(testTodo);



//* Add Task button
addTask.addEventListener('click', function(e) {
  
    const form = document.getElementById('todoForm');
    showForm(form);
    disableButton(addTask);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const description = document.getElementById('description');
        const dueDate = document.getElementById('duedate');
        const projectName = document.getElementById('name');
        const item = (0,_components_todo__WEBPACK_IMPORTED_MODULE_1__.todo)(description.value,dueDate.value, projectName.value);
        
        displayTasks(item);
     
        hideForm(form);
        clearForm(form);
        enableButton(addTask);
        // select description, due date, project name
        // display todo by appending the values to an array 
         
        
        
        
        
    })
    
    
    
});

//*Add Project button

addProject.addEventListener('click', function(e){
    e.preventDefault();
    const projectNameform = document.getElementById('projectform');
    showForm(projectNameform);
    disableButton(addProject);

    //*Submit 
    projectNameform.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('projectName');
        const newProject = (0,_components_todo__WEBPACK_IMPORTED_MODULE_1__.projects)(name.value);
        console.log(newProject);
        addProjecttoUI(newProject.name);

        clearForm(projectNameform);
        hideForm(projectNameform);
        enableButton(addProject);
    })

    

  
});


//Projects can be displayed by using filters on array to match project name 















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELG9DQUFvQyx5QkFBeUIsb0VBQW9FLEtBQUssWUFBWSx5QkFBeUIsS0FBSyw4QkFBOEIsc0NBQXNDLHlCQUF5Qix5QkFBeUIsb0JBQW9CLG1CQUFtQiwrQkFBK0Isc0JBQXNCLCtCQUErQiwwQkFBMEIsYUFBYSwwQ0FBMEMsZ0NBQWdDLHNCQUFzQix3QkFBd0IscUNBQXFDLEtBQUssa0JBQWtCLG1DQUFtQyxzQkFBc0IsK0JBQStCLG9DQUFvQyxrQ0FBa0MsNENBQTRDLEtBQUssd0JBQXdCLDJCQUEyQix3QkFBd0IsYUFBYSxxQkFBcUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsYUFBYSx1QkFBdUIsMEJBQTBCLGFBQWEsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsS0FBSyxzQkFBc0Isc0JBQXNCLG1HQUFtRyxzQ0FBc0MsdUJBQXVCLDBCQUEwQiwyQ0FBMkMsc0NBQXNDLDJCQUEyQixxREFBcUQsc0JBQXNCLGdDQUFnQywyQkFBMkIseUJBQXlCLFNBQVMsY0FBYywyQ0FBMkMsNENBQTRDLDZDQUE2QyxrRUFBa0UsaUVBQWlFLHFFQUFxRSwwQ0FBMEMsNkNBQTZDLCtCQUErQix5QkFBeUIsd0JBQXdCLDBCQUEwQix3REFBd0QsbUJBQW1CLGtCQUFrQix5QkFBeUIscUJBQXFCLHNCQUFzQix5QkFBeUIsMkJBQTJCLHdCQUF3QixtQkFBbUIsNEJBQTRCLG9CQUFvQixvS0FBb0ssbVFBQW1RLE9BQU8sc0JBQXNCLDhCQUE4QixPQUFPLHFDQUFxQyxvQkFBb0IsMkJBQTJCLCtCQUErQiwrQkFBK0IsT0FBTyx5QkFBeUIsa0JBQWtCLG9DQUFvQyx3REFBd0Qsb0JBQW9CLG9CQUFvQixrQkFBa0IscUJBQXFCLDBCQUEwQixrQ0FBa0MsT0FBTyx3QkFBd0IsaUJBQWlCLCtCQUErQixtQkFBbUIscUJBQXFCLGdDQUFnQyw2QkFBNkIsT0FBTyx1QkFBdUIsdUJBQXVCLDJCQUEyQiwrQkFBK0IseUJBQXlCLDJCQUEyQixxR0FBcUcsb0NBQW9DLHFDQUFxQyxtQkFBbUIsT0FBTywrQ0FBK0Msb0JBQW9CLDJCQUEyQixrQkFBa0Isb0NBQW9DLDJCQUEyQiwyREFBMkQsbURBQW1ELCtCQUErQixPQUFPLDhCQUE4QixvQkFBb0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsMEJBQTBCLE9BQU8sNkJBQTZCLHFCQUFxQixvQkFBb0Isa0JBQWtCLHFCQUFxQiwwQkFBMEIsT0FBTyxvQ0FBb0MscUJBQXFCLE9BQU8sb0NBQW9DLGdEQUFnRCxPQUFPLG1DQUFtQyxtQkFBbUIsT0FBTyxpREFBaUQscUJBQXFCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLDRCQUE0QiwyQkFBMkIscURBQXFELHNEQUFzRCwrQkFBK0IsbUJBQW1CLE9BQU8sdUJBQXVCLDhCQUE4QixPQUFPLDhCQUE4Qiw2QkFBNkIsT0FBTyxrQkFBa0IscUJBQXFCLDBCQUEwQiwyQkFBMkIsK0JBQStCLE9BQU8sd0JBQXdCLG9EQUFvRCw0REFBNEQsT0FBTyxzQkFBc0IscUJBQXFCLG9CQUFvQixrQ0FBa0Msc0NBQXNDLHFCQUFxQixxQkFBcUIsMkJBQTJCLCtCQUErQiwyQkFBMkIsT0FBTyw4QkFBOEIsc0JBQXNCLHFEQUFxRCw0REFBNEQsT0FBTywwQkFBMEIsd0JBQXdCLCtCQUErQixPQUFPLHdCQUF3QiwwQkFBMEIsb0JBQW9CLHFCQUFxQixPQUFPLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsUUFBUSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLCtCQUErQixvQ0FBb0MseUJBQXlCLG9FQUFvRSxLQUFLLFlBQVkseUJBQXlCLEtBQUssOEJBQThCLHNDQUFzQyx5QkFBeUIseUJBQXlCLG9CQUFvQixtQkFBbUIsK0JBQStCLHNCQUFzQiwrQkFBK0IsMEJBQTBCLGFBQWEsMENBQTBDLGdDQUFnQyxzQkFBc0Isd0JBQXdCLHFDQUFxQyxLQUFLLGtCQUFrQixtQ0FBbUMsc0JBQXNCLCtCQUErQixvQ0FBb0Msa0NBQWtDLDRDQUE0QyxLQUFLLHdCQUF3QiwyQkFBMkIsd0JBQXdCLGFBQWEscUJBQXFCLHlCQUF5Qix3QkFBd0IseUJBQXlCLGFBQWEsdUJBQXVCLDBCQUEwQixhQUFhLDJCQUEyQix3QkFBd0IsNEJBQTRCLEtBQUssc0JBQXNCLHNCQUFzQixtR0FBbUcsc0NBQXNDLHVCQUF1QiwwQkFBMEIsMkNBQTJDLHNDQUFzQywyQkFBMkIscURBQXFELHNCQUFzQixnQ0FBZ0MsMkJBQTJCLHlCQUF5QixTQUFTLGNBQWMsMkNBQTJDLDRDQUE0Qyw2Q0FBNkMsa0VBQWtFLGlFQUFpRSxxRUFBcUUsMENBQTBDLDZDQUE2QywrQkFBK0IseUJBQXlCLHdCQUF3QiwwQkFBMEIsd0RBQXdELG1CQUFtQixrQkFBa0IseUJBQXlCLHFCQUFxQixzQkFBc0IseUJBQXlCLDJCQUEyQix3QkFBd0IsbUJBQW1CLDRCQUE0QixvQkFBb0Isb0tBQW9LLG1RQUFtUSxPQUFPLHNCQUFzQiw4QkFBOEIsT0FBTyxxQ0FBcUMsb0JBQW9CLDJCQUEyQiwrQkFBK0IsK0JBQStCLE9BQU8seUJBQXlCLGtCQUFrQixvQ0FBb0Msd0RBQXdELG9CQUFvQixvQkFBb0Isa0JBQWtCLHFCQUFxQiwwQkFBMEIsa0NBQWtDLE9BQU8sd0JBQXdCLGlCQUFpQiwrQkFBK0IsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsNkJBQTZCLE9BQU8sdUJBQXVCLHVCQUF1QiwyQkFBMkIsK0JBQStCLHlCQUF5QiwyQkFBMkIscUdBQXFHLG9DQUFvQyxxQ0FBcUMsbUJBQW1CLE9BQU8sK0NBQStDLG9CQUFvQiwyQkFBMkIsa0JBQWtCLG9DQUFvQywyQkFBMkIsMkRBQTJELG1EQUFtRCwrQkFBK0IsT0FBTyw4QkFBOEIsb0JBQW9CLG9CQUFvQixxQkFBcUIsc0JBQXNCLDBCQUEwQixPQUFPLDZCQUE2QixxQkFBcUIsb0JBQW9CLGtCQUFrQixxQkFBcUIsMEJBQTBCLE9BQU8sb0NBQW9DLHFCQUFxQixPQUFPLG9DQUFvQyxnREFBZ0QsT0FBTyxtQ0FBbUMsbUJBQW1CLE9BQU8saURBQWlELHFCQUFxQixzQkFBc0IsK0JBQStCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLHFEQUFxRCxzREFBc0QsK0JBQStCLG1CQUFtQixPQUFPLHVCQUF1Qiw4QkFBOEIsT0FBTyw4QkFBOEIsNkJBQTZCLE9BQU8sa0JBQWtCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLCtCQUErQixPQUFPLHdCQUF3QixvREFBb0QsNERBQTRELE9BQU8sc0JBQXNCLHFCQUFxQixvQkFBb0Isa0NBQWtDLHNDQUFzQyxxQkFBcUIscUJBQXFCLDJCQUEyQiwrQkFBK0IsMkJBQTJCLE9BQU8sOEJBQThCLHNCQUFzQixxREFBcUQsNERBQTRELE9BQU8sMEJBQTBCLHdCQUF3QiwrQkFBK0IsT0FBTyx3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsT0FBTyxtQkFBbUI7QUFDOThjO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCeEI7QUFDaUM7QUFDSDtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDdkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUMvQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM2QjtBQUNEO0FBQ1I7QUFDVTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFVO0FBQ1Y7QUFDQTtBQUNBLDREQUFRO0FBQ1IsbUVBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVQYWdlLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2NvbXBvbmVudHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXJUaXRsZSB7XFxyXFxuICAgYm9yZGVyLWJvdHRvbTogNHB4IGJsYWNrIHNvbGlkO1xcclxcbiAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgIGhlaWdodDogNDBweDtcXHJcXG4gICBcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2VUaXRsZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgcGFkZGluZzogMzBweCAyMDBweCAyMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggYWxpY2VibHVlIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZWJhciBwIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0SXRlbXMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIjtcXHJcXG4gICAgICAgIC8qIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7ICovXFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zMjVmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMmZyO1xcclxcbiAgICBcXHJcXG4gIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYnV0dG9uIGNzcyAqL1xcclxcblxcclxcblxcclxcbi5idXR0b24tYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTA6ICM4ZDQ5ZmQ7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTUwOiAjN2Y1NmYzO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC0xMDA6ICM1NjkxZjM7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy10b3A6IHJnYmEoMjMzLCAyMDksIDI1NSwgMC4yKTtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcC1sZzogcmdiYSg5LCAxMiwgNjAsIDAuMSk7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy1ib3R0b206IHJnYmEoMTM3LCAyMjIsIDI0NiwgMC4zKTtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24tc2hpbmUtdG9wOiAjZTlkMWZmO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1zaGluZS1ib3R0b206ICNhZGZmZjk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMC41cHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMCkgMCUsIHZhcigtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC01MCkgNTAlLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMTAwKSAxMDAlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoOSwgMTQsIDYwLCAwLjE1KSwgMHB4IDJweCA4cHggcmdiYSg5LCAxMiwgNjAsIDAuMTUpLCAwcHggMXB4IDNweCB2YXIoLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcC1sZyksIGluc2V0IDBweCAxcHggMXB4IHZhcigtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctdG9wKSwgaW5zZXQgMHB4IC0xcHggM3B4IHZhcigtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctYm90dG9tKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46YmVmb3JlLCAuYnRuOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFuY3ktYnV0dG9uLXNoaW5lLXRvcCk7XFxyXFxuICAgIHdpZHRoOiA5NnB4O1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgdG9wOiAtM3B4O1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuOmFmdGVyIHtcXHJcXG4gICAgaW5zZXQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS10b3ApLCB0cmFuc3BhcmVudCA4cHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC02cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjpiZWZvcmUsIC5idG4gc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS1ib3R0b20pO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjpiZWZvcmUge1xcclxcbiAgICB3aWR0aDogOTJweDtcXHJcXG4gICAgaGVpZ2h0OiA4cHg7XFxyXFxuICAgIGJvdHRvbTogLTRweDtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAxMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmJlZm9yZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjI1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIGZvcm0gc3R5bGluZyAqL1xcclxcblxcclxcbiAgLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMDM0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC5mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xOTIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTczLCAxNzMsIDAuMjMzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzcpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9ybSBsYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwLjZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9qZWN0TmFtZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUlBO0dBQ0csOEJBQThCO0dBQzlCLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsWUFBWTs7O0FBR2Y7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCOztBQUVyQjs7Ozs7OztBQU9BO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lB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O0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxtREFBbUQ7RUFDckQ7OztFQUdBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtFQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXJUaXRsZSB7XFxyXFxuICAgYm9yZGVyLWJvdHRvbTogNHB4IGJsYWNrIHNvbGlkO1xcclxcbiAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgIGhlaWdodDogNDBweDtcXHJcXG4gICBcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2VUaXRsZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgcGFkZGluZzogMzBweCAyMDBweCAyMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggYWxpY2VibHVlIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZWJhciBwIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0SXRlbXMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIjtcXHJcXG4gICAgICAgIC8qIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7ICovXFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zMjVmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMmZyO1xcclxcbiAgICBcXHJcXG4gIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYnV0dG9uIGNzcyAqL1xcclxcblxcclxcblxcclxcbi5idXR0b24tYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTA6ICM4ZDQ5ZmQ7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWdyYWRpZW50LTUwOiAjN2Y1NmYzO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC0xMDA6ICM1NjkxZjM7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy10b3A6IHJnYmEoMjMzLCAyMDksIDI1NSwgMC4yKTtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcC1sZzogcmdiYSg5LCAxMiwgNjAsIDAuMSk7XFxyXFxuICAgIC0tZmFuY3ktYnV0dG9uLWlubmVyLXNoYWRvdy1ib3R0b206IHJnYmEoMTM3LCAyMjIsIDI0NiwgMC4zKTtcXHJcXG4gICAgLS1mYW5jeS1idXR0b24tc2hpbmUtdG9wOiAjZTlkMWZmO1xcclxcbiAgICAtLWZhbmN5LWJ1dHRvbi1zaGluZS1ib3R0b206ICNhZGZmZjk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMC41cHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMCkgMCUsIHZhcigtLWZhbmN5LWJ1dHRvbi1ncmFkaWVudC01MCkgNTAlLCB2YXIoLS1mYW5jeS1idXR0b24tZ3JhZGllbnQtMTAwKSAxMDAlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoOSwgMTQsIDYwLCAwLjE1KSwgMHB4IDJweCA4cHggcmdiYSg5LCAxMiwgNjAsIDAuMTUpLCAwcHggMXB4IDNweCB2YXIoLS1mYW5jeS1idXR0b24taW5uZXItc2hhZG93LXRvcC1sZyksIGluc2V0IDBweCAxcHggMXB4IHZhcigtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctdG9wKSwgaW5zZXQgMHB4IC0xcHggM3B4IHZhcigtLWZhbmN5LWJ1dHRvbi1pbm5lci1zaGFkb3ctYm90dG9tKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46YmVmb3JlLCAuYnRuOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFuY3ktYnV0dG9uLXNoaW5lLXRvcCk7XFxyXFxuICAgIHdpZHRoOiA5NnB4O1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgdG9wOiAtM3B4O1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuOmFmdGVyIHtcXHJcXG4gICAgaW5zZXQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS10b3ApLCB0cmFuc3BhcmVudCA4cHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC02cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjpiZWZvcmUsIC5idG4gc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhbmN5LWJ1dHRvbi1zaGluZS1ib3R0b20pO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjpiZWZvcmUge1xcclxcbiAgICB3aWR0aDogOTJweDtcXHJcXG4gICAgaGVpZ2h0OiA4cHg7XFxyXFxuICAgIGJvdHRvbTogLTRweDtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4gc3BhbjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAxMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmJlZm9yZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjI1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciBzcGFuOmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIGZvcm0gc3R5bGluZyAqL1xcclxcblxcclxcbiAgLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMDM0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC5mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xOTIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgbGluZWFyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTczLCAxNzMsIDAuMjMzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzcpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgZm9ybSBsYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwLjZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwcm9qZWN0TmFtZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuXHJcbmNvbnN0IGFkZEJ1dHRvbiA9IChuYW1lLCBkaXYpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIC8vIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZW1lbnUnKTtcclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24tYm94Jyk7XHJcblxyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSAnQWRkICcgKyBuYW1lO1xyXG5cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSArICctYnV0dG9uJyk7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRCdXR0b247IiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBhZGRCdXR0b24gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB0YXNrRm9ybSBmcm9tIFwiLi9mb3JtXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xyXG4gICAgLy9jb2RlIGhlcmUgZm9yIHRoZSBob21lIHBhZ2UgXHJcbiAgICAvLypjcmVhdGUgZWxlbWVudHNcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgdGl0bGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGluYm94TGlzdFVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRvZG9MaXN0dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAvL2FkZCBpZFxyXG4gICAgbWFpbkNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vKiBhZGQgZGV0YWlsIHRvIGVsZW1lbnRzIFxyXG4gICAgdGl0bGVIMy5pbm5lckhUTUwgPSAnVG9kbyBBcHAnO1xyXG4gICAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IGluQm94SXRlbXMgPSBbJ0hvbWUnXTtcclxuICAgIGluQm94SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gaXRlbTtcclxuICAgICAgICBpbmJveExpc3RVTC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAvLypIYW5kbGUgYWRkaW5nIHByb2plY3RzIFxyXG4gICAgLy8gY29uc3QgcHJvamVjdEl0ZW1zID0gWydUZXN0J107XHJcbiAgICAvLyBwcm9qZWN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIC8vICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgLy8gICAgIGxpLmlubmVySFRNTCA9IGl0ZW07XHJcbiAgICAvLyAgICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vKmFkZCBjbGFzc2VzXHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpO1xyXG4gICAgcGFnZVRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3BhZ2VUaXRsZURpdicpO1xyXG4gICAgLy8gaW50cm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdwYWdlVGl0bGUnKTtcclxuICAgIC8vIHRpdGxlSDMuY2xhc3NMaXN0LmFkZCgncGFnZVRpdGxlJyk7XHJcbiAgICBzaWRlYmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgIHNpZGViYXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlbWVudScpO1xyXG4gICAgbWFpbkNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnQnKTtcclxuICAgIHByb2plY3RVTC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbXMnKTtcclxuICAgIHByb2plY3RVTC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzJyk7XHJcbiAgICB0b2RvTGlzdHREaXYuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tbGlzdCcpO1xyXG4gICBcclxuICAgIC8vKkFwcGVuZCBzaWRlIGJhciBhbmQgbWFpbiBjb250ZW50IHRvIGNvbnRlbnQgZGl2XHJcbiAgICAvLyBnb2luZyB0byB1c2UgYSBncmlkIHRvIGNyZWF0ZSB0aGUgbWVudSBJIHdhbnRcclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXJEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudERpdik7XHJcbiAgICAvLyB0aXRsZSB0aXRsZSB0aXRsZVxyXG4gICAgLy8gc2lkZWJhciBtYWluIG1haW5cclxuICAgIC8vc2lkZWJhciBtYWluIG1haW4gXHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwYWdlVGl0bGVEaXYpO1xyXG4gICAgcGFnZVRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSDMpO1xyXG4gICAgXHJcbiAgICBhZGRCdXR0b24oJ1Rhc2snLCBzaWRlYmFyRGl2KTtcclxuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoaW5ib3hMaXN0VUwpO1xyXG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0VUwpO1xyXG4gICAgYWRkQnV0dG9uKCdQcm9qZWN0Jywgc2lkZWJhckRpdik7XHJcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvTGlzdHREaXYpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG5cclxuICAgIC8vIHRhc2tGb3JtKCk7XHJcbiAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Gb3JtJyk7XHJcbiAgICAvLyBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTsiLCJcclxuY29uc3QgdGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XHJcbiAgICBcclxuXHJcbiAgICAvL2NyZWF0ZSBsYWJlbHNcclxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblxyXG4gICAgdGFza0xhYmVsLmlubmVyVGV4dCA9ICdUYXNrJztcclxuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGUnO1xyXG4gICAgcHJvamVjdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCBOYW1lJztcclxuICAgIFxyXG4gICAgLy9jcmVhdGUgaW5wdXRcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCAnZGVzY3JpcHRpb24nKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlBsZWFzZSBlbnRlciBhIHRhc2tcIik7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvL2NyZWF0ZSAgZHVlIGRhdGVcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZWRhdGUnKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBwcm9qZWN0IGZlaWxkXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy9jcmVhdGUgYnV0dG9uXHJcblxyXG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRUYXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgICBzdWJtaXRUYXNrLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xyXG4gICAgc3VibWl0VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xyXG5cclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9Gb3JtJyk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGFzayk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tGb3JtO1xyXG5cclxuIiwiY29uc3QgcHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZW1lbnUnKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIHByb2plY3ROYW1lRm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XHJcbiAgICBwcm9qZWN0TmFtZUZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Zm9ybScpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1uYW1lJyk7XHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJyk7XHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCBcIlwiKTtcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwicHJvamVjdE5hbWVcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgICBzdWJtaXRQcm9qZWN0TmFtZS5pbm5lclRleHQgPSAnU3VibWl0JztcclxuICAgIHN1Ym1pdFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LXByb2plY3QnKTtcclxuXHJcblxyXG4gICAgcHJvamVjdE5hbWVGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xyXG4gICAgcHJvamVjdE5hbWVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3ROYW1lKTtcclxuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRm9ybSk7XHJcblxyXG4gICAgcHJvamVjdE5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGb3JtOyIsIi8vKlByb2plY3RzIHdpbGwgYWN0IGFzIGxpc3QgXHJcbmNvbnN0IHByb2plY3RzID0gKG5hbWUpPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcclxuICAgIFxyXG4gICAgLy9BZGRpbmcgdGFzayB0byBwcm9qZWN0XHJcbiAgICBjb25zdCBhZGRUYXNrID0gKHRvZG8pID0+IHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtuYW1lOm5hbWUsIGFkZFRhc2ssIHByb2plY3RMaXN0IH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vKiBUT0RPIE9iamVjdFxyXG5jb25zdCB0b2RvID0gKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0KSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4geyBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbiwgZHVlRGF0ZTpkdWVEYXRlLCBwcm9qZWN0OnByb2plY3QgfVxyXG59XHJcblxyXG5jb25zdCB0b2RvMSA9IHRvZG8oJ2RvIGxhdW5kcnkgJywgJ3RvZGF5Jyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCAgeyB0b2RvLCAgcHJvamVjdHMgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7dG9kbywgcHJvamVjdHMgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kbyc7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGVQYWdlJztcclxuaW1wb3J0IHRhc2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuaW1wb3J0IHByb2plY3RGb3JtIGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0Rm9ybSc7XHJcblxyXG5cclxuXHJcbi8vIVV0aWxpdHkgRnVuY3Rpb25zIFxyXG4gY29uc3QgY2xlYXJGb3JtID0gKGZvcm0pID0+IGZvcm0ucmVzZXQoKTtcclxuIGNvbnN0IHNob3dGb3JtID0gKGZvcm0pID0+IGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuIGNvbnN0IGhpZGVGb3JtID0gKGZvcm0pID0+IGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuIGNvbnN0IGRpc2FibGVCdXR0b24gPSAoYnV0dG9uKSA9PiBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gY29uc3QgZW5hYmxlQnV0dG9uID0gKGJ1dHRvbikgPT4gYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuXHJcbiAvLyogYWRkaW5nIHN1Ym1pc3Npb25zIHRvIGxpc3RcclxuXHJcblxyXG4gY29uc3QgYWRkUHJvamVjdHRvVUkgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1zID0gWydUZXN0J107XHJcbiAgICBjb25zdCBwcm9qZWN0TWVudUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RNZW51TGlzdCk7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgcHJvamVjdEl0ZW1zLnB1c2gobGkpO1xyXG4gICAgcHJvamVjdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgcHJvamVjdE1lbnVMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG5jcmVhdGVQYWdlKCk7XHJcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGFzay1idXR0b24nKTtcclxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9qZWN0LWJ1dHRvbicpO1xyXG50YXNrRm9ybSgpO1xyXG5wcm9qZWN0Rm9ybSgpO1xyXG5cclxuXHJcbi8vIVZpZXdzXHJcbmNvbnN0IHRhc2tzID0gW107XHJcbi8vIVdvcmsgb24gZnVuY3Rpb24gLS0tQXJyYXkgcmV0dXJucyBleHRyYSBibGFuayBzdWJtaXNzaW9uIGFmdGVyIHR3byBlbnRyaWVzIFxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAvLyBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgXHJcbiAgIFxyXG4gICAgdGFza3MucHVzaChpdGVtKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGFza3NbaV0gPT09ICcgJykge1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gdGFza3NbaV0uZGVzY3JpcHRpb24gXHJcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0ZXN0VG9kbyA9IHRvZG8oJ1Rlc3QnLCAnMTAvMTAvMjAyMCcsICdURVNUSU5HJyk7XHJcbmRpc3BsYXlUYXNrcyh0ZXN0VG9kbyk7XHJcblxyXG5cclxuXHJcbi8vKiBBZGQgVGFzayBidXR0b25cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICBcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKTtcclxuICAgIHNob3dGb3JtKGZvcm0pO1xyXG4gICAgZGlzYWJsZUJ1dHRvbihhZGRUYXNrKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZWRhdGUnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRvZG8oZGVzY3JpcHRpb24udmFsdWUsZHVlRGF0ZS52YWx1ZSwgcHJvamVjdE5hbWUudmFsdWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXlUYXNrcyhpdGVtKTtcclxuICAgICBcclxuICAgICAgICBoaWRlRm9ybShmb3JtKTtcclxuICAgICAgICBjbGVhckZvcm0oZm9ybSk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9uKGFkZFRhc2spO1xyXG4gICAgICAgIC8vIHNlbGVjdCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUsIHByb2plY3QgbmFtZVxyXG4gICAgICAgIC8vIGRpc3BsYXkgdG9kbyBieSBhcHBlbmRpbmcgdGhlIHZhbHVlcyB0byBhbiBhcnJheSBcclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59KTtcclxuXHJcbi8vKkFkZCBQcm9qZWN0IGJ1dHRvblxyXG5cclxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rmb3JtJyk7XHJcbiAgICBzaG93Rm9ybShwcm9qZWN0TmFtZWZvcm0pO1xyXG4gICAgZGlzYWJsZUJ1dHRvbihhZGRQcm9qZWN0KTtcclxuXHJcbiAgICAvLypTdWJtaXQgXHJcbiAgICBwcm9qZWN0TmFtZWZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKTtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdHMobmFtZS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XHJcbiAgICAgICAgYWRkUHJvamVjdHRvVUkobmV3UHJvamVjdC5uYW1lKTtcclxuXHJcbiAgICAgICAgY2xlYXJGb3JtKHByb2plY3ROYW1lZm9ybSk7XHJcbiAgICAgICAgaGlkZUZvcm0ocHJvamVjdE5hbWVmb3JtKTtcclxuICAgICAgICBlbmFibGVCdXR0b24oYWRkUHJvamVjdCk7XHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG5cclxuICBcclxufSk7XHJcblxyXG5cclxuLy9Qcm9qZWN0cyBjYW4gYmUgZGlzcGxheWVkIGJ5IHVzaW5nIGZpbHRlcnMgb24gYXJyYXkgdG8gbWF0Y2ggcHJvamVjdCBuYW1lIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==