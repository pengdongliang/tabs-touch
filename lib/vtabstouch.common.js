module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "135e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e2dc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("12ea98d1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "386d":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("214f")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "431c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_touch_vue_vue_type_style_index_0_id_d9d36ff0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b8c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_touch_vue_vue_type_style_index_0_id_d9d36ff0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_touch_vue_vue_type_style_index_0_id_d9d36ff0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_touch_vue_vue_type_style_index_0_id_d9d36ff0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "49ab":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(4),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/benzhao/Sites/@xunlei/vue-lazy-component/src/VueLazyComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueLazyComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'VueLazyComponent',

  props: {
    timeout: {
      type: Number
    },
    tagName: {
      type: String,
      default: 'div'
    },
    viewport: {
      type: typeof window !== 'undefined' ? window.HTMLElement : Object,
      default: function _default() {
        return null;
      }
    },
    threshold: {
      type: String,
      default: '0px'
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    maxWaitingTime: {
      type: Number,
      default: 50
    }
  },

  data: function data() {
    return {
      isInit: false,
      timer: null,
      io: null,
      loading: false
    };
  },
  created: function created() {
    var _this = this;

    // 如果指定timeout则无论可见与否都是在timeout之后初始化
    if (this.timeout) {
      this.timer = setTimeout(function () {
        _this.init();
      }, this.timeout);
    }
  },
  mounted: function mounted() {
    if (!this.timeout) {
      // 根据滚动方向来构造视口外边距，用于提前加载
      var rootMargin = void 0;
      switch (this.direction) {
        case 'vertical':
          rootMargin = this.threshold + ' 0px';
          break;
        case 'horizontal':
          rootMargin = '0px ' + this.threshold;
          break;
      }

      // 观察视口与组件容器的交叉情况
      this.io = new window.IntersectionObserver(this.intersectionHandler, {
        rootMargin: rootMargin,
        root: this.viewport,
        threshold: [0, Number.MIN_VALUE, 0.01]
      });
      this.io.observe(this.$el);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // 在组件销毁前取消观察
    if (this.io) {
      this.io.unobserve(this.$el);
    }
  },


  methods: {
    // 交叉情况变化处理函数
    intersectionHandler: function intersectionHandler(entries) {
      if (
      // 正在交叉
      entries[0].isIntersecting ||
      // 交叉率大于0
      entries[0].intersectionRatio) {
        this.init();
        this.io.unobserve(this.$el);
      }
    },


    // 处理组件和骨架组件的切换
    init: function init() {
      var _this2 = this;

      // 此时说明骨架组件即将被切换
      this.$emit('beforeInit');
      this.$emit('before-init');

      // 此时可以准备加载懒加载组件的资源
      this.loading = true;

      // 由于函数会在主线程中执行，加载懒加载组件非常耗时，容易卡顿
      // 所以在requestAnimationFrame回调中延后执行
      this.requestAnimationFrame(function () {
        _this2.isInit = true;
        _this2.$emit('init');
      });
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      var _this3 = this;

      // 防止等待太久没有执行回调
      // 设置最大等待时间
      setTimeout(function () {
        if (_this3.isInit) return;
        callback();
      }, this.maxWaitingTime);

      // 兼容不支持requestAnimationFrame 的浏览器
      return (window.requestAnimationFrame || function (callback) {
        return setTimeout(callback, 1000 / 60);
      })(callback);
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  * vue-lazy-component
  * (c) 2017 赵兵
  * @license MIT
  */
var VueLazyComponent = __webpack_require__(0);
var vueLazyComponent = {};

/**
 * Plugin API
 */
vueLazyComponent.install = function (Vue, options) {
  Vue.component(VueLazyComponent.name, VueLazyComponent);
};

vueLazyComponent.component = VueLazyComponent;

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueLazyComponent);
}

module.exports = vueLazyComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "tag": _vm.tagName,
      "name": "lazy-component"
    },
    on: {
      "before-enter": function (el) { return _vm.$emit('before-enter', el); },
      "before-leave": function (el) { return _vm.$emit('before-leave', el); },
      "after-enter": function (el) { return _vm.$emit('after-enter', el); },
      "after-leave": function (el) { return _vm.$emit('after-leave', el); }
    }
  }, [(_vm.isInit) ? _c('div', {
    key: "component"
  }, [_vm._t("default", null, {
    loading: _vm.loading
  })], 2) : (_vm.$slots.skeleton) ? _c('div', {
    key: "skeleton"
  }, [_vm._t("skeleton")], 2) : _c('div', {
    key: "loading"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {}

/***/ })
/******/ ]);
});

/***/ }),

/***/ "4bc7":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.flex{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.flex_v{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column\n}\n.flex_1{-webkit-box-flex:1;-ms-flex:1;flex:1\n}\n.flex_align_center{-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.flex_pack_center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.flex_pack_right{-webkit-box-pack:flex-end;-ms-flex-pack:flex-end;justify-content:flex-end\n}\n.flex_pack_justify_between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between\n}\n.flex_pack_justify_around{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-around\n}\n.flex_nowarp{-ms-flex-wrap:nowrap;-o-flex-wrap:nowrap;flex-wrap:nowrap\n}\n*{padding:0;margin:0\n}\n.overflow_boxsizing{overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.transition_ease_in_out_fast{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out\n}\n.line_over_1{overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n}", ""]);

// exports


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_style_index_0_id_96cfbcda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("135e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_style_index_0_id_96cfbcda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_style_index_0_id_96cfbcda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_vue_vue_type_style_index_0_id_96cfbcda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7b8c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d497");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3ce7ee28", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9af3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_down.7c3fcc53.svg";

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d497":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports
exports.i(__webpack_require__("4bc7"), "");

// module
exports.push([module.i, "\n.tabBox .bd ul[data-v-d9d36ff0]{padding:1.333vw\n}\n.tabBox .bd ul li[data-v-d9d36ff0]{border-bottom:1px dotted #ddd\n}\n.tabBox .bd li a[data-v-d9d36ff0]{-webkit-tap-highlight-color:rgba(0,0,0,0)\n}\n.readMore[data-v-d9d36ff0]{display:block;height:4vw;line-height:4vw;margin:1.333vw auto 2.667vw auto;text-align:center;text-decoration:underline\n}\n.tab_container[data-v-d9d36ff0]{color:#333;position:relative;z-index:8\n}\n.nav_tabs_container[data-v-d9d36ff0]{width:100%;height:100%;overflow:hidden;position:relative;border-bottom:1px solid #eee\n}\n.nav_tabs_container>div[data-v-d9d36ff0]{position:absolute;left:0;top:0;right:0;bottom:0;overflow-x:auto;overflow-y:hidden;white-space:nowrap;height:120%\n}\n.nav_tabs_item[data-v-d9d36ff0]{display:inline-block;height:100%;font-size:3.733vw\n}\n.nav_tabs_item>div[data-v-d9d36ff0]{width:100%;height:80%\n}\n.nav_tabs_line[data-v-d9d36ff0]{position:absolute;left:0;top:75%;z-index:9\n}\n.vux-tab-wrap[data-v-d9d36ff0]{padding-top:11.733vw\n}\n.channel_container[data-v-d9d36ff0]{position:absolute;right:0;top:0;width:100%;z-index:9999\n}\n.channel_box[data-v-d9d36ff0],.channel_container[data-v-d9d36ff0]{background-color:#fff;height:11.733vw\n}\n.channel_box[data-v-d9d36ff0]{width:11.733vw\n}\n.channel_opacity[data-v-d9d36ff0]{background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff)\n}\n.vux-x-icon-ios-arrow-down[data-v-d9d36ff0]{fill:#999;-webkit-transition:all .3s ease-in;transition:all .3s ease-in\n}\n.tab_right_btn[data-v-d9d36ff0]{background-color:#fff;position:absolute;right:0;top:0;width:100%;height:11.733vw;z-index:9999;background-color:transparent;width:23.467vw\n}\n.ios-arrow-isUp[data-v-d9d36ff0]{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.more_channel_list_container[data-v-d9d36ff0]{background-color:rgba(0,0,0,.5);width:100%;height:100vh;position:relative;z-index:99\n}\n.more_channel_list_box[data-v-d9d36ff0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;background-color:#fff;padding:0 2.667vw 2.667vw;position:relative;overflow:hidden;-webkit-transition:all .1s ease-in;transition:all .1s ease-in\n}\n.channel_item[data-v-d9d36ff0]{font-size:3.467vw;color:grey;padding:1.333vw .533vw;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:1.333vw;border:1px solid #e3e4e3;width:20%;text-align:center;margin:2.667vw 2.5% 0\n}\n.move-enter[data-v-d9d36ff0],.move-leave-to[data-v-d9d36ff0]{top:-26.667vw\n}\n.move-enter-to[data-v-d9d36ff0],.move-leave[data-v-d9d36ff0]{top:0\n}", ""]);

// exports


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e2dc":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports
exports.i(__webpack_require__("4bc7"), "");

// module
exports.push([module.i, "\n.nav_tabs_container[data-v-96cfbcda]{width:100%;height:5.333vw;overflow:hidden;position:relative\n}\n.nav_tabs_container>div[data-v-96cfbcda]{position:absolute;left:0;top:0;right:0;bottom:0;overflow-x:auto;overflow-y:hidden;white-space:nowrap;height:6.667vw\n}\n.nav_tabs_item[data-v-96cfbcda]{display:inline-block;background-color:#ff0;height:5.333vw\n}\n.nav_tabs_item>div[data-v-96cfbcda]{width:100%;height:4.8vw\n}\n.nav_tabs_line[data-v-96cfbcda]{background-color:red;width:5.333vw;height:.533vw;position:absolute;left:0;bottom:1.333vw;border-radius:.533vw;z-index:9\n}", ""]);

// exports


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"8185b33e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/tabs-touch/src/tabs-touch.vue?vue&type=template&id=d9d36ff0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.navMsg.length)?_c('div',{staticClass:"tabBox flex_1 flex flex_v",staticStyle:{"height":"100%"},attrs:{"id":"tabBox1"}},[_c('div',{staticClass:"tab_container",style:('height:' + _vm.tabHeight + 'px;' + (_vm.scrollFixed ? 'position: fixed; top: 0; left: 0; width: 100%;' : ''))},[_c('div',{staticClass:"nav_tabs_container"},[_c('div',{ref:"nav_box",staticClass:"nav_box"},[_vm._l((_vm.navMsg),function(item,index){return _c('div',{key:item,staticClass:"nav_tabs_item vux-center",style:((_vm.navMsg.length > 2 && _vm.showRightMore && index === (_vm.navMsg.length - 1)? 'margin-right:' + _vm.navItemWidth + 'px;' : '') + (_vm.navIndex === index ? 'color: red;' : 'color: #333;') + 'width:' + _vm.navItemWidth + 'px;' + _vm.navItemCssText),on:{"click":function($event){_vm.navIndex = index}}},[_c('div',{staticClass:"flex flex_pack_center flex_align_center"},[_vm._v(_vm._s(item))])])}),_c('div',{staticClass:"nav_tabs_line transition_ease_in_out_fast",style:('left:' + ((_vm.navItemWidth - _vm.navLineWidth) / 2 + (_vm.navIndex * _vm.navItemWidth)) + 'px; width: ' + _vm.navLineWidth + 'px;' + _vm.navLineCssText)})],2)]),(_vm.showMoreChannel)?_c('div',{staticClass:"channel_container flex flex_align_center flex_pack_justify_between padding16 overflow_boxsizing font_24"},[_c('div',[_vm._v("全部频道")])]):_vm._e(),(_vm.showRightMore)?_c('div',{staticClass:"flex tab_right_btn"},[_c('div',{staticClass:"channel_box channel_opacity"}),_c('div',{staticClass:"channel_box flex flex_align_center flex_pack_center",staticStyle:{"position":"relative","z-index":"99999"},on:{"click":_vm.changeChannelState}},[_c('div',{class:[_vm.showMoreChannel ? 'ios-arrow-isUp' : '']},[_c('img',{attrs:{"src":__webpack_require__("9af3"),"alt":""}})])])]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMoreChannel),expression:"showMoreChannel"}],staticClass:"more_channel_list_container",on:{"touchmove":function($event){$event.preventDefault();},"click":_vm.closeChannel}},[_c('transition',{attrs:{"name":"move","mode":"out-in","appear":true}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMoreChannel),expression:"showMoreChannel"}],staticClass:"more_channel_list_box"},_vm._l((_vm.navMsg),function(item,index){return _c('div',{key:index,staticClass:"channel_item line_over_1",style:({'border-color': _vm.navIndex === index ? 'rgb(252, 55, 140)' : '#e3e4e3'}),on:{"click":function($event){_vm.changeNavSlide(index)}}},[_vm._v("\n              "+_vm._s(item)+"\n            ")])}))])],1)]),_c('div',{staticClass:"tempWrap flex_1",style:('overflow:hidden; overflow-y: auto; position:relative;' + (_vm.scrollFixed ? 'padding-top:' + _vm.tabHeight +'px;' : ''))},[_c('div',{staticClass:"bd",staticStyle:{"height":"100%"},attrs:{"id":"tabBox1-bd"}},[_c('div',{staticClass:"con"},[_vm._t("indexpage")],2),_vm._l((_vm.navMsg),function(nodeItem,nodeIndex){return (nodeIndex > 0)?_c('div',{key:nodeIndex,staticClass:"con"},[_c('vue-lazy-component',{staticClass:"vue_lazy_container",staticStyle:{"height":"100%"},attrs:{"direction":"horizontal","viewport":_vm.$parent.$el}},[_vm._t("default",null,{otherpage:nodeItem})],2)],1):_vm._e()})],2)])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/tabs-touch/src/tabs-touch.vue?vue&type=template&id=d9d36ff0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"8185b33e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/tabs-touch/src/components/tab/tab.vue?vue&type=template&id=96cfbcda&scoped=true&
var tabvue_type_template_id_96cfbcda_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav_tabs_container"},[_c('div',{ref:"nav_box"},[_vm._l((_vm.navMsgList),function(item,index){return _c('div',{key:item,staticClass:"nav_tabs_item",style:({'color': _vm.navIndex === index ? 'red' : '', 'width': _vm.itemWidth + 'px'}),on:{"click":function($event){_vm.navIndex = index}}},[_c('div',{staticClass:"flex flex_pack_center flex_align_center"},[_vm._v(_vm._s(item))])])}),_c('div',{staticClass:"nav_tabs_line transition_ease_in_out_fast",style:({'left': ( (_vm.itemWidth - 40) / 2 ) + (_vm.navIndex * _vm.itemWidth) + 'px'})})],2)])}
var tabvue_type_template_id_96cfbcda_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tabs-touch/src/components/tab/tab.vue?vue&type=template&id=96cfbcda&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/tabs-touch/src/components/tab/tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tabvue_type_script_lang_js_ = ({
  watch: {
    navIndex: function navIndex(newVal, oldVal) {
      this.$refs.nav_box.scrollLeft = this.$refs.nav_box.children[newVal].offsetLeft - (document.body.clientWidth - this.itemWidth) / 2;
    }
  },
  data: function data() {
    return {
      navIndex: 0,
      //当前选中的下标
      itemWidth: 100,
      //tab元素宽度
      navMsgList: ["瓜子", "花生", "西红柿", "苹果", "香蕉", "菠萝", "橘子", "西瓜", "馒头"]
    };
  },
  methods: {}
});
// CONCATENATED MODULE: ./packages/tabs-touch/src/components/tab/tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_tabvue_type_script_lang_js_ = (tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tabs-touch/src/components/tab/tab.vue?vue&type=style&index=0&id=96cfbcda&scoped=true&lang=css&
var tabvue_type_style_index_0_id_96cfbcda_scoped_true_lang_css_ = __webpack_require__("62b6");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/tabs-touch/src/components/tab/tab.vue






/* normalize component */

var component = normalizeComponent(
  tab_tabvue_type_script_lang_js_,
  tabvue_type_template_id_96cfbcda_scoped_true_render,
  tabvue_type_template_id_96cfbcda_scoped_true_staticRenderFns,
  false,
  null,
  "96cfbcda",
  null
  
)

component.options.__file = "tab.vue"
/* harmony default export */ var tab = (component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./packages/tabs-touch/src/utils/TouchSlide.js












var TouchSlide_TouchSlide = function TouchSlide(a) {
  a = a || {};
  var opts = {
    noTouchIndex: a.noTouchIndex || [],
    //规定哪一页不可以滑动切换页面,可以点击切换
    vueObj: a.vueObj || "",
    //vue实例
    vueSlide: a.vueSlide || "",
    //vue调用绑定当前选中的名字 String
    slideCell: a.slideCell || "#touchSlide",
    //运行效果主对象，必须用id！，例如 slideCell:"#touchSlide"
    titCell: a.titCell || ".hd li",
    // 导航对象，当自动分页设为true时为“导航对象包裹层”
    mainCell: a.mainCell || ".bd",
    // 切换对象包裹层
    effect: a.effect || "left",
    // 效果，支持 left、leftLoop
    autoPlay: a.autoPlay || false,
    // 自动播放
    delayTime: a.delayTime || 200,
    // 效果持续时间
    interTime: a.interTime || 2500,
    // 自动运行间隔
    defaultIndex: a.defaultIndex || 0,
    // 默认的当前位置索引。0是第一个； defaultIndex:1 时，相当于从第2个开始执行
    titOnClassName: a.titOnClassName || "on",
    // 当前导航对象添加的className
    autoPage: a.autoPage || false,
    // 自动分页，当为true时titCell为“导航对象包裹层”
    prevCell: a.prevCell || ".prev",
    // 前一页按钮
    nextCell: a.nextCell || ".next",
    // 后一页按钮
    pageStateCell: a.pageStateCell || ".pageState",
    // 分页状态对象，用于显示分页状态，例如：2/3
    pnLoop: a.pnLoop == 'undefined ' ? true : a.pnLoop,
    // 前后按钮点击是否继续执行效果，当为最前/后页是会自动添加“prevStop”/“nextStop”控制样色
    startFun: a.startFun || null,
    // 每次切换效果开始时执行函数，用于处理特殊情况或创建更多效果。用法 satrtFun:function(i,c){ }； 其中i为当前分页，c为总页数
    endFun: a.endFun || null,
    // 每次切换效果结束时执行函数，用于处理特殊情况或创建更多效果。用法 endFun:function(i,c){ }； 其中i为当前分页，c为总页数
    switchLoad: a.switchLoad || null //每次切换效果结束时执行函数，用于处理特殊情况或创建更多效果。用法 endFun:function(i,c){ }； 其中i为当前分页，c为总页数

  };
  var slideCell = document.getElementById(opts.slideCell.replace("#", ""));
  if (!slideCell) return false; //简单模拟jquery选择器

  var obj = function obj(str, parEle) {
    str = str.split(" ");
    var par = [];
    parEle = parEle || document;
    var retn = [parEle];

    for (var i in str) {
      if (str[i].length != 0) par.push(str[i]);
    } //去掉重复空格


    for (var i in par) {
      if (retn.length == 0) return false;
      var _retn = [];

      for (var r in retn) {
        if (par[i][0] == "#") _retn.push(document.getElementById(par[i].replace("#", "")));else if (par[i][0] == ".") {
          var tag = retn[r].getElementsByTagName('*');

          for (var j = 0; j < tag.length; j++) {
            var cln = tag[j].className;

            if (cln && _typeof(cln) !== "object" && cln.search(new RegExp("\\b" + par[i].replace(".", "") + "\\b")) != -1) {
              _retn.push(tag[j]);
            }
          }
        } else {
          var tag = retn[r].getElementsByTagName(par[i]);

          for (var j = 0; j < tag.length; j++) {
            _retn.push(tag[j]);
          }
        }
      }

      retn = _retn;
    }

    return retn.length == 0 || retn[0] == parEle ? false : retn;
  }; // obj E
  // 创建包裹层


  var wrap = function wrap(el, v) {
    var tmp = document.createElement('div');
    tmp.innerHTML = v;
    tmp = tmp.children[0];

    var _el = el.cloneNode(true);

    tmp.appendChild(_el);
    el.parentNode.replaceChild(tmp, el);
    conBox = _el; // 重置conBox

    return tmp;
  }; // 获取样色数值


  var getStyleVal = function getStyleVal(el, attr) {
    var v = 0;

    if (el.currentStyle) {
      v = el.currentStyle[attr];
    } else {
      v = getComputedStyle(el, false)[attr];
    }

    return parseInt(v.replace("px", ""));
  }; // class处理


  var addClass = function addClass(ele, className) {
    if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1) return;
    ele.className += (ele.className ? " " : "") + className;
  };

  var removeClass = function removeClass(ele, className) {
    if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1) return;
    ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
  }; //全局对象


  var effect = opts.effect;
  var prevBtn = obj(opts.prevCell, slideCell)[0];
  var nextBtn = obj(opts.nextCell, slideCell)[0];
  var pageState = obj(opts.pageStateCell)[0];
  var conBox = obj(opts.mainCell, slideCell)[0]; //内容元素父层对象

  if (!conBox) return false;
  var conBoxSize = conBox.children.length;
  var navObj = obj(opts.titCell, slideCell); //导航子元素结合

  var navObjSize = navObj ? navObj.length : conBoxSize;
  var sLoad = opts.switchLoad;
  /*字符串转换*/

  var index = parseInt(opts.defaultIndex);
  var delayTime = parseInt(opts.delayTime);
  var interTime = parseInt(opts.interTime);
  var autoPlay = opts.autoPlay == "false" || opts.autoPlay == false ? false : true;
  var autoPage = opts.autoPage == "false" || opts.autoPage == false ? false : true;
  var loop = opts.pnLoop == "false" || opts.pnLoop == false ? false : true;
  var oldIndex = index;
  var inter = null; // autoPlay的setInterval

  var timeout = null; // leftLoop的setTimeout

  var endTimeout = null; //translate的setTimeout

  var startX = 0;
  var startY = 0;
  var distX = 0;
  var distY = 0;
  var dist = 0; //手指滑动距离

  var isTouchPad = /hp-tablet/gi.test(navigator.appVersion);
  var hasTouch = 'ontouchstart' in window && !isTouchPad;
  var touchStart = hasTouch ? 'touchstart' : 'mousedown'; //var touchMove = hasTouch ? 'touchmove' : 'mousemove';

  var touchMove = hasTouch ? 'touchmove' : '';
  var touchEnd = hasTouch ? 'touchend' : 'mouseup';
  var slideH = 0;
  var slideW = conBox.parentNode.clientWidth; // mainCell滑动距离

  var twCell;
  var scrollY;
  var tempSize = conBoxSize; //处理分页

  if (navObjSize == 0) navObjSize = conBoxSize;

  if (autoPage) {
    navObjSize = conBoxSize;
    navObj = navObj[0];
    navObj.innerHTML = "";
    var str = "";

    if (opts.autoPage == true || opts.autoPage == "true") {
      for (var i = 0; i < navObjSize; i++) {
        str += "<li>" + (i + 1) + "</li>";
      }
    } else {
      for (var i = 0; i < navObjSize; i++) {
        str += opts.autoPage.replace("$", i + 1);
      }
    }

    navObj.innerHTML = str;
    navObj = navObj.children; //重置navObj
  }

  if (effect == "leftLoop") {
    tempSize += 2;
    conBox.appendChild(conBox.children[0].cloneNode(true));
    conBox.insertBefore(conBox.children[conBoxSize - 1].cloneNode(true), conBox.children[0]);
  } //twCell = wrap(conBox,'<div class="tempWrap" style="overflow:hidden; overflow-y: auto; position:relative;"></div>');


  conBox.style.cssText = "width:" + tempSize * slideW + "px;" + "position:relative;display: flex; flex-wrap: nowrap;padding:0;margin:0; height: 100%;";

  for (var i = 0; i < tempSize; i++) {
    conBox.children[i].style.cssText = "vertical-align:top;overflow:hidden; overflow-y: auto;width:" + slideW + "px";
  }

  var doStartFun = function doStartFun() {
    if (typeof opts.startFun == 'function') {
      opts.startFun(index, navObjSize);
    }
  };

  var doEndFun = function doEndFun() {
    if (typeof opts.endFun == 'function') {
      opts.endFun(index, navObjSize);
    }
  };

  var doSwitchLoad = function doSwitchLoad(moving) {
    var curIndex = (effect == "leftLoop" ? index + 1 : index) + moving;

    var changeImg = function changeImg(ind) {
      var img = conBox.children[ind].getElementsByTagName("img");

      for (var i = 0; i < img.length; i++) {
        if (img[i].getAttribute(sLoad)) {
          img[i].setAttribute("src", img[i].getAttribute(sLoad));
          img[i].removeAttribute(sLoad);
        }
      }
    }; // changeImg E


    changeImg(curIndex);

    if (effect == "leftLoop") {
      switch (curIndex) {
        case 0:
          changeImg(conBoxSize);
          break;

        case 1:
          changeImg(conBoxSize + 1);
          break;

        case conBoxSize:
          changeImg(0);
          break;

        case conBoxSize + 1:
          changeImg(1);
          break;
      }
    }
  }; // doSwitchLoad E
  //动态设置滑动宽度


  var orientationChange = function orientationChange() {
    slideW = twCell.clientWidth;
    conBox.style.width = tempSize * slideW + "px";

    for (var i = 0; i < tempSize; i++) {
      conBox.children[i].style.width = slideW + "px";
    }

    var ind = effect == "leftLoop" ? index + 1 : index;
    translate(-ind * slideW, 0);
  };

  window.addEventListener("resize", orientationChange, false); //滑动效果

  var translate = function translate(dist, speed, ele) {
    if (!!ele) {
      ele = ele.style;
    } else {
      ele = conBox.style;
    }

    ele.webkitTransitionDuration = ele.MozTransitionDuration = ele.msTransitionDuration = ele.OTransitionDuration = ele.transitionDuration = speed + 'ms';
    ele.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    ele.msTransform = ele.MozTransform = ele.OTransform = 'translateX(' + dist + 'px)';
  }; //效果函数


  var doPlay = function doPlay(isTouch) {
    switch (effect) {
      case "left":
        if (index >= navObjSize) {
          index = isTouch ? index - 1 : 0;
        } else if (index < 0) {
          index = isTouch ? 0 : navObjSize - 1;
        }

        if (sLoad != null) {
          doSwitchLoad(0);
        }

        if (isTouch === 0) {
          translate(-index * slideW, 0);
        } else {
          translate(-index * slideW, delayTime);
        }

        oldIndex = index;
        break;

      case "leftLoop":
        if (sLoad != null) {
          doSwitchLoad(0);
        }

        translate(-(index + 1) * slideW, delayTime);

        if (index == -1) {
          timeout = setTimeout(function () {
            translate(-navObjSize * slideW, 0);
          }, delayTime);
          index = navObjSize - 1;
        } else if (index == navObjSize) {
          timeout = setTimeout(function () {
            translate(-slideW, 0);
          }, delayTime);
          index = 0;
        }

        oldIndex = index;
        break;
      // leftLoop end
    } //switch end


    doStartFun();
    endTimeout = setTimeout(function () {
      doEndFun();
    }, delayTime); //设置className

    for (var i = 0; i < navObjSize; i++) {
      if (opts.vueSlide !== "" && opts.vueObj != "") {
        opts.vueObj[opts.vueSlide] = index;
        opts.defaultIndex = index;

        if (opts.defaultIndex === opts.vueObj[opts.vueSlide]) {
          return;
        }
      } else {
        removeClass(navObj[i], opts.titOnClassName);

        if (i == index) {
          addClass(navObj[i], opts.titOnClassName);
        }
      }
    }

    if (loop == false) {
      //loop控制是否继续循环
      removeClass(nextBtn, "nextStop");
      removeClass(prevBtn, "prevStop");

      if (index == 0) {
        addClass(prevBtn, "prevStop");
      } else if (index == navObjSize - 1) {
        addClass(nextBtn, "nextStop");
      }
    }

    if (pageState) {
      pageState.innerHTML = "<span>" + (index + 1) + "</span>/" + navObjSize;
    }
  }; // doPlay end
  //初始化执行


  doPlay(); //自动播放

  if (autoPlay) {
    inter = setInterval(function () {
      index++;
      doPlay();
    }, interTime);
  } //点击事件


  if (navObj) {
    for (var i = 0; i < navObjSize; i++) {
      (function () {
        var j = i;
        navObj[j].addEventListener('click', function (e) {
          clearTimeout(timeout);
          clearTimeout(endTimeout);
          index = j;
          doPlay(0);
        });
      })();
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      if (loop == true || index != navObjSize - 1) {
        clearTimeout(timeout);
        clearTimeout(endTimeout);
        index++;
        doPlay();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      if (loop == true || index != 0) {
        clearTimeout(timeout);
        clearTimeout(endTimeout);
        index--;
        doPlay();
      }
    });
  } //触摸开始函数


  var tStart = function tStart(e) {
    for (var i = 0; i < opts.noTouchIndex.length; i++) {
      if (index === Number(opts.noTouchIndex[i])) {
        return;
      } //第几页不滚动

    }

    clearTimeout(timeout);
    clearTimeout(endTimeout);
    scrollY = undefined;
    distX = 0;
    var point = hasTouch ? e.touches[0] : e;
    startX = point.pageX;
    startY = point.pageY; //添加“触摸移动”事件监听

    conBox.addEventListener(touchMove, tMove, false); //添加“触摸结束”事件监听

    conBox.addEventListener(touchEnd, tEnd, false);
  }; //触摸移动函数


  var tMove = function tMove(e) {
    if (hasTouch) {
      if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
    }

    ; //多点或缩放

    var point = hasTouch ? e.touches[0] : e;
    distX = point.pageX - startX;
    distY = point.pageY - startY;

    if (typeof scrollY == 'undefined') {
      scrollY = !!(scrollY || Math.abs(distX) < Math.abs(distY));
    }

    if (!scrollY) {
      e.preventDefault();

      if (autoPlay) {
        clearInterval(inter);
      }

      switch (effect) {
        case "left":
          if (index == 0 && distX > 0 || index >= navObjSize - 1 && distX < 0) {
            distX = distX * 0.4;
          }

          translate(-index * slideW + distX, 0);
          break;

        case "leftLoop":
          translate(-(index + 1) * slideW + distX, 0);
          break;
      }

      if (sLoad != null && Math.abs(distX) > slideW / 3) {
        doSwitchLoad(distX > -0 ? -1 : 1);
      }
    }
  }; //触摸结束函数


  var tEnd = function tEnd(e) {
    if (distX == 0) return;
    e.preventDefault();

    if (!scrollY) {
      if (Math.abs(distX) > slideW / 10) {
        distX > 0 ? index-- : index++;
      }

      doPlay(true);

      if (autoPlay) {
        inter = setInterval(function () {
          index++;
          doPlay();
        }, interTime);
      }
    }

    conBox.removeEventListener(touchMove, tMove, false);
    conBox.removeEventListener(touchEnd, tEnd, false);
  }; //添加“触摸开始”事件监听


  conBox.addEventListener(touchStart, tStart, false);
}; // TouchSlide E


/* harmony default export */ var utils_TouchSlide = (TouchSlide_TouchSlide);
// EXTERNAL MODULE: ./node_modules/@xunlei/vue-lazy-component/dist/vue-lazy-component.js
var vue_lazy_component = __webpack_require__("49ab");
var vue_lazy_component_default = /*#__PURE__*/__webpack_require__.n(vue_lazy_component);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/tabs-touch/src/tabs-touch.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_lazy_component_default.a);
/* harmony default export */ var tabs_touchvue_type_script_lang_js_ = ({
  name: "tabsTouch",
  props: {
    tabHeight: {
      //tab高度
      type: [String, Number],
      default: 44
    },
    scrollFixed: {
      //是否固定顶部
      type: Boolean,
      default: true
    },
    navLineWidth: {
      //tab下划线元素宽度
      type: [String, Number],
      default: 60
    },
    navLineCssText: {
      //tab下划线元素样式
      type: String,
      default: "border-radius: 16px; background-color: #f00;height: 3px; top: 77%;"
    },
    navItemCssText: {
      //tab元素样式
      type: String,
      default: "background-color: #fff;"
    },
    navItemWidth: {
      //tab元素宽度
      type: [String, Number],
      default: 100
    },
    showRightMore: {
      //是否展示右边的更多按钮
      type: Boolean,
      default: true
    },
    noTouchIndex: {
      //规定第几页不可以滑动
      type: Array,
      default: function _default() {
        return [];
      }
    },
    navMsg: {
      //tabs数据
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    tab: tab
  },
  watch: {
    navIndex: function navIndex(newVal, oldVal) {
      this.$refs.nav_box.scrollLeft = this.$refs.nav_box.children[newVal].offsetLeft - (document.body.clientWidth - this.navItemWidth) / 2;
    }
  },
  data: function data() {
    return {
      navIndex: 0,
      //当前选中的下标
      showMoreChannel: false //是否全部频道

    };
  },
  methods: {
    changeChannelState: function changeChannelState() {
      this.showMoreChannel = !this.showMoreChannel;
    },
    changeNavSlide: function changeNavSlide(idx) {
      this.$refs.nav_box.children[idx].click();
    },
    closeChannel: function closeChannel(e) {
      if (e.target.className === "more_channel_list_box") {
        return;
      }

      this.showMoreChannel = false;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    utils_TouchSlide({
      noTouchIndex: this.noTouchIndex,
      slideCell: "#tabBox1",
      titCell: ".vux-center",
      defaultIndex: this.navIndex,
      vueSlide: "navIndex",
      vueObj: this,
      endFun: function endFun(i) {
        //高度自适应
        var bd = document.getElementById("tabBox1-bd");
        bd.parentNode.style.height = bd.children[i].children[0] && bd.children[i].children[0].offsetHeight + "px";
        if (i > 0) bd.parentNode.style.transition = "200ms"; //添加动画效果
      }
    });
  }
});
// CONCATENATED MODULE: ./packages/tabs-touch/src/tabs-touch.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tabs_touchvue_type_script_lang_js_ = (tabs_touchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tabs-touch/src/tabs-touch.vue?vue&type=style&index=0&id=d9d36ff0&scoped=true&lang=css&
var tabs_touchvue_type_style_index_0_id_d9d36ff0_scoped_true_lang_css_ = __webpack_require__("431c");

// CONCATENATED MODULE: ./packages/tabs-touch/src/tabs-touch.vue






/* normalize component */

var tabs_touch_component = normalizeComponent(
  src_tabs_touchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d9d36ff0",
  null
  
)

tabs_touch_component.options.__file = "tabs-touch.vue"
/* harmony default export */ var tabs_touch = (tabs_touch_component.exports);
// CONCATENATED MODULE: ./packages/tabs-touch/index.js

 // 导入组件

 // 为组件提供 install 安装方法，供按需引入

tabs_touch.install = function (Vue) {
  Vue.component(tabs_touch.name, tabs_touch);
}; // 默认导出组件


/* harmony default export */ var packages_tabs_touch = (tabs_touch);
// CONCATENATED MODULE: ./packages/index.js

 // 导入颜色选择器组件

 // 存储组件列表

var components = [packages_tabs_touch]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) return; // 遍历注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install,
  // 以下是具体的组件列表
  tabsTouch: packages_tabs_touch
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport tabsTouch */__webpack_require__.d(__webpack_exports__, "tabsTouch", function() { return packages_tabs_touch; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=vtabstouch.common.js.map