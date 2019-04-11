'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = require('react-dom');
var ReactDOM__default = _interopDefault(ReactDOM);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

if (process.env.NODE_ENV !== 'production') {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-mixed-operators */
/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i], 10);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;

  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;

  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}

// import { css } from 'styled-components';

// TODO: use css grid
var grid = "\n  .uxi-root {\n    height: 100%;\n    .uxi_container {\n      width: 100%;\n      margin: 0 auto;\n    }\n    @media screen and (min-width: 768px) {\n      .uxi_container {\n        max-width: 750px;\n        margin: 0 auto;\n      }\n    }\n    @media screen and (min-width: 992px) {\n      .uxi_container {\n        max-width: 970px;\n        margin: 0 auto;\n      }\n    }\n    @media screen and (min-width: 1200px) {\n      .uxi_container {\n        max-width: 1170px;\n        margin: 0 auto;\n      }\n    }\n  }\n";

// import { css } from 'styled-components';

var fonts = "\n\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800');\n\n";

// import { css } from 'styled-components';
// export default css`
var tooltip = "\n\n@-webkit-keyframes rcToolTipZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes rcToolTipZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n\n@-webkit-keyframes rcToolTipZoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n\n@keyframes rcToolTipZoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n\n.rc-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.5;\n  opacity: 0.9;\n}\n\n.rc-tooltip-hidden {\n  display: none;\n}\n\n.rc-tooltip-placement-top,\n.rc-tooltip-placement-topLeft,\n.rc-tooltip-placement-topRight {\n  padding: 5px 0 9px 0;\n}\n\n.rc-tooltip-placement-right,\n.rc-tooltip-placement-rightTop,\n.rc-tooltip-placement-rightBottom {\n  padding: 0 5px 0 9px;\n}\n\n.rc-tooltip-placement-bottom,\n.rc-tooltip-placement-bottomLeft,\n.rc-tooltip-placement-bottomRight {\n  padding: 9px 0 5px 0;\n}\n\n.rc-tooltip-placement-left,\n.rc-tooltip-placement-leftTop,\n.rc-tooltip-placement-leftBottom {\n  padding: 0 9px 0 5px;\n}\n\n.rc-tooltip-inner {\n  padding: 5px 10px 2px 10px;\n  color: #fff;\n  text-align: left;\n  text-decoration: none;\n  background-color: #373737;\n  border-radius: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);\n  min-height: 24px;\n}\n\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.rc-tooltip-placement-top .rc-tooltip-arrow,\n.rc-tooltip-placement-topLeft .rc-tooltip-arrow,\n.rc-tooltip-placement-topRight .rc-tooltip-arrow {\n  bottom: 4px;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #373737;\n}\n\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  left: 50%;\n}\n\n.rc-tooltip-placement-topLeft .rc-tooltip-arrow {\n  left: 15%;\n}\n\n.rc-tooltip-placement-topRight .rc-tooltip-arrow {\n  right: 15%;\n}\n\n.rc-tooltip-placement-right .rc-tooltip-arrow,\n.rc-tooltip-placement-rightTop .rc-tooltip-arrow,\n.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {\n  left: 4px;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #373737;\n}\n\n.rc-tooltip-placement-right .rc-tooltip-arrow {\n  top: 50%;\n}\n\n.rc-tooltip-placement-rightTop .rc-tooltip-arrow {\n  top: 15%;\n  margin-top: 0;\n}\n\n.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {\n  bottom: 15%;\n}\n\n.rc-tooltip-placement-left .rc-tooltip-arrow,\n.rc-tooltip-placement-leftTop .rc-tooltip-arrow,\n.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {\n  right: 4px;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #373737;\n}\n\n.rc-tooltip-placement-left .rc-tooltip-arrow {\n  top: 50%;\n}\n\n.rc-tooltip-placement-leftTop .rc-tooltip-arrow {\n  top: 15%;\n  margin-top: 0;\n}\n\n.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {\n  bottom: 15%;\n}\n\n.rc-tooltip-placement-bottom .rc-tooltip-arrow,\n.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,\n.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {\n  top: 4px;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #373737;\n}\n\n.rc-tooltip-placement-bottom .rc-tooltip-arrow {\n  left: 50%;\n}\n\n.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {\n  left: 15%;\n}\n\n.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {\n  right: 15%;\n}\n\n.rc-tooltip.rc-tooltip-zoom-enter,\n.rc-tooltip.rc-tooltip-zoom-leave {\n  display: block;\n}\n\n.rc-tooltip-zoom-enter,\n.rc-tooltip-zoom-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n\n.rc-tooltip-zoom-leave {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n\n.rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,\n.rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {\n  -webkit-animation-name: rcToolTipZoomIn;\n  animation-name: rcToolTipZoomIn;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n\n.rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {\n  -webkit-animation-name: rcToolTipZoomOut;\n  animation-name: rcToolTipZoomOut;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n\n\n";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n@font-face {\n  font-family: octicons-anchor;\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAYcAA0AAAAACjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABwAAAAca8vGTk9TLzIAAAFMAAAARAAAAFZG1VHVY21hcAAAAZAAAAA+AAABQgAP9AdjdnQgAAAB0AAAAAQAAAAEACICiGdhc3AAAAHUAAAACAAAAAj//wADZ2x5ZgAAAdwAAADRAAABEKyikaNoZWFkAAACsAAAAC0AAAA2AtXoA2hoZWEAAALgAAAAHAAAACQHngNFaG10eAAAAvwAAAAQAAAAEAwAACJsb2NhAAADDAAAAAoAAAAKALIAVG1heHAAAAMYAAAAHwAAACABEAB2bmFtZQAAAzgAAALBAAAFu3I9x/Nwb3N0AAAF/AAAAB0AAAAvaoFvbwAAAAEAAAAAzBdyYwAAAADP2IQvAAAAAM/bz7t4nGNgZGFgnMDAysDB1Ml0hoGBoR9CM75mMGLkYGBgYmBlZsAKAtJcUxgcPsR8iGF2+O/AEMPsznAYKMwIkgMA5REMOXicY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+h5j//yEk/3KoSgZGNgYYk4GRCUgwMaACRoZhDwCs7QgGAAAAIgKIAAAAAf//AAJ4nHWMMQrCQBBF/0zWrCCIKUQsTDCL2EXMohYGSSmorScInsRGL2DOYJe0Ntp7BK+gJ1BxF1stZvjz/v8DRghQzEc4kIgKwiAppcA9LtzKLSkdNhKFY3HF4lK69ExKslx7Xa+vPRVS43G98vG1DnkDMIBUgFN0MDXflU8tbaZOUkXUH0+U27RoRpOIyCKjbMCVejwypzJJG4jIwb43rfl6wbwanocrJm9XFYfskuVC5K/TPyczNU7b84CXcbxks1Un6H6tLH9vf2LRnn8Ax7A5WQAAAHicY2BkYGAA4teL1+yI57f5ysDNwgAC529f0kOmWRiYVgEpDgYmEA8AUzEKsQAAAHicY2BkYGB2+O/AEMPCAAJAkpEBFbAAADgKAe0EAAAiAAAAAAQAAAAEAAAAAAAAKgAqACoAiAAAeJxjYGRgYGBhsGFgYgABEMkFhAwM/xn0QAIAD6YBhwB4nI1Ty07cMBS9QwKlQapQW3VXySvEqDCZGbGaHULiIQ1FKgjWMxknMfLEke2A+IJu+wntrt/QbVf9gG75jK577Lg8K1qQPCfnnnt8fX1NRC/pmjrk/zprC+8D7tBy9DHgBXoWfQ44Av8t4Bj4Z8CLtBL9CniJluPXASf0Lm4CXqFX8Q84dOLnMB17N4c7tBo1AS/Qi+hTwBH4rwHHwN8DXqQ30XXAS7QaLwSc0Gn8NuAVWou/gFmnjLrEaEh9GmDdDGgL3B4JsrRPDU2hTOiMSuJUIdKQQayiAth69r6akSSFqIJuA19TrzCIaY8sIoxyrNIrL//pw7A2iMygkX5vDj+G+kuoLdX4GlGK/8Lnlz6/h9MpmoO9rafrz7ILXEHHaAx95s9lsI7AHNMBWEZHULnfAXwG9/ZqdzLI08iuwRloXE8kfhXYAvE23+23DU3t626rbs8/8adv+9DWknsHp3E17oCf+Z48rvEQNZ78paYM38qfk3v/u3l3u3GXN2Dmvmvpf1Srwk3pB/VSsp512bA/GG5i2WJ7wu430yQ5K3nFGiOqgtmSB5pJVSizwaacmUZzZhXLlZTq8qGGFY2YcSkqbth6aW1tRmlaCFs2016m5qn36SbJrqosG4uMV4aP2PHBmB3tjtmgN2izkGQyLWprekbIntJFing32a5rKWCN/SdSoga45EJykyQ7asZvHQ8PTm6cslIpwyeyjbVltNikc2HTR7YKh9LBl9DADC0U/jLcBZDKrMhUBfQBvXRzLtFtjU9eNHKin0x5InTqb8lNpfKv1s1xHzTXRqgKzek/mb7nB8RZTCDhGEX3kK/8Q75AmUM/eLkfA+0Hi908Kx4eNsMgudg5GLdRD7a84npi+YxNr5i5KIbW5izXas7cHXIMAau1OueZhfj+cOcP3P8MNIWLyYOBuxL6DRylJ4cAAAB4nGNgYoAALjDJyIAOWMCiTIxMLDmZedkABtIBygAAAA==) format(\'woff\');\n}\n\n.markdown-body {\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n}\n\n.hljs.markdown-body {\n  color: #333;\n}\n\n.markdown-body a {\n  background-color: transparent;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline: 0;\n}\n\n.markdown-body strong {\n  font-weight: 500;\n}\n\n.markdown-body img {\n  border: 0;\n}\n\n.markdown-body hr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n.markdown-body pre {\n  overflow: auto;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n.markdown-body input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\n.markdown-body html input[disabled] {\n  cursor: default;\n}\n\n.markdown-body input {\n  line-height: normal;\n}\n\n.markdown-body input[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.markdown-body table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.markdown-body td,\n.markdown-body th {\n  padding: 0;\n}\n\n.markdown-body * {\n  box-sizing: border-box;\n}\n\n.markdown-body input {\n  font: 13px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n.markdown-body a {\n  color: #4078c0;\n  text-decoration: none;\n}\n\n.markdown-body a:hover,\n.markdown-body a:active {\n  text-decoration: underline;\n}\n\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #ddd;\n}\n\n.markdown-body hr:before {\n  display: table;\n  content: "";\n}\n\n.markdown-body hr:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  line-height: 1.1;\n}\n\n/*\n.markdown-body h1 {\n  font-size: 30px;\n}\n\n.markdown-body h2 {\n  font-size: 21px;\n}\n\n.markdown-body h3 {\n  font-size: 16px;\n}\n\n.markdown-body h4 {\n  font-size: 14px;\n}\n\n.markdown-body h5 {\n  font-size: 12px;\n}\n\n.markdown-body h6 {\n  font-size: 11px;\n}\n*/\n.markdown-body blockquote {\n  margin: 0;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n.markdown-body ul ul ol,\n.markdown-body ul ol ol,\n.markdown-body ol ul ol,\n.markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n  margin-left: 0;\n}\n\n.markdown-body code {\n  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  font-size: 12px;\n}\n\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n}\n\n.markdown-body .select::-ms-expand {\n  opacity: 0;\n}\n\n.markdown-body .octicon {\n  font: normal normal normal 16px/1 octicons-anchor;\n  display: inline-block;\n  text-decoration: none;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.markdown-body .octicon-link:before {\n  content: \'\f05c\';\n}\n\n.markdown-body > *:first-child {\n  margin-top: 0 !important;\n}\n\n.markdown-body > *:last-child {\n  margin-bottom: 0 !important;\n}\n\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.markdown-body .anchor {\n  display: inline-block;\n  padding-right: 2px;\n  margin-left: -18px;\n}\n\n.markdown-body .anchor:focus {\n  outline: none;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 1em;\n  margin-bottom: 16px;\n  font-weight: 400;\n  line-height: 1.4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #000;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\n.markdown-body h1 {\n  padding-bottom: 0.3em;\n  font-size: 2em;\n  line-height: 1.25;\n  border-bottom: 1px solid #eee;\n  margin: 0.67em 0;\n}\n\n.markdown-body h1 .anchor {\n  line-height: 1;\n}\n\n.markdown-body h2 {\n  padding-bottom: 0.3em;\n  font-size: 1.5em;\n  line-height: 1.334;\n  border-bottom: 1px solid #eee;\n}\n\n.markdown-body h2 .anchor {\n  line-height: 1;\n}\n\n.markdown-body h3 {\n  font-size: 1.25em;\n  line-height: 1.4;\n}\n\n.markdown-body h3 .anchor {\n  line-height: 1.2;\n}\n\n.markdown-body h4 {\n  font-size: 1em;\n  line-height: 1.5;\n}\n\n.markdown-body h4 .anchor {\n  line-height: 1.2;\n}\n\n.markdown-body h5 {\n  font-size: 1em;\n  line-height: 1.715;\n}\n\n.markdown-body h5 .anchor {\n  line-height: 0.875;\n}\n\n.markdown-body h6 {\n  font-size: 0.75em;\n  color: #777;\n}\n\n.markdown-body h6 .anchor {\n  line-height: 1.1;\n}\n\n.markdown-body p,\n.markdown-body blockquote,\n.markdown-body ul,\n.markdown-body ol,\n.markdown-body dl,\n.markdown-body table,\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.markdown-body hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n  padding-left: 2em;\n}\n\n.markdown-body ul ul,\n.markdown-body ul ol,\n.markdown-body ol ol,\n.markdown-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body li > p {\n  margin-top: 16px;\n}\n\n.markdown-body dl {\n  padding: 0;\n}\n\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.markdown-body blockquote {\n  padding: 0 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n\n.markdown-body blockquote > :first-child {\n  margin-top: 0;\n}\n\n.markdown-body blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: normal;\n  word-break: keep-all;\n}\n\n.markdown-body table th {\n  font-weight: 500;\n}\n\n.markdown-body table th,\n.markdown-body table td {\n  padding: 6px 13px;\n  border: 1px solid #ddd;\n}\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n}\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n\n.markdown-body img {\n  max-width: 100%;\n  box-sizing: content-box;\n  background-color: #fff;\n}\n\n.markdown-body code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(0, 0, 0, 0.04);\n  border-radius: 3px;\n}\n\n.markdown-body code:before,\n.markdown-body code:after {\n  /* letter-spacing: -0.2em;\n  content: "\0a0"; */\n}\n\n.markdown-body pre > code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.markdown-body pre {\n  word-wrap: normal;\n}\n\n.markdown-body pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.markdown-body pre code:before,\n.markdown-body pre code:after {\n  content: normal;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font-size: 11px;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb;\n}\n\n.markdown-body .pl-c {\n  color: #969896;\n}\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #0086b3;\n}\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #795da3;\n}\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n  color: #333;\n}\n\n.markdown-body .pl-ent {\n  color: #63a35c;\n}\n\n.markdown-body .pl-k {\n  color: #a71d5d;\n}\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n  color: #183691;\n}\n\n.markdown-body .pl-v {\n  color: #ed6a43;\n}\n\n.markdown-body .pl-id {\n  color: #b52a1d;\n}\n\n.markdown-body .pl-ii {\n  background-color: #b52a1d;\n  color: #f8f8f8;\n}\n\n.markdown-body .pl-sr .pl-cce {\n  color: #63a35c;\n  font-weight: bold;\n}\n\n.markdown-body .pl-ml {\n  color: #693a17;\n}\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  color: #1d3e81;\n  font-weight: bold;\n}\n\n.markdown-body .pl-mq {\n  color: #008080;\n}\n\n.markdown-body .pl-mi {\n  color: #333;\n  font-style: italic;\n}\n\n.markdown-body .pl-mb {\n  color: #333;\n  font-weight: bold;\n}\n\n.markdown-body .pl-md {\n  background-color: #ffecec;\n  color: #bd2c00;\n}\n\n.markdown-body .pl-mi1 {\n  background-color: #eaffea;\n  color: #55a532;\n}\n\n.markdown-body .pl-mdr {\n  color: #795da3;\n  font-weight: bold;\n}\n\n.markdown-body .pl-mo {\n  color: #1d3e81;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb;\n}\n\n.markdown-body:before {\n  display: table;\n  content: "";\n}\n\n.markdown-body:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n\n.markdown-body .task-list-item + .task-list-item {\n  margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n  margin: 0 0.35em 0.25em -1.6em;\n  vertical-align: middle;\n}\n\n.markdown-body :checked + .radio-label {\n  z-index: 1;\n  position: relative;\n  border-color: #4078c0;\n}\n'], ['\n@font-face {\n  font-family: octicons-anchor;\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAYcAA0AAAAACjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABwAAAAca8vGTk9TLzIAAAFMAAAARAAAAFZG1VHVY21hcAAAAZAAAAA+AAABQgAP9AdjdnQgAAAB0AAAAAQAAAAEACICiGdhc3AAAAHUAAAACAAAAAj//wADZ2x5ZgAAAdwAAADRAAABEKyikaNoZWFkAAACsAAAAC0AAAA2AtXoA2hoZWEAAALgAAAAHAAAACQHngNFaG10eAAAAvwAAAAQAAAAEAwAACJsb2NhAAADDAAAAAoAAAAKALIAVG1heHAAAAMYAAAAHwAAACABEAB2bmFtZQAAAzgAAALBAAAFu3I9x/Nwb3N0AAAF/AAAAB0AAAAvaoFvbwAAAAEAAAAAzBdyYwAAAADP2IQvAAAAAM/bz7t4nGNgZGFgnMDAysDB1Ml0hoGBoR9CM75mMGLkYGBgYmBlZsAKAtJcUxgcPsR8iGF2+O/AEMPsznAYKMwIkgMA5REMOXicY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+h5j//yEk/3KoSgZGNgYYk4GRCUgwMaACRoZhDwCs7QgGAAAAIgKIAAAAAf//AAJ4nHWMMQrCQBBF/0zWrCCIKUQsTDCL2EXMohYGSSmorScInsRGL2DOYJe0Ntp7BK+gJ1BxF1stZvjz/v8DRghQzEc4kIgKwiAppcA9LtzKLSkdNhKFY3HF4lK69ExKslx7Xa+vPRVS43G98vG1DnkDMIBUgFN0MDXflU8tbaZOUkXUH0+U27RoRpOIyCKjbMCVejwypzJJG4jIwb43rfl6wbwanocrJm9XFYfskuVC5K/TPyczNU7b84CXcbxks1Un6H6tLH9vf2LRnn8Ax7A5WQAAAHicY2BkYGAA4teL1+yI57f5ysDNwgAC529f0kOmWRiYVgEpDgYmEA8AUzEKsQAAAHicY2BkYGB2+O/AEMPCAAJAkpEBFbAAADgKAe0EAAAiAAAAAAQAAAAEAAAAAAAAKgAqACoAiAAAeJxjYGRgYGBhsGFgYgABEMkFhAwM/xn0QAIAD6YBhwB4nI1Ty07cMBS9QwKlQapQW3VXySvEqDCZGbGaHULiIQ1FKgjWMxknMfLEke2A+IJu+wntrt/QbVf9gG75jK577Lg8K1qQPCfnnnt8fX1NRC/pmjrk/zprC+8D7tBy9DHgBXoWfQ44Av8t4Bj4Z8CLtBL9CniJluPXASf0Lm4CXqFX8Q84dOLnMB17N4c7tBo1AS/Qi+hTwBH4rwHHwN8DXqQ30XXAS7QaLwSc0Gn8NuAVWou/gFmnjLrEaEh9GmDdDGgL3B4JsrRPDU2hTOiMSuJUIdKQQayiAth69r6akSSFqIJuA19TrzCIaY8sIoxyrNIrL//pw7A2iMygkX5vDj+G+kuoLdX4GlGK/8Lnlz6/h9MpmoO9rafrz7ILXEHHaAx95s9lsI7AHNMBWEZHULnfAXwG9/ZqdzLI08iuwRloXE8kfhXYAvE23+23DU3t626rbs8/8adv+9DWknsHp3E17oCf+Z48rvEQNZ78paYM38qfk3v/u3l3u3GXN2Dmvmvpf1Srwk3pB/VSsp512bA/GG5i2WJ7wu430yQ5K3nFGiOqgtmSB5pJVSizwaacmUZzZhXLlZTq8qGGFY2YcSkqbth6aW1tRmlaCFs2016m5qn36SbJrqosG4uMV4aP2PHBmB3tjtmgN2izkGQyLWprekbIntJFing32a5rKWCN/SdSoga45EJykyQ7asZvHQ8PTm6cslIpwyeyjbVltNikc2HTR7YKh9LBl9DADC0U/jLcBZDKrMhUBfQBvXRzLtFtjU9eNHKin0x5InTqb8lNpfKv1s1xHzTXRqgKzek/mb7nB8RZTCDhGEX3kK/8Q75AmUM/eLkfA+0Hi908Kx4eNsMgudg5GLdRD7a84npi+YxNr5i5KIbW5izXas7cHXIMAau1OueZhfj+cOcP3P8MNIWLyYOBuxL6DRylJ4cAAAB4nGNgYoAALjDJyIAOWMCiTIxMLDmZedkABtIBygAAAA==) format(\'woff\');\n}\n\n.markdown-body {\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n}\n\n.hljs.markdown-body {\n  color: #333;\n}\n\n.markdown-body a {\n  background-color: transparent;\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline: 0;\n}\n\n.markdown-body strong {\n  font-weight: 500;\n}\n\n.markdown-body img {\n  border: 0;\n}\n\n.markdown-body hr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n.markdown-body pre {\n  overflow: auto;\n}\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n.markdown-body input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\n.markdown-body html input[disabled] {\n  cursor: default;\n}\n\n.markdown-body input {\n  line-height: normal;\n}\n\n.markdown-body input[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.markdown-body table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.markdown-body td,\n.markdown-body th {\n  padding: 0;\n}\n\n.markdown-body * {\n  box-sizing: border-box;\n}\n\n.markdown-body input {\n  font: 13px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n.markdown-body a {\n  color: #4078c0;\n  text-decoration: none;\n}\n\n.markdown-body a:hover,\n.markdown-body a:active {\n  text-decoration: underline;\n}\n\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #ddd;\n}\n\n.markdown-body hr:before {\n  display: table;\n  content: "";\n}\n\n.markdown-body hr:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  line-height: 1.1;\n}\n\n/*\n.markdown-body h1 {\n  font-size: 30px;\n}\n\n.markdown-body h2 {\n  font-size: 21px;\n}\n\n.markdown-body h3 {\n  font-size: 16px;\n}\n\n.markdown-body h4 {\n  font-size: 14px;\n}\n\n.markdown-body h5 {\n  font-size: 12px;\n}\n\n.markdown-body h6 {\n  font-size: 11px;\n}\n*/\n.markdown-body blockquote {\n  margin: 0;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n.markdown-body ul ul ol,\n.markdown-body ul ol ol,\n.markdown-body ol ul ol,\n.markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown-body dd {\n  margin-left: 0;\n}\n\n.markdown-body code {\n  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  font-size: 12px;\n}\n\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n}\n\n.markdown-body .select::-ms-expand {\n  opacity: 0;\n}\n\n.markdown-body .octicon {\n  font: normal normal normal 16px/1 octicons-anchor;\n  display: inline-block;\n  text-decoration: none;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.markdown-body .octicon-link:before {\n  content: \'\\f05c\';\n}\n\n.markdown-body > *:first-child {\n  margin-top: 0 !important;\n}\n\n.markdown-body > *:last-child {\n  margin-bottom: 0 !important;\n}\n\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.markdown-body .anchor {\n  display: inline-block;\n  padding-right: 2px;\n  margin-left: -18px;\n}\n\n.markdown-body .anchor:focus {\n  outline: none;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 1em;\n  margin-bottom: 16px;\n  font-weight: 400;\n  line-height: 1.4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #000;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\n.markdown-body h1 {\n  padding-bottom: 0.3em;\n  font-size: 2em;\n  line-height: 1.25;\n  border-bottom: 1px solid #eee;\n  margin: 0.67em 0;\n}\n\n.markdown-body h1 .anchor {\n  line-height: 1;\n}\n\n.markdown-body h2 {\n  padding-bottom: 0.3em;\n  font-size: 1.5em;\n  line-height: 1.334;\n  border-bottom: 1px solid #eee;\n}\n\n.markdown-body h2 .anchor {\n  line-height: 1;\n}\n\n.markdown-body h3 {\n  font-size: 1.25em;\n  line-height: 1.4;\n}\n\n.markdown-body h3 .anchor {\n  line-height: 1.2;\n}\n\n.markdown-body h4 {\n  font-size: 1em;\n  line-height: 1.5;\n}\n\n.markdown-body h4 .anchor {\n  line-height: 1.2;\n}\n\n.markdown-body h5 {\n  font-size: 1em;\n  line-height: 1.715;\n}\n\n.markdown-body h5 .anchor {\n  line-height: 0.875;\n}\n\n.markdown-body h6 {\n  font-size: 0.75em;\n  color: #777;\n}\n\n.markdown-body h6 .anchor {\n  line-height: 1.1;\n}\n\n.markdown-body p,\n.markdown-body blockquote,\n.markdown-body ul,\n.markdown-body ol,\n.markdown-body dl,\n.markdown-body table,\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.markdown-body hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n  padding-left: 2em;\n}\n\n.markdown-body ul ul,\n.markdown-body ul ol,\n.markdown-body ol ol,\n.markdown-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.markdown-body li > p {\n  margin-top: 16px;\n}\n\n.markdown-body dl {\n  padding: 0;\n}\n\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n}\n\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.markdown-body blockquote {\n  padding: 0 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n\n.markdown-body blockquote > :first-child {\n  margin-top: 0;\n}\n\n.markdown-body blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: normal;\n  word-break: keep-all;\n}\n\n.markdown-body table th {\n  font-weight: 500;\n}\n\n.markdown-body table th,\n.markdown-body table td {\n  padding: 6px 13px;\n  border: 1px solid #ddd;\n}\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n}\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n\n.markdown-body img {\n  max-width: 100%;\n  box-sizing: content-box;\n  background-color: #fff;\n}\n\n.markdown-body code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(0, 0, 0, 0.04);\n  border-radius: 3px;\n}\n\n.markdown-body code:before,\n.markdown-body code:after {\n  /* letter-spacing: -0.2em;\n  content: "\\00a0"; */\n}\n\n.markdown-body pre > code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.markdown-body pre {\n  word-wrap: normal;\n}\n\n.markdown-body pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\n.markdown-body pre code:before,\n.markdown-body pre code:after {\n  content: normal;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font-size: 11px;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb;\n}\n\n.markdown-body .pl-c {\n  color: #969896;\n}\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #0086b3;\n}\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #795da3;\n}\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n  color: #333;\n}\n\n.markdown-body .pl-ent {\n  color: #63a35c;\n}\n\n.markdown-body .pl-k {\n  color: #a71d5d;\n}\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n  color: #183691;\n}\n\n.markdown-body .pl-v {\n  color: #ed6a43;\n}\n\n.markdown-body .pl-id {\n  color: #b52a1d;\n}\n\n.markdown-body .pl-ii {\n  background-color: #b52a1d;\n  color: #f8f8f8;\n}\n\n.markdown-body .pl-sr .pl-cce {\n  color: #63a35c;\n  font-weight: bold;\n}\n\n.markdown-body .pl-ml {\n  color: #693a17;\n}\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  color: #1d3e81;\n  font-weight: bold;\n}\n\n.markdown-body .pl-mq {\n  color: #008080;\n}\n\n.markdown-body .pl-mi {\n  color: #333;\n  font-style: italic;\n}\n\n.markdown-body .pl-mb {\n  color: #333;\n  font-weight: bold;\n}\n\n.markdown-body .pl-md {\n  background-color: #ffecec;\n  color: #bd2c00;\n}\n\n.markdown-body .pl-mi1 {\n  background-color: #eaffea;\n  color: #55a532;\n}\n\n.markdown-body .pl-mdr {\n  color: #795da3;\n  font-weight: bold;\n}\n\n.markdown-body .pl-mo {\n  color: #1d3e81;\n}\n\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb;\n}\n\n.markdown-body:before {\n  display: table;\n  content: "";\n}\n\n.markdown-body:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n\n.markdown-body .task-list-item + .task-list-item {\n  margin-top: 3px;\n}\n\n.markdown-body .task-list-item input {\n  margin: 0 0.35em 0.25em -1.6em;\n  vertical-align: middle;\n}\n\n.markdown-body :checked + .radio-label {\n  z-index: 1;\n  position: relative;\n  border-color: #4078c0;\n}\n']);

var markdown = styled.css(_templateObject);

// import { css } from 'styled-components';

var layout = "\n  .uxi_container .row {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n  }\n  .uxi_row {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .uxi_row.uxi_row_notCentered {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .uxi_row:after {\n    content: \"\";\n    display: table;\n  }\n    clear: both;\n  .uxi_row .uxi_col {\n    float: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n  }\n  .uxi_row .uxi_col[class*=\"push-\"],\n  .uxi_row .uxi_col[class*=\"pull-\"] {\n    position: relative;\n  }\n  .uxi_row .uxi_col.s1 {\n    width: 8.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s2 {\n    width: 16.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s4 {\n    width: 33.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s5 {\n    width: 41.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s7 {\n    width: 58.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s8 {\n    width: 66.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s10 {\n    width: 83.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s11 {\n    width: 91.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.s12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_row .uxi_col.offset-s1 {\n    margin-left: 8.33333%;\n  }\n  .uxi_row .uxi_col.pull-s1 {\n    right: 8.33333%;\n  }\n  .uxi_row .uxi_col.push-s1 {\n    left: 8.33333%;\n  }\n  .uxi_row .uxi_col.offset-s2 {\n    margin-left: 16.66667%;\n  }\n  .uxi_row .uxi_col.pull-s2 {\n    right: 16.66667%;\n  }\n  .uxi_row .uxi_col.push-s2 {\n    left: 16.66667%;\n  }\n  .uxi_row .uxi_col.offset-s3 {\n    margin-left: 25%;\n  }\n  .uxi_row .uxi_col.pull-s3 {\n    right: 25%;\n  }\n  .uxi_row .uxi_col.push-s3 {\n    left: 25%;\n  }\n  .uxi_row .uxi_col.offset-s4 {\n    margin-left: 33.33333%;\n  }\n  .uxi_row .uxi_col.pull-s4 {\n    right: 33.33333%;\n  }\n  .uxi_row .uxi_col.push-s4 {\n    left: 33.33333%;\n  }\n  .uxi_row .uxi_col.offset-s5 {\n    margin-left: 41.66667%;\n  }\n  .uxi_row .uxi_col.pull-s5 {\n    right: 41.66667%;\n  }\n  .uxi_row .uxi_col.push-s5 {\n    left: 41.66667%;\n  }\n  .uxi_row .uxi_col.offset-s6 {\n    margin-left: 50%;\n  }\n  .uxi_row .uxi_col.pull-s6 {\n    right: 50%;\n  }\n  .uxi_row .uxi_col.push-s6 {\n    left: 50%;\n  }\n  .uxi_row .uxi_col.offset-s7 {\n    margin-left: 58.33333%;\n  }\n  .uxi_row .uxi_col.pull-s7 {\n    right: 58.33333%;\n  }\n  .uxi_row .uxi_col.push-s7 {\n    left: 58.33333%;\n  }\n  .uxi_row .uxi_col.offset-s8 {\n    margin-left: 66.66667%;\n  }\n  .uxi_row .uxi_col.pull-s8 {\n    right: 66.66667%;\n  }\n  .uxi_row .uxi_col.push-s8 {\n    left: 66.66667%;\n  }\n  .uxi_row .uxi_col.offset-s9 {\n    margin-left: 75%;\n  }\n  .uxi_row .uxi_col.pull-s9 {\n    right: 75%;\n  }\n  .uxi_row .uxi_col.push-s9 {\n    left: 75%;\n  }\n  .uxi_row .uxi_col.offset-s10 {\n    margin-left: 83.33333%;\n  }\n  .uxi_row .uxi_col.pull-s10 {\n    right: 83.33333%;\n  }\n  .uxi_row .uxi_col.push-s10 {\n    left: 83.33333%;\n  }\n  .uxi_row .uxi_col.offset-s11 {\n    margin-left: 91.66667%;\n  }\n  .uxi_row .uxi_col.pull-s11 {\n    right: 91.66667%;\n  }\n  .uxi_row .uxi_col.push-s11 {\n    left: 91.66667%;\n  }\n  .uxi_row .uxi_col.offset-s12 {\n    margin-left: 100%;\n  }\n  .uxi_row .uxi_col.pull-s12 {\n    right: 100%;\n  }\n  .uxi_row .uxi_col.push-s12 {\n    left: 100%;\n  }\n  @media only screen and (min-width: 601px) {\n    .uxi_row .uxi_col.m1 {\n      width: 8.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m2 {\n      width: 16.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m4 {\n      width: 33.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m5 {\n      width: 41.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m7 {\n      width: 58.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m8 {\n      width: 66.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m10 {\n      width: 83.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m11 {\n      width: 91.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.m12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.offset-m1 {\n      margin-left: 8.33333%;\n    }\n    .uxi_row .uxi_col.pull-m1 {\n      right: 8.33333%;\n    }\n    .uxi_row .uxi_col.push-m1 {\n      left: 8.33333%;\n    }\n    .uxi_row .uxi_col.offset-m2 {\n      margin-left: 16.66667%;\n    }\n    .uxi_row .uxi_col.pull-m2 {\n      right: 16.66667%;\n    }\n    .uxi_row .uxi_col.push-m2 {\n      left: 16.66667%;\n    }\n    .uxi_row .uxi_col.offset-m3 {\n      margin-left: 25%;\n    }\n    .uxi_row .uxi_col.pull-m3 {\n      right: 25%;\n    }\n    .uxi_row .uxi_col.push-m3 {\n      left: 25%;\n    }\n    .uxi_row .uxi_col.offset-m4 {\n      margin-left: 33.33333%;\n    }\n    .uxi_row .uxi_col.pull-m4 {\n      right: 33.33333%;\n    }\n    .uxi_row .uxi_col.push-m4 {\n      left: 33.33333%;\n    }\n    .uxi_row .uxi_col.offset-m5 {\n      margin-left: 41.66667%;\n    }\n    .uxi_row .uxi_col.pull-m5 {\n      right: 41.66667%;\n    }\n    .uxi_row .uxi_col.push-m5 {\n      left: 41.66667%;\n    }\n    .uxi_row .uxi_col.offset-m6 {\n      margin-left: 50%;\n    }\n    .uxi_row .uxi_col.pull-m6 {\n      right: 50%;\n    }\n    .uxi_row .uxi_col.push-m6 {\n      left: 50%;\n    }\n    .uxi_row .uxi_col.offset-m7 {\n      margin-left: 58.33333%;\n    }\n    .uxi_row .uxi_col.pull-m7 {\n      right: 58.33333%;\n    }\n    .uxi_row .uxi_col.push-m7 {\n      left: 58.33333%;\n    }\n    .uxi_row .uxi_col.offset-m8 {\n      margin-left: 66.66667%;\n    }\n    .uxi_row .uxi_col.pull-m8 {\n      right: 66.66667%;\n    }\n    .uxi_row .uxi_col.push-m8 {\n      left: 66.66667%;\n    }\n    .uxi_row .uxi_col.offset-m9 {\n      margin-left: 75%;\n    }\n    .uxi_row .uxi_col.pull-m9 {\n      right: 75%;\n    }\n    .uxi_row .uxi_col.push-m9 {\n      left: 75%;\n    }\n    .uxi_row .uxi_col.offset-m10 {\n      margin-left: 83.33333%;\n    }\n    .uxi_row .uxi_col.pull-m10 {\n      right: 83.33333%;\n    }\n    .uxi_row .uxi_col.push-m10 {\n      left: 83.33333%;\n    }\n    .uxi_row .uxi_col.offset-m11 {\n      margin-left: 91.66667%;\n    }\n    .uxi_row .uxi_col.pull-m11 {\n      right: 91.66667%;\n    }\n    .uxi_row .uxi_col.push-m11 {\n      left: 91.66667%;\n    }\n    .uxi_row .uxi_col.offset-m12 {\n      margin-left: 100%;\n    }\n    .uxi_row .uxi_col.pull-m12 {\n      right: 100%;\n    }\n    .uxi_row .uxi_col.push-m12 {\n      left: 100%;\n    }\n  }\n  @media only screen and (min-width: 993px) {\n    .uxi_row .uxi_col.l1 {\n      width: 8.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l2 {\n      width: 16.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l4 {\n      width: 33.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l5 {\n      width: 41.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l7 {\n      width: 58.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l8 {\n      width: 66.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l10 {\n      width: 83.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l11 {\n      width: 91.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.l12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_row .uxi_col.offset-l1 {\n      margin-left: 8.33333%;\n    }\n    .uxi_row .uxi_col.pull-l1 {\n      right: 8.33333%;\n    }\n    .uxi_row .uxi_col.push-l1 {\n      left: 8.33333%;\n    }\n    .uxi_row .uxi_col.offset-l2 {\n      margin-left: 16.66667%;\n    }\n    .uxi_row .uxi_col.pull-l2 {\n      right: 16.66667%;\n    }\n    .uxi_row .uxi_col.push-l2 {\n      left: 16.66667%;\n    }\n    .uxi_row .uxi_col.offset-l3 {\n      margin-left: 25%;\n    }\n    .uxi_row .uxi_col.pull-l3 {\n      right: 25%;\n    }\n    .uxi_row .uxi_col.push-l3 {\n      left: 25%;\n    }\n    .uxi_row .uxi_col.offset-l4 {\n      margin-left: 33.33333%;\n    }\n    .uxi_row .uxi_col.pull-l4 {\n      right: 33.33333%;\n    }\n    .uxi_row .uxi_col.push-l4 {\n      left: 33.33333%;\n    }\n    .uxi_row .uxi_col.offset-l5 {\n      margin-left: 41.66667%;\n    }\n    .uxi_row .uxi_col.pull-l5 {\n      right: 41.66667%;\n    }\n    .uxi_row .uxi_col.push-l5 {\n      left: 41.66667%;\n    }\n    .uxi_row .uxi_col.offset-l6 {\n      margin-left: 50%;\n    }\n    .uxi_row .uxi_col.pull-l6 {\n      right: 50%;\n    }\n    .uxi_row .uxi_col.push-l6 {\n      left: 50%;\n    }\n    .uxi_row .uxi_col.offset-l7 {\n      margin-left: 58.33333%;\n    }\n    .uxi_row .uxi_col.pull-l7 {\n      right: 58.33333%;\n    }\n    .uxi_row .uxi_col.push-l7 {\n      left: 58.33333%;\n    }\n    .uxi_row .uxi_col.offset-l8 {\n      margin-left: 66.66667%;\n    }\n    .uxi_row .uxi_col.pull-l8 {\n      right: 66.66667%;\n    }\n    .uxi_row .uxi_col.push-l8 {\n      left: 66.66667%;\n    }\n    .uxi_row .uxi_col.offset-l9 {\n      margin-left: 75%;\n    }\n    .uxi_row .uxi_col.pull-l9 {\n      right: 75%;\n    }\n    .uxi_row .uxi_col.push-l9 {\n      left: 75%;\n    }\n    .uxi_row .uxi_col.offset-l10 {\n      margin-left: 83.33333%;\n    }\n    .uxi_row .uxi_col.pull-l10 {\n      right: 83.33333%;\n    }\n    .uxi_row .uxi_col.push-l10 {\n      left: 83.33333%;\n    }\n    .uxi_row .uxi_col.offset-l11 {\n      margin-left: 91.66667%;\n    }\n    .uxi_row .uxi_col.pull-l11 {\n      right: 91.66667%;\n    }\n    .uxi_row .uxi_col.push-l11 {\n      left: 91.66667%;\n    }\n    .uxi_row .uxi_col.offset-l12 {\n      margin-left: 100%;\n    }\n    .uxi_row .uxi_col.pull-l12 {\n      right: 100%;\n    }\n    .uxi_row .uxi_col.push-l12 {\n      left: 100%;\n    }\n  }\n";

// import { css } from 'styled-components';

var simpleLayout = "\n  .uxi_s_row {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .uxi_s_row.uxi_s_row_notCentered {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .uxi_s_row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n  .uxi_s_row .uxi_s_col {\n    float: left;\n    box-sizing: border-box;\n  }\n  .uxi_s_row .uxi_s_col[class*=\"push-\"],\n  .uxi_s_row .uxi_s_col[class*=\"pull-\"] {\n    position: relative;\n  }\n  .uxi_s_row .uxi_s_col.s1 {\n    width: 8.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s2 {\n    width: 16.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s4 {\n    width: 33.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s5 {\n    width: 41.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s7 {\n    width: 58.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s8 {\n    width: 66.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s10 {\n    width: 83.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s11 {\n    width: 91.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.s12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .uxi_s_row .uxi_s_col.offset-s1 {\n    margin-left: 8.33333%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s1 {\n    right: 8.33333%;\n  }\n  .uxi_s_row .uxi_s_col.push-s1 {\n    left: 8.33333%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s2 {\n    margin-left: 16.66667%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s2 {\n    right: 16.66667%;\n  }\n  .uxi_s_row .uxi_s_col.push-s2 {\n    left: 16.66667%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s3 {\n    margin-left: 25%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s3 {\n    right: 25%;\n  }\n  .uxi_s_row .uxi_s_col.push-s3 {\n    left: 25%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s4 {\n    margin-left: 33.33333%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s4 {\n    right: 33.33333%;\n  }\n  .uxi_s_row .uxi_s_col.push-s4 {\n    left: 33.33333%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s5 {\n    margin-left: 41.66667%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s5 {\n    right: 41.66667%;\n  }\n  .uxi_s_row .uxi_s_col.push-s5 {\n    left: 41.66667%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s6 {\n    margin-left: 50%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s6 {\n    right: 50%;\n  }\n  .uxi_s_row .uxi_s_col.push-s6 {\n    left: 50%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s7 {\n    margin-left: 58.33333%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s7 {\n    right: 58.33333%;\n  }\n  .uxi_s_row .uxi_s_col.push-s7 {\n    left: 58.33333%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s8 {\n    margin-left: 66.66667%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s8 {\n    right: 66.66667%;\n  }\n  .uxi_s_row .uxi_s_col.push-s8 {\n    left: 66.66667%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s9 {\n    margin-left: 75%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s9 {\n    right: 75%;\n  }\n  .uxi_s_row .uxi_s_col.push-s9 {\n    left: 75%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s10 {\n    margin-left: 83.33333%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s10 {\n    right: 83.33333%;\n  }\n  .uxi_s_row .uxi_s_col.push-s10 {\n    left: 83.33333%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s11 {\n    margin-left: 91.66667%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s11 {\n    right: 91.66667%;\n  }\n  .uxi_s_row .uxi_s_col.push-s11 {\n    left: 91.66667%;\n  }\n  .uxi_s_row .uxi_s_col.offset-s12 {\n    margin-left: 100%;\n  }\n  .uxi_s_row .uxi_s_col.pull-s12 {\n    right: 100%;\n  }\n  .uxi_s_row .uxi_s_col.push-s12 {\n    left: 100%;\n  }\n  @media only screen and (min-width: 601px) {\n    .uxi_s_row .uxi_s_col.m1 {\n      width: 8.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m2 {\n      width: 16.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m4 {\n      width: 33.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m5 {\n      width: 41.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m7 {\n      width: 58.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m8 {\n      width: 66.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m10 {\n      width: 83.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m11 {\n      width: 91.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.m12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.offset-m1 {\n      margin-left: 8.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m1 {\n      right: 8.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-m1 {\n      left: 8.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m2 {\n      margin-left: 16.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m2 {\n      right: 16.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-m2 {\n      left: 16.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m3 {\n      margin-left: 25%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m3 {\n      right: 25%;\n    }\n    .uxi_s_row .uxi_s_col.push-m3 {\n      left: 25%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m4 {\n      margin-left: 33.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m4 {\n      right: 33.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-m4 {\n      left: 33.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m5 {\n      margin-left: 41.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m5 {\n      right: 41.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-m5 {\n      left: 41.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m6 {\n      margin-left: 50%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m6 {\n      right: 50%;\n    }\n    .uxi_s_row .uxi_s_col.push-m6 {\n      left: 50%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m7 {\n      margin-left: 58.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m7 {\n      right: 58.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-m7 {\n      left: 58.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m8 {\n      margin-left: 66.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m8 {\n      right: 66.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-m8 {\n      left: 66.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m9 {\n      margin-left: 75%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m9 {\n      right: 75%;\n    }\n    .uxi_s_row .uxi_s_col.push-m9 {\n      left: 75%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m10 {\n      margin-left: 83.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m10 {\n      right: 83.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-m10 {\n      left: 83.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m11 {\n      margin-left: 91.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m11 {\n      right: 91.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-m11 {\n      left: 91.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-m12 {\n      margin-left: 100%;\n    }\n    .uxi_s_row .uxi_s_col.pull-m12 {\n      right: 100%;\n    }\n    .uxi_s_row .uxi_s_col.push-m12 {\n      left: 100%;\n    }\n  }\n\n  @media only screen and (min-width: 993px) {\n    .uxi_s_row .uxi_s_col.l1 {\n      width: 8.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l2 {\n      width: 16.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l4 {\n      width: 33.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l5 {\n      width: 41.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l7 {\n      width: 58.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l8 {\n      width: 66.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l10 {\n      width: 83.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l11 {\n      width: 91.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.l12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto;\n    }\n    .uxi_s_row .uxi_s_col.offset-l1 {\n      margin-left: 8.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l1 {\n      right: 8.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-l1 {\n      left: 8.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l2 {\n      margin-left: 16.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l2 {\n      right: 16.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-l2 {\n      left: 16.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l3 {\n      margin-left: 25%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l3 {\n      right: 25%;\n    }\n    .uxi_s_row .uxi_s_col.push-l3 {\n      left: 25%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l4 {\n      margin-left: 33.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l4 {\n      right: 33.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-l4 {\n      left: 33.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l5 {\n      margin-left: 41.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l5 {\n      right: 41.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-l5 {\n      left: 41.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l6 {\n      margin-left: 50%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l6 {\n      right: 50%;\n    }\n    .uxi_s_row .uxi_s_col.push-l6 {\n      left: 50%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l7 {\n      margin-left: 58.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l7 {\n      right: 58.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-l7 {\n      left: 58.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l8 {\n      margin-left: 66.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l8 {\n      right: 66.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-l8 {\n      left: 66.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l9 {\n      margin-left: 75%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l9 {\n      right: 75%;\n    }\n    .uxi_s_row .uxi_s_col.push-l9 {\n      left: 75%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l10 {\n      margin-left: 83.33333%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l10 {\n      right: 83.33333%;\n    }\n    .uxi_s_row .uxi_s_col.push-l10 {\n      left: 83.33333%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l11 {\n      margin-left: 91.66667%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l11 {\n      right: 91.66667%;\n    }\n    .uxi_s_row .uxi_s_col.push-l11 {\n      left: 91.66667%;\n    }\n    .uxi_s_row .uxi_s_col.offset-l12 {\n      margin-left: 100%;\n    }\n    .uxi_s_row .uxi_s_col.pull-l12 {\n      right: 100%;\n    }\n    .uxi_s_row .uxi_s_col.push-l12 {\n      left: 100%;\n    }\n  }\n";

// import { css } from 'styled-components';
/**
 * injectGlobal: A helper method to write global CSS.
 * It does not return a component,
 * but adds the styles to the stylesheet directly.
 *
 * and I guess does not depend on the
 * theme provider to be already rendered -df
 */
/* eslint-disable indent */
/* eslint-disable prefer-template */

var makeGlobalCSSInjector = function makeGlobalCSSInjector(theme) {
  if (!theme) return function () {
    return console.warn('called `makeGlobalCSSInjector` without passing a theme');
  };
  var palette = theme.palette,
      transition = theme.transition;


  return '\n    ' + markdown + '\n    ' + fonts + '\n    ' + tooltip + '\n\n    * {\n      scroll-behavior: smooth; /* is not an inherited prop */\n    }\n\n    html {\n      min-height: 100%;\n      margin: 0;\n      padding: 0;\n      background: ' + palette.white + ';\n      font-family: \'Open Sans\', sans-serif;\n      font-weight: 400;\n    }\n    body {\n      min-height: 100%;\n      margin: 0;\n      padding: 0;\n      font-size: 14px;\n      color: ' + palette.darkGrey + ';\n    }\n    ::selection {\n      color: white;\n      /* text-decoration-color: white; */\n      background-color: rgba(0, 137, 122, 0.9); /* theme.accent.dark for contrast */\n    }\n\n    button::-moz-focus-inner {\n      border: 0;\n    }\n\n    /** Links */\n    a {\n      color: ' + palette.accent.main + ';\n      text-decoration: none;\n      cursor: pointer;\n    }\n    a:hover {\n      color: ' + lighten(palette.accent.main, 0.1) + ';\n      text-decoration: underline;\n    }\n\n\n    /** Headings */\n    h1, h2, h3, h4 {\n      color: currentColor;\n    }\n\n\n    /** UL */\n    ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n\n\n    /** SVG */\n    svg {\n      transition: ' + transition.defaultAll + ';\n    }\n    svg.uxi_svg-icon-wrapper {\n      transition: none;\n    }\n    svg.uxi_svg-icon-wrapper svg {\n      transition: ' + transition.defaultAll + ';\n    }\n    /* little trick relating to SvgIcon: a svg wrapper */\n    // svg>svg { fill: inherit; }\n\n\n    /**\n     * Extend using css from styled-components\n     */\n    ' + grid + '\n    ' + layout + '\n    ' + simpleLayout + '\n  ';
  // return injectGlobal`${getGlobaStyles(theme)}`
};

var palette = {
  pureWhite: '#FFFFFF',
  white: '#F3F3F2',
  extraLightGrey: '#c2c2c2',
  lightGrey: '#d4d4d4',
  grey: '#9a9a9a',
  darkGrey: '#222222',
  primary: {
    light: '#30556b',
    main: '#1b3c4f',
    dark: '#1c313f'
  },
  accent: {
    light: '#64cfba',
    main: '#26a29a',
    dark: '#00897a'
  },
  semantic: {
    default: '#cecece', // !important for fallback
    error: '#d13f48',
    danger: '#d13f48',
    // this nwarn color looks way too pale -df
    // warning: 'rgba(247, 187, 62, 0.5)',
    warning: '#ff9800',
    info: '#3e53c1',
    success: '#009688'
  },
  neutral: {
    darkest: lighten('#000000', 0.11),
    darker: lighten('#000000', 0.21),
    dark: lighten('#000000', 0.45),
    neutral: lighten('#000000', 0.60),
    lightDark: lighten('#000000', 0.85),
    lightestDark: lighten('#000000', 0.95)
  },
  charts: {
    color1: '#64cfba',
    color2: '#62acba',
    color3: '#5789b3',
    color4: '#476ca2',
    color5: '#335184',
    color6: '#1b3c4f'
  }
};

var _templateObject$1 = taggedTemplateLiteral(['\n      color: ', ';\n      font-weight: bold;\n    '], ['\n      color: ', ';\n      font-weight: bold;\n    ']),
    _templateObject2 = taggedTemplateLiteral(['font-size: 1.85em; margin: .67em 0;'], ['font-size: 1.85em; margin: .67em 0;']),
    _templateObject3 = taggedTemplateLiteral(['font-size: 1.70em; margin: .6em 0;'], ['font-size: 1.70em; margin: .6em 0;']),
    _templateObject4 = taggedTemplateLiteral(['font-size: 1.38em; margin: .5em 0;'], ['font-size: 1.38em; margin: .5em 0;']),
    _templateObject5 = taggedTemplateLiteral(['font-size: 1.2em; margin: .5em 0;'], ['font-size: 1.2em; margin: .5em 0;']),
    _templateObject6 = taggedTemplateLiteral(['font-size: 1em; margin: .5em 0;'], ['font-size: 1em; margin: .5em 0;']),
    _templateObject7 = taggedTemplateLiteral(['font-size: .86em; margin: .5em 0;'], ['font-size: .86em; margin: .5em 0;']);

var fonts$1 = {
  fontFamily: 'Open sans, sans-serif'
};

var palette$1 = palette;

var marketingFontFamilly = '\'Fira Sans\', sans-serif';

var theme = { // eslint-disable-line no-shadow
  wrapper: {
    '.uxi_container': {
      width: '100%',
      margin: '0 auto'
    },
    mediaQueries: {
      '(min-width: 768px)': {
        '.uxi_container': {
          maxWidth: '750px',
          margin: '0 auto'
        }
      },
      '(min-width: 992px)': {
        '.uxi_container': {
          maxWidth: '970px',
          margin: '0 auto'
        }
      },
      '(min-width: 1200px)': {
        '.uxi_container': {
          maxWidth: '1170px',
          margin: '0 auto'
        }
      }
    },
    body: {
      height: '100%',
      margin: 0,
      padding: 0
    },
    html: {
      height: '100%',
      margin: 0,
      padding: 0,
      background: palette$1.white,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      color: palette$1.darkGrey
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    a: {
      color: palette$1.accent.main,
      textDecoration: 'none'
    },
    'a:hover': {
      color: lighten(palette$1.accent.main, 0.1),
      textDecoration: 'none'
    },
    'h1, h2, h3, h4': {
      color: palette$1.neutral.dark
    },
    '.uxi-root': {
      height: '100%'
    },
    table: {
      margin: 0,
      padding: 0
    },
    td: {
      padding: '5px 10px'
    }
  },
  root: {
    fontSize: '14p'
  },
  border: {
    default: '1px solid #e9e9e9'
  },
  palette: palette$1,
  background: {
    light: palette$1.purewhite,
    dark: palette$1.primary.main
  },
  padding: {
    breathPadding: '1em',
    defaultPadding: '24px',
    title: '15px 0',
    heading: '10px 0'
  },
  dimensions: {
    mainHeaderHeight: '80px'
  },
  marketingText: {
    light: {
      title: {
        fontFamilly: marketingFontFamilly,
        fontSize: '30px',
        fontWeight: 'bold',
        color: lighten('#000000', 0.11)
      },
      heading: {
        fontSize: '18px',
        fontFamilly: marketingFontFamilly,
        fontWeight: 600,
        color: lighten('#000000', 0.11)
      },
      button: {
        fontSize: '14px',
        color: lighten('#000000', 0.21)
      },
      body: {
        fontSize: '16px',
        color: lighten('#000000', 0.21)
      }
    },
    dark: {
      title: {
        fontFamilly: marketingFontFamilly,
        fontSize: '30px',
        fontWeight: 'bold',
        color: lighten('#ffffff', 0.11)
      },
      heading: {
        fontSize: '18px',
        fontFamilly: marketingFontFamilly,
        fontWeight: 600,
        color: lighten('#ffffff', 0.11)
      },
      button: {
        fontSize: '14px',
        color: lighten('#ffffff', 0.21)
      },
      body: {
        fontSize: '16px',
        color: lighten('#ffffff', 0.21)
      }
    }
  },
  fontsAndColor: {
    default: Object.assign({
      color: '#37373a'
    }, fonts$1),
    defaultOnDarkBg: Object.assign({
      color: '#fff'
    }, fonts$1),
    light: {
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: lighten('#000000', 0.11)
      },
      heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: lighten('#000000', 0.11)
      },
      button: {
        fontSize: '14px',
        color: lighten('#000000', 0.21)
      },
      body: {
        fontSize: '14px',
        color: lighten('#000000', 0.21)
      },
      caption: {
        fontSize: '12px',
        color: lighten('#000000', 0.45)
      },
      disable: {
        color: lighten('#000000', 0.40)
      },
      link: {
        fontSize: '12px',
        color: '#15a9a9'
      }
    },
    dark: {
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: darken('#ffffff', 0.11)
      },
      heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: darken('#ffffff', 0.11)
      },
      button: {
        fontSize: '14px',
        color: '#ffffff'
      },
      body: {
        fontSize: '14px',
        color: darken('#ffffff', 0.21)
      },
      caption: {
        fontSize: '12px',
        color: darken('#ffffff', 0.45)
      },
      disable: {
        color: darken('#ffffff', 0.40)
      },
      link: {
        fontSize: '12px',
        color: '#15a9a9'
      }
    }
  },
  title: {
    color: palette$1.lightBlack
  },
  button: {
    backgroundColor: palette$1.neutral.lightestDark,
    color: palette$1.neutral.darker,
    borderColor: palette$1.neutral.lightDark
  },
  'button:hover': {
    backgroundColor: palette$1.neutral.lightDark,
    color: palette$1.neutral.darker,
    borderColor: palette$1.neutral.neutral
  },
  'button:primary': {
    color: palette$1.white,
    backgroundColor: palette$1.accent.main,
    borderColor: palette$1.accent.dark
  },
  'button:primary:hover': {
    color: palette$1.accent.main,
    backgroundColor: palette$1.white,
    borderColor: palette$1.accent.dark
  },

  'button:secondary': {
    color: palette$1.white,
    backgroundColor: palette$1.primary.main,
    borderColor: palette$1.primary.dark
  },
  'button:secondary:hover': {
    color: palette$1.primary.main,
    backgroundColor: palette$1.white,
    borderColor: palette$1.primary.dark
  },

  'button:danger': {
    color: palette$1.white,
    backgroundColor: palette$1.semantic.error,
    borderColor: palette$1.semantic.error
  },
  'button:danger:hover': {
    color: palette$1.semantic.error,
    backgroundColor: palette$1.white,
    borderColor: palette$1.semantic.error
  },

  'button:warning': {
    color: palette$1.white,
    backgroundColor: palette$1.semantic.warning,
    borderColor: palette$1.semantic.warning
  },
  'button:warning:hover': {
    color: palette$1.semantic.warning,
    backgroundColor: palette$1.white,
    borderColor: palette$1.semantic.warning
  },

  'button:success': {
    color: palette$1.white,
    backgroundColor: palette$1.semantic.success,
    borderColor: palette$1.semantic.success
  },
  'button:success:hover': {
    color: palette$1.semantic.success,
    backgroundColor: palette$1.white,
    borderColor: palette$1.semantic.success
  },
  link: {
    linkOnBgDark: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette$1.white
    },
    linkOnBgDarktHover: {
      color: palette$1.accent.main
    },
    linkOnBgLight: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette$1.neutral.dark
    },
    linkOnBgLightHover: {
      color: palette$1.accent.main
    }
  },
  shadow: {
    base: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px '
  },
  radius: '3px',
  outline: 'none',
  outlineShadow: '0 0 5px 3px rgba(35, 35, 35, .4), 0 0 2px 2px rgba(35, 35, 35, .24)',
  transition: {
    default: '450ms cubic-bezier(0.23, 1, 0.32, 1) ',
    defaultAll: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) ',
    duration: '450ms ',
    durationIn: '292ms ',
    durationOut: '196ms ',
    delay: '0ms ',
    easing: 'cubic-bezier(0.23, 1, 0.32, 1) '
  },
  // TODO do not use that, theme declaration must be done in json (serializable) =>
  sc: {
    // titleColor: 'red',
    // titleFontSize: '2em',
    // OR title: { color: '', 'font-size': }
    title: styled.css(_templateObject$1, palette$1.darkGrey),
    h1: styled.css(_templateObject2),
    h2: styled.css(_templateObject3),
    h3: styled.css(_templateObject4),
    h4: styled.css(_templateObject5),
    h5: styled.css(_templateObject6),
    h6: styled.css(_templateObject7)
  }
};

// eslint-disable-next-line no-shadow
function mergeCustomPalette(mainPalette, customPalette) {
  var secondary = mainPalette.primary.main;
  var primary = mainPalette.accent.main;

  if (!customPalette) {
    return mainPalette;
  }
  if (customPalette.primary) {
    primary = customPalette.primary;
  }
  if (customPalette.secondary) {
    secondary = customPalette.secondary;
  }
  var palette$$1 = _extends({}, mainPalette, {
    primary: {
      main: secondary,
      light: lighten(secondary),
      dark: darken(secondary)
    },
    accent: {
      main: primary,
      light: lighten(primary),
      dark: darken(primary)
    }
  });
  return palette$$1;
}

// eslint-disable-next-line no-use-before-define
var getThemeWithCustomPalette = function getThemeWithCustomPalette() {
  var customPalette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // eslint-disable-line no-shadow
  var themeWithCustomPalette = _extends({}, theme, {
    palette: mergeCustomPalette(palette, customPalette)
  });

  return themeWithCustomPalette;
};

var mergeTheme = function mergeTheme(defaultTheme, partialTheme) {
  return _extends({}, defaultTheme, partialTheme, {
    palette: mergeCustomPalette(defaultTheme.palette, partialTheme.palette),
    transition: _extends({}, defaultTheme.transition, {
      default: partialTheme.transition.default,
      defaultAll: 'all ' + partialTheme.transition.default
    })
  });
};

/**
 * Get CluedIn Theme
 */

function getTheme() {
  var overriddenTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var theme$$1 = Object.assign({}, theme, {
    // introduce theme
  }, overriddenTheme);

  return theme$$1;
}

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);
    return possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).apply(this, arguments));
  }

  createClass(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var theTheme = this.props.palette ? getThemeWithCustomPalette(this.props.palette) : this.props.theme || getTheme(this.props.extendTheme);

      return {
        uxiTheme: theTheme,
        isFixedWidth: this.isFixedWidth.bind(this),
        isDarkTheme: this.isDarkTheme.bind(this)
      };
    }
  }, {
    key: 'isDarkTheme',
    value: function isDarkTheme() {
      // eslint-disable-line class-methods-use-this
      return false;
    }
  }, {
    key: 'isFixedWidth',
    value: function isFixedWidth() {
      var isContained = this.props.isContained;

      return isContained;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return React__default.createElement(
        'div',
        { className: 'uxi-root' },
        children
      );
    }
  }]);
  return ThemeProvider;
}(React.Component);

ThemeProvider.propTypes = {
  children: propTypes.element,
  theme: propTypes.object,
  extendTheme: propTypes.object,
  isContained: propTypes.bool,
  palette: propTypes.object
};
ThemeProvider.defaultProps = {
  children: null,
  theme: {},
  extendTheme: {},
  isContained: false,
  palette: {}
};
ThemeProvider.childContextTypes = {
  uxiTheme: propTypes.object.isRequired,
  isFixedWidth: propTypes.func,
  isDarkTheme: propTypes.func.isRequired
};

var _templateObject$2 = taggedTemplateLiteral(['\n  & {}\n'], ['\n  & {}\n']);

var GlobalStyles = styled__default.div(_templateObject$2);

var UXISCThemeProvider = function UXISCThemeProvider(props) {
  var children = props.children,
      customPalette = props.palette,
      defaultTheme = props.defaultTheme,
      theme$$1 = props.theme;


  var theTheme = defaultTheme;
  if (theme$$1) {
    theTheme = mergeTheme(defaultTheme, theme$$1);
  } else if (customPalette) {
    theTheme = getThemeWithCustomPalette(customPalette);
  }
  var actualCSSString = makeGlobalCSSInjector(theTheme);

  return React__default.createElement(
    styled.ThemeProvider,
    { theme: theTheme || theme$$1 },
    React__default.createElement(
      GlobalStyles,
      { 'data-global-styles': true },
      React__default.createElement(
        ThemeProvider,
        null,
        React__default.createElement(
          'div',
          { style: { height: '100%' } },
          React__default.createElement('style', { dangerouslySetInnerHTML: { __html: actualCSSString } }),
          children
        )
      )
    )
  );
};

UXISCThemeProvider.propTypes = {
  defaultTheme: propTypes.object,
  theme: propTypes.object,
  palette: propTypes.object
};

UXISCThemeProvider.defaultProps = {
  defaultTheme: theme || {},
  theme: undefined,
  palette: {}
};

UXISCThemeProvider.displayName = 'UXISCThemeProvider';

var SvgIcon = function (_Component) {
  inherits(SvgIcon, _Component);

  function SvgIcon(props) {
    classCallCheck(this, SvgIcon);

    var _this = possibleConstructorReturn(this, (SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).call(this, props));

    _this.state = {
      hovered: false
    };
    return _this;
  }

  createClass(SvgIcon, [{
    key: 'handleMouseLeave',
    value: function handleMouseLeave(event) {
      this.setState({ hovered: false });
      this.props.onMouseLeave(event);
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(event) {
      this.setState({ hovered: true });
      this.props.onMouseEnter(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          size = _props.size,
          className = _props.className,
          other = objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox', 'size', 'className']);


      var offColor = color || 'currentColor';
      var onColor = hoverColor || offColor;

      var mergedStyles = _extends({
        display: 'inline-block',
        color: this.state.hovered ? onColor : offColor,
        fill: 'currentColor',
        height: size ? parseInt(size, 10) + 'px' : '24px',
        minHeight: size ? parseInt(size, 10) + 'px' : '24px',
        width: size ? parseInt(size, 10) + 'px' : '24px',
        minWidth: size ? parseInt(size, 10) + 'px' : '24px',
        userSelect: 'none'
      }, style);

      return React__default.createElement(
        'svg',
        _extends({
          className: (className || '') + ' uxi_svg-icon-wrapper'
        }, other, {
          onMouseEnter: function onMouseEnter(e) {
            _this2.handleMouseEnter(e);
          },
          onMouseLeave: function onMouseLeave(e) {
            _this2.handleMouseLeave(e);
          },
          style: mergedStyles,
          viewBox: viewBox,
          focusable: 'false' // IE11 is so dope
        }),
        children
      );
    }
  }]);
  return SvgIcon;
}(React.Component);

SvgIcon.propTypes = {
  /** @ignore */
  children: propTypes.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to theme default.
   */
  color: propTypes.string,
  hoverColor: propTypes.string,
  /** @ignore */
  onMouseEnter: propTypes.func,
  /** @ignore */
  onMouseLeave: propTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: propTypes.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};

SvgIcon.defaultProps = {
  children: null,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24',
  // color: '#6d6d71',
  color: undefined,
  hoverColor: undefined,
  style: {},
  size: 24
};

// export default from './SvgIcon';

/* eslint-disable max-len */

var Administrator = function Administrator(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.74 16.01',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.1,0a3.63,3.63,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.36,2.36,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z' }),
          React__default.createElement('path', { d: 'M0,16H9.52V14.42H1.58v-.11c0-2.19,2.27-3.72,5.52-3.72a8.48,8.48,0,0,1,2.42.33V9.29A10.69,10.69,0,0,0,7.1,9C2.92,9,0,11.19,0,14.31Z' }),
          React__default.createElement('path', { d: 'M16.74,12.62v-.23a.47.47,0,0,0-.47-.47h-.78a2.38,2.38,0,0,0-.25-.59l.55-.55a.47.47,0,0,0,0-.67L15.63,10A.47.47,0,0,0,15,10l-.55.55a2.59,2.59,0,0,0-.6-.24V9.48A.47.47,0,0,0,13.35,9h-.22a.47.47,0,0,0-.47.47v.78a2.43,2.43,0,0,0-.6.24L11.51,10a.48.48,0,0,0-.67,0l-.16.16a.48.48,0,0,0,0,.67l.56.55a2.06,2.06,0,0,0-.25.59h-.78a.47.47,0,0,0-.47.47v.23a.47.47,0,0,0,.47.47H11a2.06,2.06,0,0,0,.25.59l-.56.56a.47.47,0,0,0,0,.66l.16.16a.46.46,0,0,0,.67,0l.55-.55a2.45,2.45,0,0,0,.6.25v.78a.47.47,0,0,0,.47.47h.22a.47.47,0,0,0,.47-.47v-.78a2.63,2.63,0,0,0,.6-.25l.55.55a.45.45,0,0,0,.66,0l.16-.16a.45.45,0,0,0,0-.66l-.55-.56a2.38,2.38,0,0,0,.25-.59h.78A.47.47,0,0,0,16.74,12.62Zm-3.5,1.05a1.17,1.17,0,1,1,1.17-1.16A1.17,1.17,0,0,1,13.24,13.67Z' })
        )
      )
    )
  );
};

Administrator.propTypes = {
  color: propTypes.string
};

Administrator.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Anonymize = function Anonymize(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 19.08 10.97',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.4,11a4.66,4.66,0,0,1-1.64-.3,4.14,4.14,0,0,1-2.62-3A6.53,6.53,0,0,1,0,6.31,6.32,6.32,0,0,1,6.31,0h6.46a6.32,6.32,0,0,1,6.31,6.31,5.89,5.89,0,0,1-.14,1.33,4.13,4.13,0,0,1-2.61,3A4.7,4.7,0,0,1,11.86,10a4,4,0,0,0-4.64,0A4.74,4.74,0,0,1,4.4,11ZM6.31,1.5A4.82,4.82,0,0,0,1.5,6.31a4.88,4.88,0,0,0,.11,1A2.62,2.62,0,0,0,3.29,9.27a3.26,3.26,0,0,0,3.05-.44,5.51,5.51,0,0,1,6.41,0,3.23,3.23,0,0,0,3,.44,2.63,2.63,0,0,0,1.69-1.95,4.87,4.87,0,0,0,.1-1A4.82,4.82,0,0,0,12.77,1.5Z' }),
          React__default.createElement('path', { d: 'M6.05,6.54A3.35,3.35,0,0,1,3.37,5.2a.37.37,0,0,1,0-.45,3.35,3.35,0,0,1,5.36,0,.38.38,0,0,1,0,.45A3.36,3.36,0,0,1,6.05,6.54ZM4.16,5A2.66,2.66,0,0,0,7.94,5,2.68,2.68,0,0,0,4.16,5Z' }),
          React__default.createElement('path', { d: 'M13.06,6.54A3.36,3.36,0,0,1,10.38,5.2a.37.37,0,0,1,0-.45,3.35,3.35,0,0,1,5.36,0,.37.37,0,0,1,0,.45A3.36,3.36,0,0,1,13.06,6.54ZM11.17,5A2.66,2.66,0,0,0,15,5,2.68,2.68,0,0,0,11.17,5Z' })
        )
      )
    )
  );
};

Anonymize.propTypes = {
  color: propTypes.string
};

Anonymize.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Archive = function Archive(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.22,0H1.78A1.78,1.78,0,0,0,0,1.78V14.22A1.78,1.78,0,0,0,1.78,16H14.22A1.78,1.78,0,0,0,16,14.22V1.78A1.78,1.78,0,0,0,14.22,0Zm0,14.22H1.78V8.91H14.22ZM1.78,7.09V1.78H14.22V7.09Z' }),
          React__default.createElement('circle', { cx: '8', cy: '4.59', r: '0.84' }),
          React__default.createElement('circle', { cx: '8', cy: '11.52', r: '0.84' })
        )
      )
    )
  );
};

Archive.propTypes = {
  color: propTypes.string
};

Archive.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Barchart = function Barchart(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 10.33',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,4.76a.71.71,0,0,0-.71-.71H11.14V.71A.71.71,0,0,0,10.43,0H5.57a.71.71,0,0,0-.71.71V3.24H.71A.71.71,0,0,0,0,3.95V9.62a.71.71,0,0,0,.71.71H15.29A.71.71,0,0,0,16,9.62ZM4.86,8.91H1.42V4.66H4.86Zm4.86,0H6.28V1.42H9.72Zm4.86,0H11.14V5.47h3.44Z' })
        )
      )
    )
  );
};

Barchart.propTypes = {
  color: propTypes.string
};

Barchart.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Businessinteligence = function Businessinteligence(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.64 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M.5,11.38a.5.5,0,0,1-.28-.91L6.91,6a.49.49,0,0,1,.64.07L9.88,8.54l6-3.78a.49.49,0,0,1,.69.16.51.51,0,0,1-.16.69l-6.34,4a.5.5,0,0,1-.63-.07L7.11,7.08.78,11.3A.48.48,0,0,1,.5,11.38Z' }),
          React__default.createElement('path', { d: 'M.93,6l1.59.92a6.69,6.69,0,0,0-.08.88L3.56,7a2,2,0,0,1,.06-.26.54.54,0,0,0-.25-.58L1.9,5.35l1-1.66,1.47.85A.53.53,0,0,0,5,4.46,4.86,4.86,0,0,1,7.07,3.24a.53.53,0,0,0,.38-.5V1H9.36v1.7a.53.53,0,0,0,.38.5,4.86,4.86,0,0,1,2.12,1.22.55.55,0,0,0,.63.08L14,3.69l.47.82L15.31,4,14.6,2.72a.52.52,0,0,0-.71-.19l-1.59.92a5.91,5.91,0,0,0-1.9-1.09V.52A.52.52,0,0,0,9.88,0h-3a.52.52,0,0,0-.52.52V2.36A5.87,5.87,0,0,0,4.52,3.45L2.93,2.53a.52.52,0,0,0-.71.19L.74,5.28A.53.53,0,0,0,.93,6Z' }),
          React__default.createElement('path', { d: 'M15.88,10l-1.59-.92a7,7,0,0,0,.1-1l-1.11.7a3.39,3.39,0,0,1-.08.44.52.52,0,0,0,.24.58l1.48.85-1,1.66-1.47-.85a.55.55,0,0,0-.63.08,4.86,4.86,0,0,1-2.12,1.22.53.53,0,0,0-.38.5V15H7.45v-1.7a.53.53,0,0,0-.38-.5A4.86,4.86,0,0,1,5,11.54a.53.53,0,0,0-.62-.08l-1.47.85-.5-.86L1.49,12l.73,1.26a.52.52,0,0,0,.71.19l1.59-.92a5.87,5.87,0,0,0,1.89,1.09v1.84a.52.52,0,0,0,.52.52h3a.52.52,0,0,0,.52-.52V13.64a5.91,5.91,0,0,0,1.9-1.09l1.59.92a.52.52,0,0,0,.71-.19l1.47-2.56a.5.5,0,0,0-.19-.71Z' })
        )
      )
    )
  );
};

Businessinteligence.propTypes = {
  color: propTypes.string
};

Businessinteligence.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Checkmark = function Checkmark(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.68 9.76',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '12.68 1.16 11.52 0 4.08 7.44 1.16 4.52 0 5.68 4.08 9.76 12.68 1.16' })
        )
      )
    )
  );
};

Checkmark.propTypes = {
  color: propTypes.string
};

Checkmark.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Circledcheckmark = function Circledcheckmark(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 79 79',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '39.5', cy: '39.5', r: '39.5' }),
          React__default.createElement('path', { d: 'M34,55.07h0a4,4,0,0,1-2.82-1.18L19,41.69A4,4,0,1,1,24.66,36L34,45.41l20.31-20.3A4,4,0,1,1,60,30.76L36.86,53.89A4,4,0,0,1,34,55.07Z' })
        )
      )
    )
  );
};

Circledcheckmark.propTypes = {
  color: propTypes.string
};

Circledcheckmark.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Circledintegration = function Circledintegration(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 36.94 36.94',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '18.47', cy: '18.47', r: '17.97' }),
          React__default.createElement('path', { d: 'M25.58,16a3.08,3.08,0,0,0-.68.07l-.12,0V14.18a1.73,1.73,0,0,0-1.73-1.72H21.13l0-.12a4,4,0,0,0,.07-.69,3.56,3.56,0,0,0-7.11,0,4,4,0,0,0,.07.69l0,.12H12.3a1.73,1.73,0,0,0-1.73,1.72v2.95a.71.71,0,0,0,.36.61.7.7,0,0,0,.7,0,2.09,2.09,0,0,1,1.13-.33,2.17,2.17,0,1,1,0,4.34,2.09,2.09,0,0,1-1.13-.33.71.71,0,0,0-.37-.1.66.66,0,0,0-.33.09.69.69,0,0,0-.36.6v3a1.73,1.73,0,0,0,1.73,1.72H23.05a1.73,1.73,0,0,0,1.73-1.72V23l.12,0a3.08,3.08,0,0,0,.68.07,3.55,3.55,0,1,0,0-7.1Zm0,5.72a2.09,2.09,0,0,1-1.13-.33A.69.69,0,0,0,23.4,22v3a.35.35,0,0,1-.35.34H12.3a.35.35,0,0,1-.35-.34V23l.12,0a3.23,3.23,0,0,0,.69.07,3.55,3.55,0,1,0,0-7.1,3.23,3.23,0,0,0-.69.07l-.12,0V14.18a.35.35,0,0,1,.35-.34h2.95a.69.69,0,0,0,.58-1.05,2.25,2.25,0,0,1-.33-1.14,2.17,2.17,0,1,1,4.34,0,2.23,2.23,0,0,1-.32,1.14.66.66,0,0,0,0,.69.69.69,0,0,0,.6.36h2.95a.35.35,0,0,1,.35.34v2.95a.68.68,0,0,0,1.05.59,2.09,2.09,0,0,1,1.13-.33,2.17,2.17,0,1,1,0,4.34Z' })
        )
      )
    )
  );
};

Circledintegration.propTypes = {
  color: propTypes.string
};

Circledintegration.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Circleduser = function Circleduser(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 36.94 36.94',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '18.47', cy: '18.47', r: '17.97' }),
          React__default.createElement('path', { d: 'M18.47,8.27a4.46,4.46,0,1,0,4.46,4.46A4.46,4.46,0,0,0,18.47,8.27Zm0,7.35a2.9,2.9,0,1,1,2.9-2.89A2.9,2.9,0,0,1,18.47,15.62Z' }),
          React__default.createElement('path', { d: 'M18.47,18.64c-5,0-8.48,2.57-8.48,6.26v1.83H27V24.9C27,21.21,23.46,18.64,18.47,18.64Zm7,6.65H11.43V24.9c0-2.84,2.9-4.82,7-4.82s7,2,7,4.82Z' })
        )
      )
    )
  );
};

Circleduser.propTypes = {
  color: propTypes.string
};

Circleduser.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Cluedin = function Cluedin(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        id: 'Layer_1',
        'data-name': 'Layer 1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20.2 23.8',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1-2' },
          React__default.createElement('path', {
            d: 'M17.89,16a.51.51,0,0,0-.71,0,5.43,5.43,0,1,1,0-8,.51.51,0,0,0,.71,0l3.85-3.85a.53.53,0,0,0,0-.72h0A11.89,11.89,0,0,0,1.91,9.28a.52.52,0,0,0,.37.63H5.09a.54.54,0,0,0,.5-.34V9.45A8.19,8.19,0,0,1,15.93,4.21a8,8,0,0,1,2.78,1.56L17.5,7A6.44,6.44,0,0,0,7.06,11.52h-5a.51.51,0,0,0-.36.64.54.54,0,0,0,.36.36h5A6.44,6.44,0,0,0,17.5,17.13l1.21,1.21a8.19,8.19,0,0,1-11.55-.91,8.34,8.34,0,0,1-1.57-2.82h0a.49.49,0,0,0-.49-.4H2.41a.5.5,0,0,0-.49.42h0a.15.15,0,0,0,0,.13v.06a11.91,11.91,0,0,0,19.81,5.79.51.51,0,0,0,0-.72h0ZM13.42,2.8A9.21,9.21,0,0,0,4.75,8.89H3.09A10.84,10.84,0,0,1,16.6,1.64a11,11,0,0,1,4,2.21L19.4,5.05A9.19,9.19,0,0,0,13.42,2.8Zm.07,20.1a10.83,10.83,0,0,1-10.4-7.71H4.76a9.21,9.21,0,0,0,11.8,5.52A9.5,9.5,0,0,0,19.44,19l1.15,1.2A10.84,10.84,0,0,1,13.49,22.9Z',
            transform: 'translate(-1.68 -0.12)'
          })
        )
      )
    )
  );
};

Cluedin.propTypes = {
  color: propTypes.string
};

Cluedin.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Connectors = function Connectors(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.27',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '4.88', cy: '4.27', r: '1.5' }),
          React__default.createElement('circle', { cx: '8.07', cy: '7.27', r: '1.5' }),
          React__default.createElement('circle', { cx: '8.07', cy: '13.77', r: '1.5' }),
          React__default.createElement('circle', { cx: '8.07', cy: '1.5', r: '1.5' }),
          React__default.createElement('circle', { cx: '11.26', cy: '4.27', r: '1.5' }),
          React__default.createElement('path', { d: 'M5.77,11V9.63A6.57,6.57,0,0,1,1.3,3.53H0A7.86,7.86,0,0,0,5.77,11Z' }),
          React__default.createElement('path', { d: 'M10.37,9.48v1.39a7.84,7.84,0,0,0,5.38-7.34h-1.3A6.56,6.56,0,0,1,10.37,9.48Z' })
        )
      )
    )
  );
};

Connectors.propTypes = {
  color: propTypes.string
};

Connectors.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Consuming = function Consuming(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.27',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '10.86', cy: '10.99', r: '1.5' }),
          React__default.createElement('circle', { cx: '7.68', cy: '7.99', r: '1.5' }),
          React__default.createElement('circle', { cx: '7.68', cy: '1.5', r: '1.5' }),
          React__default.createElement('circle', { cx: '7.68', cy: '13.77', r: '1.5' }),
          React__default.createElement('circle', { cx: '4.49', cy: '10.99', r: '1.5' }),
          React__default.createElement('path', { d: 'M10,4.28V5.64a6.56,6.56,0,0,1,4.47,6.1h1.3A7.89,7.89,0,0,0,10,4.28Z' }),
          React__default.createElement('path', { d: 'M5.38,5.79V4.39A7.84,7.84,0,0,0,0,11.74H1.3A6.54,6.54,0,0,1,5.38,5.79Z' })
        )
      )
    )
  );
};

Consuming.propTypes = {
  color: propTypes.string
};

Consuming.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Cookie = function Cookie(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        id: 'Layer_1',
        'data-name': 'Layer 1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        width: '24px',
        height: '24px'
      },
      React__default.createElement('path', { d: 'M.5,12A11.5,11.5,0,1,0,12,.5,11.51,11.51,0,0,0,.5,12Zm2,0A9.49,9.49,0,1,1,12,21.49,9.5,9.5,0,0,1,2.51,12Z' }),
      React__default.createElement('circle', { cx: '10.06', cy: '8.01', r: '1.5' }),
      React__default.createElement('circle', { cx: '16.06', cy: '10.62', r: '2.46' })
    )
  );
};

Cookie.propTypes = {
  color: propTypes.string
};

Cookie.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Country = function Country(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 13 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.51.34A5.06,5.06,0,1,0,12.57,5.4,5.07,5.07,0,0,0,7.51.34Zm0,9.14A4.08,4.08,0,1,1,11.59,5.4,4.08,4.08,0,0,1,7.51,9.48Z' }),
          React__default.createElement('path', { d: 'M12.81,10.71a.64.64,0,0,0-.91-.91A6.22,6.22,0,0,1,3,1.09.64.64,0,1,0,2.1.2,7.5,7.5,0,0,0,6.9,12.88v1.83H5.5A.64.64,0,0,0,5.5,16H9.6a.64.64,0,0,0,0-1.29H8.19V12.87A7.45,7.45,0,0,0,12.81,10.71Z' })
        )
      )
    )
  );
};

Country.propTypes = {
  color: propTypes.string
};

Country.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Dataretention = function Dataretention(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.37 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13,8.65V7.5h.8a.38.38,0,0,0,.37-.37.37.37,0,0,0-.37-.37H13v-2h.8a.38.38,0,0,0,.37-.37A.37.37,0,0,0,13.83,4H13V2.61a1.24,1.24,0,0,0-1.24-1.25H10.25v-1A.38.38,0,0,0,9.88,0a.37.37,0,0,0-.37.37v1h-2v-1a.37.37,0,0,0-.74,0v1h-2v-1A.37.37,0,0,0,4,.37v1H2.41A1.26,1.26,0,0,0,1.16,2.61V4H.37A.37.37,0,0,0,0,4.35a.38.38,0,0,0,.37.37h.79v2H.37A.37.37,0,0,0,0,7.13a.38.38,0,0,0,.37.37h.79v2H.37a.37.37,0,1,0,0,.73h.79V12a1.25,1.25,0,0,0,1.25,1.24H4v1a.37.37,0,0,0,.74,0v-1h2v1a.37.37,0,0,0,.74,0v-1h.41A3.82,3.82,0,1,0,13,8.65ZM2.31,12.08V10a.14.14,0,0,0,0-.06.11.11,0,0,0,0-.06V7.19a.1.1,0,0,0,0-.12V4.41a.1.1,0,0,0,0-.12V2.51h9.57V4.29s0,0,0,.06,0,0,0,.06V7.07s0,0,0,.06,0,0,0,.06V8.37l-.33,0a3.83,3.83,0,0,0-3.83,3.73ZM11.55,15A2.78,2.78,0,0,1,9,13.23a2.67,2.67,0,0,1-.21-1.06.31.31,0,0,1,0-.09,2.78,2.78,0,0,1,2.78-2.69,1.76,1.76,0,0,1,.33,0,2.51,2.51,0,0,1,1.15.4A2.79,2.79,0,0,1,11.55,15Z' }),
          React__default.createElement('path', { d: 'M13.32,12H12.21a.69.69,0,0,0-.48-.44V10.31a.23.23,0,0,0-.23-.23.23.23,0,0,0-.24.23v1.33A.7.7,0,0,0,11.55,13a.68.68,0,0,0,.66-.47h1.11a.23.23,0,0,0,.24-.23A.24.24,0,0,0,13.32,12Z' }),
          React__default.createElement('path', { d: 'M4.12,9.39a.72.72,0,1,0,.72.71A.71.71,0,0,0,4.12,9.39Z' })
        )
      )
    )
  );
};

Dataretention.propTypes = {
  color: propTypes.string
};

Dataretention.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Datasoverignty = function Datasoverignty(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 13.2 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13,5a.55.55,0,0,0,.16-.38V.56A.56.56,0,0,0,12.64,0H10.39a.56.56,0,0,0-.55.56v1H8.62v-1A.56.56,0,0,0,8.07,0H5.15a.56.56,0,0,0-.56.56v1H3.38v-1A.56.56,0,0,0,2.82,0H.58A.56.56,0,0,0,0,.56V4.63A.58.58,0,0,0,.17,5L1.61,6.53v5.94l-1.36.89a.56.56,0,0,0-.25.47v1.61A.56.56,0,0,0,.56,16H12.62a.56.56,0,0,0,.55-.56V13.83a.56.56,0,0,0-.25-.47l-1.35-.89V6.57ZM10.7,13.24l1.36.89v.75H1.12v-.75l1.35-.89a.56.56,0,0,0,.25-.47V6.48a.54.54,0,0,0-.13-.54L1.14,4.41V1.12H2.26v1a.56.56,0,0,0,.56.55H5.15a.56.56,0,0,0,.56-.55v-1h1.8v1a.56.56,0,0,0,.56.55h2.32A.56.56,0,0,0,11,2.11v-1h1.13v3.3L10.71,5.86a.55.55,0,0,0-.26.47v6.44A.59.59,0,0,0,10.7,13.24Z' }),
          React__default.createElement('path', { d: 'M6.6,5.31A2.23,2.23,0,0,0,4.37,7.53v2.6a.56.56,0,0,0,.56.56H8.26a.56.56,0,0,0,.56-.56V7.53A2.23,2.23,0,0,0,6.6,5.31ZM7.71,9.58H5.49v-2a1.11,1.11,0,1,1,2.22,0Z' })
        )
      )
    )
  );
};

Datasoverignty.propTypes = {
  color: propTypes.string
};

Datasoverignty.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Databreach = function Databreach(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.05 15.65',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M10.53,6.31h-.29V4.22A4.22,4.22,0,0,0,9,1.21l-.76,1a2.94,2.94,0,0,1,.81,2V6.3H8.15L7.44,7.54h0L6.59,9,4.94,6.71c-.09-.13-.19-.27-.27-.4H3V4.22a3,3,0,0,1,3-3,2.86,2.86,0,0,1,.73.1c.32-.32.63-.65.92-1A4.09,4.09,0,0,0,6,0,4.23,4.23,0,0,0,1.8,4.22V6.3H1.52A1.52,1.52,0,0,0,0,7.83v6.31a1.52,1.52,0,0,0,1.52,1.51h9a1.52,1.52,0,0,0,1.52-1.51V7.83A1.52,1.52,0,0,0,10.53,6.31Zm-9.3,8.11V7.54H4.3L6.09,10l-.6,2.47,1.16,1.93Zm6.59,0L6.56,12.33l.54-2.22L8.6,7.54h2.22v6.88Z' })
        )
      )
    )
  );
};

Databreach.propTypes = {
  color: propTypes.string
};

Databreach.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Datacleaning = function Datacleaning(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.01 16.86',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.28,12.63,13.07,9.42A3,3,0,0,0,13,5.33L11.36,3.75,7.81.19a.66.66,0,0,0-.92,0L.19,6.89a.66.66,0,0,0,0,.92l3.56,3.55L5.33,13a3,3,0,0,0,4.24,0h0l3.2,3.19A2.49,2.49,0,0,0,17,14.38,2.44,2.44,0,0,0,16.28,12.63ZM2.89,6,4.75,7.88l.71-.71L3.6,5.32,5.32,3.6,7.17,5.46l.71-.71L6,2.89,7.35,1.57,10,4.21,4.21,10,1.57,7.35Zm3.36,6L5.13,10.9,10.9,5.13,12,6.25a1.7,1.7,0,0,1,0,2.4L11.71,9h0l-2.6,2.6h0L8.65,12A1.7,1.7,0,0,1,6.25,12Zm9.11,3.19h0a1.18,1.18,0,0,1-1.67,0L10.49,12l1.68-1.68,3.19,3.2a1.17,1.17,0,0,1,0,1.67Z' })
        )
      )
    )
  );
};

Datacleaning.propTypes = {
  color: propTypes.string
};

Datacleaning.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Datalineage = function Datalineage(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.68 17.17',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13.27,11.31V8.51A.54.54,0,0,0,12.72,8H8.19V3.5H9.8V5.33a.55.55,0,0,0,.55.55h4.74a.55.55,0,0,0,.55-.55V.58A.54.54,0,0,0,15.09,0H10.35A.55.55,0,0,0,9.8.58V2.41h-4a3,3,0,1,0,0,1.09H7.09V8H3a.54.54,0,0,0-.55.54v2.78H.58a.55.55,0,0,0-.54.55v4.74a.54.54,0,0,0,.54.55H5.33a.55.55,0,0,0,.55-.55V11.84a.55.55,0,0,0-.55-.55H3.5V9.06h8.67v2.25a3,3,0,1,0,1.1,0ZM10.9,1.13h3.65V4.78H10.9ZM3,4.75A1.79,1.79,0,1,1,4.74,3,1.79,1.79,0,0,1,3,4.75ZM4.78,16H1.13V12.39H4.78Zm7.94,0a1.79,1.79,0,1,1,1.79-1.79A1.79,1.79,0,0,1,12.72,16Z' })
        )
      )
    )
  );
};

Datalineage.propTypes = {
  color: propTypes.string
};

Datalineage.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Datapolicy = function Datapolicy(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.78 16.04',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.1,0a3.63,3.63,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.36,2.36,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z' }),
          React__default.createElement('path', { d: 'M0,16H9.52V14.42H1.58v-.11c0-2.19,2.27-3.72,5.52-3.72a8.48,8.48,0,0,1,2.42.33V9.29A10.69,10.69,0,0,0,7.1,9C2.92,9,0,11.19,0,14.31Z' }),
          React__default.createElement('path', { d: 'M13.05,10.59a2.73,2.73,0,1,0,2.73,2.73A2.72,2.72,0,0,0,13.05,10.59Zm1.58,2.16L12.8,14.57l-1.32-1.32a.29.29,0,0,1,.41-.41l.91.91,1.42-1.41a.28.28,0,0,1,.41,0A.3.3,0,0,1,14.63,12.75Z' })
        )
      )
    )
  );
};

Datapolicy.propTypes = {
  color: propTypes.string
};

Datapolicy.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Datacatalog = function Datacatalog(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.44 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.22,10.09c1.49,0,3-.45,3-1.3V4.73c0-.85-1.5-1.3-3-1.3s-3,.45-3,1.3V8.79C6.23,9.64,7.73,10.09,9.22,10.09ZM9.22,4c1.5,0,2.42.48,2.42.73s-.92.73-2.42.73S6.8,5,6.8,4.73,7.72,4,9.22,4ZM6.8,5.52l.08.05A5.34,5.34,0,0,0,9.22,6a5.38,5.38,0,0,0,2.34-.46l.08-.05v.57c0,.25-.92.72-2.42.72S6.8,6.34,6.8,6.09Zm0,1.36.08,0a5.34,5.34,0,0,0,2.34.47,5.34,5.34,0,0,0,2.34-.47l.08,0v.56c0,.26-.92.73-2.42.73S6.8,7.7,6.8,7.44Zm0,1.35.08,0a5.34,5.34,0,0,0,2.34.47,5.34,5.34,0,0,0,2.34-.47l.08,0v.56c0,.26-.92.73-2.42.73S6.8,9.05,6.8,8.79Z' }),
          React__default.createElement('path', { d: 'M16.44.65A.65.65,0,0,0,15.79,0H4.3A2.3,2.3,0,0,0,2,2.3v.92H1.73a1.73,1.73,0,0,0-1.15,3A1.73,1.73,0,0,0,0,7.52,1.75,1.75,0,0,0,.58,8.81,1.71,1.71,0,0,0,0,10.09a1.74,1.74,0,0,0,1.73,1.73H2V13.7A2.3,2.3,0,0,0,4.3,16H15.79a.64.64,0,0,0,.4-.15h.1v-.1a.64.64,0,0,0,.15-.4ZM3.31,13.25a1,1,0,0,1,.92-.56h10.9v2H4.3a1,1,0,0,1-1-1Zm1-11.94H15.13V11.69H4.23a2,2,0,0,0-.92.22V2.3A1,1,0,0,1,4.3,1.31ZM2,8.34H1.73a.82.82,0,0,1-.81-.82.81.81,0,0,1,.81-.81H2Zm-.27-4.2H2V5.77H1.73A.81.81,0,0,1,.92,5,.82.82,0,0,1,1.73,4.14Zm0,6.76a.81.81,0,0,1-.81-.81.82.82,0,0,1,.81-.82H2V10.9Z' })
        )
      )
    )
  );
};

Datacatalog.propTypes = {
  color: propTypes.string
};

Datacatalog.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Directory = function Directory(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 13.57',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.48,2.43H7.75L6.38.61A1.52,1.52,0,0,0,5.16,0H1.52A1.52,1.52,0,0,0,0,1.52V12.05a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,12.05V3.95A1.52,1.52,0,0,0,14.48,2.43ZM1.42,12.15V1.42h3.8L6.58,3.24a1.53,1.53,0,0,0,1.22.61h6.78v8.3Z' })
        )
      )
    )
  );
};

Directory.propTypes = {
  color: propTypes.string
};

Directory.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Document = function Document(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12.72,3.64,9.07,0H1.43A1.44,1.44,0,0,0,0,1.43V14.57A1.44,1.44,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.43-1.43ZM1.23,14.77V1.23h7V4.51h3.28V14.77Z' })
        )
      )
    )
  );
};

Document.propTypes = {
  color: propTypes.string
};

Document.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Download = function Download(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.78',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '4.29 6.04 7.88 9.63 11.46 6.04 10.51 5.09 8.55 7.04 8.55 0 7.2 0 7.2 7.04 5.24 5.09 4.29 6.04' }),
          React__default.createElement('path', { d: 'M15.75,15.78V9.63H10.8l-1.6,1.6H6.55L5,9.63H0v6.15ZM1.35,11H4.4L6,12.58H9.75l1.6-1.6H14.4v3.45h-13Z' })
        )
      )
    )
  );
};

Download.propTypes = {
  color: propTypes.string
};

Download.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Duplicates = function Duplicates(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.55 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.67,12.55h7.88V11.2h-8V2.4H3.2v8.68A1.47,1.47,0,0,0,4.67,12.55Z' }),
          React__default.createElement('path', { d: 'M1.47,15.75H9.35V14.4h-8V5.6H0v8.68A1.47,1.47,0,0,0,1.47,15.75Z' }),
          React__default.createElement('path', { d: 'M15.07,0H7.88A1.47,1.47,0,0,0,6.4,1.47V7.88A1.47,1.47,0,0,0,7.88,9.35h7.19a1.47,1.47,0,0,0,1.48-1.47V1.47A1.47,1.47,0,0,0,15.07,0ZM7.75,8V1.35H15.2V8Z' })
        )
      )
    )
  );
};

Duplicates.propTypes = {
  color: propTypes.string
};

Duplicates.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Engagement = function Engagement(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.62 10.65',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M17.42,5A9.93,9.93,0,0,0,.2,5L0,5.32l.2.35a9.93,9.93,0,0,0,17.21,0l.2-.35ZM8.81,9.25A8.58,8.58,0,0,1,1.63,5.32,8.53,8.53,0,0,1,16,5.32,8.58,8.58,0,0,1,8.81,9.25Z' }),
          React__default.createElement('path', { d: 'M8.81,2.28a3,3,0,1,0,3,3A3,3,0,0,0,8.81,2.28Zm0,5.08a2,2,0,1,1,2-2A2,2,0,0,1,8.81,7.37Z' })
        )
      )
    )
  );
};

Engagement.propTypes = {
  color: propTypes.string
};

Engagement.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Erase = function Erase(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        id: 'Layer_1',
        'data-name': 'Layer 1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        width: '24px',
        height: '24px'
      },
      React__default.createElement('path', { d: 'M22.89,21H13.37l9.92-9.93a2,2,0,0,0,0-2.91L16.74,1.6a2.08,2.08,0,0,0-2.92,0L.71,14.72a2,2,0,0,0,0,2.91L4.07,21h-3a1,1,0,1,0,0,2H22.89a1,1,0,1,0,0-2ZM15.28,2.69l6.93,6.93-2,2L13.27,4.7ZM12,6l6.93,6.93L12,19.82,5.07,12.89ZM1.79,16.17l2-2L10.63,21h-4Z' })
    )
  );
};

Erase.propTypes = {
  color: propTypes.string
};

Erase.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Filearchive = function Filearchive(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 13.57',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.48,2.43H7.75L6.38.61A1.52,1.52,0,0,0,5.16,0H1.52A1.52,1.52,0,0,0,0,1.52V12.05a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,12.05V3.95A1.52,1.52,0,0,0,14.48,2.43ZM1.42,12.15V1.42h3.8L6.58,3.24a1.53,1.53,0,0,0,1.22.61h6.78v8.3Z' }),
          React__default.createElement('rect', { x: '11.62', y: '8.59', width: '1', height: '0.96' }),
          React__default.createElement('rect', { x: '11.62', y: '4.75', width: '1', height: '0.96' }),
          React__default.createElement('rect', { x: '11.62', y: '10.52', width: '1', height: '0.96' }),
          React__default.createElement('rect', { x: '11.62', y: '6.67', width: '1', height: '0.96' }),
          React__default.createElement('rect', { x: '10.62', y: '5.69', width: '1', height: '0.96' }),
          React__default.createElement('rect', { x: '10.62', y: '7.63', width: '1', height: '0.96' }),
          React__default.createElement('rect', { x: '10.62', y: '9.56', width: '1', height: '0.96' })
        )
      )
    )
  );
};

Filearchive.propTypes = {
  color: propTypes.string
};

Filearchive.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var File = function File(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12.72,3.64,9.07,0H1.43A1.44,1.44,0,0,0,0,1.43V14.57A1.44,1.44,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.43-1.43ZM1.23,14.77V1.23h7V4.51h3.28V14.77Z' })
        )
      )
    )
  );
};

File.propTypes = {
  color: propTypes.string
};

File.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Forbidden = function Forbidden(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        id: 'Layer_1',
        'data-name': 'Layer 1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        width: '24px',
        height: '24px'
      },
      React__default.createElement('path', { d: 'M12,.5A11.5,11.5,0,1,0,23.5,12,11.51,11.51,0,0,0,12,.5Zm0,21A9.49,9.49,0,1,1,21.49,12,9.5,9.5,0,0,1,12,21.49Z' }),
      React__default.createElement('polygon', { points: '17.21 8.23 15.77 6.79 12 10.56 8.23 6.79 6.79 8.23 10.56 12 6.79 15.77 8.23 17.21 12 13.44 15.77 17.21 17.21 15.77 13.44 12 17.21 8.23' })
    )
  );
};

Forbidden.propTypes = {
  color: propTypes.string
};

Forbidden.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Gdpr = function Gdpr(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.32 22.5',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,11.25v9.07A2.18,2.18,0,0,0,2.18,22.5h13a2.18,2.18,0,0,0,2.18-2.18V11.25a2.18,2.18,0,0,0-2.18-2.18h-.41v-3a6.07,6.07,0,0,0-12.13,0v3l-.4,0A2.18,2.18,0,0,0,0,11.25ZM4.36,6.07a4.3,4.3,0,1,1,8.6,0v3l-.4,0H4.36ZM1.77,10.84H15.55v9.89H1.77Z' }),
          React__default.createElement('polygon', { points: '8.66 12.49 9.51 14.62 11.64 14.62 9.8 16.17 10.79 18.45 8.66 17.04 6.53 18.45 7.52 16.17 5.67 14.62 7.81 14.62 8.66 12.49' })
        )
      )
    )
  );
};

Gdpr.propTypes = {
  color: propTypes.string
};

Gdpr.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Governance = function Governance(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12.72,9.65V.7A.7.7,0,0,0,12,0H.7A.7.7,0,0,0,0,.7v9a3.93,3.93,0,0,0,1.67,3.21l4.29,3a.73.73,0,0,0,.8,0l4.29-3A3.93,3.93,0,0,0,12.72,9.65Zm-2.47,2.06L6.36,14.45,2.47,11.71A2.53,2.53,0,0,1,1.39,9.65V1.39h9.94V9.65A2.53,2.53,0,0,1,10.25,11.71Z' }),
          React__default.createElement('path', { d: 'M6.36,3.77c-1.48,0-3,.45-3,1.3v4c0,.85,1.5,1.3,3,1.3s3-.45,3-1.3v-4C9.34,4.22,7.84,3.77,6.36,3.77ZM8.77,9.1c0,.26-.92.73-2.41.73S4,9.36,4,9.1V8.55l.08,0a5.33,5.33,0,0,0,2.33.46,5.33,5.33,0,0,0,2.33-.46l.08,0Zm0-1.34c0,.25-.92.72-2.41.72S4,8,4,7.76V7.2l.08,0a5.32,5.32,0,0,0,2.33.47,5.32,5.32,0,0,0,2.33-.47l.08,0Zm0-1.35c0,.26-.92.73-2.41.73S4,6.67,4,6.41V5.85l.08,0a5.18,5.18,0,0,0,2.33.47,5.18,5.18,0,0,0,2.33-.47l.08,0ZM6.36,5.79C4.87,5.79,4,5.32,4,5.07s.92-.73,2.41-.73,2.41.47,2.41.73S7.85,5.79,6.36,5.79Z' })
        )
      )
    )
  );
};

Governance.propTypes = {
  color: propTypes.string
};

Governance.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Graphql = function Graphql(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.44 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13.45,9.8V6.26a1.61,1.61,0,0,0-.62-3.1,1.63,1.63,0,0,0-1.07.4L8.85,1.92a1.63,1.63,0,0,0,0-.31,1.61,1.61,0,1,0-3.22,0,1.73,1.73,0,0,0,0,.32l-3,1.67A1.61,1.61,0,1,0,1.11,6.3V9.75a1.61,1.61,0,1,0,1.64,2.67l2.94,1.65a1.73,1.73,0,0,0,0,.32,1.61,1.61,0,1,0,3.22,0,1.63,1.63,0,0,0,0-.31l2.88-1.62a1.61,1.61,0,0,0,2.71-1.18A1.58,1.58,0,0,0,13.45,9.8ZM3.2,4.49,5.9,3,2.12,9.42V6.3a1.61,1.61,0,0,0,1.1-1.53A2.64,2.64,0,0,0,3.2,4.49Zm9.24,1.85V9.4L8.74,3l2.51,1.42a2,2,0,0,0,0,.34A1.63,1.63,0,0,0,12.44,6.34Zm-9.3,4.44a1.78,1.78,0,0,0-.32-.57l4.12-7a1.64,1.64,0,0,0,.73,0l4,7a1.51,1.51,0,0,0-.4.65Zm7.74,1L8.36,13.2a1.63,1.63,0,0,0-2.17,0l-2.5-1.41Z' })
        )
      )
    )
  );
};

Graphql.propTypes = {
  color: propTypes.string
};

Graphql.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Group = function Group(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 22.39 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M11.3,3.67A2.74,2.74,0,1,0,14,6.4,2.74,2.74,0,0,0,11.3,3.67Zm0,4.51A1.78,1.78,0,1,1,13.08,6.4,1.78,1.78,0,0,1,11.3,8.18Z' }),
          React__default.createElement('path', { d: 'M11.3,10.47c-3.15,0-5.36,1.65-5.36,4v1.28H16.66V14.47C16.66,12.12,14.46,10.47,11.3,10.47Zm4.17,4.09H7.13v-.09c0-1.65,1.72-2.8,4.17-2.8s4.17,1.15,4.17,2.8Z' }),
          React__default.createElement('path', { d: 'M17,0a2.74,2.74,0,1,0,2.74,2.74A2.74,2.74,0,0,0,17,0Zm0,4.52a1.78,1.78,0,1,1,1.78-1.78A1.78,1.78,0,0,1,17,4.52Z' }),
          React__default.createElement('path', { d: 'M17.14,6.82H17a7.37,7.37,0,0,0-2.44.43V8.53A5.83,5.83,0,0,1,17.08,8c2.43,0,4.12,1.17,4.12,2.81v.08H17c0,.43,0,.78,0,1.19h5.36V10.81C22.39,8.48,20.23,6.85,17.14,6.82Z' }),
          React__default.createElement('path', { d: 'M2.62,2.74A2.74,2.74,0,1,0,5.36,0,2.74,2.74,0,0,0,2.62,2.74Zm1,0A1.78,1.78,0,1,1,5.36,4.52,1.78,1.78,0,0,1,3.58,2.74Z' }),
          React__default.createElement('path', { d: 'M5.26,6.82h.1a7.37,7.37,0,0,1,2.44.43V8.53A5.83,5.83,0,0,0,5.31,8C2.88,8,1.19,9.17,1.19,10.81v.08H5.37c0,.43,0,.78,0,1.19H0V10.81C0,8.48,2.16,6.85,5.26,6.82Z' })
        )
      )
    )
  );
};

Group.propTypes = {
  color: propTypes.string
};

Group.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Hamburger = function Hamburger(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', { width: '16', height: '1.73' }),
          React__default.createElement('rect', { y: '7.14', width: '16', height: '1.73' }),
          React__default.createElement('rect', { y: '14.28', width: '16', height: '1.72' })
        )
      )
    )
  );
};

Hamburger.propTypes = {
  color: propTypes.string
};

Hamburger.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Help = function Help(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('path', { d: 'M8.53,10.44H7.08V8.26h.72a1.61,1.61,0,1,0-1.34-2.5L5.26,5A3.05,3.05,0,1,1,8.53,9.62Z' }),
          React__default.createElement('rect', { x: '7.07', y: '11.04', width: '1.44', height: '1.27' })
        )
      )
    )
  );
};

Help.propTypes = {
  color: propTypes.string
};

Help.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var History = function History(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.36 17.4',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7,9a1.7,1.7,0,0,0,3.32.44L13,9.35a.58.58,0,0,0,.55-.59.57.57,0,0,0-.6-.54l-2.68.1a1.71,1.71,0,0,0-1.2-1l-.12-3.1a.57.57,0,1,0-1.14,0l.12,3.19A1.7,1.7,0,0,0,7,9Z' }),
          React__default.createElement('path', { d: 'M8.32,0A8.66,8.66,0,0,0,2.27,2.82L.53,1.09V5.4H4.84L3.26,3.81A7.29,7.29,0,1,1,1.4,9.4H0A8.69,8.69,0,1,0,8.32,0Z' })
        )
      )
    )
  );
};

History.propTypes = {
  color: propTypes.string
};

History.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Idbadge = function Idbadge(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 14.38',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M2.33,11.24A2.26,2.26,0,0,1,4.76,8.81h0a2.26,2.26,0,0,1,2.43,2.43Z' }),
          React__default.createElement('circle', { cx: '4.76', cy: '6.38', r: '1.62' }),
          React__default.createElement('rect', { x: '8.91', y: '6.48', width: '4.66', height: '1.42' }),
          React__default.createElement('rect', { x: '8.91', y: '9.72', width: '4.66', height: '1.42' }),
          React__default.createElement('path', { d: 'M14.48,1.62H10.21l0-.07a2.31,2.31,0,0,0-4.37,0l0,.07H1.52A1.52,1.52,0,0,0,0,3.14v9.72a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,12.86V3.14A1.52,1.52,0,0,0,14.48,1.62ZM8,1.42a.91.91,0,1,1-.91.91A.91.91,0,0,1,8,1.42ZM1.42,13V3H5.79l0,.07a2.31,2.31,0,0,0,4.37,0l0-.07h4.37V13Z' })
        )
      )
    )
  );
};

Idbadge.propTypes = {
  color: propTypes.string
};

Idbadge.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Industry = function Industry(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.57 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,.82V14.93a.82.82,0,0,0,.82.82H17.76a.82.82,0,0,0,.82-.82V7.4a.82.82,0,0,0-.82-.82H4.46V3.64a.82.82,0,0,0-.24-.58L1.39.24A.81.81,0,0,0,.82,0,.83.83,0,0,0,.5.06.81.81,0,0,0,0,.82Zm1.63,2L2.82,4V7.4a.82.82,0,0,0,.82.82h13.3v5.9H1.63Z' }),
          React__default.createElement('rect', { x: '3.76', y: '10.35', width: '2.57', height: '1.63' }),
          React__default.createElement('rect', { x: '8.47', y: '10.35', width: '2.57', height: '1.63' }),
          React__default.createElement('rect', { x: '13.18', y: '10.35', width: '2.57', height: '1.63' })
        )
      )
    )
  );
};

Industry.propTypes = {
  color: propTypes.string
};

Industry.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Integration = function Integration(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12.94,6.82a3,3,0,0,0-.59.06l-.1,0V5.24a1.49,1.49,0,0,0-1.49-1.49H9.1l0-.1a3,3,0,0,0,.06-.59,3.06,3.06,0,0,0-6.12,0,3,3,0,0,0,.06.59l0,.1H1.49A1.49,1.49,0,0,0,0,5.24V7.78a.6.6,0,0,0,.91.51,1.84,1.84,0,0,1,1-.28,1.87,1.87,0,0,1,0,3.74,1.84,1.84,0,0,1-1-.28A.6.6,0,0,0,0,12v2.54A1.49,1.49,0,0,0,1.49,16h9.27a1.49,1.49,0,0,0,1.49-1.49V12.86l.1,0a3,3,0,0,0,.59.06,3.06,3.06,0,1,0,0-6.12Zm0,4.93a1.84,1.84,0,0,1-1-.28.6.6,0,0,0-.91.51v2.54a.3.3,0,0,1-.3.3H1.49a.3.3,0,0,1-.3-.3V12.86l.1,0a3,3,0,0,0,.59.06,3.06,3.06,0,1,0,0-6.12,3,3,0,0,0-.59.06l-.1,0V5.24a.3.3,0,0,1,.3-.3H4A.6.6,0,0,0,4.54,4a1.83,1.83,0,0,1-.28-1A1.87,1.87,0,0,1,8,3.06a1.84,1.84,0,0,1-.28,1,.6.6,0,0,0,.51.91h2.54a.3.3,0,0,1,.3.3V7.78a.6.6,0,0,0,.91.51,1.84,1.84,0,0,1,1-.28,1.87,1.87,0,1,1,0,3.74Z' })
        )
      )
    )
  );
};

Integration.propTypes = {
  color: propTypes.string
};

Integration.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Intelligence = function Intelligence(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 13.51 15.97',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13.16,7.23C12.35,3.67,11.51,0,6.35,0A6.36,6.36,0,0,0,0,6.35v9A.62.62,0,0,0,.61,16H8.8a.62.62,0,0,0,.62-.61V13.51h1a1.44,1.44,0,0,0,1.44-1.43V9.42h1a.6.6,0,0,0,.48-.24.61.61,0,0,0,.12-.52q-.18-.71-.33-1.38Zm-1.9,1a.61.61,0,0,0-.61.61v3.48H8.8a.62.62,0,0,0-.61.62v1.84h-7V6.35A5.12,5.12,0,0,1,6.35,1.23c4,0,4.69,2.27,5.61,6.27l.16.69Z' }),
          React__default.createElement('path', { d: 'M8.8,7.58V6.76H7.93a1.57,1.57,0,0,0-.18-.42l.62-.62L7.8,5.14l-.63.62a1.23,1.23,0,0,0-.41-.17V4.71H5.94v.88a1.28,1.28,0,0,0-.42.17L4.9,5.14l-.58.58.62.62a1.94,1.94,0,0,0-.17.42H3.89v.82h.88A2.09,2.09,0,0,0,4.94,8l-.62.62.58.58.62-.62a1.57,1.57,0,0,0,.42.18v.87h.82V8.75a1.5,1.5,0,0,0,.41-.18l.63.62.57-.58L7.75,8a1.65,1.65,0,0,0,.18-.41ZM6.35,8a.82.82,0,1,1,.82-.82A.82.82,0,0,1,6.35,8Z' })
        )
      )
    )
  );
};

Intelligence.propTypes = {
  color: propTypes.string
};

Intelligence.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Iteration = function Iteration(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M3.48,3.48A6.39,6.39,0,0,1,14.4,8H16A8,8,0,0,0,2.35,2.35L.8.8V5.6H5.6Z' }),
          React__default.createElement('path', { d: 'M12.52,12.52A6.39,6.39,0,0,1,1.6,8H0a8,8,0,0,0,13.65,5.65L15.2,15.2V10.4H10.4Z' })
        )
      )
    )
  );
};

Iteration.propTypes = {
  color: propTypes.string
};

Iteration.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Language = function Language(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 21.8 19.66',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M18.59,13.42,16.16,6.28a.54.54,0,0,0-1,0l-2.57,7.14a.65.65,0,0,0,.37.69h.15a.47.47,0,0,0,.51-.36l.51-1.25a.07.07,0,0,1,.05,0h2.92a.07.07,0,0,1,.05,0l.43,1.22a.65.65,0,0,0,.6.41h.14a.61.61,0,0,0,.32-.33A.47.47,0,0,0,18.59,13.42ZM16.75,11.3s0,0,0,0a.06.06,0,0,1-.05,0H14.57s0,0,0,0a.07.07,0,0,1,0,0L15.6,8.24a.06.06,0,0,1,.1,0Z' }),
          React__default.createElement('path', { d: 'M8.33,6.3l0,.12V6.3l-.06,0L7,6.29l0,0a0,0,0,0,1,0,0l1.69-3.5a.5.5,0,0,0,0-.38.49.49,0,0,0-.25-.28.53.53,0,0,0-.37,0,.49.49,0,0,0-.28.25L6.26,5.45l0,0h0l0,0L4.65,2.3A.51.51,0,0,0,4.21,2a.47.47,0,0,0-.49.47.45.45,0,0,0,0,.23l1.69,3.5a.06.06,0,0,1,0,.06l0,0H4.21a.53.53,0,0,0-.35.14.54.54,0,0,0-.15.35.49.49,0,0,0,.14.34.51.51,0,0,0,.36.15H5.67a.06.06,0,0,1,.06.05V9.76a.52.52,0,0,0,.14.36.48.48,0,0,0,.34.14.49.49,0,0,0,.5-.49V7.32a0,0,0,0,1,0-.05H8.21a.41.41,0,0,0,.36-.14.45.45,0,0,0,.15-.34A.49.49,0,0,0,8.33,6.3Z' }),
          React__default.createElement('path', { d: 'M20,3.82H12.43v-2A1.81,1.81,0,0,0,10.62,0H1.81A1.81,1.81,0,0,0,0,1.81v8.66a1.82,1.82,0,0,0,1.81,1.81H9.37V14.6a1.68,1.68,0,0,0,1.81,1.5H20a1.68,1.68,0,0,0,1.81-1.5V5.33A1.68,1.68,0,0,0,20,3.82ZM1,10.47V1.81A.81.81,0,0,1,1.81,1h8.81a.81.81,0,0,1,.81.81v8.66a.81.81,0,0,1-.81.81H1.81A.81.81,0,0,1,1,10.47ZM20.8,14.6c0,.23-.34.5-.81.5H11.18c-.46,0-.81-.27-.81-.5V12.28h.25a1.82,1.82,0,0,0,1.81-1.81V4.82H20c.47,0,.81.27.81.51Z' }),
          React__default.createElement('path', { d: 'M15.53,17.24H13.19l.9.91A4.88,4.88,0,0,1,6.59,14a.38.38,0,0,0-.75,0,5.66,5.66,0,0,0,5.65,5.65,5.57,5.57,0,0,0,3.14-1l.9.9Z' })
        )
      )
    )
  );
};

Language.propTypes = {
  color: propTypes.string
};

Language.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var License = function License(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 11.14',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.48,0h-13A1.52,1.52,0,0,0,0,1.52v8.1a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,9.62V1.52A1.52,1.52,0,0,0,14.48,0ZM1.42,9.72V1.42H14.58v8.3Z' }),
          React__default.createElement('path', { d: 'M10.73,4.66a.41.41,0,0,0-.36-.22H9.2L8.37,2.78a.43.43,0,0,0-.74,0L6.8,4.44H5.64a.41.41,0,0,0-.34.64l.84,1.26v0L5.71,8.06a.41.41,0,0,0,.59.47L8,7.67H8l1.68.84a.42.42,0,0,0,.44,0,.41.41,0,0,0,.14-.42L9.86,6.34l.84-1.26A.41.41,0,0,0,10.73,4.66ZM9,6.37l.25,1L8.18,6.84a.42.42,0,0,0-.37,0l-1.09.54.25-1A.42.42,0,0,0,6.93,6l-.52-.77h.64A.41.41,0,0,0,7.43,5L8,3.89,8.57,5a.41.41,0,0,0,.37.23h.64L9.07,6A.42.42,0,0,0,9,6.37Z' })
        )
      )
    )
  );
};

License.propTypes = {
  color: propTypes.string
};

License.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var List = function List(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 14.2',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', { y: '4.2', width: '1.59', height: '1.59' }),
          React__default.createElement('rect', { x: '3.52', y: '4.2', width: '12.48', height: '1.59' }),
          React__default.createElement('rect', { y: '8.4', width: '1.59', height: '1.59' }),
          React__default.createElement('rect', { x: '3.52', y: '8.4', width: '12.48', height: '1.59' }),
          React__default.createElement('rect', { y: '12.61', width: '1.59', height: '1.59' }),
          React__default.createElement('rect', { x: '3.52', y: '12.61', width: '12.48', height: '1.59' }),
          React__default.createElement('rect', { width: '1.59', height: '1.59' }),
          React__default.createElement('rect', { x: '3.52', width: '12.48', height: '1.59' })
        )
      )
    )
  );
};

List.propTypes = {
  color: propTypes.string
};

List.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Listul = function Listul(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 14.2',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '0 5.8 0 4.2 1.59 5 0 5.8' }),
          React__default.createElement('rect', { x: '3.52', y: '4.2', width: '12.48', height: '1.59' }),
          React__default.createElement('polygon', { points: '0 10 0 8.4 1.59 9.2 0 10' }),
          React__default.createElement('rect', { x: '3.52', y: '8.4', width: '12.48', height: '1.59' }),
          React__default.createElement('rect', { y: '12.61', width: '12.48', height: '1.59' }),
          React__default.createElement('rect', { width: '12.48', height: '1.59' })
        )
      )
    )
  );
};

Listul.propTypes = {
  color: propTypes.string
};

Listul.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Management = function Management(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.37 20.21',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M6.64,8.17h-1V5.56a.8.8,0,0,0-.8-.79A1.85,1.85,0,0,1,2.94,2.92V0H4V2.92a.79.79,0,0,0,.79.79A1.85,1.85,0,0,1,6.64,5.56Z' }),
          React__default.createElement('path', { d: 'M8.79,8.17H7.73V5.56A1.85,1.85,0,0,1,9.58,3.71a.79.79,0,0,0,.8-.79V0h1V2.92A1.85,1.85,0,0,1,9.58,4.77a.79.79,0,0,0-.79.79Z' }),
          React__default.createElement('path', { d: 'M7,5.58h.34v0a2.24,2.24,0,0,1,.46-1.34H6.55A2.18,2.18,0,0,1,7,5.56Z' }),
          React__default.createElement('path', { d: 'M11,4.64a2.19,2.19,0,0,1-1.39.5.42.42,0,0,0-.42.42v.15C11.57,6,13,6.84,13,7.33S10.79,9.08,7.19,9.08,1.37,8,1.37,7.33,2.8,6,5.21,5.71V5.56a.42.42,0,0,0-.42-.42,2.19,2.19,0,0,1-1.39-.5C1.44,5.13,0,6,0,7.33v9.75c0,2.05,3.62,3.13,7.19,3.13s7.18-1.08,7.18-3.13V7.33C14.37,6,12.93,5.13,11,4.64Zm2,12.44c0,.62-2.21,1.76-5.81,1.76S1.37,17.7,1.37,17.08V15.73l.19.1A12.7,12.7,0,0,0,7.19,17a12.73,12.73,0,0,0,5.63-1.13l.18-.1Zm0-3.25c0,.62-2.21,1.75-5.81,1.75s-5.82-1.13-5.82-1.75V12.48l.19.1A12.71,12.71,0,0,0,7.19,13.7a12.74,12.74,0,0,0,5.63-1.12l.18-.1Zm0-3.25c0,.62-2.21,1.75-5.81,1.75S1.37,11.2,1.37,10.58V9.23l.19.1a12.71,12.71,0,0,0,5.63,1.12,12.74,12.74,0,0,0,5.63-1.12l.18-.1Z' })
        )
      )
    )
  );
};

Management.propTypes = {
  color: propTypes.string
};

Management.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Manipulation = function Manipulation(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.28 17.86',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M5,.65v2.5A.81.81,0,0,0,5.78,4h6.28a1.57,1.57,0,0,1,1.57,1.57v.25a1.56,1.56,0,0,1-1.57,1.56H2.21A1.56,1.56,0,0,0,.65,8.9v.19a1.56,1.56,0,0,0,1.56,1.56H8.78a1.56,1.56,0,0,1,1.56,1.56h0a1.56,1.56,0,0,1-1.56,1.56H5.72a.82.82,0,0,0-.81.82v2.62' })
        )
      )
    )
  );
};

Manipulation.propTypes = {
  color: propTypes.string
};

Manipulation.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Merge = function Merge(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.5 16.5',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15.14,4.87H11.63V1.36A1.36,1.36,0,0,0,10.27,0H1.36A1.36,1.36,0,0,0,0,1.36v8.9a1.36,1.36,0,0,0,1.36,1.36H4.87v3.51A1.36,1.36,0,0,0,6.23,16.5h8.9a1.36,1.36,0,0,0,1.36-1.36V6.23A1.36,1.36,0,0,0,15.14,4.87ZM6.31,10.18H1.45V1.45h8.72V6.33H15V15H6.32Z' })
        )
      )
    )
  );
};

Merge.propTypes = {
  color: propTypes.string
};

Merge.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Minusbox = function Minusbox(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Group_558', 'data-name': 'Group 558', transform: 'translate(-316 -361)' },
        React__default.createElement(
          'g',
          {
            id: 'Rectangle_1_copy_4',
            'data-name': 'Rectangle 1 copy 4',
            transform: 'translate(316 361)',
            fill: 'transparent',
            stroke: 'currentColor',
            strokeWidth: '1',
            opacity: '0.6'
          },
          React__default.createElement('rect', { width: '20', height: '20', stroke: 'none' }),
          React__default.createElement('rect', { x: '0.5', y: '0.5', width: '19', height: '19' })
        ),
        React__default.createElement('rect', {
          id: 'Rectangle_86',
          'data-name': 'Rectangle 86',
          width: '11.88',
          height: '2.253',
          transform: 'translate(320 370)'
        })
      )
    )
  );
};

Minusbox.propTypes = {
  color: propTypes.string
};

Minusbox.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var News = function News(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 13.23',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', { x: '6.53', y: '4.67', width: '6.48', height: '1.3' }),
          React__default.createElement('rect', { x: '6.53', y: '7.26', width: '6.48', height: '1.3' }),
          React__default.createElement('path', { d: 'M16,1.9A1.9,1.9,0,0,0,14.1,0H5.38a1.9,1.9,0,0,0-1.9,1.9V5.36H1.61A1.61,1.61,0,0,0,0,7v3.82a2.45,2.45,0,0,0,2.44,2.44H14.1a1.9,1.9,0,0,0,1.9-1.9ZM3.2,11.54a1,1,0,0,1-.75.29,1.05,1.05,0,0,1-1.05-1V7a.22.22,0,0,1,.21-.21H3.49v4.08A1,1,0,0,1,3.2,11.54Zm11.41-.21a.51.51,0,0,1-.5.5H4.67l.05-.14a2.37,2.37,0,0,0,.16-.86V1.9a.51.51,0,0,1,.5-.5H14.1a.51.51,0,0,1,.5.5Z' })
        )
      )
    )
  );
};

News.propTypes = {
  color: propTypes.string
};

News.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Note = function Note(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.32 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,5.79v9.57A.64.64,0,0,0,.64,16h9.57a.64.64,0,0,0,.45-.19l1.47-1.47a.64.64,0,0,0,.19-.45V5.79a.64.64,0,0,0-.64-.64H8.1V6.43H11v6.82H9.57v1.47H1.28V6.43H3.48V5.15H.64A.64.64,0,0,0,0,5.79Z' }),
          React__default.createElement('rect', { x: '2.95', y: '8.1', width: '6.43', height: '1.28' }),
          React__default.createElement('rect', { x: '2.95', y: '11.04', width: '6.43', height: '1.28' }),
          React__default.createElement('path', { d: 'M5.79,7.17a.64.64,0,0,0,.64-.64V4.11l.07,0a2.11,2.11,0,1,0-1.41,0l.07,0V6.53A.64.64,0,0,0,5.79,7.17Z' })
        )
      )
    )
  );
};

Note.propTypes = {
  color: propTypes.string
};

Note.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Pbcopy = function Pbcopy(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        'aria-hidden': 'true',
        version: '1.1',
        viewBox: '0 0 14 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z'
      })
    ),
    ';'
  );
};

Pbcopy.propTypes = {
  color: propTypes.string
};

Pbcopy.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Phone = function Phone(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 9.6 16.25',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.12,0H1.48A1.48,1.48,0,0,0,0,1.48v13.3a1.48,1.48,0,0,0,1.48,1.48H8.12A1.48,1.48,0,0,0,9.6,14.77V1.48A1.48,1.48,0,0,0,8.12,0Zm.19,12.92v2h-7v-2Zm-7-1.29v-7h7v7Zm0-8.31v-2h7v2Z' })
        )
      )
    )
  );
};

Phone.propTypes = {
  color: propTypes.string
};

Phone.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Pin = function Pin(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 9.29 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.65,0A4.65,4.65,0,0,0,0,4.65c0,2.19,3.25,9.44,3.9,10.87a.82.82,0,0,0,1.49,0c.4-.88,3.9-8.63,3.9-10.87A4.65,4.65,0,0,0,4.65,0Zm.13,12.87-.13.3-.13-.3C3.84,11.3,1.63,6.06,1.63,4.65a3,3,0,0,1,6,0C7.66,6.07,5.45,11.3,4.78,12.87Z' }),
          React__default.createElement('circle', { cx: '4.65', cy: '4.65', r: '1.29' })
        )
      )
    )
  );
};

Pin.propTypes = {
  color: propTypes.string
};

Pin.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Plugedin = function Plugedin(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.1 16.65',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.1,0H0V1.3H2.05V3.78a6,6,0,0,0,5.35,6v2.1a1.71,1.71,0,0,0,1.71,1.7.41.41,0,0,1,.4.41v2.7h1.3V14a1.71,1.71,0,0,0-1.7-1.71.4.4,0,0,1-.41-.4V9.74a6,6,0,0,0,5.35-6V1.3H16.1ZM12.75,3.78a4.7,4.7,0,0,1-9.4,0V1.3h9.4Z' })
        )
      )
    )
  );
};

Plugedin.propTypes = {
  color: propTypes.string
};

Plugedin.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Plusbox = function Plusbox(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Group_559', 'data-name': 'Group 559', transform: 'translate(-289 -361)' },
        React__default.createElement(
          'g',
          {
            id: 'Rectangle_1_copy_4',
            'data-name': 'Rectangle 1 copy 4',
            transform: 'translate(289 361)',
            fill: 'transparent',
            stroke: 'currentColor',
            strokeWidth: '1',
            opacity: '0.6'
          },
          React__default.createElement('rect', { width: '20', height: '20', stroke: 'none' }),
          React__default.createElement('rect', { x: '0.5', y: '0.5', width: '19', height: '19' })
        ),
        React__default.createElement('path', {
          id: 'Path_394',
          'data-name': 'Path 394',
          d: 'M686.277,141.033h-4.813V136.22h-2.253v4.813H674.4v2.253h4.813V148.1h2.253v-4.813h4.813Z',
          transform: 'translate(-381.397 228.78)'
        })
      )
    )
  );
};

Plusbox.propTypes = {
  color: propTypes.string
};

Plusbox.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Position = function Position(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.59 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,4.09v10.1a1.56,1.56,0,0,0,1.56,1.56H15a1.56,1.56,0,0,0,1.56-1.56V4.09A1.56,1.56,0,0,0,15,2.53h-.12V1.68H13.47v.84H11.54V.72A.72.72,0,0,0,10.82,0H5.77a.72.72,0,0,0-.72.72V2.53H3.12V1.68H1.68v.84H1.56A1.56,1.56,0,0,0,0,4.09ZM6.49,1.43h3.62V2.53H6.49ZM1.43,4H15.16V14.32H1.43Z' })
        )
      )
    )
  );
};

Position.propTypes = {
  color: propTypes.string
};

Position.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Preparation = function Preparation(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.25 15.63',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '4.45', cy: '4.27', r: '1.5' }),
          React__default.createElement('circle', { cx: '7.64', cy: '1.5', r: '1.5' }),
          React__default.createElement('circle', { cx: '10.83', cy: '4.27', r: '1.5' }),
          React__default.createElement('polygon', { points: '15.25 6.68 0 6.68 0 7.74 3.92 7.74 3.92 11.79 4.98 11.79 4.98 7.74 10.3 7.74 10.3 11.79 11.35 11.79 11.35 7.74 15.25 7.74 15.25 6.68' }),
          React__default.createElement('rect', { x: '7.11', y: '9.18', width: '1.05', height: '6.45' })
        )
      )
    )
  );
};

Preparation.propTypes = {
  color: propTypes.string
};

Preparation.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Presentation = function Presentation(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.5A1.51,1.51,0,0,0,14.5,0H1.5A1.51,1.51,0,0,0,0,1.5V9.62a1.51,1.51,0,0,0,1.5,1.5H6.33L1.46,16h2l3.89-3.89V16H8.69V12.11L12.59,16h2L9.67,11.13H14.5A1.51,1.51,0,0,0,16,9.62ZM14.61,9.74H1.39V4.63H14.61Zm0-6.5H1.39V1.38H14.62Z' })
        )
      )
    )
  );
};

Presentation.propTypes = {
  color: propTypes.string
};

Presentation.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Process = function Process(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M11.65,8.11V7.89a.47.47,0,0,0-.47-.47H10.4a2.3,2.3,0,0,0-.25-.59l.55-.55a.47.47,0,0,0,0-.67l-.16-.16a.47.47,0,0,0-.67,0L9.33,6a2.3,2.3,0,0,0-.59-.25V5a.47.47,0,0,0-.47-.47H8A.47.47,0,0,0,7.57,5v.78A2.3,2.3,0,0,0,7,6l-.55-.55a.47.47,0,0,0-.67,0L5.6,5.6a.47.47,0,0,0,0,.67l.55.55a2.3,2.3,0,0,0-.25.59H5.12a.47.47,0,0,0-.47.47v.23a.47.47,0,0,0,.47.47H5.9a2.29,2.29,0,0,0,.25.59l-.55.55a.47.47,0,0,0,0,.67l.16.16a.47.47,0,0,0,.67,0L7,10a2.3,2.3,0,0,0,.59.25V11A.47.47,0,0,0,8,11.5h.23A.47.47,0,0,0,8.74,11v-.78A2.3,2.3,0,0,0,9.33,10l.55.55a.47.47,0,0,0,.67,0l.16-.16a.47.47,0,0,0,0-.67l-.55-.55a2.29,2.29,0,0,0,.25-.59h.78A.47.47,0,0,0,11.65,8.11ZM8.15,9.17A1.17,1.17,0,1,1,9.32,8,1.17,1.17,0,0,1,8.15,9.17Z' }),
          React__default.createElement('path', { d: 'M8,0A7.93,7.93,0,0,0,2.56,2.16L1.42,1V4.6H5L3.69,3.29A6.34,6.34,0,0,1,8,1.6,6.41,6.41,0,0,1,14.4,8H16A8,8,0,0,0,8,0Z' }),
          React__default.createElement('path', { d: 'M14.79,11.45H11.21l1.19,1.19A6.39,6.39,0,0,1,1.6,8H0a8,8,0,0,0,13.52,5.76L14.79,15Z' })
        )
      )
    )
  );
};

Process.propTypes = {
  color: propTypes.string
};

Process.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Recipes = function Recipes(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.44 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.44.65A.65.65,0,0,0,15.79,0H4.3A2.3,2.3,0,0,0,2,2.3v.92H1.73a1.73,1.73,0,0,0-1.15,3A1.73,1.73,0,0,0,0,7.52,1.75,1.75,0,0,0,.58,8.81,1.71,1.71,0,0,0,0,10.09a1.74,1.74,0,0,0,1.73,1.73H2V13.7A2.3,2.3,0,0,0,4.3,16H15.79a.64.64,0,0,0,.4-.15h.1v-.1a.64.64,0,0,0,.15-.4ZM3.31,13.25a1,1,0,0,1,.92-.56h10.9v2H4.3a1,1,0,0,1-1-1Zm1-11.94H15.13V11.69H4.23a2,2,0,0,0-.92.22V2.3A1,1,0,0,1,4.3,1.31ZM2,8.34H1.73a.82.82,0,0,1-.81-.82.81.81,0,0,1,.81-.81H2Zm-.27-4.2H2V5.77H1.73A.81.81,0,0,1,.92,5,.82.82,0,0,1,1.73,4.14Zm0,6.76a.81.81,0,0,1-.81-.81.82.82,0,0,1,.81-.82H2V10.9Z' }),
          React__default.createElement('path', { d: 'M12.64,5.46a1.72,1.72,0,0,0-1.72-1.72h-.28A1.72,1.72,0,0,0,8,3.74H7.73A1.72,1.72,0,0,0,6,5.46,1.61,1.61,0,0,0,7.08,7V9.41a.7.7,0,0,0,.7.7h3.09a.7.7,0,0,0,.7-.7V7A1.67,1.67,0,0,0,12.64,5.46Zm-4.81,4V8.64h3l0,.72Zm3.45-3.07a.71.71,0,0,0-.46.66l0,.89h-3V7a.71.71,0,0,0-.46-.66,1,1,0,0,1-.61-.88,1,1,0,0,1,1-1H8.2a.35.35,0,0,0,.31-.18,1,1,0,0,1,1.62,0,.38.38,0,0,0,.32.18h.47a1,1,0,0,1,1,1A1,1,0,0,1,11.28,6.34Z' }),
          React__default.createElement('path', { d: 'M8.79,5.94a.25.25,0,0,0-.25.25V7.25a.25.25,0,0,0,.25.25A.25.25,0,0,0,9,7.25V6.19A.25.25,0,0,0,8.79,5.94Z' }),
          React__default.createElement('path', { d: 'M9.86,5.94a.25.25,0,0,0-.25.25V7.25a.25.25,0,0,0,.5,0V6.19A.25.25,0,0,0,9.86,5.94Z' })
        )
      )
    )
  );
};

Recipes.propTypes = {
  color: propTypes.string
};

Recipes.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Reply = function Reply(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 15.55',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.5,3.14H2.21l2-2A.64.64,0,0,0,3.34.19L.19,3.34a.64.64,0,0,0,0,.91L3.31,7.37a.64.64,0,1,0,.91-.91l-2-2H9.5a5.22,5.22,0,0,1,5.21,5.21,4.63,4.63,0,0,1-4.63,4.63H3.79a.64.64,0,1,0,0,1.29h6.29A5.92,5.92,0,0,0,16,9.63,6.5,6.5,0,0,0,9.5,3.14Z' })
        )
      )
    )
  );
};

Reply.propTypes = {
  color: propTypes.string
};

Reply.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sar = function Sar(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.4,7.78A1,1,0,0,0,8,7.78a1,1,0,0,0-.15,1.16L6.29,10.53l.36.36.25-.26.36.37.36-.36-.36-.36.1-.11.36.36.36-.35-.36-.37.51-.51A1,1,0,0,0,9.4,9.15a1,1,0,0,0,.28-.69A1,1,0,0,0,9.4,7.78Zm-.14.68a.53.53,0,0,1-.16.38A.55.55,0,0,1,8.72,9a.57.57,0,0,1-.39-.16.52.52,0,0,1-.15-.38.54.54,0,0,1,.15-.38.57.57,0,0,1,.39-.16.55.55,0,0,1,.54.54Z' }),
          React__default.createElement('path', { d: 'M12.72,9.65V.7A.7.7,0,0,0,12,0H.7A.7.7,0,0,0,0,.7v9a3.93,3.93,0,0,0,1.67,3.21l4.29,3a.73.73,0,0,0,.8,0l4.29-3A3.93,3.93,0,0,0,12.72,9.65Zm-2.47,2.06L6.36,14.45,2.47,11.71A2.53,2.53,0,0,1,1.39,9.65V1.39h9.94V9.65A2.53,2.53,0,0,1,10.25,11.71Z' }),
          React__default.createElement('path', { d: 'M6.35,3.86A1.48,1.48,0,1,0,7.84,5.34,1.48,1.48,0,0,0,6.35,3.86Zm0,2.44a1,1,0,1,1,1-1A1,1,0,0,1,6.35,6.3Z' }),
          React__default.createElement('path', { d: 'M6.35,7.54c-1.71,0-2.9.89-2.9,2.17v.69H5.3V9.75H4.1v0c0-.9.92-1.52,2.25-1.52a3.44,3.44,0,0,1,1,.13V7.65A4.48,4.48,0,0,0,6.35,7.54Z' })
        )
      )
    )
  );
};

Sar.propTypes = {
  color: propTypes.string
};

Sar.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sandbox = function Sandbox(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15.7,5.23s0,0,0,0l0-.06s0,0,0,0L12.44.3a.68.68,0,0,0-.56-.3h-8a.68.68,0,0,0-.57.3L.11,5.1s0,0,0,0v0s0,0,0,.06a.59.59,0,0,0,0,.22v9.62a.67.67,0,0,0,.67.67H15.08a.67.67,0,0,0,.67-.67V5.46A.68.68,0,0,0,15.7,5.23ZM4.24,1.35h7.27l2.3,3.45H1.94ZM14.4,6.15V10l-.74-.43a3.55,3.55,0,0,0-3.83.2A2.21,2.21,0,0,1,7,9.59a3.52,3.52,0,0,0-4.57-.23l-1.09.83v-4Zm-13,8.25V11.83l1.88-1.44a2.22,2.22,0,0,1,2.89.15,3.52,3.52,0,0,0,4.49.29,2.24,2.24,0,0,1,2.4-.11l1.39.8V14.4Z' })
        )
      )
    )
  );
};

Sandbox.propTypes = {
  color: propTypes.string
};

Sandbox.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Settings = function Settings(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.47 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.21,16h-3a.52.52,0,0,1-.52-.52V13.64a6,6,0,0,1-1.89-1.09l-1.59.92a.52.52,0,0,1-.71-.19L.07,10.72A.52.52,0,0,1,.26,10l1.59-.92a5.72,5.72,0,0,1,0-2.18L.26,6a.52.52,0,0,1-.19-.71L1.55,2.72a.52.52,0,0,1,.71-.19l1.59.92A6,6,0,0,1,5.74,2.36V.52A.52.52,0,0,1,6.26,0h3a.52.52,0,0,1,.52.52V2.36a6,6,0,0,1,1.89,1.09l1.59-.92a.52.52,0,0,1,.71.19L15.4,5.28a.52.52,0,0,1-.19.71l-1.59.92a5.7,5.7,0,0,1,0,2.18l1.59.92a.52.52,0,0,1,.19.71l-1.48,2.56a.52.52,0,0,1-.71.19l-1.59-.92a6,6,0,0,1-1.89,1.09v1.84A.52.52,0,0,1,9.21,16ZM6.78,15H8.69v-1.7a.52.52,0,0,1,.38-.5,5,5,0,0,0,2.12-1.22.52.52,0,0,1,.62-.08l1.47.85,1-1.66L12.77,9.8a.52.52,0,0,1-.24-.58,4.78,4.78,0,0,0,0-2.45.52.52,0,0,1,.24-.58l1.47-.85-1-1.66-1.47.85a.52.52,0,0,1-.62-.08A5,5,0,0,0,9.07,3.24a.52.52,0,0,1-.38-.5V1H6.78v1.7a.52.52,0,0,1-.38.5A5,5,0,0,0,4.28,4.46a.52.52,0,0,1-.62.08L2.19,3.69l-1,1.66L2.7,6.2a.52.52,0,0,1,.24.58,4.78,4.78,0,0,0,0,2.45.52.52,0,0,1-.24.58l-1.47.85,1,1.66,1.47-.85a.52.52,0,0,1,.62.08A5,5,0,0,0,6.4,12.76a.52.52,0,0,1,.38.5Z' }),
          React__default.createElement('path', { d: 'M7.74,11.22A3.22,3.22,0,1,1,11,8,3.22,3.22,0,0,1,7.74,11.22Zm0-5.4A2.18,2.18,0,1,0,9.92,8,2.19,2.19,0,0,0,7.74,5.82Z' })
        )
      )
    )
  );
};

Settings.propTypes = {
  color: propTypes.string
};

Settings.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Signals = function Signals(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 10.28 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.56,1.3A5.22,5.22,0,0,0,4.53,0,5.18,5.18,0,0,0,.06,4.38,5.11,5.11,0,0,0,1.91,9.14a1.61,1.61,0,0,1,.56,1.26s0,.71,0,.82v1.85a2.33,2.33,0,0,0,1.84,2.22v.1a.67.67,0,0,0,.72.61h.19A.67.67,0,0,0,6,15.39v-.1H6a2.31,2.31,0,0,0,1.85-2.22v-2s0-.62,0-.62a1.75,1.75,0,0,1,.61-1.34A5.14,5.14,0,0,0,8.56,1.3ZM5.41,15.36h0Zm1.4-2.29A1.36,1.36,0,0,1,5.4,14.36H4.9a1.35,1.35,0,0,1-1.41-1.29v-1.3H6.81Zm1-4.75a2.74,2.74,0,0,0-1,2.11v.34H3.47V10.4a2.6,2.6,0,0,0-.93-2A4.14,4.14,0,0,1,1,4.52,4.18,4.18,0,0,1,4.65,1a4.13,4.13,0,0,1,3.25,1,4.14,4.14,0,0,1-.11,6.27Z' }),
          React__default.createElement('rect', { x: '4.65', y: '5.88', width: '1', height: '3.68' }),
          React__default.createElement('rect', { x: '4.65', y: '4.38', width: '1', height: '1.06' })
        )
      )
    )
  );
};

Signals.propTypes = {
  color: propTypes.string
};

Signals.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sitemap = function Sitemap(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M10.27,15.75h4.8a.68.68,0,0,0,.67-.67v-4a.68.68,0,0,0-.67-.67H13.35V9.47A2.28,2.28,0,0,0,11.08,7.2H8.55V5.35h1.72A.68.68,0,0,0,11,4.67v-4A.68.68,0,0,0,10.27,0H5.48A.68.68,0,0,0,4.8.67v4a.68.68,0,0,0,.67.67H7.2V7.2H4.68A2.28,2.28,0,0,0,2.4,9.47v.93H.68a.68.68,0,0,0-.68.67v4a.68.68,0,0,0,.68.67h4.8a.68.68,0,0,0,.67-.67v-4a.68.68,0,0,0-.67-.67H3.75V9.47a.93.93,0,0,1,.93-.92h6.4a.93.93,0,0,1,.92.92v.93H10.27a.68.68,0,0,0-.67.67v4A.68.68,0,0,0,10.27,15.75Zm-5.47-4V14.4H1.35V11.75ZM6.15,4V1.35H9.6V4ZM11,11.75H14.4V14.4H11Z' })
        )
      )
    )
  );
};

Sitemap.propTypes = {
  color: propTypes.string
};

Sitemap.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Smileyhappy = function Smileyhappy(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.88,0a7.88,7.88,0,1,0,7.87,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.34-6.34A6.35,6.35,0,0,1,7.88,14.22Z' }),
          React__default.createElement('circle', { cx: '5.57', cy: '6.63', r: '1.5' }),
          React__default.createElement('circle', { cx: '10.18', cy: '6.63', r: '1.5' }),
          React__default.createElement('path', { d: 'M5.22,9.64l-.06-.07-.86,1a5.09,5.09,0,0,0,7.22,0l-.92-.91A3.91,3.91,0,0,1,5.22,9.64Z' })
        )
      )
    )
  );
};

Smileyhappy.propTypes = {
  color: propTypes.string
};

Smileyhappy.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Smileyneutral = function Smileyneutral(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.88,0a7.88,7.88,0,1,0,7.87,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.34-6.34A6.35,6.35,0,0,1,7.88,14.22Z' }),
          React__default.createElement('circle', { cx: '5.57', cy: '6.63', r: '1.5' }),
          React__default.createElement('circle', { cx: '10.18', cy: '6.63', r: '1.5' }),
          React__default.createElement('rect', {
            x: '4.7',
            y: '10.07',
            width: '6.36',
            height: '1.3',
            transform: 'translate(-0.1 0.07) rotate(-0.52)'
          })
        )
      )
    )
  );
};

Smileyneutral.propTypes = {
  color: propTypes.string
};

Smileyneutral.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Smileysad = function Smileysad(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.88,0a7.88,7.88,0,1,0,7.87,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.34-6.34A6.35,6.35,0,0,1,7.88,14.22Z' }),
          React__default.createElement('circle', { cx: '5.57', cy: '6.63', r: '1.5' }),
          React__default.createElement('circle', { cx: '10.18', cy: '6.63', r: '1.5' }),
          React__default.createElement('path', { d: 'M4.3,10.88l-.06.06.46.46.52.4a3.78,3.78,0,0,1,5.37,0l.92-.92A5.1,5.1,0,0,0,4.3,10.88Z' })
        )
      )
    )
  );
};

Smileysad.propTypes = {
  color: propTypes.string
};

Smileysad.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sourcebranch = function Sourcebranch(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.63 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.63,1.84a1.84,1.84,0,1,0-2.4,1.75V5.36a.79.79,0,0,1-.31.63L8.3,8.75A.19.19,0,0,1,8,8.6V6.17a1.84,1.84,0,1,0-1.25,0V8.61a.19.19,0,0,1-.3.15L2.83,6a.8.8,0,0,1-.32-.64V3.56a1.85,1.85,0,1,0-1.25,0V5.82a1.2,1.2,0,0,0,.48,1l4.82,3.64a.49.49,0,0,1,.19.39v1.63a1.84,1.84,0,1,0,1.25,0V10.76a.41.41,0,0,1,.16-.33l4.75-3.63a1.45,1.45,0,0,0,.57-1.15V3.55A1.84,1.84,0,0,0,14.63,1.84Z' })
        )
      )
    )
  );
};

Sourcebranch.propTypes = {
  color: propTypes.string
};

Sourcebranch.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Thumbdown = function Thumbdown(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.38 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4,0a2.6,2.6,0,0,0-2.5,1.9L.1,6.9a2.6,2.6,0,0,0,2.5,3.3H5.41L4.14,13.41A1.9,1.9,0,0,0,5.91,16a1.86,1.86,0,0,0,1.74-1.16l3.07-6.31v0h3.66V0ZM6.57,14.37a.74.74,0,0,1-1.26.14.72.72,0,0,1-.07-.67l1.59-4a.59.59,0,0,0-.33-.76L6.39,9V9H2.6A1.42,1.42,0,0,1,1.18,7.58H3.12a.45.45,0,0,0,.45-.45.45.45,0,0,0-.45-.45H1.38l.36-1.29h1.9a.45.45,0,0,0,.45-.45.45.45,0,0,0-.45-.45H2l.37-1.34H3.88a.45.45,0,0,0,.44-.45.45.45,0,0,0-.44-.45H2.61v0A1.43,1.43,0,0,1,4,1.18H9.88v6.4Zm6.63-7H11.06V1.18H13.2Z' })
        )
      )
    )
  );
};

Thumbdown.propTypes = {
  color: propTypes.string
};

Thumbdown.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Thumbup = function Thumbup(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.38 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13.85,6.83a2.61,2.61,0,0,0-2.08-1H9l1.27-3.21A1.89,1.89,0,0,0,8.47,0,1.86,1.86,0,0,0,6.73,1.16L3.66,7.46v0H0V16H10.39a2.6,2.6,0,0,0,2.5-1.9l1.39-5A2.59,2.59,0,0,0,13.85,6.83ZM1.18,8.62H3.32v6.2H1.18Zm9.21,6.2H4.5V8.42L7.8,1.63a.74.74,0,0,1,1.26-.14.7.7,0,0,1,.08.67l-1.59,4a.59.59,0,0,0,.33.76L8,7V7h3.78a1.44,1.44,0,0,1,1.14.56,1.42,1.42,0,0,1,.28.88H11.25a.45.45,0,1,0,0,.9H13l-.36,1.3H10.73a.45.45,0,1,0,0,.89h1.66L12,12.86H10.5a.45.45,0,1,0,0,.89h1.26v0A1.44,1.44,0,0,1,10.39,14.82Z' })
        )
      )
    )
  );
};

Thumbup.propTypes = {
  color: propTypes.string
};

Thumbup.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Training = function Training(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 22.61 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M5.94,8.67a3,3,0,1,0-3-3A3,3,0,0,0,5.94,8.67Zm0-5a2,2,0,1,1-2,2A2,2,0,0,1,5.94,3.66Z' }),
          React__default.createElement('path', { d: 'M22,0h-16a.65.65,0,0,0,0,1.3H21.31V14.69H11.89v-.11a3.8,3.8,0,0,0-1-2.61L13.93,8.9a.48.48,0,0,0,0-.7.5.5,0,0,0-.71,0l-3.11,3.11a7.24,7.24,0,0,0-4.17-1.16C2.44,10.15,0,12,0,14.58V16H22a.65.65,0,0,0,.65-.65V.65A.65.65,0,0,0,22,0ZM1.32,14.58c0-1.83,1.9-3.11,4.62-3.11s4.63,1.28,4.63,3.11v.1H1.32Z' }),
          React__default.createElement('path', { d: 'M18,6.44a.5.5,0,1,0,0-1H11.4a.5.5,0,0,0,0,1Z' })
        )
      )
    )
  );
};

Training.propTypes = {
  color: propTypes.string
};

Training.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Unpluged = function Unpluged(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.1 16.66',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', { width: '16.1', height: '1.3' }),
          React__default.createElement('path', { d: 'M10.75,4.52V2.68a.65.65,0,0,0-1.3,0V4.52a.68.68,0,0,0,0,.14H6.63a.7.7,0,0,0,0-.14V2.68a.65.65,0,1,0-1.3,0V4.52a.68.68,0,0,0,0,.14H2.05V8.43a6,6,0,0,0,5.41,6l0,2.26,1.3,0,0-2.25a6,6,0,0,0,5.29-6V4.66H10.72A.7.7,0,0,0,10.75,4.52Zm2,3.91a4.7,4.7,0,1,1-9.4,0V6h9.4Z' })
        )
      )
    )
  );
};

Unpluged.propTypes = {
  color: propTypes.string
};

Unpluged.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var User = function User(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.2 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.1,0a3.62,3.62,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.35,2.35,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z' }),
          React__default.createElement('path', { d: 'M7.1,9C2.92,9,0,11.19,0,14.31V16H14.2V14.31C14.2,11.19,11.28,9,7.1,9Zm5.52,5.41h-11v-.11c0-2.19,2.27-3.72,5.52-3.72s5.52,1.53,5.52,3.72Z' })
        )
      )
    )
  );
};

User.propTypes = {
  color: propTypes.string
};

User.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Video = function Video(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.19 10.57',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.9,0H1.6A1.6,1.6,0,0,0,0,1.6V9a1.6,1.6,0,0,0,1.6,1.59H9.9A1.6,1.6,0,0,0,11.5,9V7.3l2.72,1.36a.67.67,0,0,0,1-.6V2.52a.67.67,0,0,0-.32-.57h0a.68.68,0,0,0-.65,0L11.5,3.28V1.6A1.6,1.6,0,0,0,9.9,0Zm.25,9.23H1.35V1.35h8.81Zm3.69-5.62V7L11.5,5.79v-1Z' })
        )
      )
    )
  );
};

Video.propTypes = {
  color: propTypes.string
};

Video.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Visibility = function Visibility(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.62 10.65',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M17.42,5A9.93,9.93,0,0,0,.2,5L0,5.32l.2.35a9.93,9.93,0,0,0,17.21,0l.2-.35ZM8.81,9.25A8.58,8.58,0,0,1,1.63,5.32,8.53,8.53,0,0,1,16,5.32,8.58,8.58,0,0,1,8.81,9.25Z' }),
          React__default.createElement('path', { d: 'M8.81,2.28a3,3,0,1,0,3,3A3,3,0,0,0,8.81,2.28Zm0,5.08a2,2,0,1,1,2-2A2,2,0,0,1,8.81,7.37Z' })
        )
      )
    )
  );
};

Visibility.propTypes = {
  color: propTypes.string
};

Visibility.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Visibilityunabled = function Visibilityunabled(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.62 11.35',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', {
            x: '8.31',
            y: '-1.94',
            width: '1',
            height: '15.23',
            transform: 'translate(-1.4 8.02) rotate(-45.73)'
          }),
          React__default.createElement('path', { d: 'M8.75,7.71a2,2,0,0,1-2-1.92l-.9-.88a2.86,2.86,0,0,0-.11.76,3,3,0,0,0,3,3,2.87,2.87,0,0,0,.83-.13Z' }),
          React__default.createElement('path', { d: 'M17.42,5.32a10,10,0,0,0-8.61-5A9.7,9.7,0,0,0,6,.79L7.14,1.95a8.11,8.11,0,0,1,1.67-.2A8.58,8.58,0,0,1,16,5.67a8.54,8.54,0,0,1-2.48,2.48l1,1A9.89,9.89,0,0,0,17.41,6l.2-.35Z' }),
          React__default.createElement('path', { d: 'M10.48,9.4a8.11,8.11,0,0,1-1.67.2A8.58,8.58,0,0,1,1.63,5.67,8.54,8.54,0,0,1,4.11,3.19l-1-1A9.89,9.89,0,0,0,.2,5.32L0,5.67.2,6a10,10,0,0,0,8.61,5,9.69,9.69,0,0,0,2.86-.44Z' }),
          React__default.createElement('path', { d: 'M8.87,3.64a2,2,0,0,1,2,1.92l.9.88a2.85,2.85,0,0,0,.11-.76,3,3,0,0,0-3-3A2.86,2.86,0,0,0,8,2.77Z' })
        )
      )
    )
  );
};

Visibilityunabled.propTypes = {
  color: propTypes.string
};

Visibilityunabled.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Access = function Access(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.48 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.21,7.41a4.35,4.35,0,0,0,0-6.14,4.34,4.34,0,0,0-6.79,5.3l0,.08-.06.06L0,14.12l1.36,1.36,1.19-1.19L4.26,16l1.36-1.36L3.91,12.93l.83-.83,1.71,1.71L7.8,12.45,6.09,10.74,8.83,8l.08,0A4.33,4.33,0,0,0,14.21,7.41ZM8.35,4.34a2.77,2.77,0,0,1,.82-2h0a2.79,2.79,0,1,1-.82,2Z' })
        )
      )
    )
  );
};

Access.propTypes = {
  color: propTypes.string
};

Access.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Activity = function Activity(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.76 16.33',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9,16.33H9a.61.61,0,0,1-.57-.47L5.5,2.93,3.37,9.87a.6.6,0,0,1-.58.42H0V9.09H2.35L5,.42A.58.58,0,0,1,5.61,0a.6.6,0,0,1,.56.47L9.05,13.15,10,9.47A.59.59,0,0,1,10.56,9h5.2v1.2H11L9.6,15.87A.6.6,0,0,1,9,16.33Z' })
        )
      )
    )
  );
};

Activity.propTypes = {
  color: propTypes.string
};

Activity.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Add = function Add(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('polygon', { points: '11.8 7.28 8.72 7.28 8.72 4.2 7.28 4.2 7.28 7.28 4.2 7.28 4.2 8.72 7.28 8.72 7.28 11.8 8.72 11.8 8.72 8.72 11.8 8.72 11.8 7.28' })
        )
      )
    )
  );
};

Add.propTypes = {
  color: propTypes.string
};

Add.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Aggregate = function Aggregate(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15.4,14.8h-3V9.73a.6.6,0,0,0-1.2,0V14.8H8.6V6.12a.6.6,0,0,0-1.2,0V14.8H4.78V9.73a.6.6,0,0,0-.6-.6.6.6,0,0,0-.6.6V14.8H1.2V.6A.6.6,0,0,0,0,.6V15.4a.6.6,0,0,0,.6.6H15.4a.6.6,0,0,0,0-1.2Z' }),
          React__default.createElement('path', { d: 'M4.18,7.91A1.61,1.61,0,0,0,5.79,6.3a1.64,1.64,0,0,0-.36-1L7,3.83a1.59,1.59,0,0,0,1,.39,1.63,1.63,0,0,0,1.09-.43l1.52,1.46a1.57,1.57,0,0,0-.4,1,1.61,1.61,0,1,0,1.61-1.61,1.75,1.75,0,0,0-.4,0L9.57,3a2.2,2.2,0,0,0,0-.36,1.61,1.61,0,1,0-3.22,0A1.42,1.42,0,0,0,6.45,3L4.65,4.76a1.78,1.78,0,0,0-.47-.07,1.61,1.61,0,0,0,0,3.22ZM12.5,6.3a.68.68,0,0,1-.68.69.69.69,0,1,1,0-1.38A.68.68,0,0,1,12.5,6.3ZM8,1.92a.69.69,0,0,1,.69.69.69.69,0,0,1-1.38,0A.69.69,0,0,1,8,1.92ZM4.18,5.61A.69.69,0,1,1,4.18,7a.69.69,0,0,1,0-1.38Z' })
        )
      )
    )
  );
};

Aggregate.propTypes = {
  color: propTypes.string
};

Aggregate.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Album = function Album(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.55 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '10.98 6.31 10.06 4.83 8.68 7.07 14.28 7.07 12.39 4.05 10.98 6.31' }),
          React__default.createElement('path', { d: 'M4.67,12.55h7.88V11.2h-8V2.4H3.2v8.67A1.48,1.48,0,0,0,4.67,12.55Z' }),
          React__default.createElement('path', { d: 'M1.47,15.75H9.35V14.4h-8V5.6H0v8.68A1.48,1.48,0,0,0,1.47,15.75Z' }),
          React__default.createElement('path', { d: 'M15.07,0H7.88A1.48,1.48,0,0,0,6.4,1.47v6.4A1.48,1.48,0,0,0,7.88,9.35h7.2a1.48,1.48,0,0,0,1.48-1.47V1.47A1.48,1.48,0,0,0,15.07,0ZM7.75,8V1.35H15.2V8Z' })
        )
      )
    )
  );
};

Album.propTypes = {
  color: propTypes.string
};

Album.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Alert = function Alert(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('rect', { x: '7.28', y: '6.76', width: '1.44', height: '5.04' }),
          React__default.createElement('rect', { x: '7.28', y: '4.2', width: '1.44', height: '1.42' })
        )
      )
    )
  );
};

Alert.propTypes = {
  color: propTypes.string
};

Alert.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Angellist = function Angellist(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.37,6.64a.58.58,0,0,1,.21,0h.17l.42,0L7.41,4.43a6.66,6.66,0,0,0-.46-1.11q-.16-.26-.36-.26a.3.3,0,0,0-.24.11.47.47,0,0,0-.09.31,4.62,4.62,0,0,0,.25,1.14q.25.81.75,2.13A.24.24,0,0,1,7.37,6.64Z' }),
          React__default.createElement('path', { d: 'M8.23,9.51a3.53,3.53,0,0,1,.36-.39A3,3,0,0,1,9,8.81a4.37,4.37,0,0,1-.58-.06,3.08,3.08,0,0,1-.52-.14q.11.23.2.46A4,4,0,0,1,8.23,9.51Z' }),
          React__default.createElement('path', { d: 'M10.8,7.69a2.94,2.94,0,0,0-1.13-.43,7.91,7.91,0,0,0-1.76-.19.59.59,0,0,0-.36.09.35.35,0,0,0-.11.29.73.73,0,0,0,.54.7,5.09,5.09,0,0,0,1.75.22H10a.2.2,0,0,1,.16.07.46.46,0,0,1,.08.22,1.68,1.68,0,0,1-.5.26,2.68,2.68,0,0,0-.58.29,2.56,2.56,0,0,0-.69.74,1.59,1.59,0,0,0-.26.81,1.84,1.84,0,0,0,.11.57,2,2,0,0,1,.11.41v.11A.6.6,0,0,1,8,11.48a2,2,0,0,1-.18-.92V10.5l-.11.07-.12,0H7.42l-.13,0a1.26,1.26,0,0,1,0,.15.88.88,0,0,1,0,.12.59.59,0,0,1-.21.45.7.7,0,0,1-.49.19A1.35,1.35,0,0,1,5.73,11a1.22,1.22,0,0,1-.46-.86.49.49,0,0,1,0-.14.24.24,0,0,1,.06-.1l.28.36q.47.65.87.65a.38.38,0,0,0,.24-.09.24.24,0,0,0,.11-.18.88.88,0,0,0-.14-.36,4.59,4.59,0,0,0-.39-.56,4.22,4.22,0,0,0-.47-.53A.53.53,0,0,0,5.53,9a.59.59,0,0,0-.46.27,1,1,0,0,0-.21.63,1.75,1.75,0,0,0,.15.65,3.14,3.14,0,0,0,.42.72,2.82,2.82,0,0,0,1,.86,3.11,3.11,0,0,0,1.38.3,3,3,0,0,0,2.32-1,3.72,3.72,0,0,0,.94-2.59A3.22,3.22,0,0,0,11,8.1.73.73,0,0,0,10.8,7.69Z' }),
          React__default.createElement('path', { d: 'M6.45,9.2A4,4,0,0,0,7,9.86a.8.8,0,0,0,.44.23A.29.29,0,0,0,7.7,10a.35.35,0,0,0,.1-.24,2.47,2.47,0,0,0-.2-.63,6.31,6.31,0,0,0-.49-1A2.27,2.27,0,0,0,6.7,7.6a.61.61,0,0,0-.39-.18A.5.5,0,0,0,6,7.61.53.53,0,0,0,5.79,8,1.27,1.27,0,0,0,6,8.48,4.83,4.83,0,0,0,6.45,9.2Z' }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm2.53,11.82A3.62,3.62,0,0,1,7.77,13a3.56,3.56,0,0,1-1.28-.24,3.18,3.18,0,0,1-1.07-.67,3.37,3.37,0,0,1-.77-1A2.41,2.41,0,0,1,4.39,10,1.5,1.5,0,0,1,4.66,9a1.38,1.38,0,0,1,.83-.46,3.81,3.81,0,0,1-.16-.42,1,1,0,0,1,0-.26,1,1,0,0,1,.34-.65,1,1,0,0,1,.64-.33.88.88,0,0,1,.27,0,1.78,1.78,0,0,1,.33.15q-.55-1.55-.8-2.39a5,5,0,0,1-.25-1.16A1,1,0,0,1,6,2.86a.78.78,0,0,1,.62-.26q.67,0,1.69,3l.27.79.22-.63q1-3,1.76-3a.74.74,0,0,1,.58.25,1,1,0,0,1,.22.66,5.08,5.08,0,0,1-.24,1.15q-.24.83-.72,2.18a1.28,1.28,0,0,1,.9.54,2.57,2.57,0,0,1,.26,1.32A4.1,4.1,0,0,1,10.53,11.82Z' }),
          React__default.createElement('path', { d: 'M10.67,4.76a5.34,5.34,0,0,0,.27-1,.51.51,0,0,0-.09-.32.29.29,0,0,0-.25-.11q-.2,0-.41.33a5.48,5.48,0,0,0-.46,1.06L9,6.74l.9.16Q10.4,5.6,10.67,4.76Z' })
        )
      )
    )
  );
};

Angellist.propTypes = {
  color: propTypes.string
};

Angellist.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Announcement = function Announcement(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 13.57',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,12.76V0H14.58V1L14.5,1,1.42,3.88V3.24H0V9.52H1.42V8.88l1,.23v2.94a.71.71,0,0,0,.54.69l3.24.81a.72.72,0,0,0,.74-.26l2-2.72,5.6,1.24v1Zm-9.9-.7L3.85,11.5V9.42l3.62.8Zm8.36-1.73-13-2.9V5.33l.08,0L14.58,2.4v8Z' })
        )
      )
    )
  );
};

Announcement.propTypes = {
  color: propTypes.string
};

Announcement.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Application = function Application(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.22,16H1.78A1.78,1.78,0,0,1,0,14.22V1.78A1.78,1.78,0,0,1,1.78,0H14.22A1.78,1.78,0,0,1,16,1.78V14.22A1.78,1.78,0,0,1,14.22,16ZM1.78,1.78V14.22H14.22V1.78Z' }),
          React__default.createElement('path', { d: 'M12.71,8.15v-.3a.63.63,0,0,0-.63-.63H11a3.09,3.09,0,0,0-.33-.8l.74-.74a.63.63,0,0,0,0-.89l-.21-.21a.63.63,0,0,0-.89,0l-.74.74A3.09,3.09,0,0,0,8.78,5v-1a.63.63,0,0,0-.63-.63h-.3a.63.63,0,0,0-.63.63V5a3.09,3.09,0,0,0-.8.33l-.74-.74a.63.63,0,0,0-.89,0l-.21.21a.63.63,0,0,0,0,.89l.74.74a3.09,3.09,0,0,0-.33.8h-1a.63.63,0,0,0-.63.63v.3a.63.63,0,0,0,.63.63H5a3.08,3.08,0,0,0,.33.8l-.74.74a.63.63,0,0,0,0,.89l.21.21a.63.63,0,0,0,.89,0l.74-.74a3.09,3.09,0,0,0,.8.33v1a.63.63,0,0,0,.63.63h.3a.63.63,0,0,0,.63-.63V11a3.09,3.09,0,0,0,.8-.33l.74.74a.63.63,0,0,0,.89,0l.21-.21a.63.63,0,0,0,0-.89l-.74-.74a3.08,3.08,0,0,0,.33-.8h1A.63.63,0,0,0,12.71,8.15ZM8,9.57A1.57,1.57,0,1,1,9.57,8,1.57,1.57,0,0,1,8,9.57Z' })
        )
      )
    )
  );
};

Application.propTypes = {
  color: propTypes.string
};

Application.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Arrowdown = function Arrowdown(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 9.3',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polyline', { points: '8 9.3 16 1.3 14.7 0 8 6.7 1.3 0 0 1.3' })
        )
      )
    )
  );
};

Arrowdown.propTypes = {
  color: propTypes.string
};

Arrowdown.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Arrowleft = function Arrowleft(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 9.3 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polyline', { points: '0 8 8 16 9.3 14.7 2.6 8 9.3 1.3 8 0' })
        )
      )
    )
  );
};

Arrowleft.propTypes = {
  color: propTypes.string
};

Arrowleft.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Arrowright = function Arrowright(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 9.3 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polyline', { points: '9.3 8 1.3 0 0 1.3 6.7 8 0 14.7 1.3 16' })
        )
      )
    )
  );
};

Arrowright.propTypes = {
  color: propTypes.string
};

Arrowright.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Arrowup = function Arrowup(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 9.3',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polyline', { points: '8 0 0 8 1.3 9.3 8 2.6 14.7 9.3 16 8' })
        )
      )
    )
  );
};

Arrowup.propTypes = {
  color: propTypes.string
};

Arrowup.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var At = function At(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12.57,11.75v0H13c1.65,0,2.75-1.31,2.75-3.25V7.88a7.86,7.86,0,1,0-3.53,6.57l-.76-1.11A6.53,6.53,0,1,1,14.4,7.88V8.5c0,1.14-.48,1.84-1.29,1.9v0h-.43a1.52,1.52,0,0,1-1.25-1.22V7.88a3.57,3.57,0,1,0-1.1,2.56l.11-.1.08.12A2.87,2.87,0,0,0,12.57,11.75ZM7.88,10.08a2.21,2.21,0,1,1,2.2-2.21A2.21,2.21,0,0,1,7.88,10.08Z' })
        )
      )
    )
  );
};

At.propTypes = {
  color: propTypes.string
};

At.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Audio = function Audio(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.1 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15.1.79A.79.79,0,0,0,14,.06L5,3.66a.79.79,0,0,0-.5.73v5.9l-.16-.08A3,3,0,0,0,3,9.92a3,3,0,1,0,3,3v-8l.07,0L13.52,2V7.59l-.16-.08a3,3,0,0,0-1.3-.31,3,3,0,1,0,3,3ZM3,14.42A1.46,1.46,0,1,1,4.51,13,1.47,1.47,0,0,1,3,14.42Zm9-2.7a1.46,1.46,0,1,1,1.46-1.46A1.47,1.47,0,0,1,12.06,11.72Z' })
        )
      )
    )
  );
};

Audio.propTypes = {
  color: propTypes.string
};

Audio.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Backlogitem = function Backlogitem(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.48 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.88,2.11l0-.08A2.7,2.7,0,0,0,3.62,2l0,.08H2.82V3.52H1.31A1.31,1.31,0,0,0,0,4.83v9.87A1.31,1.31,0,0,0,1.31,16h9.87a1.31,1.31,0,0,0,1.31-1.31V4.83a1.31,1.31,0,0,0-1.31-1.31H9.66V2.11ZM4.93,2A1.51,1.51,0,0,1,7.55,2l.09.16H4.84ZM4,3.32H8.46V4.93H4Zm7.26,1.41V14.8H1.2V4.72H2.82V6.13H9.66V4.72Z' }),
          React__default.createElement('rect', { x: '2.9', y: '8.33', width: '1.53', height: '1.37' }),
          React__default.createElement('rect', { x: '5.94', y: '8.33', width: '3.64', height: '1.37' }),
          React__default.createElement('rect', { x: '2.9', y: '11.22', width: '1.53', height: '1.37' }),
          React__default.createElement('rect', { x: '5.94', y: '11.22', width: '3.64', height: '1.37' })
        )
      )
    )
  );
};

Backlogitem.propTypes = {
  color: propTypes.string
};

Backlogitem.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Book = function Book(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.57 15.74',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,13.05a.82.82,0,0,0,.82.82H7.07l1.64,1.64a.83.83,0,0,0,1.15,0l1.64-1.64h6.25a.82.82,0,0,0,.82-.82V.82A.82.82,0,0,0,17.76,0H11.17a.82.82,0,0,0-.58.24L9.29,1.54,8,.24A.82.82,0,0,0,7.4,0H.82A.82.82,0,0,0,0,.82ZM10.1,3l1.4-1.4h5.43v10.6H11.17a.82.82,0,0,0-.58.24L10.1,13ZM1.63,1.63H7.07L8.47,3V13L8,12.47a.82.82,0,0,0-.58-.24H1.63Z' })
        )
      )
    )
  );
};

Book.propTypes = {
  color: propTypes.string
};

Book.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Changeview = function Changeview(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.6A1.6,1.6,0,0,0,14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V14.4A1.6,1.6,0,0,0,1.6,16H14.4A1.6,1.6,0,0,0,16,14.4Zm-8.5,13H1.37V8.5H7.5Zm0-7.13H1.37V1.37H7.5Zm7.13,7.13H8.5V8.5h6.13Zm0-7.13H8.5V1.37h6.13Z' })
        )
      )
    )
  );
};

Changeview.propTypes = {
  color: propTypes.string
};

Changeview.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Changes = function Changes(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.33 15.74',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M3.62,4.79,2.25,3.42h4A4.8,4.8,0,0,1,11,8.21h1.3A6.09,6.09,0,0,0,6.24,2.12h-4L3.62.76,2.86,0,.09,2.77,2.86,5.55Z' }),
          React__default.createElement('path', { d: 'M8.68,11,10,12.31H6.09A4.79,4.79,0,0,1,1.3,7.53H0a6.09,6.09,0,0,0,6.09,6.08H10L8.68,15l.75.76L12.21,13,9.43,10.19Z' })
        )
      )
    )
  );
};

Changes.propTypes = {
  color: propTypes.string
};

Changes.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Checkbox = function Checkbox(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.6A1.6,1.6,0,0,0,14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V14.4A1.6,1.6,0,0,0,1.6,16H14.4A1.6,1.6,0,0,0,16,14.4Zm-14.63,13V1.37H14.63V14.63Z' }),
          React__default.createElement('polygon', { points: '7.48 8.82 5.41 6.75 4.3 7.87 7.48 11.05 12.46 6.07 11.35 4.95 7.48 8.82' })
        )
      )
    )
  );
};

Checkbox.propTypes = {
  color: propTypes.string
};

Checkbox.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Checkboxoutline = function Checkboxoutline(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.6A1.6,1.6,0,0,0,14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V14.4A1.6,1.6,0,0,0,1.6,16H14.4A1.6,1.6,0,0,0,16,14.4Zm-14.63,13V1.37H14.63V14.63Z' })
        )
      )
    )
  );
};

Checkboxoutline.propTypes = {
  color: propTypes.string
};

Checkboxoutline.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Circle = function Circle(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.88,0a7.88,7.88,0,1,0,7.88,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.35-6.35A6.35,6.35,0,0,1,7.88,14.22Z' })
        )
      )
    )
  );
};

Circle.propTypes = {
  color: propTypes.string
};

Circle.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var City = function City(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 16.62',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.88,0A4.1,4.1,0,0,0,3.78,4.09c0,1.93,2.86,8.31,3.44,9.58a.72.72,0,0,0,1.31,0C8.88,12.9,12,6.07,12,4.09A4.1,4.1,0,0,0,7.88,0ZM8,11.33l-.11.27-.11-.27c-.6-1.38-2.54-6-2.54-7.24a2.66,2.66,0,0,1,5.31,0C10.53,5.34,8.59,10,8,11.33Z' }),
          React__default.createElement('circle', { cx: '7.87', cy: '4.09', r: '1.14' }),
          React__default.createElement('path', { d: 'M1.93,10.22.13,14.44a1.56,1.56,0,0,0,1.44,2.18H14.19a1.56,1.56,0,0,0,1.44-2.18l-1.81-4.22a1.56,1.56,0,0,0-1.44-.95h-.6v1.44h.68l0,.08,1.88,4.39h-13l1.91-4.47h.65V9.28H3.37A1.56,1.56,0,0,0,1.93,10.22Z' })
        )
      )
    )
  );
};

City.propTypes = {
  color: propTypes.string
};

City.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Clock = function Clock(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.4 17.4',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.7,0a8.7,8.7,0,1,0,8.7,8.7A8.71,8.71,0,0,0,8.7,0Zm0,16A7.3,7.3,0,1,1,16,8.7,7.31,7.31,0,0,1,8.7,16Z' }),
          React__default.createElement('path', { d: 'M13,8.38H10.3A1.7,1.7,0,0,0,9.14,7.31V4.2A.57.57,0,0,0,8,4.2V7.4a1.7,1.7,0,1,0,2.3,2.12H13a.57.57,0,1,0,0-1.14Z' })
        )
      )
    )
  );
};

Clock.propTypes = {
  color: propTypes.string
};

Clock.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Close = function Close(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '16 1.3 14.7 0 8 6.7 1.3 0 0 1.3 6.7 8 0 14.7 1.3 16 8 9.3 14.7 16 16 14.7 9.3 8 16 1.3' })
        )
      )
    )
  );
};

Close.propTypes = {
  color: propTypes.string
};

Close.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Cloud = function Cloud(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.89 11.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.16,11.75H11a5.88,5.88,0,1,0-5.4-8.18l0,.11-.11,0a4.09,4.09,0,0,0-1.3-.21,4.16,4.16,0,1,0,0,8.32Zm0-6.86a2.69,2.69,0,0,1,1.46.43.73.73,0,0,0,1.11-.45A4.41,4.41,0,1,1,11,10.29H4.16a2.7,2.7,0,0,1,0-5.39Z' })
        )
      )
    )
  );
};

Cloud.propTypes = {
  color: propTypes.string
};

Cloud.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Cluedinlogo = function Cluedinlogo(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 418 133.92',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M168.44,84.36a23.55,23.55,0,0,1-4.55,1.21,33.76,33.76,0,0,1-5.2.38c-4.72,0-8.48-1.43-11.19-4.24s-4.07-7.26-4.07-13.26c0-5.25,1.2-9.53,3.58-12.72s6.09-4.88,10.94-4.88a32.32,32.32,0,0,1,10.19,1.5,16.22,16.22,0,0,0,1-3.34,19.41,19.41,0,0,0,.41-3.41,28.05,28.05,0,0,0-5.37-1.39,44.59,44.59,0,0,0-6.8-.46,24.23,24.23,0,0,0-10,1.92,20.58,20.58,0,0,0-7.16,5.21,22.26,22.26,0,0,0-4.34,7.8,31.55,31.55,0,0,0-1.47,9.77c0,7.52,2,13.57,6,18s9.86,6.63,17.63,6.63a34.14,34.14,0,0,0,12.17-2,17.41,17.41,0,0,0-.63-3.73A15.63,15.63,0,0,0,168.44,84.36Z' }),
          React__default.createElement('path', { d: 'M242.77,44.81c-.61-.1-1.27-.18-2-.23s-1.59-.09-2.24-.09-1.39,0-2.24.09c-.7.05-1.36.13-2,.23v40l-.23.07A28.29,28.29,0,0,1,226,86a21.92,21.92,0,0,1-5.65-.66,9.24,9.24,0,0,1-4.23-2.42,10.72,10.72,0,0,1-2.58-4.73,27.66,27.66,0,0,1-.85-7.47V44.81c-.61-.1-1.29-.18-2-.23-.88-.06-1.64-.09-2.29-.09s-1.32,0-2.2.09c-.72.05-1.4.13-2,.23V71a31.25,31.25,0,0,0,1.74,11.43,15.82,15.82,0,0,0,4.73,6.66,16,16,0,0,0,6.94,3.14,44.77,44.77,0,0,0,8.51.78,51.09,51.09,0,0,0,9.25-.83c2.87-.54,5.38-1.11,7.47-1.69Z' }),
          React__default.createElement('path', { d: 'M290.5,86.87a14.8,14.8,0,0,0-1-3.06A34.67,34.67,0,0,1,277.11,86c-5.07,0-9-1.25-11.59-3.72s-4-6.38-4.13-11.64v-.31h32.38c.05-.62.1-1.35.16-2.18s.09-1.86.09-2.72a28.46,28.46,0,0,0-1.29-8.7A19.84,19.84,0,0,0,289,49.9a17.32,17.32,0,0,0-6.09-4.52,20.58,20.58,0,0,0-8.47-1.64,22.76,22.76,0,0,0-9.81,2A19.68,19.68,0,0,0,257.74,51a22.13,22.13,0,0,0-4.08,7.89,35.07,35.07,0,0,0-1.33,9.83,33.36,33.36,0,0,0,1.38,9.82,19.29,19.29,0,0,0,11.86,12.73,30.38,30.38,0,0,0,11,1.78,46.56,46.56,0,0,0,8-.64A31.12,31.12,0,0,0,291,90.57,22.47,22.47,0,0,0,290.5,86.87Zm-29-23.1c.43-4.12,1.68-7.4,3.73-9.74s5.07-3.55,8.93-3.55a11.21,11.21,0,0,1,5.13,1.11,10.33,10.33,0,0,1,3.54,2.93,13,13,0,0,1,2.09,4.23,18,18,0,0,1,.71,5.05v.3H261.45Z' }),
          React__default.createElement('path', { d: 'M418,62.78c0-6-1.29-10.65-3.83-13.72s-6.48-4.58-11.78-4.58a16.56,16.56,0,0,0-5.17.77,16.73,16.73,0,0,0-4.18,2A18.19,18.19,0,0,0,389.81,50a18.88,18.88,0,0,0-2.32,3.11l-.63,1.08V53a34.46,34.46,0,0,0-.28-3.92c-.17-1.42-.34-2.61-.52-3.54-.61-.11-1.15-.18-1.65-.24a20.54,20.54,0,0,0-3.82,0c-.54.06-1.11.13-1.69.23v47.2c.59.09,1.25.17,2,.23s1.64.09,2.29.09,1.4,0,2.25-.09,1.38-.13,2-.23V68.82a23.46,23.46,0,0,1,1.08-7.58,14.75,14.75,0,0,1,2.88-5.17,11.29,11.29,0,0,1,4.21-3,13.42,13.42,0,0,1,5-1c3.08,0,5.36,1.1,6.78,3.26s2.09,5.43,2.09,9.87V92.74c.58.09,1.23.17,2,.23s1.59.09,2.24.09,1.41,0,2.29-.09,1.42-.13,2-.23Z' }),
          React__default.createElement('path', { d: 'M195.5,86.13a13.54,13.54,0,0,1-4.28-.14,4,4,0,0,1-2-1.12,5.75,5.75,0,0,1-1.33-2.4,14.61,14.61,0,0,1-.48-4.17V27.57a25,25,0,0,0-4.21-.27,24.71,24.71,0,0,0-4.2.27V80.35a16.41,16.41,0,0,0,1,6.12,9.76,9.76,0,0,0,2.69,3.88,10.39,10.39,0,0,0,3.95,2.07,18.17,18.17,0,0,0,4.91.64c1,0,2.16,0,3.4-.14a12.38,12.38,0,0,0,2.84-.51,28.26,28.26,0,0,0-.75-6.49A12.51,12.51,0,0,1,195.5,86.13Z' }),
          React__default.createElement('path', { d: 'M334.24,27.57V45.25l-.44-.13a31.28,31.28,0,0,0-4.26-.92,32.54,32.54,0,0,0-4.81-.37,24.65,24.65,0,0,0-9.64,1.83,21.39,21.39,0,0,0-7.44,5.17,23.31,23.31,0,0,0-4.81,8,30.44,30.44,0,0,0-1.7,10.41,28.48,28.48,0,0,0,1.92,11.14A19.08,19.08,0,0,0,316,91.82a35.11,35.11,0,0,0,9.4,1.24,61.65,61.65,0,0,0,9.68-.69,66.69,66.69,0,0,0,7.6-1.64V27.57a23.78,23.78,0,0,0-4.28-.27A21,21,0,0,0,334.24,27.57Zm0,57.46-.23.07a21.39,21.39,0,0,1-3.67.71,39.91,39.91,0,0,1-4.5.24c-4.77,0-8.59-1.31-11.36-3.91s-4.21-6.91-4.27-12.85A28.47,28.47,0,0,1,311.1,62a16.9,16.9,0,0,1,2.74-5.82,13.17,13.17,0,0,1,4.71-3.9,14.92,14.92,0,0,1,6.74-1.44,27.49,27.49,0,0,1,4.7.38A20.5,20.5,0,0,1,334,52.37l.2.08Z' }),
          React__default.createElement('path', { d: 'M357.83,52.74h-6a11,11,0,0,1-.28-1.7c-.06-.64-.09-1.27-.09-1.88s0-1.24.09-1.88a11,11,0,0,1,.28-1.7h15V92.69a21.88,21.88,0,0,1-2.27.28c-.83.06-1.59.09-2.27.09s-1.34,0-2.18-.09a21.64,21.64,0,0,1-2.27-.28Z' }),
          React__default.createElement('path', { d: 'M355.79,37a18.54,18.54,0,0,1-.23-2.39c0-.86,0-1.62,0-2.3s0-1.44,0-2.3a16.1,16.1,0,0,1,.23-2.3q1.21-.19,2.6-.28c.93-.06,1.73-.09,2.41-.09s1.48,0,2.41.09,1.76.15,2.5.28a15.49,15.49,0,0,1,.23,2.3c0,.86,0,1.62,0,2.3s0,1.44,0,2.3a17.79,17.79,0,0,1-.23,2.39c-.74.12-1.56.21-2.45.28s-1.69.09-2.37.09-1.57,0-2.5-.09S356.6,37.17,355.79,37Z' }),
          React__default.createElement('path', { d: 'M91.73,89.42a2.88,2.88,0,0,0-4-.08,30.57,30.57,0,1,1,0-44.78,2.89,2.89,0,0,0,4-.08L113.4,22.82a2.88,2.88,0,0,0,0-4.12A66.95,66.95,0,0,0,1.8,51.49,2.88,2.88,0,0,0,3.94,55a2.87,2.87,0,0,0,1,0c.08,0,.15,0,.23,0H19.69a2.87,2.87,0,0,0,2.68-1.88,2.84,2.84,0,0,0,.36-.7A46.12,46.12,0,0,1,96.35,31.72l-6.81,6.81A36.27,36.27,0,0,0,30.76,64.08H2.88a2.88,2.88,0,1,0,0,5.77H30.76A36.27,36.27,0,0,0,89.54,95.39l6.81,6.81A46.12,46.12,0,0,1,22.74,81.47c0-.08-.09-.14-.12-.21A2.84,2.84,0,0,0,19.85,79H4.63a2.85,2.85,0,0,0-2.78,2.38c0,.07,0,.14,0,.21a.93.93,0,0,0,0,.72,2.73,2.73,0,0,0,0,.34,67,67,0,0,0,111.52,32.6,2.88,2.88,0,0,0,0-4.12ZM66.59,15A51.82,51.82,0,0,0,17.78,49.27H8.41a61.14,61.14,0,0,1,98.78-28.39l-6.75,6.75A51.76,51.76,0,0,0,66.59,15ZM67,128.15A60.93,60.93,0,0,1,8.44,84.74h9.37a51.84,51.84,0,0,0,82.63,21.55l6.75,6.76A60.85,60.85,0,0,1,67,128.15Z' })
        )
      )
    )
  );
};

Cluedinlogo.propTypes = {
  color: propTypes.string
};

Cluedinlogo.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Codefile = function Codefile(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.84 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.89,8a.44.44,0,0,0,0-.62.44.44,0,0,0-.62,0l-1.9,2a.44.44,0,0,0,0,.61l1.9,2a.45.45,0,0,0,.26.13v0h.06a.46.46,0,0,0,.3-.12.44.44,0,0,0,0-.62L3.26,9.77,4.87,8Z' }),
          React__default.createElement('path', { d: 'M10.5,9.45l-1.9-2a.45.45,0,0,0-.62,0,.44.44,0,0,0-.14.3A.43.43,0,0,0,8,8L9.57,9.76,8,11.49a.42.42,0,0,0-.12.3.44.44,0,0,0,.44.44.47.47,0,0,0,.32-.15l1.9-2A.44.44,0,0,0,10.5,9.45Z' }),
          React__default.createElement('path', { d: 'M7.27,5.55a.42.42,0,0,0-.33.06.44.44,0,0,0-.19.28L5.23,13.31a.41.41,0,0,0,.06.33.44.44,0,0,0,.28.19h.1a.43.43,0,0,0,.43-.35L7.61,6.07A.44.44,0,0,0,7.27,5.55Z' }),
          React__default.createElement('path', { d: 'M1.33,0A1.33,1.33,0,0,0,0,1.33V14.42a1.33,1.33,0,0,0,1.33,1.33H11.51a1.33,1.33,0,0,0,1.33-1.33V3.26L9.58,0ZM11.64,14.55H1.2V1.2H8.73V4.11h2.91Z' })
        )
      )
    )
  );
};

Codefile.propTypes = {
  color: propTypes.string
};

Codefile.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Code = function Code(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.18 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M5.14,4.81a.85.85,0,0,0-.06-1.2.85.85,0,0,0-1.2.05L.23,7.56a.85.85,0,0,0,0,1.17l3.66,3.9a.86.86,0,0,0,.5.25v0h.12a.89.89,0,0,0,.57-.23.85.85,0,0,0,0-1.2L2,8.16,5.11,4.83Z' }),
          React__default.createElement('path', { d: 'M16,7.54,12.3,3.64a.87.87,0,0,0-1.19,0,.85.85,0,0,0-.27.59.84.84,0,0,0,.22.61l3.11,3.33L11,11.45a.8.8,0,0,0-.23.57.84.84,0,0,0,.85.85.91.91,0,0,0,.63-.28L16,8.7A.85.85,0,0,0,16,7.54Z' }),
          React__default.createElement('path', { d: 'M9.73,0A.8.8,0,0,0,9.1.13a.84.84,0,0,0-.37.55L5.81,15a.8.8,0,0,0,.11.63.85.85,0,0,0,.54.37.45.45,0,0,0,.18,0,.83.83,0,0,0,.83-.68L10.38,1A.84.84,0,0,0,9.73,0Z' })
        )
      )
    )
  );
};

Code.propTypes = {
  color: propTypes.string
};

Code.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Comment = function Comment(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.49 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M3.55,16a.37.37,0,0,0,.39,0l3.7-2.78h7.29a1.56,1.56,0,0,0,1.55-1.55v-10A1.56,1.56,0,0,0,14.94,0H1.55A1.56,1.56,0,0,0,0,1.55v10a1.56,1.56,0,0,0,1.55,1.55H3.35v2.48A.37.37,0,0,0,3.55,16ZM1.43,11.71V1.43H15.06V11.71H7.17L4.78,13.51V11.71Z' })
        )
      )
    )
  );
};

Comment.propTypes = {
  color: propTypes.string
};

Comment.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Competitoropportunity = function Competitoropportunity(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.99 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', { x: '5.21', y: '4.45', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '8.26', y: '4.45', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '5.21', y: '7.49', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '8.26', y: '7.49', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '2.16', y: '10.54', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '5.21', y: '10.54', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '8.26', y: '10.54', width: '1.52', height: '1.52' }),
          React__default.createElement('rect', { x: '11.3', y: '10.54', width: '1.52', height: '1.52' }),
          React__default.createElement('path', { d: 'M9,0H6a.64.64,0,0,0-.64.64v.89H3.68A.64.64,0,0,0,3,2.16V8.38H.64A.64.64,0,0,0,0,9v6.1a.64.64,0,0,0,.64.64H14.35a.64.64,0,0,0,.64-.64V9a.64.64,0,0,0-.64-.64H11.94V2.16a.64.64,0,0,0-.64-.64H9.65V.64A.64.64,0,0,0,9,0Zm1.65,2.8V9a.64.64,0,0,0,.64.64h2.41v4.82H8.89V13H6.1v1.52H1.27V9.65H3.68A.64.64,0,0,0,4.32,9V2.8H6a.64.64,0,0,0,.64-.64V1.27H8.38v.89A.64.64,0,0,0,9,2.8Z' })
        )
      )
    )
  );
};

Competitoropportunity.propTypes = {
  color: propTypes.string
};

Competitoropportunity.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Consent = function Consent(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.55 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '10 4.09 9.12 4.97 11.07 6.93 14.7 3.3 13.82 2.42 11.07 5.16 10 4.09' }),
          React__default.createElement('path', { d: 'M4.67,12.55h7.88V11.2h-8V2.4H3.2v8.68A1.47,1.47,0,0,0,4.67,12.55Z' }),
          React__default.createElement('path', { d: 'M1.47,15.75H9.35V14.4h-8V5.6H0v8.68A1.47,1.47,0,0,0,1.47,15.75Z' }),
          React__default.createElement('path', { d: 'M15.07,0H7.88A1.47,1.47,0,0,0,6.4,1.47V7.88A1.47,1.47,0,0,0,7.88,9.35h7.19a1.47,1.47,0,0,0,1.48-1.47V1.47A1.47,1.47,0,0,0,15.07,0ZM7.75,8V1.35H15.2V8Z' })
        )
      )
    )
  );
};

Consent.propTypes = {
  color: propTypes.string
};

Consent.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Contact = function Contact(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.73 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.1,0a3.62,3.62,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.35,2.35,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z' }),
          React__default.createElement('path', { d: 'M0,16H9.52V14.42H1.58v-.11c0-2.19,2.27-3.72,5.52-3.72a8.55,8.55,0,0,1,2.42.33V9.29A10.46,10.46,0,0,0,7.1,9C2.92,9,0,11.19,0,14.31Z' }),
          React__default.createElement('polygon', { points: '16.73 11.72 14.03 11.72 14.03 9.01 12.45 9.01 12.45 11.72 9.75 11.72 9.75 13.3 12.45 13.3 12.45 16 14.03 16 14.03 13.3 16.73 13.3 16.73 11.72' })
        )
      )
    )
  );
};

Contact.propTypes = {
  color: propTypes.string
};

Contact.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Copylink = function Copylink(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13.17,8.77l1.69-1.69a3.89,3.89,0,0,0,0-5.49l-.46-.46a3.89,3.89,0,0,0-5.49,0L6.13,3.92a3.89,3.89,0,0,0,0,5.49l.23.23A.88.88,0,1,0,7.61,8.39l-.23-.23a2.12,2.12,0,0,1,0-3l2.79-2.79a2.12,2.12,0,0,1,3,0l.46.46a2.12,2.12,0,0,1,0,3L11.92,7.53a.88.88,0,0,0,0,1.25A.9.9,0,0,0,13.17,8.77Z' }),
          React__default.createElement('path', { d: 'M2.94,7.11l-1.8,1.8a3.88,3.88,0,0,0,0,5.49l.46.46h0a3.88,3.88,0,0,0,5.49,0l2.79-2.79a3.89,3.89,0,0,0,0-5.49l-.23-.23a.9.9,0,0,0-1.25,0,.88.88,0,0,0,0,1.25l.23.23a2.12,2.12,0,0,1,0,3L5.83,13.62a2.12,2.12,0,0,1-3,0l-.46-.46a2.12,2.12,0,0,1,0-3l1.8-1.8a.88.88,0,0,0,0-1.25A.9.9,0,0,0,2.94,7.11Z' })
        )
      )
    )
  );
};

Copylink.propTypes = {
  color: propTypes.string
};

Copylink.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Creditcard = function Creditcard(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.07 12.49',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.29,7.61a1.16,1.16,0,0,0-.84.36,1.14,1.14,0,0,0-.83-.36,1.16,1.16,0,1,0,0,2.31,1.14,1.14,0,0,0,.83-.36,1.15,1.15,0,0,0,2-.8A1.15,1.15,0,0,0,14.29,7.61Z' }),
          React__default.createElement('path', { d: 'M16.47,0H1.6A1.6,1.6,0,0,0,0,1.6v9.29a1.6,1.6,0,0,0,1.6,1.6H16.47a1.6,1.6,0,0,0,1.6-1.6V1.6A1.6,1.6,0,0,0,16.47,0ZM16,11.15H2.06a.72.72,0,0,1-.72-.72V5.86H16.73v4.57A.73.73,0,0,1,16,11.15Zm.73-8H1.34V1.73a.4.4,0,0,1,.4-.4H16.33a.4.4,0,0,1,.4.41Z' })
        )
      )
    )
  );
};

Creditcard.propTypes = {
  color: propTypes.string
};

Creditcard.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Crunchbase = function Crunchbase(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '10.91', cy: '9.23', r: '1.64' }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM5.09,10.86a1.64,1.64,0,0,0,1.49-1H7.63a2.63,2.63,0,1,1,0-1.28h-1a1.64,1.64,0,1,0-1.51,2.26Zm5.83,1a2.62,2.62,0,0,1-1.64-.57v.35h-1V4.14h1v3a2.63,2.63,0,1,1,1.64,4.69Z' })
        )
      )
    )
  );
};

Crunchbase.propTypes = {
  color: propTypes.string
};

Crunchbase.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Cta = function Cta(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 9.93 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.69,8.82a1.11,1.11,0,0,0-.53.12,1.23,1.23,0,0,0-1.59-.48,1.25,1.25,0,0,0-1.43-.55V5.74a1.18,1.18,0,0,0-.37-.87,1.24,1.24,0,0,0-2.12.87v5l-.43-.43A1.28,1.28,0,0,0,.64,10.2a1.22,1.22,0,0,0-.54.86,1.33,1.33,0,0,0,.27,1l2.18,2.63A3.61,3.61,0,0,0,5.35,16H6.71a3.21,3.21,0,0,0,3.22-3.22V10.06A1.23,1.23,0,0,0,8.69,8.82ZM3.56,11.39V5.74a.31.31,0,0,1,.09-.25.37.37,0,0,1,.5,0,.33.33,0,0,1,.1.25V9.62a.44.44,0,0,0,.44.45.45.45,0,0,0,.45-.45V9.1a.36.36,0,0,1,.36-.36.37.37,0,0,1,.37.36v1a.44.44,0,0,0,.44.45.45.45,0,0,0,.45-.45V9.58a.36.36,0,0,1,.72,0v1a.44.44,0,0,0,.45.44.43.43,0,0,0,.44-.44v-.53a.36.36,0,0,1,.71,0v2.69a2.45,2.45,0,0,1-.71,1.66,2.3,2.3,0,0,1-1.66.69H5.35a2.76,2.76,0,0,1-2.11-1L1.06,11.47A.33.33,0,0,1,1,11.19a.35.35,0,0,1,.15-.26.42.42,0,0,1,.21-.06.4.4,0,0,1,.27.11l.87.87a.63.63,0,0,0,.69.13A.66.66,0,0,0,3.56,11.39Z' }),
          React__default.createElement('path', { d: 'M2.18,3.86a.49.49,0,0,1-.34-.14L.14,2a.48.48,0,0,1,0-.68.48.48,0,0,1,.68,0L2.52,3a.5.5,0,0,1,0,.68A.51.51,0,0,1,2.18,3.86Z' }),
          React__default.createElement('path', { d: 'M3.89,3.36a.48.48,0,0,1-.48-.48V.48A.48.48,0,0,1,3.89,0a.47.47,0,0,1,.48.48v2.4A.47.47,0,0,1,3.89,3.36Z' }),
          React__default.createElement('path', { d: 'M5.53,3.86a.49.49,0,0,1-.34-.14.48.48,0,0,1,0-.68l1.7-1.7a.48.48,0,0,1,.68,0,.5.5,0,0,1,0,.68l-1.7,1.7A.51.51,0,0,1,5.53,3.86Z' })
        )
      )
    )
  );
};

Cta.propTypes = {
  color: propTypes.string
};

Cta.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Customerinteligence = function Customerinteligence(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 13.51 15.97',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13.16,7.23C12.35,3.67,11.51,0,6.35,0A6.36,6.36,0,0,0,0,6.35v9A.62.62,0,0,0,.61,16H8.8a.62.62,0,0,0,.62-.61V13.51h1a1.44,1.44,0,0,0,1.44-1.43V9.42h1a.6.6,0,0,0,.48-.24.61.61,0,0,0,.12-.52q-.18-.71-.33-1.38Zm-1.9,1a.61.61,0,0,0-.61.61v3.48H8.8a.62.62,0,0,0-.61.62v1.84h-7V6.35A5.12,5.12,0,0,1,6.35,1.23c4,0,4.69,2.27,5.61,6.27l.16.69Z' }),
          React__default.createElement('path', { d: 'M8.8,7.58V6.76H7.93a1.57,1.57,0,0,0-.18-.42l.62-.62L7.8,5.14l-.63.62a1.23,1.23,0,0,0-.41-.17V4.71H5.94v.88a1.28,1.28,0,0,0-.42.17L4.9,5.14l-.58.58.62.62a1.94,1.94,0,0,0-.17.42H3.89v.82h.88A2.09,2.09,0,0,0,4.94,8l-.62.62.58.58.62-.62a1.57,1.57,0,0,0,.42.18v.87h.82V8.75a1.5,1.5,0,0,0,.41-.18l.63.62.57-.58L7.75,8a1.65,1.65,0,0,0,.18-.41ZM6.35,8a.82.82,0,1,1,.82-.82A.82.82,0,0,1,6.35,8Z' })
        )
      )
    )
  );
};

Customerinteligence.propTypes = {
  color: propTypes.string
};

Customerinteligence.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Datamart = function Datamart(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.19 17.2',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M17.19,7.35l-1-6.84A.6.6,0,0,0,15.6,0H1.6A.6.6,0,0,0,1,.51L0,7.35s0,.08,0,.12v.89a2.6,2.6,0,0,0,1,2V16.6a.6.6,0,0,0,.6.6h14a.6.6,0,0,0,.6-.6V10.38a2.55,2.55,0,0,0,1-2V7.47S17.19,7.39,17.19,7.35ZM14.6,9.78a1.43,1.43,0,0,1-1.42-1.42V8H16v.32A1.42,1.42,0,0,1,14.6,9.78ZM1.18,8.36V8H4v.32a1.42,1.42,0,1,1-2.83,0Zm4-.32H8v.32a1.42,1.42,0,1,1-2.83,0Zm4,0H12v.32a1.42,1.42,0,1,1-2.83,0ZM2.11,1.2h13l.82,5.64H1.29ZM2.19,16V14.27H15V16ZM15,13.09H2.19V10.91a2.71,2.71,0,0,0,.41,0,2.57,2.57,0,0,0,2-1,2.55,2.55,0,0,0,4,0,2.55,2.55,0,0,0,4,0,2.55,2.55,0,0,0,2,1,2.58,2.58,0,0,0,.39,0Z' })
        )
      )
    )
  );
};

Datamart.propTypes = {
  color: propTypes.string
};

Datamart.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Database = function Database(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.37 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.19,0C3.62,0,0,1.07,0,3.12v9.75C0,14.93,3.62,16,7.19,16s7.19-1.07,7.19-3.12V3.12C14.37,1.07,10.76,0,7.19,0ZM13,12.88c0,.62-2.21,1.75-5.82,1.75s-5.82-1.13-5.82-1.75V11.53l.19.1a12.8,12.8,0,0,0,5.63,1.12,12.8,12.8,0,0,0,5.63-1.12l.19-.1Zm0-3.25c0,.62-2.21,1.75-5.82,1.75S1.37,10.24,1.37,9.63V8.28l.19.1A12.82,12.82,0,0,0,7.19,9.5a12.82,12.82,0,0,0,5.63-1.12l.19-.1Zm0-3.25C13,7,10.79,8.13,7.19,8.13S1.37,7,1.37,6.38V5l.19.1A12.81,12.81,0,0,0,7.19,6.25a12.81,12.81,0,0,0,5.63-1.12L13,5ZM7.19,4.88c-3.61,0-5.82-1.13-5.82-1.75S3.58,1.37,7.19,1.37,13,2.51,13,3.12,10.79,4.88,7.19,4.88Z' })
        )
      )
    )
  );
};

Database.propTypes = {
  color: propTypes.string
};

Database.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Defaultorganizationimage = function Defaultorganizationimage(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 36.94 36.94',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '18.47', cy: '18.47', r: '17.97' }),
          React__default.createElement('path', { d: 'M26.78,19.66h1.07a.85.85,0,0,0,.81-.9V15.4a.9.9,0,0,0-.45-.81L18.83,9.46a.74.74,0,0,0-.36-.09.8.8,0,0,0-.36.09L8.74,14.59a.91.91,0,0,0-.46.81v3.36a.86.86,0,0,0,.82.9h1.06v7a.85.85,0,0,0,.81.9H26a.85.85,0,0,0,.81-.9Zm-6.11,6.11H16.28V20.7a2.2,2.2,0,0,1,4.39,0ZM26,17.86a.85.85,0,0,0-.81.9v7H21.92V20.7a3.45,3.45,0,0,0-6.9,0v5.07H11.78v-7a.85.85,0,0,0-.81-.9H9.91V16l.06,0,8.5-4.64.06,0L27,16v1.9Z' })
        )
      )
    )
  );
};

Defaultorganizationimage.propTypes = {
  color: propTypes.string
};

Defaultorganizationimage.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Delete = function Delete(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 11.73 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M1.6,16h8.54a1.6,1.6,0,0,0,1.6-1.6V4.27H0V14.4A1.6,1.6,0,0,0,1.6,16ZM1.48,5.75h8.77v8.77H1.48Z' }),
          React__default.createElement('polygon', { points: '0 3.19 11.73 3.19 11.73 1.71 8.31 1.71 8.31 0 3.42 0 3.42 1.71 0 1.71 0 3.19' }),
          React__default.createElement('rect', { x: '3.42', y: '7.69', width: '1.48', height: '4.9' }),
          React__default.createElement('rect', { x: '6.83', y: '7.69', width: '1.48', height: '4.9' })
        )
      )
    )
  );
};

Delete.propTypes = {
  color: propTypes.string
};

Delete.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Department = function Department(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,6.65a.59.59,0,0,0-.59-.59H14.35l0-.06A6.65,6.65,0,0,0,10,1.67l-.06,0V.59A.59.59,0,0,0,9.35,0H6.65a.59.59,0,0,0-.59.59V1.66L6,1.68A6.66,6.66,0,0,0,1.67,6l0,.06H.59A.59.59,0,0,0,0,6.65V9.35a.59.59,0,0,0,.59.59H1.65l0,.06A6.66,6.66,0,0,0,6,14.33l.06,0v1.07a.59.59,0,0,0,.59.59H9.35a.59.59,0,0,0,.59-.59V14.35l.06,0A6.65,6.65,0,0,0,14.33,10l0-.06h1.06A.59.59,0,0,0,16,9.35ZM7.24,1.18H8.76V2.69H7.24ZM2.69,8.76H1.18V7.24H2.69Zm6.06,6.06H7.24V13.31H8.76Zm4-4.88h.4l0,.12a5.51,5.51,0,0,1-3,3l-.12,0v-.4a.59.59,0,0,0-.59-.59H6.65a.59.59,0,0,0-.59.59v.4l-.12,0a5.52,5.52,0,0,1-3-3l0-.12h.4a.59.59,0,0,0,.59-.59V6.65a.59.59,0,0,0-.59-.59h-.4l0-.12a5.52,5.52,0,0,1,3-3l.12,0v.4a.59.59,0,0,0,.59.59H9.35a.59.59,0,0,0,.59-.59v-.4l.12,0a5.51,5.51,0,0,1,3,3l0,.12h-.4a.59.59,0,0,0-.59.59V9.35A.59.59,0,0,0,12.72,9.94Zm2.11-1.18H13.31V7.24h1.52Z' })
        )
      )
    )
  );
};

Department.propTypes = {
  color: propTypes.string
};

Department.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Deployment = function Deployment(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.79 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '15.79 5.13 15.79 5.13 15.79 5.13 15.79 5.13' }),
          React__default.createElement('path', { d: 'M.67,15.75h14.4a.68.68,0,0,0,.67-.67V5.46a.67.67,0,0,0,0-.23l0,0,0-.06,0,0L12.44.3a.67.67,0,0,0-.56-.3h-8a.67.67,0,0,0-.56.3L.11,5.1l0,0,0,0,0,.05a.68.68,0,0,0,0,.23v9.61A.68.68,0,0,0,.67,15.75ZM8.55,1.35h3l2.3,3.45H8.55Zm-4.31,0h3V4.8H1.94ZM1.35,6.15h13V14.4h-13Z' })
        )
      )
    )
  );
};

Deployment.propTypes = {
  color: propTypes.string
};

Deployment.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Diagram = function Diagram(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.4 17.4',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.7,0a8.7,8.7,0,1,0,8.7,8.7A8.71,8.71,0,0,0,8.7,0ZM16,8.31H9.3V1.43A7.3,7.3,0,0,1,16,8.31ZM8.7,16A7.3,7.3,0,0,1,8.1,1.43V9.51H16A7.31,7.31,0,0,1,8.7,16Z' })
        )
      )
    )
  );
};

Diagram.propTypes = {
  color: propTypes.string
};

Diagram.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Directoryopen = function Directoryopen(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 19.26 13.84',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M19,3a1.41,1.41,0,0,0-1.16-.61H7.91L6.6.66A1.65,1.65,0,0,0,5.29,0H1.64A1.65,1.65,0,0,0,0,1.64V12.18a1.64,1.64,0,0,0,1.63,1.64h0l12.87,0a1.4,1.4,0,0,0,1.31-.9l3.35-8.61A1.42,1.42,0,0,0,19,3ZM5,2.4a1.42,1.42,0,0,0-1.32.93l-2,5.49V1.67H5.28l.55.74ZM17.65,3.94l-3.19,8.21H2.1l3-8.2Z' })
        )
      )
    )
  );
};

Directoryopen.propTypes = {
  color: propTypes.string
};

Directoryopen.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Discussion = function Discussion(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.22 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.22,1.18A1.18,1.18,0,0,0,15,0H5.59A1.18,1.18,0,0,0,4.41,1.18V8.27A1.18,1.18,0,0,0,5.59,9.45h5.12l2.68,2a.29.29,0,0,0,.47-.23V9.45H15a1.18,1.18,0,0,0,1.18-1.18ZM15,8.27H12.68V9.45L11.1,8.27H5.59V1.18H15Z' }),
          React__default.createElement('path', { d: 'M11.81,10.9H10.63v1.78H5.12L3.54,13.86V12.68H1.18V5.59H3.3V4.41H1.18A1.18,1.18,0,0,0,0,5.59v7.09a1.18,1.18,0,0,0,1.18,1.18H2.36v1.92a.22.22,0,0,0,.36.18l2.79-2.09h5.12a1.18,1.18,0,0,0,1.18-1.18Z' })
        )
      )
    )
  );
};

Discussion.propTypes = {
  color: propTypes.string
};

Discussion.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Domain = function Domain(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 13.4 17.4',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M11.63,5.47a3,3,0,0,0,0-.51,3.16,3.16,0,0,0-2-3A2.51,2.51,0,0,0,7.17,0H6.23A2.5,2.5,0,0,0,3.78,2,3.16,3.16,0,0,0,1.73,5a3,3,0,0,0,0,.52,3.72,3.72,0,0,0,2,6.9H6V16.7a.7.7,0,1,0,1.4,0V12.37H9.67a3.73,3.73,0,0,0,2-6.9Zm-2,5.5H3.73a2.33,2.33,0,0,1-.87-4.48.7.7,0,0,0,.39-.9A1.72,1.72,0,0,1,3.13,5,1.76,1.76,0,0,1,4.56,3.23a.74.74,0,0,0,.57-.73A1.11,1.11,0,0,1,6.23,1.4h.94a1.11,1.11,0,0,1,1.1,1.12.7.7,0,0,0,.57.71A1.76,1.76,0,0,1,10.27,5a1.74,1.74,0,0,1-.12.63.7.7,0,0,0,.39.9A2.33,2.33,0,0,1,9.67,11Z' })
        )
      )
    )
  );
};

Domain.propTypes = {
  color: propTypes.string
};

Domain.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Done = function Done(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('polygon', { points: '7.48 8.82 5.41 6.75 4.3 7.87 7.48 11.05 12.46 6.07 11.35 4.95 7.48 8.82' })
        )
      )
    )
  );
};

Done.propTypes = {
  color: propTypes.string
};

Done.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Emailthread = function Emailthread(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 10.26',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.44A1.44,1.44,0,0,0,14.56,0H1.44A1.44,1.44,0,0,0,0,1.44V8.82a1.44,1.44,0,0,0,1.44,1.44H14.56A1.44,1.44,0,0,0,16,8.82Zm-2.27-.21L8,4.81l-.11-.07L2.27,1.23ZM1.23,9V2l.31.19L7.67,6.06a.62.62,0,0,0,.65,0l6.44-4V9Z' })
        )
      )
    )
  );
};

Emailthread.propTypes = {
  color: propTypes.string
};

Emailthread.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Engine = function Engine(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20.04 17',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M20,10.78c0-3-.7-6.13-2.22-6.17H15.49a1.49,1.49,0,0,0-1.15.82H13a2.81,2.81,0,0,0-1.09-.72A1.93,1.93,0,0,0,10.5,3.1V2.16c5.1,0,5.11-.74,5.11-1.08S15.61,0,10,0,4.38.73,4.38,1.08s0,1,5.12,1.08v1A1.92,1.92,0,0,0,8.11,4.7,2.75,2.75,0,0,0,7,5.44H5.7a1.49,1.49,0,0,0-1.15-.82H2.22C.7,4.65,0,7.82,0,10.78S.7,16.91,2.22,17H4.55a1.37,1.37,0,0,0,1-.67H7.1A2.47,2.47,0,0,0,8.81,17H11.2a2.51,2.51,0,0,0,1.71-.73h1.55a1.37,1.37,0,0,0,1,.67h2.33C19.34,16.91,20,13.73,20,10.78Zm-4,4.49H13.6a3.74,3.74,0,0,0,.33-1.5V7.82a3.65,3.65,0,0,0-.28-1.38h2.42a12.07,12.07,0,0,1,.66,4.34A11.65,11.65,0,0,1,16,15.27ZM10,1c1,0,1.86,0,2.59.08-.73,0-1.6.08-2.59.08s-1.87,0-2.59-.08C8.13,1,9,1,10,1Zm0,3a.93.93,0,0,1,.85.54H9.17A.94.94,0,0,1,10,4ZM6.4,15.27H4a11.6,11.6,0,0,1-.73-4.49A12,12,0,0,1,4,6.44H6.34a3.65,3.65,0,0,0-.27,1.38v5.95A3.7,3.7,0,0,0,6.4,15.27ZM1,10.78c0-3.36.88-5.17,1.25-5.17h1a12,12,0,0,0-1,5.17,12,12,0,0,0,1,5.17h-1C1.88,16,1,14.14,1,10.78ZM11.2,16H8.81a2,2,0,0,1-1.74-2.23V7.82A2.09,2.09,0,0,1,8.62,5.61h2.75a2.11,2.11,0,0,1,1.56,2.21v5.95A2,2,0,0,1,11.2,16ZM17.79,16h-1a11.88,11.88,0,0,0,.95-5.17,11.85,11.85,0,0,0-.95-5.17h1c.36,0,1.25,1.81,1.25,5.17S18.15,16,17.79,16Z' })
        )
      )
    )
  );
};

Engine.propTypes = {
  color: propTypes.string
};

Engine.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Epic = function Epic(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12.72,9.65V.7A.7.7,0,0,0,12,0H.7A.7.7,0,0,0,0,.7V9.65a3.93,3.93,0,0,0,1.67,3.21l4.29,3a.71.71,0,0,0,.8,0l4.29-3A3.93,3.93,0,0,0,12.72,9.65Zm-2.47,2.07L6.36,14.45,2.47,11.71A2.53,2.53,0,0,1,1.39,9.65V1.39h9.93V9.65A2.53,2.53,0,0,1,10.25,11.71Z' })
        )
      )
    )
  );
};

Epic.propTypes = {
  color: propTypes.string
};

Epic.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Event = function Event(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.57 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M5.34.73a.73.73,0,1,0-1.46,0v2.6a.73.73,0,1,0,1.46,0Z' }),
          React__default.createElement('path', { d: 'M10.7.73a.73.73,0,1,0-1.46,0v2.6a.73.73,0,1,0,1.46,0Z' }),
          React__default.createElement('rect', { x: '6.44', y: '1.4', width: '1.7', height: '1.25' }),
          React__default.createElement('path', { d: 'M14.57,2.89a1.46,1.46,0,0,0-1.46-1.46H11.68V2.68h1.65V6.13H1.25V2.68H2.93V1.43H1.46A1.46,1.46,0,0,0,0,2.89V14.54A1.46,1.46,0,0,0,1.46,16H13.11a1.46,1.46,0,0,0,1.46-1.46ZM1.25,14.75V7.59H13.32v7.16Z' })
        )
      )
    )
  );
};

Event.propTypes = {
  color: propTypes.string
};

Event.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Externallink = function Externallink(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '14.34 2.88 14.37 6.04 16 6.05 15.94 0.11 10 0.05 10.02 1.68 13.18 1.71 5.05 9.84 6.2 11.02 14.34 2.88' }),
          React__default.createElement('path', { d: 'M14.42,8.36v6.07H1.58V1.58H7.32V0H1.69A1.69,1.69,0,0,0,0,1.69V14.31A1.69,1.69,0,0,0,1.69,16H14.31A1.69,1.69,0,0,0,16,14.31v-6Z' })
        )
      )
    )
  );
};

Externallink.propTypes = {
  color: propTypes.string
};

Externallink.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Facebook = function Facebook(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm2.12,8H8.73v4.94H6.68V8h-1V6.26h1V5.13A1.93,1.93,0,0,1,8.75,3.05h1.52v1.7H9.17a.42.42,0,0,0-.44.48v1H10.3Z' })
        )
      )
    )
  );
};

Facebook.propTypes = {
  color: propTypes.string
};

Facebook.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Filter = function Filter(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.25 17.5',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15,1.09A2,2,0,0,0,13.26,0H2A2,2,0,0,0,.36,3.13L4.75,9.37v6a.74.74,0,0,0,.51.71l4,1.37a.67.67,0,0,0,.24,0,.77.77,0,0,0,.44-.14.74.74,0,0,0,.31-.61V9.42l4.59-6.26A2,2,0,0,0,15,1.09ZM6.25,14.84v-5H8.77V15.7ZM13.66,2.27,9.17,8.38H5.89L1.59,2.26a.46.46,0,0,1,0-.5A.46.46,0,0,1,2,1.5H13.26a.49.49,0,0,1,.4.77Z' })
        )
      )
    )
  );
};

Filter.propTypes = {
  color: propTypes.string
};

Filter.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Followactivestate = function Followactivestate(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('path', { d: 'M9.62,4.17a2.24,2.24,0,0,0-1.47.62L8,4.94l-.15-.15a2.24,2.24,0,0,0-1.47-.62,2.86,2.86,0,0,0-3,3c0,2.68,3.9,5.1,4.34,5.37a.59.59,0,0,0,.6,0c.45-.27,4.34-2.69,4.34-5.37A2.86,2.86,0,0,0,9.62,4.17Z' })
        )
      )
    )
  );
};

Followactivestate.propTypes = {
  color: propTypes.string
};

Followactivestate.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Followentities = function Followentities(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('path', { d: 'M12.64,7.19a2.86,2.86,0,0,0-3-3,2.2,2.2,0,0,0-1.47.62L8,4.94l-.15-.15a2.2,2.2,0,0,0-1.47-.62,2.86,2.86,0,0,0-3,3c0,2.69,3.9,5.1,4.34,5.37a.61.61,0,0,0,.6,0C8.75,12.29,12.64,9.87,12.64,7.19ZM8.13,11.28,8,11.36l-.13-.09c-.56-.38-3.34-2.36-3.34-4.09A1.72,1.72,0,0,1,6.38,5.34a1.17,1.17,0,0,1,1,1,.59.59,0,1,0,1.17,0,1.17,1.17,0,0,1,1-1,1.72,1.72,0,0,1,1.85,1.85C11.47,8.92,8.69,10.9,8.13,11.28Z' })
        )
      )
    )
  );
};

Followentities.propTypes = {
  color: propTypes.string
};

Followentities.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Fullscreen = function Fullscreen(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 15.99',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '5.4 9.43 1.66 13.17 1.63 10.01 0 9.99 0.06 15.93 6 15.99 5.99 14.37 2.82 14.33 6.2 10.96 6.2 10.96 6.57 10.59 5.4 9.43' }),
          React__default.createElement('polygon', { points: '15.94 0.06 10 0 10.02 1.63 13.18 1.66 9.8 5.03 9.8 5.03 9.43 5.4 10.6 6.57 14.34 2.82 14.37 5.99 16 6 15.94 0.06' })
        )
      )
    )
  );
};

Fullscreen.propTypes = {
  color: propTypes.string
};

Fullscreen.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Gift = function Gift(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.52 15.5',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15.52,6.14a1.35,1.35,0,0,0-1.35-1.35H10.65l.91-.47a3.7,3.7,0,0,0,.93-.66,2.16,2.16,0,0,0,0-3,2.21,2.21,0,0,0-3,0A6.74,6.74,0,0,0,8,4.5v.12H7.52V4.5A6.77,6.77,0,0,0,6.08.61a2.21,2.21,0,0,0-3,0,2.15,2.15,0,0,0,0,3A3.7,3.7,0,0,0,4,4.31l.91.47H1.35A1.35,1.35,0,0,0,0,6.14v2.4a.55.55,0,0,0,.55.55H.8v5.06A1.35,1.35,0,0,0,2.15,15.5H13.37a1.35,1.35,0,0,0,1.35-1.35V9.09H15a.55.55,0,0,0,.55-.55ZM4.81,14.4H1.9V9.09h2.9ZM4.81,8H1.1V5.89h3.7ZM9.26,3.54a4.6,4.6,0,0,1,.93-2.12h0l0,0a1.08,1.08,0,0,1,1.49,0,1,1,0,0,1,0,1.49,4.49,4.49,0,0,1-2.15,1l-.37.08ZM3.81,2.87a1,1,0,0,1,0-1.49,1.08,1.08,0,0,1,1.49,0,4.5,4.5,0,0,1,1,2.15l.08.37L6,3.83A4.48,4.48,0,0,1,3.81,2.87ZM9.61,14.4H5.91V9.09h3.7ZM9.61,8H5.91V5.89h3.7Zm4,6.41h-2.9V9.09h2.9ZM14.42,8h-3.7V5.89h3.7Z' })
        )
      )
    )
  );
};

Gift.propTypes = {
  color: propTypes.string
};

Gift.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Github = function Github(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.68,8.15a3,3,0,0,0,.16.36,2.71,2.71,0,0,0,2.32,1.2,1,1,0,0,0-.41.66,1.37,1.37,0,0,1-1,.08c-.48-.15-.66-1.08-1.38-1-.16,0-.12.13,0,.22a1.4,1.4,0,0,1,.59.69,1.18,1.18,0,0,0,1.19.79,3.65,3.65,0,0,0,.55,0s0,.73,0,1-.45.42-.45.58.15.07.27.07.73-.19.73-.53,0-1.18,0-1.33a.51.51,0,0,1,.19-.46s0,1.85,0,2.1-.23.25-.23.38.59,0,.79-.38A11,11,0,0,0,8,10.45h.16s0,.83,0,1.21,0,.89.21,1.13.66.43.66.18-.28-.26-.28-.65V10.52c.22,0,.19.59.19.59l0,1.09a.56.56,0,0,0,.44.57c.17.06.54.08.56,0s-.44-.25-.45-.56,0-.3,0-1.12S9.45,10,9.06,9.71c1.2-.12,1.95-.41,2.31-1.2a1.22,1.22,0,0,0,.13-.37,4.35,4.35,0,0,0,.13-1.06A2.38,2.38,0,0,0,11,5.39,1.9,1.9,0,0,0,10.87,4c-.31-.11-1.08.28-1.5.55a5.64,5.64,0,0,0-2.67.05c-1-.7-1.53-.6-1.53-.6a2,2,0,0,0-.09,1.48A2,2,0,0,0,4.51,7,3.58,3.58,0,0,0,4.68,8.15ZM8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16Z' })
        )
      )
    )
  );
};

Github.propTypes = {
  color: propTypes.string
};

Github.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Googleplus = function Googleplus(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M6.8,9.53,6.62,9.4A2.1,2.1,0,0,0,6,9.31H6c-.94,0-1.76.57-1.76,1.21a1.44,1.44,0,0,0,1.6,1.25c1.18,0,1.78-.41,1.78-1.21a1,1,0,0,0,0-.23C7.52,10,7.23,9.83,6.8,9.53Z' }),
          React__default.createElement('path', { d: 'M6.14,7.08h0a.72.72,0,0,0,.56-.26A1.47,1.47,0,0,0,7,5.68,1.62,1.62,0,0,0,5.67,4.17h0a.72.72,0,0,0-.55.26,1.42,1.42,0,0,0-.26,1.12c.11.81.7,1.51,1.29,1.53Z' }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM7,12.5a4,4,0,0,1-1.12.15,5.15,5.15,0,0,1-1.26-.15,2.45,2.45,0,0,1-1.6-1,1.32,1.32,0,0,1-.17-.65,1.64,1.64,0,0,1,.16-.7A3,3,0,0,1,5.74,8.63h0a1.08,1.08,0,0,1-.15-.55,1.17,1.17,0,0,1,0-.29A2.21,2.21,0,0,1,3.42,5.58a2.36,2.36,0,0,1,1.7-2.07A2.79,2.79,0,0,1,6,3.35H8.77a.22.22,0,0,1,.13.39l-.61.45a.22.22,0,0,1-.13,0H7.94A2.14,2.14,0,0,1,8.39,5.6a2,2,0,0,1-.86,1.6c-.43.33-.44.42-.44.62a1.83,1.83,0,0,0,.63.68,2.13,2.13,0,0,1,1.05,2A2.24,2.24,0,0,1,7,12.5Zm6.2-4.71A.22.22,0,0,1,13,8H11.4V9.56a.22.22,0,0,1-.22.22h-.44a.22.22,0,0,1-.22-.22V8H9a.22.22,0,0,1-.22-.22V7.34A.22.22,0,0,1,9,7.13h1.56V5.57a.22.22,0,0,1,.22-.22h.44a.22.22,0,0,1,.22.22V7.13H13a.22.22,0,0,1,.22.22Z' })
        )
      )
    )
  );
};

Googleplus.propTypes = {
  color: propTypes.string
};

Googleplus.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Home = function Home(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.91 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.27,9h.93a.76.76,0,0,0,.71-.79v-3a.8.8,0,0,0-.4-.71L9.27.08a.66.66,0,0,0-.63,0L.4,4.59A.8.8,0,0,0,0,5.3v3A.76.76,0,0,0,.71,9h.93v6.17a.76.76,0,0,0,.71.79H15.55a.76.76,0,0,0,.71-.79Zm-5.38,5.38H7V10a1.93,1.93,0,1,1,3.86,0Zm4.66-7a.76.76,0,0,0-.71.79v6.17H12V10a3,3,0,0,0-6.07,0v4.46H3.08V8.25a.76.76,0,0,0-.71-.79H1.43V5.79l.06,0L9,1.67,9,1.7l7.48,4.09V7.46Z' })
        )
      )
    )
  );
};

Home.propTypes = {
  color: propTypes.string
};

Home.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Idea = function Idea(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 11.77 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.59,1.31a5.88,5.88,0,1,0-7.43,9.12.35.35,0,0,1,.14.24V11a3.54,3.54,0,0,0,.05.52H3.89A2,2,0,0,1,3.82,11v-.29a1.83,1.83,0,0,0-.7-1.41A4.37,4.37,0,0,1,4.93,1.61a4.57,4.57,0,0,1,.94-.1A4.37,4.37,0,0,1,8.63,9.28a1.78,1.78,0,0,0-.68,1.38V11a2,2,0,0,1-.08.52H9.41A3.54,3.54,0,0,0,9.46,11v-.32a.3.3,0,0,1,.12-.21,5.88,5.88,0,0,0,0-9.14Z' }),
          React__default.createElement('path', { d: 'M8.6,13.21H3.17a.54.54,0,0,1,0-1.08H8.6a.54.54,0,0,1,0,1.08Z' }),
          React__default.createElement('path', { d: 'M7.85,14.61H3.91a.54.54,0,0,1,0-1.08H7.85a.54.54,0,0,1,0,1.08Z' }),
          React__default.createElement('path', { d: 'M7.35,16H4.42a.54.54,0,0,1,0-1.08H7.35a.54.54,0,0,1,0,1.08Z' })
        )
      )
    )
  );
};

Idea.propTypes = {
  color: propTypes.string
};

Idea.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Instagram = function Instagram(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '11.3 6.25 11.3 4.97 11.3 4.78 11.11 4.78 9.83 4.78 9.83 6.25 11.3 6.25' }),
          React__default.createElement('path', { d: 'M8,9.65A1.53,1.53,0,1,0,6.43,8.12,1.53,1.53,0,0,0,8,9.65Z' }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.31,7.23v3.56a1.68,1.68,0,0,1-1.68,1.68H5.29a1.68,1.68,0,0,1-1.68-1.68V5.45A1.68,1.68,0,0,1,5.29,3.77h5.34a1.68,1.68,0,0,1,1.68,1.68Z' }),
          React__default.createElement('path', { d: 'M10.34,8.12a2.38,2.38,0,1,1-4.58-.89H4.46v3.56a.83.83,0,0,0,.83.83h5.34a.83.83,0,0,0,.83-.83V7.23h-1.3A2.36,2.36,0,0,1,10.34,8.12Z' })
        )
      )
    )
  );
};

Instagram.propTypes = {
  color: propTypes.string
};

Instagram.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Issue = function Issue(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 13.91',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', { x: '7.4', y: '5.22', width: '1.2', height: '3.7' }),
          React__default.createElement('rect', { x: '7.4', y: '9.87', width: '1.2', height: '1.18' }),
          React__default.createElement('path', { d: 'M8.59.34a.69.69,0,0,0-1.18,0L.09,12.88a.69.69,0,0,0,.59,1H15.31a.69.69,0,0,0,.59-1ZM1.74,12.62,8,1.89,8.09,2l6.17,10.58Z' })
        )
      )
    )
  );
};

Issue.propTypes = {
  color: propTypes.string
};

Issue.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Keepintheloop = function Keepintheloop(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.47 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M13,0a5.43,5.43,0,1,0,5.43,5.43A5.43,5.43,0,0,0,13,0Zm4.24,5.43A4.24,4.24,0,1,1,13,1.19,4.24,4.24,0,0,1,17.28,5.43Z' }),
          React__default.createElement('rect', { x: '12.56', y: '4.6', width: '0.95', height: '3.34' }),
          React__default.createElement('rect', { x: '12.56', y: '2.91', width: '0.95', height: '0.94' }),
          React__default.createElement('path', { d: 'M13,11.47v.62H6.26L4.33,13.54V12.09H1.44V3.42H7.23V2H1.44A1.44,1.44,0,0,0,0,3.42v8.67a1.44,1.44,0,0,0,1.44,1.44H2.89v2a.43.43,0,0,0,.68.34l3.17-2.38H13a1.44,1.44,0,0,0,1.44-1.44v-.62Z' })
        )
      )
    )
  );
};

Keepintheloop.propTypes = {
  color: propTypes.string
};

Keepintheloop.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Linkedin = function Linkedin(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM5.92,11.91H3.85V6.7H5.92Zm-1-6a1,1,0,0,1-1-.93,1,1,0,0,1,1-.93,1,1,0,0,1,1,.93A1,1,0,0,1,4.88,5.94Zm7.29,6H10.5V8.74a.94.94,0,0,0-.91-.84,1,1,0,0,0-1,.8v3.2H6.94L7,6.68H8.6v.66a1.64,1.64,0,0,1,1.62-.86c1.28,0,1.86.73,2,2.11Z' })
        )
      )
    )
  );
};

Linkedin.propTypes = {
  color: propTypes.string
};

Linkedin.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Loading = function Loading(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M1.38,10.88a.84.84,0,0,0,.42,1.56.91.91,0,0,0,.42-.11.82.82,0,0,0,.29-1.12A.82.82,0,0,0,1.38,10.88Z' }),
          React__default.createElement('path', { d: 'M4.4,2.61a.91.91,0,0,0,.42-.11.83.83,0,0,0,.29-1.14A.81.81,0,0,0,4,1.06a.8.8,0,0,0-.29,1.12A.77.77,0,0,0,4.4,2.61Z' }),
          React__default.createElement('path', { d: 'M4.83,13.5a.81.81,0,0,0-1.12.29A.82.82,0,0,0,4.4,15a.82.82,0,0,0,.42-1.52Z' }),
          React__default.createElement('path', { d: 'M1.38,5.14a.84.84,0,0,0,.4.11.8.8,0,0,0,.72-.42A.81.81,0,0,0,2.2,3.71.83.83,0,0,0,1.08,4,.82.82,0,0,0,1.38,5.14Z' }),
          React__default.createElement('path', { d: 'M.83,8.83A.83.83,0,1,0,0,8,.82.82,0,0,0,.83,8.83Z' }),
          React__default.createElement('path', { d: 'M8,0A.83.83,0,1,0,8,1.65a6.35,6.35,0,0,1,0,12.7A.83.83,0,0,0,8,16,8,8,0,0,0,8,0Z' })
        )
      )
    )
  );
};

Loading.propTypes = {
  color: propTypes.string
};

Loading.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Markassensitive = function Markassensitive(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.39 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '6.2', cy: '11.15', r: '1.35' }),
          React__default.createElement('path', { d: 'M6.2,0A4.4,4.4,0,0,0,1.8,4.39V6.31H1.69A1.69,1.69,0,0,0,0,8v6.31A1.69,1.69,0,0,0,1.69,16h9a1.69,1.69,0,0,0,1.69-1.69V8A1.69,1.69,0,0,0,10.7,6.31h-.11V4.39A4.4,4.4,0,0,0,6.2,0ZM3.38,4.39A2.82,2.82,0,0,1,9,4.39V6.31H3.38Zm7.44,3.49v6.54H1.58V7.89Z' })
        )
      )
    )
  );
};

Markassensitive.propTypes = {
  color: propTypes.string
};

Markassensitive.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Markasunsensitive = function Markasunsensitive(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.39 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '6.2', cy: '11.15', r: '1.35' }),
          React__default.createElement('path', { d: 'M10.73,6.31H3.38V4.39A2.81,2.81,0,0,1,9,3.91h1.58a4.38,4.38,0,0,0-8.74.49V6.31H1.69A1.69,1.69,0,0,0,0,8v6.31A1.69,1.69,0,0,0,1.69,16h9a1.69,1.69,0,0,0,1.69-1.69V8A1.69,1.69,0,0,0,10.73,6.31ZM1.58,14.42V7.89h9.24v6.54Z' })
        )
      )
    )
  );
};

Markasunsensitive.propTypes = {
  color: propTypes.string
};

Markasunsensitive.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Networkadress = function Networkadress(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.37 15',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.69,0H.68A.67.67,0,0,0,0,.68V11.83a.67.67,0,0,0,.68.67H4v1.82a.67.67,0,0,0,.68.68h8.09a.67.67,0,0,0,.68-.68V12.5h3.28a.68.68,0,0,0,.68-.67V.68A.68.68,0,0,0,16.69,0ZM16,11.15H12.73a.67.67,0,0,0-.67.68v1.82H5.31V11.83a.67.67,0,0,0-.67-.68H1.35V1.35H4v5H5.39v-5H6.68v5H8v-5H9.33v5h1.35v-5H12v5h1.35v-5H16Z' })
        )
      )
    )
  );
};

Networkadress.propTypes = {
  color: propTypes.string
};

Networkadress.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Nosorting = function Nosorting(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.1 17.27',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '3.42 0 3.42 14.18 1.16 11.97 0 13.11 4.24 17.27 8.49 13.11 7.33 11.97 5.07 14.18 5.07 0 3.42 0' }),
          React__default.createElement('polygon', { points: '13.67 17.27 13.67 3.08 15.93 5.29 17.09 4.16 12.85 0 8.61 4.16 9.77 5.3 12.03 3.08 12.02 17.27 13.67 17.27' })
        )
      )
    )
  );
};

Nosorting.propTypes = {
  color: propTypes.string
};

Nosorting.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Notification = function Notification(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.86 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.43,0A5.56,5.56,0,0,0,1.88,5.55V7.67A3.91,3.91,0,0,1,.53,10.52,1.52,1.52,0,0,0,0,11.67v1.11a1.55,1.55,0,0,0,1,1.44H4.78l0,.07a2.86,2.86,0,0,0,5.24,0l0-.07h3.76l.06,0a1.56,1.56,0,0,0,1-1.45V11.67a1.52,1.52,0,0,0-.53-1.15,3.91,3.91,0,0,1-1.35-3v-2A5.56,5.56,0,0,0,7.43,0Zm5.75,11.69,0,0v1H1.65v-.94l0,0a5.59,5.59,0,0,0,1.84-4V5.55a3.91,3.91,0,0,1,7.81,0v2A5.5,5.5,0,0,0,13.18,11.69Z' })
        )
      )
    )
  );
};

Notification.propTypes = {
  color: propTypes.string
};

Notification.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Notifivationcenter = function Notifivationcenter(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.86 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.43,0A5.56,5.56,0,0,0,1.88,5.55V7.67A3.91,3.91,0,0,1,.53,10.52,1.52,1.52,0,0,0,0,11.67v1.11a1.55,1.55,0,0,0,1,1.44H4.78l0,.07a2.86,2.86,0,0,0,5.24,0l0-.07h3.76l.06,0a1.56,1.56,0,0,0,1-1.45V11.67a1.52,1.52,0,0,0-.53-1.15,3.91,3.91,0,0,1-1.35-3v-2A5.56,5.56,0,0,0,7.43,0Zm5.75,11.69,0,0v1H1.65v-.94l0,0a5.59,5.59,0,0,0,1.84-4V5.55a3.91,3.91,0,0,1,7.81,0v2A5.5,5.5,0,0,0,13.18,11.69Z' })
        )
      )
    )
  );
};

Notifivationcenter.propTypes = {
  color: propTypes.string
};

Notifivationcenter.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Options = function Options(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 2.67 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '1.33', cy: '1.33', r: '1.33' }),
          React__default.createElement('circle', { cx: '1.33', cy: '14.67', r: '1.33' }),
          React__default.createElement('circle', { cx: '1.33', cy: '8', r: '1.33' })
        )
      )
    )
  );
};

Options.propTypes = {
  color: propTypes.string
};

Options.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Organization = function Organization(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.91 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16.27,9h.93a.76.76,0,0,0,.71-.79v-3a.8.8,0,0,0-.4-.71L9.27.08a.66.66,0,0,0-.63,0L.4,4.59A.8.8,0,0,0,0,5.3v3A.76.76,0,0,0,.71,9h.93v6.17a.76.76,0,0,0,.71.79H15.55a.76.76,0,0,0,.71-.79Zm-5.38,5.38H7V10a1.93,1.93,0,1,1,3.86,0Zm4.66-7a.76.76,0,0,0-.71.79v6.17H12V10a3,3,0,0,0-6.07,0v4.46H3.08V8.25a.76.76,0,0,0-.71-.79H1.43V5.79l.06,0L9,1.67,9,1.7l7.48,4.09V7.46Z' })
        )
      )
    )
  );
};

Organization.propTypes = {
  color: propTypes.string
};

Organization.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Outliers = function Outliers(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.08 18.1',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M11.4,18.1H.65A.65.65,0,0,1,0,17.45V7.23a.66.66,0,0,1,.39-.6.66.66,0,0,1,.71.13L11.85,17a.66.66,0,0,1,.15.72A.64.64,0,0,1,11.4,18.1ZM1.3,16.8H9.77L1.3,8.74Z' }),
          React__default.createElement('path', { d: 'M13.25,15.72a.63.63,0,0,1-.46-.19L8.61,11.35a.64.64,0,0,1,0-.92l4.18-4.19a.68.68,0,0,1,.92,0l4.18,4.19a.65.65,0,0,1,0,.92l-4.18,4.18A.63.63,0,0,1,13.25,15.72ZM10,10.89l3.27,3.26,3.26-3.26L13.25,7.62Z' }),
          React__default.createElement('path', { d: 'M7.19,9.66a.62.62,0,0,1-.46-.19L2.54,5.29a.66.66,0,0,1,0-.92L6.73.18a.68.68,0,0,1,.92,0l4.18,4.19a.64.64,0,0,1,.19.46.68.68,0,0,1-.19.46L7.65,9.47A.65.65,0,0,1,7.19,9.66ZM3.92,4.83,7.19,8.09l3.26-3.26L7.19,1.56Z' })
        )
      )
    )
  );
};

Outliers.propTypes = {
  color: propTypes.string
};

Outliers.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Padlock = function Padlock(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.39 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '6.2', cy: '11.15', r: '1.35' }),
          React__default.createElement('path', { d: 'M6.2,0A4.4,4.4,0,0,0,1.8,4.39V6.31H1.69A1.69,1.69,0,0,0,0,8v6.31A1.69,1.69,0,0,0,1.69,16h9a1.69,1.69,0,0,0,1.69-1.69V8A1.69,1.69,0,0,0,10.7,6.31h-.11V4.39A4.4,4.4,0,0,0,6.2,0ZM3.38,4.39A2.82,2.82,0,0,1,9,4.39V6.31H3.38Zm7.44,3.49v6.54H1.58V7.89Z' })
        )
      )
    )
  );
};

Padlock.propTypes = {
  color: propTypes.string
};

Padlock.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Patterns = function Patterns(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 19.3 19.3',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.65,19.3a.63.63,0,0,1-.46-.19L5.73,15.65a.66.66,0,0,1,0-.92l3.46-3.46a.68.68,0,0,1,.92,0l3.46,3.46a.66.66,0,0,1,.19.46.64.64,0,0,1-.19.46l-3.46,3.46A.63.63,0,0,1,9.65,19.3ZM7.11,15.19l2.54,2.54,2.54-2.54L9.65,12.65Z' }),
          React__default.createElement('path', { d: 'M4.11,13.76a.66.66,0,0,1-.46-.19L.19,10.11a.66.66,0,0,1,0-.92L3.65,5.73a.66.66,0,0,1,.92,0L8,9.19a.66.66,0,0,1,0,.92L4.57,13.57A.66.66,0,0,1,4.11,13.76ZM1.57,9.65l2.54,2.54L6.65,9.65,4.11,7.11Z' }),
          React__default.createElement('path', { d: 'M15.19,13.76a.66.66,0,0,1-.46-.19l-3.46-3.46a.66.66,0,0,1,0-.92l3.46-3.46a.66.66,0,0,1,.92,0l3.46,3.46a.64.64,0,0,1,0,.92l-3.46,3.46A.64.64,0,0,1,15.19,13.76ZM12.65,9.65l2.54,2.54,2.54-2.54L15.19,7.11Z' }),
          React__default.createElement('path', { d: 'M9.65,8.22A.63.63,0,0,1,9.19,8L5.73,4.57a.66.66,0,0,1,0-.92L9.19.19a.66.66,0,0,1,.92,0l3.46,3.46a.65.65,0,0,1,0,.92L10.11,8A.63.63,0,0,1,9.65,8.22ZM7.11,4.11,9.65,6.65l2.54-2.54L9.65,1.57Z' })
        )
      )
    )
  );
};

Patterns.propTypes = {
  color: propTypes.string
};

Patterns.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Pause = function Pause(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.29 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4.87,1.51A1.51,1.51,0,0,0,3.36,0H1.51A1.51,1.51,0,0,0,0,1.51v13A1.51,1.51,0,0,0,1.51,16H3.36a1.51,1.51,0,0,0,1.51-1.51ZM1.16,14.84V1.16H3.71V14.84Z' }),
          React__default.createElement('path', { d: 'M12.29,1.51A1.51,1.51,0,0,0,10.78,0H8.93A1.51,1.51,0,0,0,7.42,1.51v13A1.51,1.51,0,0,0,8.93,16h1.86a1.51,1.51,0,0,0,1.51-1.51ZM8.58,14.84V1.16h2.55V14.84Z' })
        )
      )
    )
  );
};

Pause.propTypes = {
  color: propTypes.string
};

Pause.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Pencil = function Pencil(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M10.47.91,1.34,10a.66.66,0,0,0-.18.31L0,14.91a.68.68,0,0,0,.18.64.67.67,0,0,0,.64.18L5.4,14.59a.69.69,0,0,0,.31-.18l9.13-9.13a3.09,3.09,0,0,0,0-4.38l0,0a3.1,3.1,0,0,0-4.33,0ZM9.8,3.48l.76.76-.09.09-6,6L3.19,10.1ZM1.6,14.15l.71-2.85,1.78.35.36,1.78ZM12.18,6,5.65,12.57,5.4,11.3l0,0,6.07-6.07.76.76Zm1.71-4.18.3.42a1.8,1.8,0,0,1-.3,2L13.23,5,10.76,2.52l.66-.66A1.79,1.79,0,0,1,13.89,1.86Z' })
        )
      )
    )
  );
};

Pencil.propTypes = {
  color: propTypes.string
};

Pencil.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Person = function Person(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.2 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.1,0a3.62,3.62,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.35,2.35,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z' }),
          React__default.createElement('path', { d: 'M7.1,9C2.92,9,0,11.19,0,14.31V16H14.2V14.31C14.2,11.19,11.28,9,7.1,9Zm5.52,5.41h-11v-.11c0-2.19,2.27-3.72,5.52-3.72s5.52,1.53,5.52,3.72Z' })
        )
      )
    )
  );
};

Person.propTypes = {
  color: propTypes.string
};

Person.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Photo = function Photo(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 14.38',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,4.06A3.94,3.94,0,1,0,11.94,8,3.95,3.95,0,0,0,8,4.06Zm0,6.49A2.55,2.55,0,1,1,10.55,8,2.55,2.55,0,0,1,8,10.55Z' }),
          React__default.createElement('path', { d: 'M4.38,2.43H1.51A1.51,1.51,0,0,0,0,3.94v8.92a1.51,1.51,0,0,0,1.51,1.51h13A1.51,1.51,0,0,0,16,12.87V3.94a1.51,1.51,0,0,0-1.51-1.51H11.62L10.44.67A1.51,1.51,0,0,0,9.19,0H6.81A1.51,1.51,0,0,0,5.56.67Zm2.37-1h2.5l1.62,2.43H14.6V13H1.4V3.83H5.13Z' })
        )
      )
    )
  );
};

Photo.propTypes = {
  color: propTypes.string
};

Photo.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Picture = function Picture(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M5.51,8.34,4.76,9.55a.41.41,0,0,0,.35.63h5.78a.41.41,0,0,0,.35-.63l-2-3.15a.41.41,0,0,0-.7,0L7.14,8.69a.41.41,0,0,1-.7,0l-.22-.36A.41.41,0,0,0,5.51,8.34Z' }),
          React__default.createElement('path', { d: 'M3.64,11.64V5.09H2.18v6.55a1.46,1.46,0,0,0,1.45,1.45H16V11.64Z' }),
          React__default.createElement('path', { d: 'M12.36,10.91h1.45V4.36a1.46,1.46,0,0,0-1.45-1.45H0V4.36H12.36Z' }),
          React__default.createElement('rect', { x: '2.18', width: '1.45', height: '2.18' }),
          React__default.createElement('rect', { x: '12.36', y: '13.82', width: '1.45', height: '2.18' })
        )
      )
    )
  );
};

Picture.propTypes = {
  color: propTypes.string
};

Picture.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Pinterest = function Pinterest(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm.76,10.21A1.63,1.63,0,0,1,7.37,9.5S7,10.81,7,11.06a6.08,6.08,0,0,1-1,1.86.08.08,0,0,1-.14,0,6.38,6.38,0,0,1,0-2.16l.73-3.1a2.19,2.19,0,0,1-.18-.9c0-.84.49-1.47,1.1-1.47a.76.76,0,0,1,.77.85,12.21,12.21,0,0,1-.5,2,.88.88,0,0,0,.9,1.1c1.08,0,1.8-1.38,1.8-3A2.13,2.13,0,0,0,8.08,4a2.69,2.69,0,0,0-2.8,2.72,1.64,1.64,0,0,0,.38,1.12.28.28,0,0,1,.08.32l-.12.46a.2.2,0,0,1-.28.14A2.19,2.19,0,0,1,4.17,6.6,3.77,3.77,0,0,1,8.23,3a3.4,3.4,0,0,1,3.6,3.26C11.83,8.54,10.59,10.21,8.76,10.21Z' })
        )
      )
    )
  );
};

Pinterest.propTypes = {
  color: propTypes.string
};

Pinterest.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Printer = function Printer(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.57 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M18.57,6.46a1.76,1.76,0,0,0-1.76-1.76h-2V1.29A1.29,1.29,0,0,0,13.52,0H5.05A1.29,1.29,0,0,0,3.77,1.29V4.71h-2A1.76,1.76,0,0,0,0,6.46v3.76A1.76,1.76,0,0,0,1.76,12h2v2.48a1.29,1.29,0,0,0,1.29,1.29h8.47a1.29,1.29,0,0,0,1.29-1.29V12h2a1.76,1.76,0,0,0,1.76-1.76ZM4.93,1.16h8.72V4.71H4.93Zm0,13.43V8.69h8.72v5.9Zm9.88-4.24V7.53h-11v2.82H1.63v-4H16.94v4Z' })
        )
      )
    )
  );
};

Printer.propTypes = {
  color: propTypes.string
};

Printer.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Profile = function Profile(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.2 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.1,0a3.62,3.62,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.35,2.35,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z' }),
          React__default.createElement('path', { d: 'M7.1,9C2.92,9,0,11.19,0,14.31V16H14.2V14.31C14.2,11.19,11.28,9,7.1,9Zm5.52,5.41h-11v-.11c0-2.19,2.27-3.72,5.52-3.72s5.52,1.53,5.52,3.72Z' })
        )
      )
    )
  );
};

Profile.propTypes = {
  color: propTypes.string
};

Profile.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Questionmark = function Questionmark(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z' }),
          React__default.createElement('path', { d: 'M8.53,10.44H7.08V8.26h.72a1.61,1.61,0,1,0-1.34-2.5L5.26,5A3.05,3.05,0,1,1,8.53,9.62Z' }),
          React__default.createElement('rect', { x: '7.07', y: '11.04', width: '1.44', height: '1.27' })
        )
      )
    )
  );
};

Questionmark.propTypes = {
  color: propTypes.string
};

Questionmark.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Quote = function Quote(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 13.14',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M5.82,0H1.44A1.45,1.45,0,0,0,0,1.44V5.82A1.45,1.45,0,0,0,1.44,7.26H5.78V9.51a2.16,2.16,0,0,1-2.15,2.15.74.74,0,0,0,0,1.48A3.63,3.63,0,0,0,7.26,9.51V1.44A1.45,1.45,0,0,0,5.82,0ZM1.48,5.82l0-4.34,4.34,0V5.78Z' }),
          React__default.createElement('path', { d: 'M14.56,0H10.18A1.45,1.45,0,0,0,8.74,1.44V5.82a1.45,1.45,0,0,0,1.44,1.44h4.34V9.51a2.16,2.16,0,0,1-2.15,2.15.74.74,0,1,0,0,1.48A3.63,3.63,0,0,0,16,9.51V1.44A1.45,1.45,0,0,0,14.56,0ZM10.22,5.82l0-4.34,4.34,0V5.78Z' })
        )
      )
    )
  );
};

Quote.propTypes = {
  color: propTypes.string
};

Quote.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Radioinput = function Radioinput(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.4 17.4',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.7,0a8.7,8.7,0,1,0,8.7,8.7A8.71,8.71,0,0,0,8.7,0Zm0,16A7.3,7.3,0,1,1,16,8.7,7.31,7.31,0,0,1,8.7,16Z' }),
          React__default.createElement('circle', { cx: '8.7', cy: '8.7', r: '3.02' })
        )
      )
    )
  );
};

Radioinput.propTypes = {
  color: propTypes.string
};

Radioinput.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Radioinputoutline = function Radioinputoutline(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.88,0a7.88,7.88,0,1,0,7.88,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.35-6.35A6.35,6.35,0,0,1,7.88,14.22Z' })
        )
      )
    )
  );
};

Radioinputoutline.propTypes = {
  color: propTypes.string
};

Radioinputoutline.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Report = function Report(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.49,0h-13A1.51,1.51,0,0,0,0,1.51v13A1.51,1.51,0,0,0,1.51,16h13A1.51,1.51,0,0,0,16,14.49v-13A1.51,1.51,0,0,0,14.49,0Zm.11,14.6H1.4V12.77l0,0C2,12.29,3.2,11,6.2,8l.08-.08L6.36,8l2.81,2.81L14.6,5.39Zm0-10.93,0,0L9.17,9.1,6.27,6.21l-.43.43L1.59,10.92l-.19.19V1.4H14.6Z' })
        )
      )
    )
  );
};

Report.propTypes = {
  color: propTypes.string
};

Report.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Robot = function Robot(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.85 17.1',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('circle', { cx: '7.74', cy: '3.28', r: '0.72' }),
          React__default.createElement('path', { d: 'M11,2.56a.72.72,0,1,0,.72.72A.72.72,0,0,0,11,2.56Z' }),
          React__default.createElement('path', { d: 'M18.69,12.36l-2-2a1.66,1.66,0,0,0-1.59-2.17,1.66,1.66,0,0,0-1.34.68,1.79,1.79,0,0,0-1-.31H9.94V6.92H14a.55.55,0,0,0,.55-.55V.55A.55.55,0,0,0,14,0H4.77a.55.55,0,0,0-.55.55V6.37a.55.55,0,0,0,.55.55H8.84V8.58H6a1.77,1.77,0,0,0-1,.31,1.69,1.69,0,0,0-1.35-.68A1.67,1.67,0,0,0,2,9.88a1.4,1.4,0,0,0,.06.41L.16,12.17a.56.56,0,0,0,0,.78l2.71,2.7.77-.77L1.33,12.56l1.34-1.34a1.59,1.59,0,0,0,1,.33,1.52,1.52,0,0,0,.57-.11v5.11a.55.55,0,0,0,.55.55H14a.55.55,0,0,0,.55-.55V11.44a1.56,1.56,0,0,0,.57.11,1.65,1.65,0,0,0,.93-.28l1.48,1.48-2.32,2.31.78.78,2.7-2.7a.54.54,0,0,0,.16-.39A.51.51,0,0,0,18.69,12.36ZM5.32,1.1h8.13V5.82H5.32ZM3.65,10.45a.58.58,0,0,1-.57-.57.57.57,0,0,1,.57-.57.56.56,0,0,1,.57.57A.57.57,0,0,1,3.65,10.45ZM13.45,16H5.32V10.35A.68.68,0,0,1,6,9.68h6.78a.67.67,0,0,1,.67.67Zm1.67-5.55a.58.58,0,0,1-.57-.57.58.58,0,0,1,1.15,0A.58.58,0,0,1,15.12,10.45Z' })
        )
      )
    )
  );
};

Robot.propTypes = {
  color: propTypes.string
};

Robot.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Rule = function Rule(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.07,0H1.43A1.43,1.43,0,0,0,0,1.43V14.57A1.43,1.43,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.44-1.43V3.64ZM1.23,14.77V1.23h7V4.51h3.28V14.77Z' }),
          React__default.createElement('polygon', { points: '2.79 8.14 3.54 7.4 4.28 8.14 4.81 7.61 4.07 6.87 4.81 6.12 4.28 5.59 3.54 6.34 2.79 5.59 2.26 6.12 3.01 6.87 2.26 7.61 2.79 8.14' }),
          React__default.createElement('polygon', { points: '3.48 11.14 2.79 10.45 2.26 10.98 3.48 12.2 5.18 10.51 4.65 9.98 3.48 11.14' }),
          React__default.createElement('rect', { x: '6.66', y: '6.29', width: '3.61', height: '1' }),
          React__default.createElement('rect', { x: '6.66', y: '10.46', width: '3.61', height: '1' })
        )
      )
    )
  );
};

Rule.propTypes = {
  color: propTypes.string
};

Rule.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sales = function Sales(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14.07 17.2',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7,17.2A7,7,0,0,1,4.93,3.46L3.14,1A.6.6,0,0,1,3.09.33.62.62,0,0,1,3.63,0h6.81A.59.59,0,0,1,11,.32a.61.61,0,0,1,0,.61L9.23,3.48A7,7,0,0,1,7,17.2ZM4.79,1.2,6.42,3.48a.6.6,0,0,1,.07.58A.59.59,0,0,1,6,4.42a5.83,5.83,0,1,0,2.1,0,.6.6,0,0,1-.44-.36.62.62,0,0,1,.06-.56L9.31,1.2Z' }),
          React__default.createElement('path', { d: 'M8.9,10.9a1.09,1.09,0,0,0-.32-.82,1.78,1.78,0,0,0-.85-.41l-.2,0-.1,0,0-.1V8.36l.14,0A1.42,1.42,0,0,1,8,8.5a3.67,3.67,0,0,1,.52.27l.06,0h.18V7.91l-.08,0A4.39,4.39,0,0,0,8,7.69l-.5-.07H7.4V6.69H6.75v.94H6.64a1.92,1.92,0,0,0-1,.41A1.21,1.21,0,0,0,5.24,9a1.16,1.16,0,0,0,.27.78,1.6,1.6,0,0,0,.86.46l.22.06h.06l.1,0v1.25l-.15,0-.21,0L6,11.4a1.66,1.66,0,0,1-.31-.14l-.2-.12-.09,0H5.21V12l.07,0a3.21,3.21,0,0,0,.72.23,4.17,4.17,0,0,0,.63.08h.12v1.22H7.4V12.31l.1,0a2.08,2.08,0,0,0,.94-.41A1.26,1.26,0,0,0,8.9,10.9ZM6.75,9.49l-.17-.05a1.28,1.28,0,0,1-.31-.15.49.49,0,0,1-.14-.38.41.41,0,0,1,.2-.37,1,1,0,0,1,.25-.13l.17-.05Zm1.08,1.9a.68.68,0,0,1-.27.13l-.16.05V10.43l.16.05a.87.87,0,0,1,.29.14A.43.43,0,0,1,8,11,.46.46,0,0,1,7.83,11.39Z' })
        )
      )
    )
  );
};

Sales.propTypes = {
  color: propTypes.string
};

Sales.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Salesorder = function Salesorder(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18.04 15.7',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,5.89V7.47H1.07l0,.1,1.67,7.51a.78.78,0,0,0,.77.62h11a.79.79,0,0,0,.77-.62L17,7.47H18V5.89H15L11.6,0,10.22.78l2.92,5.11H4.89L7.81.78,6.44,0,3.07,5.89ZM15.35,7.47l-1.48,6.65H4.17l0-.1L2.69,7.47Z' })
        )
      )
    )
  );
};

Salesorder.propTypes = {
  color: propTypes.string
};

Salesorder.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Search = function Search(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,14.56l-3.93-3.93a6.68,6.68,0,1,0-1.44,1.44L14.56,16ZM2.9,10.46a5.35,5.35,0,1,1,7.56,0A5.35,5.35,0,0,1,2.9,10.46Z' })
        )
      )
    )
  );
};

Search.propTypes = {
  color: propTypes.string
};

Search.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Send = function Send(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 21.25 21.25',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'icons' },
          React__default.createElement('path', { d: 'M16.54,13.15l0-.05c1.08-2.81,2.56-6.66,4.63-11.9A.88.88,0,0,0,21,.26a.87.87,0,0,0-.94-.2c-5.14,2-9,3.49-11.74,4.56l-.17.07C2.66,6.79,1.19,7.35.5,8A1.65,1.65,0,0,0,0,9.44a1.88,1.88,0,0,0,1.41,1.63l7,1.75,1.75,7a1.86,1.86,0,0,0,1.62,1.41,1.62,1.62,0,0,0,1.41-.48C13.9,20.06,14.46,18.6,16.54,13.15Zm-7.73-2L1.68,9.29l.24-.15a59.22,59.22,0,0,1,6.81-2.8l.15-.06c1.94-.75,4.35-1.67,7.35-2.84l.56-.22L8.88,11.13Zm3.12,8.49-1.81-7.23.05,0L18,4.46,17.81,5c-1.13,2.89-2,5.24-2.75,7.13l-.14.37a58.32,58.32,0,0,1-2.84,6.87Z' })
        )
      )
    )
  );
};

Send.propTypes = {
  color: propTypes.string
};

Send.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Server = function Server(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.5A1.5,1.5,0,0,0,14.5,0H1.5A1.5,1.5,0,0,0,0,1.5V9.63a1.5,1.5,0,0,0,1.5,1.5H7.31v3.5H3.25V16h9.5V14.63H8.69v-3.5H14.5A1.5,1.5,0,0,0,16,9.63ZM14.63,9.75H1.37V6.25H14.63Zm0-4.88H1.37V1.37H14.63Z' }),
          React__default.createElement('circle', { cx: '3.86', cy: '3.12', r: '0.81' }),
          React__default.createElement('circle', { cx: '3.86', cy: '8', r: '0.81' })
        )
      )
    )
  );
};

Server.propTypes = {
  color: propTypes.string
};

Server.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Signin = function Signin(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '10.19 8 6.1 3.92 4.99 5.03 7.17 7.21 0 7.21 0 8.79 7.17 8.79 4.99 10.97 6.1 12.08 10.19 8' }),
          React__default.createElement('path', { d: 'M1.69,16H14.31A1.69,1.69,0,0,0,16,14.31V1.69A1.69,1.69,0,0,0,14.31,0H1.69A1.69,1.69,0,0,0,0,1.69v2H1.58V1.58H14.42V14.42H1.58V12.36H0v2A1.69,1.69,0,0,0,1.69,16Z' })
        )
      )
    )
  );
};

Signin.propTypes = {
  color: propTypes.string
};

Signin.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Signout = function Signout(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '0 8 4.08 12.08 5.2 10.97 3.02 8.79 10.19 8.79 10.19 7.21 3.02 7.21 5.2 5.03 4.08 3.92 0 8' }),
          React__default.createElement('path', { d: 'M1.69,16H14.31A1.69,1.69,0,0,0,16,14.31V1.69A1.69,1.69,0,0,0,14.31,0H1.69A1.69,1.69,0,0,0,0,1.69v2H1.58V1.58H14.42V14.42H1.58V12.36H0v2A1.69,1.69,0,0,0,1.69,16Z' })
        )
      )
    )
  );
};

Signout.propTypes = {
  color: propTypes.string
};

Signout.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Skill = function Skill(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 19.31 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M4,12.27l.44.22A10.48,10.48,0,0,0,9.65,14a10.49,10.49,0,0,0,5.23-1.47l.44-.22a.76.76,0,0,0,.42-.68V7.15l3.08-1.23a.76.76,0,0,0,.06-1.39L10,.08a.78.78,0,0,0-.68,0L.42,4.52a.78.78,0,0,0-.34.35A1,1,0,0,0,0,5.21v5.13a.76.76,0,0,0,1.53,0v-4l2,.81v4.44A.76.76,0,0,0,4,12.27Zm10.24-1.16-.94.47a8.16,8.16,0,0,1-7.27,0l-.94-.47V7.76L9.37,9.47a.77.77,0,0,0,.57,0l4.29-1.71Zm-11.59-6,7-3.51.06,0,7,3.48-7,2.81Z' }),
          React__default.createElement('path', { d: 'M.76,12.44a.76.76,0,0,0-.76.76V15a.76.76,0,0,0,1.53,0V13.21A.76.76,0,0,0,.76,12.44Z' })
        )
      )
    )
  );
};

Skill.propTypes = {
  color: propTypes.string
};

Skill.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Skype = function Skype(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.83,8A3.23,3.23,0,0,0,9,7.63c-.3-.1-.64-.19-1-.26l-.63-.15A2,2,0,0,1,7,7.07a.81.81,0,0,1-.27-.21.4.4,0,0,1-.09-.27A.52.52,0,0,1,7,6.16,1.43,1.43,0,0,1,7.75,6a1.29,1.29,0,0,1,.76.18,1.52,1.52,0,0,1,.41.51A1.45,1.45,0,0,0,9.2,7a.57.57,0,0,0,.39.12.65.65,0,0,0,.66-.64A1.1,1.1,0,0,0,10.1,6a1.63,1.63,0,0,0-.44-.5A2.37,2.37,0,0,0,8.9,5.1,3.64,3.64,0,0,0,7.84,5a3.88,3.88,0,0,0-1.34.21,1.93,1.93,0,0,0-.89.62,1.49,1.49,0,0,0-.31.92,1.43,1.43,0,0,0,.3.92,2,2,0,0,0,.78.57,6.75,6.75,0,0,0,1.2.36c.35.07.63.14.84.21A1.25,1.25,0,0,1,8.9,9a.56.56,0,0,1,.18.43.67.67,0,0,1-.34.57,1.61,1.61,0,0,1-.92.24,1.58,1.58,0,0,1-.66-.12,1,1,0,0,1-.38-.3,2.3,2.3,0,0,1-.26-.46A1,1,0,0,0,6.25,9a.6.6,0,0,0-.4-.14A.67.67,0,0,0,5.37,9a.57.57,0,0,0-.19.43,1.46,1.46,0,0,0,.29.82,2.14,2.14,0,0,0,.75.67,3.49,3.49,0,0,0,1.64.34,3.73,3.73,0,0,0,1.43-.25,2.09,2.09,0,0,0,.93-.7,1.73,1.73,0,0,0,.32-1,1.62,1.62,0,0,0-.19-.8A1.57,1.57,0,0,0,9.83,8Z' }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm2,13a2.64,2.64,0,0,1-1.25-.31,4.67,4.67,0,0,1-.84.08A4.57,4.57,0,0,1,3.39,7.25a2.65,2.65,0,0,1,3.7-3.58,4.57,4.57,0,0,1,5.35,4.5,4.58,4.58,0,0,1-.11,1A2.65,2.65,0,0,1,10,13Z' })
        )
      )
    )
  );
};

Skype.propTypes = {
  color: propTypes.string
};

Skype.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Slack = function Slack(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('rect', {
            x: '6.96',
            y: '6.96',
            width: '2.05',
            height: '2.01',
            transform: 'translate(-2.12 2.97) rotate(-18.6)'
          }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.49,9.4-.95.32.33,1a.89.89,0,1,1-1.69.57l-.33-1-1.95.66.33,1a.89.89,0,1,1-1.69.57l-.33-1-.9.3a.89.89,0,0,1-.57-1.69l.9-.3L5,7.91l-.93.31a.89.89,0,0,1-.57-1.69l.93-.31-.31-.91a.89.89,0,1,1,1.69-.57l.31.91L8.07,5l-.31-.92A.89.89,0,1,1,9.45,3.5l.31.92.92-.31a.89.89,0,0,1,.57,1.69l-.92.31L11,8l.95-.32a.89.89,0,0,1,.57,1.69Z' })
        )
      )
    )
  );
};

Slack.propTypes = {
  color: propTypes.string
};

Slack.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sortingdown = function Sortingdown(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.92 17.32',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M11.84,5l-.48,1.73H9.78L11.84,0h2l2.08,6.74H14.28L13.77,5Zm1.71-1.14-.42-1.43c-.12-.4-.24-.9-.34-1.3h0c-.1.4-.2.91-.31,1.3l-.4,1.43Z' }),
          React__default.createElement('polygon', { points: '3.42 0.05 3.42 14.23 1.16 12.02 0 13.16 4.24 17.32 8.49 13.16 7.33 12.02 5.07 14.23 5.07 0.05 3.42 0.05' }),
          React__default.createElement('path', { d: 'M10.23,16.5l3.21-4.62v0H10.53V10.58h4.89v.88L12.28,16v0h3.19v1.26H10.23Z' })
        )
      )
    )
  );
};

Sortingdown.propTypes = {
  color: propTypes.string
};

Sortingdown.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Sortingup = function Sortingup(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.92 17.32',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M11.83,5l-.48,1.73H9.77L11.83,0h2l2.09,6.74H14.28L13.76,5Zm1.71-1.14-.42-1.43c-.12-.4-.24-.9-.34-1.3h0c-.1.4-.2.91-.31,1.3l-.4,1.43Z' }),
          React__default.createElement('polygon', { points: '5.07 17.32 5.07 3.13 7.33 5.34 8.49 4.21 4.24 0.05 0 4.21 1.16 5.34 3.42 3.13 3.42 17.32 5.07 17.32' }),
          React__default.createElement('path', { d: 'M10.23,16.5l3.21-4.62v0H10.53V10.58h4.89v.88L12.28,16v0h3.19v1.26H10.23Z' })
        )
      )
    )
  );
};

Sortingup.propTypes = {
  color: propTypes.string
};

Sortingup.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Spreadsheet = function Spreadsheet(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.72 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M9.07,0H1.43A1.44,1.44,0,0,0,0,1.43V14.57A1.44,1.44,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.43-1.43V3.64ZM8.21,1.23V4.51h3.28v3H1.23V1.23Zm-7,10V8.35H5.94v2.93ZM6.77,8.35h4.72v2.93H6.77ZM1.23,14.77V12.11H11.49v2.67Z' })
        )
      )
    )
  );
};

Spreadsheet.propTypes = {
  color: propTypes.string
};

Spreadsheet.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Star = function Star(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17.3 17.3',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M14.36,17.3a.63.63,0,0,1-.35-.11L8.65,13.65,3.29,17.19a.65.65,0,0,1-1-.8l2.47-5.67L.23,6.86A.65.65,0,0,1,0,6.14a.66.66,0,0,1,.61-.43H5.92L8.05.41A.64.64,0,0,1,8.65,0h0a.64.64,0,0,1,.6.41l2.13,5.3h5.27a.66.66,0,0,1,.61.43.65.65,0,0,1-.19.72l-4.58,3.86L15,16.39a.66.66,0,0,1-.18.76A.66.66,0,0,1,14.36,17.3ZM8.65,12.22a.61.61,0,0,1,.36.11l3.88,2.57-1.78-4.1a.65.65,0,0,1,.18-.76l3.58-3H10.94a.67.67,0,0,1-.61-.41L8.65,2.4,7,6.61A.67.67,0,0,1,6.36,7H2.43L6,10a.65.65,0,0,1,.18.76L4.41,14.9l3.88-2.57A.59.59,0,0,1,8.65,12.22Z' })
        )
      )
    )
  );
};

Star.propTypes = {
  color: propTypes.string
};

Star.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Start = function Start(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 13.94 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,.82V15.18a.81.81,0,0,0,.41.71.8.8,0,0,0,.82,0L13.54,8.7a.81.81,0,0,0,0-1.41L1.23.11A.82.82,0,0,0,.82,0,.82.82,0,0,0,.41.11.81.81,0,0,0,0,.82ZM1.55,2.1,11.66,8,1.55,13.9Z' })
        )
      )
    )
  );
};

Start.propTypes = {
  color: propTypes.string
};

Start.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Stop = function Stop(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,1.6A1.6,1.6,0,0,0,14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V14.4A1.6,1.6,0,0,0,1.6,16H14.4A1.6,1.6,0,0,0,16,14.4Zm-14.63,13V1.37H14.63V14.63Z' })
        )
      )
    )
  );
};

Stop.propTypes = {
  color: propTypes.string
};

Stop.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Stream = function Stream(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 14.74',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M12,3A3.11,3.11,0,0,1,9.64,1.85,2.14,2.14,0,0,0,8,1a2.14,2.14,0,0,0-1.64.85A3.1,3.1,0,0,1,4,3,3.11,3.11,0,0,1,1.64,1.85,2.12,2.12,0,0,0,0,1V0A3.09,3.09,0,0,1,2.35,1.15,2.14,2.14,0,0,0,4,2a2.12,2.12,0,0,0,1.64-.85A3.1,3.1,0,0,1,8,0a3.11,3.11,0,0,1,2.36,1.15A2.14,2.14,0,0,0,12,2a2.16,2.16,0,0,0,1.65-.85A3.09,3.09,0,0,1,16,0V1a2.16,2.16,0,0,0-1.65.85A3.09,3.09,0,0,1,12,3Z' }),
          React__default.createElement('path', { d: 'M12,6.91A3.1,3.1,0,0,1,9.64,5.77,2.12,2.12,0,0,0,8,4.91a2.11,2.11,0,0,0-1.64.86A3.1,3.1,0,0,1,4,6.91,3.1,3.1,0,0,1,1.64,5.77,2.1,2.1,0,0,0,0,4.91v-1A3.09,3.09,0,0,1,2.35,5.06,2.11,2.11,0,0,0,4,5.91a2.09,2.09,0,0,0,1.64-.85A3.1,3.1,0,0,1,8,3.91a3.11,3.11,0,0,1,2.36,1.15,2,2,0,0,0,3.3,0A3.09,3.09,0,0,1,16,3.91v1a2.13,2.13,0,0,0-1.65.86A3.08,3.08,0,0,1,12,6.91Z' }),
          React__default.createElement('path', { d: 'M12,10.83A3.11,3.11,0,0,1,9.64,9.68,2.14,2.14,0,0,0,8,8.83a2.14,2.14,0,0,0-1.64.85A3.1,3.1,0,0,1,4,10.83,3.11,3.11,0,0,1,1.64,9.68,2.12,2.12,0,0,0,0,8.83v-1A3.08,3.08,0,0,1,2.35,9,2.12,2.12,0,0,0,4,9.83,2.1,2.1,0,0,0,5.64,9,3.1,3.1,0,0,1,8,7.83,3.1,3.1,0,0,1,10.35,9a2,2,0,0,0,3.3,0A3.08,3.08,0,0,1,16,7.83v1a2.16,2.16,0,0,0-1.65.85A3.09,3.09,0,0,1,12,10.83Z' }),
          React__default.createElement('path', { d: 'M12,14.74A3.1,3.1,0,0,1,9.64,13.6,2.12,2.12,0,0,0,8,12.74a2.11,2.11,0,0,0-1.64.86A3.1,3.1,0,0,1,4,14.74,3.1,3.1,0,0,1,1.64,13.6,2.1,2.1,0,0,0,0,12.74v-1a3.09,3.09,0,0,1,2.35,1.15A2.11,2.11,0,0,0,4,13.74a2.09,2.09,0,0,0,1.64-.85A3.1,3.1,0,0,1,8,11.74a3.11,3.11,0,0,1,2.36,1.15,2,2,0,0,0,3.3,0A3.09,3.09,0,0,1,16,11.74v1a2.13,2.13,0,0,0-1.65.86A3.08,3.08,0,0,1,12,14.74Z' })
        )
      )
    )
  );
};

Stream.propTypes = {
  color: propTypes.string
};

Stream.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Tag = function Tag(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.02 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M16,9.52a.64.64,0,0,0-.19-.46L7,.19A.65.65,0,0,0,6.49,0h0L1,.43a.65.65,0,0,0-.6.6L0,6.44a.64.64,0,0,0,.19.51l8.87,8.87a.69.69,0,0,0,.92,0L15.83,10A.64.64,0,0,0,16,9.52ZM9.52,14.45l-.15-.15L1.32,6.24l.36-4.57.18,0,4.38-.34.07.07,8.14,8.14Z' }),
          React__default.createElement('path', { d: 'M5.57,3.35a1.57,1.57,0,1,0,0,2.22A1.57,1.57,0,0,0,5.57,3.35ZM5.11,5.11a.92.92,0,0,1-1.3-1.3.94.94,0,0,1,1.3,0,.92.92,0,0,1,0,1.3Z' })
        )
      )
    )
  );
};

Tag.propTypes = {
  color: propTypes.string
};

Tag.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Task = function Task(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.48 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8.88,2.11l0-.08A2.7,2.7,0,0,0,3.62,2l0,.08H2.82V3.52H1.31A1.31,1.31,0,0,0,0,4.83v9.87A1.31,1.31,0,0,0,1.31,16h9.87a1.31,1.31,0,0,0,1.31-1.31V4.83a1.31,1.31,0,0,0-1.31-1.31H9.66V2.11ZM4.93,2A1.51,1.51,0,0,1,7.55,2l.09.16H4.84ZM4,3.32H8.46V4.93H4Zm7.26,1.41V14.8H1.2V4.72H2.82V6.13H9.66V4.72Z' }),
          React__default.createElement('polygon', { points: '4.73 9.63 3.85 10.51 5.81 12.47 9.43 8.85 8.55 7.96 5.81 10.71 4.73 9.63' })
        )
      )
    )
  );
};

Task.propTypes = {
  color: propTypes.string
};

Task.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Textfile = function Textfile(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 12.84 15.75',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '9.93 9.2 9.93 6.55 2.91 6.55 2.91 9.2 4.11 9.2 4.11 7.75 5.82 7.75 5.82 11.64 4.36 11.64 4.36 12.84 8.48 12.84 8.48 11.64 7.02 11.64 7.02 7.75 8.73 7.75 8.73 9.2 9.93 9.2' }),
          React__default.createElement('path', { d: 'M1.33,0A1.33,1.33,0,0,0,0,1.33V14.42a1.33,1.33,0,0,0,1.33,1.33H11.51a1.33,1.33,0,0,0,1.33-1.33V3.26L9.58,0ZM11.64,14.55H1.2V1.2H8.73V4.11h2.91Z' })
        )
      )
    )
  );
};

Textfile.propTypes = {
  color: propTypes.string
};

Textfile.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Topic = function Topic(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16.49 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M3.55,16a.37.37,0,0,0,.39,0l3.7-2.78h7.29a1.56,1.56,0,0,0,1.55-1.55v-10A1.56,1.56,0,0,0,14.94,0H1.55A1.56,1.56,0,0,0,0,1.55v10a1.56,1.56,0,0,0,1.55,1.55H3.35v2.48A.37.37,0,0,0,3.55,16ZM1.43,11.71V1.43H15.06V11.71H7.17L4.78,13.51V11.71Z' }),
          React__default.createElement('circle', { cx: '6', cy: '6.7', r: '1.3' }),
          React__default.createElement('circle', { cx: '10.66', cy: '6.7', r: '1.3' })
        )
      )
    )
  );
};

Topic.propTypes = {
  color: propTypes.string
};

Topic.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Trianglearrow = function Trianglearrow(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14 12',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '14 0 6.99 12 0 0 14 0' })
        )
      )
    )
  );
};

Trianglearrow.propTypes = {
  color: propTypes.string
};

Trianglearrow.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Trianglearrowup = function Trianglearrowup(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 14 12',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '0 12 7.01 0 14 12 0 12' })
        )
      )
    )
  );
};

Trianglearrowup.propTypes = {
  color: propTypes.string
};

Trianglearrowup.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Twitter = function Twitter(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm3.79,6.06q0,.13,0,.25A5.56,5.56,0,0,1,3.24,11l.47,0a3.92,3.92,0,0,0,2.43-.84A2,2,0,0,1,4.31,8.83a1.92,1.92,0,0,0,.37,0,2,2,0,0,0,.51-.07A2,2,0,0,1,3.62,6.88v0a2,2,0,0,0,.89.24,2,2,0,0,1-.6-2.61,5.55,5.55,0,0,0,4,2,2,2,0,0,1,3.33-1.78,3.91,3.91,0,0,0,1.24-.47,2,2,0,0,1-.86,1.08A3.88,3.88,0,0,0,12.76,5,4,4,0,0,1,11.79,6.06Z' })
        )
      )
    )
  );
};

Twitter.propTypes = {
  color: propTypes.string
};

Twitter.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Upload = function Upload(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15.75 15.78',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('polygon', { points: '11.46 3.59 7.88 0 4.29 3.59 5.24 4.54 7.2 2.58 7.2 9.63 8.55 9.63 8.55 2.58 10.51 4.54 11.46 3.59' }),
          React__default.createElement('path', { d: 'M15.75,15.78V9.63h-5l-1.6,1.6H6.55L5,9.63H0v6.15ZM1.35,11h3L6,12.58H9.75l1.6-1.6h3v3.45H1.35Z' })
        )
      )
    )
  );
};

Upload.propTypes = {
  color: propTypes.string
};

Upload.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Website = function Website(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 17 15.43',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M0,14a1.45,1.45,0,0,0,1.45,1.44H15.55A1.45,1.45,0,0,0,17,14V1.44A1.45,1.45,0,0,0,15.55,0H1.45A1.45,1.45,0,0,0,0,1.44ZM9.16,1.32h6.52V3.14H9.16Zm-3.92,0h2.6V3.14H5.24Zm-3.92,0h2.6V3.14H1.32Zm0,3.14H15.68v9.65H1.32Z' })
        )
      )
    )
  );
};

Website.propTypes = {
  color: propTypes.string
};

Website.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Website2 = function Website2(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM6.64,12.68H4.75a1.22,1.22,0,0,1-1.21-1.22V6.81h3.1Zm5.82-1.22a1.22,1.22,0,0,1-1.21,1.22H7.83V6.81h4.63Zm0-5.84H3.54V4.54A1.22,1.22,0,0,1,4.75,3.32h6.5a1.22,1.22,0,0,1,1.21,1.22Z' })
        )
      )
    )
  );
};

Website2.propTypes = {
  color: propTypes.string
};

Website2.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Wikipedia = function Wikipedia(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm5.81,5.21a1.11,1.11,0,0,0-.7.23,1.33,1.33,0,0,0-.36.57s-2,5-2.66,6.65c-.26.54-.52.49-.74,0s-.87-2-1.3-3.08C7.59,10.6,7,12,6.65,12.65s-.55.5-.75,0C5.21,10.87,3.79,7.73,3.12,6a2,2,0,0,0-.31-.61,1,1,0,0,0-.55-.15c-.1,0-.16,0-.16-.08V4.88l.07,0h2.7l.11,0v.23c0,.06-.12.1-.19.1H4.43c-.24,0-.36.09-.36.23a1,1,0,0,0,.08.32c.53,1.42,2.36,5.67,2.36,5.67l.07,0L7.77,8.88l-.24-.58L6.72,6.55l-.21-.47c-.36-.78-.35-.82-.71-.87-.1,0-.16,0-.16-.08V4.86H7.73v.27c0,.06,0,.08-.06.08l-.1,0c-.39,0-.32.21-.07.77l.78,1.75.86-1.89c.14-.35.12-.43.06-.51a.54.54,0,0,0-.39-.13H8.72s0,0-.06,0,0,0,0-.07V4.85h2l0,0v.23c0,.06,0,.1-.09.1-.32,0-.38.05-.49.24s-.19.32-.32.56L8.6,8.31l0,.07,1.37,3.08.08,0,2.16-5.63c.07-.23.06-.39,0-.48a.54.54,0,0,0-.42-.16h-.22a.22.22,0,0,1-.11,0s-.11,0-.11-.07V4.88l.17,0h2.44v.26C13.9,5.17,13.87,5.21,13.81,5.21Z' })
        )
      )
    )
  );
};

Wikipedia.propTypes = {
  color: propTypes.string
};

Wikipedia.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Workspace = function Workspace(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 12.67',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M15.93,11,14.71,7.33V.75A.75.75,0,0,0,14,0H2a.75.75,0,0,0-.75.75V7.33L.07,11a1.28,1.28,0,0,0,.15,1.17,1.28,1.28,0,0,0,1.06.52H14.71A1.25,1.25,0,0,0,15.93,11ZM13.22,1.49V6.71H2.78V1.49ZM1.58,11.18l1-3H13.43l1,3Z' }),
          React__default.createElement('rect', { x: '6.51', y: '8.94', width: '2.98', height: '1.49' })
        )
      )
    )
  );
};

Workspace.propTypes = {
  color: propTypes.string
};

Workspace.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Youtube = function Youtube(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M7.91,4.51a.25.25,0,0,0-.17.06.19.19,0,0,0-.06.15h0V6.24a.24.24,0,0,0,.06.18.23.23,0,0,0,.17.06.26.26,0,0,0,.18-.06.23.23,0,0,0,.07-.18V4.72a.18.18,0,0,0-.07-.15A.28.28,0,0,0,7.91,4.51Z' }),
          React__default.createElement('polygon', { points: '4.41 8.91 5 8.91 5 11.84 5.57 11.84 5.57 8.91 6.16 8.91 6.16 8.41 4.41 8.41 4.41 8.91' }),
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM9.21,4.1h.57V6.24a.23.23,0,0,0,0,.14.14.14,0,0,0,.12,0,.33.33,0,0,0,.16-.06.79.79,0,0,0,.18-.15V4.1h.57V6.89h-.57V6.58a1.2,1.2,0,0,1-.33.26.72.72,0,0,1-.33.09.36.36,0,0,1-.3-.13.59.59,0,0,1-.1-.37Zm-2.12.64a.64.64,0,0,1,.23-.52A.93.93,0,0,1,7.94,4a.84.84,0,0,1,.58.2.67.67,0,0,1,.23.52V6.19a.73.73,0,0,1-.22.56.87.87,0,0,1-.61.2.84.84,0,0,1-.6-.21.74.74,0,0,1-.22-.57ZM5.54,3.11,6,4.62H6l.4-1.51H7L6.3,5.32V6.89H5.66V5.39L4.89,3.11Zm7.46,8a1.83,1.83,0,0,1-1.83,1.83H4.83A1.83,1.83,0,0,1,3,11.06V9.6A1.83,1.83,0,0,1,4.83,7.77h6.35A1.83,1.83,0,0,1,13,9.6Z' }),
          React__default.createElement('path', { d: 'M7.32,11.23a.68.68,0,0,1-.16.14.29.29,0,0,1-.14.05.12.12,0,0,1-.1,0,.22.22,0,0,1,0-.13V9.31H6.38v2.12a.55.55,0,0,0,.09.34.31.31,0,0,0,.26.11A.61.61,0,0,0,7,11.8a1.08,1.08,0,0,0,.29-.23v.28h.51V9.31H7.32Z' }),
          React__default.createElement('path', { d: 'M9.66,11.32V9.92a.75.75,0,0,0-.13-.47.44.44,0,0,0-.37-.16.5.5,0,0,0-.23.06.79.79,0,0,0-.22.18V8.41H8.21v3.43h.51v-.19a.65.65,0,0,0,.22.17.6.6,0,0,0,.26.05.42.42,0,0,0,.34-.14.63.63,0,0,0,.12-.41Zm-.52-.07a.28.28,0,0,1,0,.17.16.16,0,0,1-.14.05l-.12,0a.43.43,0,0,1-.12-.09V9.79a.36.36,0,0,1,.1-.08l.11,0a.2.2,0,0,1,.16.07.3.3,0,0,1,.05.19Z' }),
          React__default.createElement('path', { d: 'M11.42,10.64V10a.76.76,0,0,0-.19-.55.71.71,0,0,0-.53-.19.76.76,0,0,0-.55.21.71.71,0,0,0-.22.54v1.14a.81.81,0,0,0,.2.57.7.7,0,0,0,.54.21.75.75,0,0,0,.57-.2.81.81,0,0,0,.19-.59V11H10.9v.11a.55.55,0,0,1-.05.29.21.21,0,0,1-.18.07.19.19,0,0,1-.17-.08.55.55,0,0,1,0-.28v-.48Zm-1-.65a.37.37,0,0,1,.05-.23.2.2,0,0,1,.17-.07.19.19,0,0,1,.17.07.37.37,0,0,1,.05.23v.26h-.45Z' })
        )
      )
    )
  );
};

Youtube.propTypes = {
  color: propTypes.string
};

Youtube.defaultProps = {
  color: 'currentColor'
};

/* eslint-disable max-len */

var Youtube2 = function Youtube2(props) {
  return React__default.createElement(
    SvgIcon,
    props,
    React__default.createElement(
      'svg',
      {
        focusable: 'false',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '24px',
        height: '24px'
      },
      React__default.createElement(
        'g',
        { id: 'Layer_2', 'data-name': 'Layer 2' },
        React__default.createElement(
          'g',
          { id: 'Layer_1-2', 'data-name': 'Layer 1' },
          React__default.createElement('path', { d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.34,10.13a.14.14,0,0,0,0,.12v0a.84.84,0,0,1-.81.58h.08A26.71,26.71,0,0,1,8,11.1a26,26,0,0,1-3.57-.23h.08a.84.84,0,0,1-.81-.58v0a.14.14,0,0,1,0-.12A18.85,18.85,0,0,1,3.5,8a18.85,18.85,0,0,1,.16-2.13.14.14,0,0,0,0-.12v0a.84.84,0,0,1,.81-.58H4.43A26.74,26.74,0,0,1,8,4.9a26,26,0,0,1,3.57.23h-.08a.84.84,0,0,1,.81.58v0a.14.14,0,0,1,0,.12A12.62,12.62,0,0,1,12.5,8,18.85,18.85,0,0,1,12.34,10.13Z' }),
          React__default.createElement('path', { d: 'M9.32,8.19,7.5,9.51a.19.19,0,0,1-.23,0,.21.21,0,0,1-.12-.19V6.68a.21.21,0,0,1,.12-.19.25.25,0,0,1,.23,0L9.32,7.81A.3.3,0,0,1,9.4,8,.14.14,0,0,1,9.32,8.19Z' })
        )
      )
    )
  );
};

Youtube2.propTypes = {
  color: propTypes.string
};

Youtube2.defaultProps = {
  color: 'currentColor'
};



var Icons = /*#__PURE__*/Object.freeze({
	Administrator: Administrator,
	Anonymize: Anonymize,
	Archive: Archive,
	Barchart: Barchart,
	Businessinteligence: Businessinteligence,
	Checkmark: Checkmark,
	Circledcheckmark: Circledcheckmark,
	Circledintegration: Circledintegration,
	Circleduser: Circleduser,
	Cluedin: Cluedin,
	Connectors: Connectors,
	Consuming: Consuming,
	Cookie: Cookie,
	Country: Country,
	Dataretention: Dataretention,
	Datasoverignty: Datasoverignty,
	Databreach: Databreach,
	Datacleaning: Datacleaning,
	Datalineage: Datalineage,
	Datapolicy: Datapolicy,
	Datacatalog: Datacatalog,
	Directory: Directory,
	Document: Document,
	Download: Download,
	Duplicates: Duplicates,
	Engagement: Engagement,
	Erase: Erase,
	Filearchive: Filearchive,
	File: File,
	Forbidden: Forbidden,
	Gdpr: Gdpr,
	Governance: Governance,
	Graphql: Graphql,
	Group: Group,
	Hamburger: Hamburger,
	Help: Help,
	History: History,
	Idbadge: Idbadge,
	Industry: Industry,
	Integration: Integration,
	Intelligence: Intelligence,
	Iteration: Iteration,
	Language: Language,
	License: License,
	List: List,
	Listul: Listul,
	Management: Management,
	Manipulation: Manipulation,
	Merge: Merge,
	Minusbox: Minusbox,
	News: News,
	Note: Note,
	Pbcopy: Pbcopy,
	Phone: Phone,
	Pin: Pin,
	Plugedin: Plugedin,
	Plusbox: Plusbox,
	Position: Position,
	Preparation: Preparation,
	Presentation: Presentation,
	Process: Process,
	Recipes: Recipes,
	Reply: Reply,
	Sar: Sar,
	Sandbox: Sandbox,
	Settings: Settings,
	Signals: Signals,
	Sitemap: Sitemap,
	Smileyhappy: Smileyhappy,
	Smileyneutral: Smileyneutral,
	Smileysad: Smileysad,
	Sourcebranch: Sourcebranch,
	Thumbdown: Thumbdown,
	Thumbup: Thumbup,
	Training: Training,
	Unpluged: Unpluged,
	User: User,
	Video: Video,
	Visibility: Visibility,
	Visibilityunabled: Visibilityunabled,
	Access: Access,
	Activity: Activity,
	Add: Add,
	Aggregate: Aggregate,
	Album: Album,
	Alert: Alert,
	Angellist: Angellist,
	Announcement: Announcement,
	Application: Application,
	Arrowdown: Arrowdown,
	Arrowleft: Arrowleft,
	Arrowright: Arrowright,
	Arrowup: Arrowup,
	At: At,
	Audio: Audio,
	Backlogitem: Backlogitem,
	Book: Book,
	Changeview: Changeview,
	Changes: Changes,
	Checkbox: Checkbox,
	Checkboxoutline: Checkboxoutline,
	Circle: Circle,
	City: City,
	Clock: Clock,
	Close: Close,
	Cloud: Cloud,
	Cluedinlogo: Cluedinlogo,
	Codefile: Codefile,
	Code: Code,
	Comment: Comment,
	Competitoropportunity: Competitoropportunity,
	Consent: Consent,
	Contact: Contact,
	Copylink: Copylink,
	Creditcard: Creditcard,
	Crunchbase: Crunchbase,
	Cta: Cta,
	Customerinteligence: Customerinteligence,
	Datamart: Datamart,
	Database: Database,
	Defaultorganizationimage: Defaultorganizationimage,
	Delete: Delete,
	Department: Department,
	Deployment: Deployment,
	Diagram: Diagram,
	Directoryopen: Directoryopen,
	Discussion: Discussion,
	Domain: Domain,
	Done: Done,
	Emailthread: Emailthread,
	Engine: Engine,
	Epic: Epic,
	Event: Event,
	Externallink: Externallink,
	Facebook: Facebook,
	Filter: Filter,
	Followactivestate: Followactivestate,
	Followentities: Followentities,
	Fullscreen: Fullscreen,
	Gift: Gift,
	Github: Github,
	Googleplus: Googleplus,
	Home: Home,
	Idea: Idea,
	Instagram: Instagram,
	Issue: Issue,
	Keepintheloop: Keepintheloop,
	Linkedin: Linkedin,
	Loading: Loading,
	Markassensitive: Markassensitive,
	Markasunsensitive: Markasunsensitive,
	Networkadress: Networkadress,
	Nosorting: Nosorting,
	Notification: Notification,
	Notifivationcenter: Notifivationcenter,
	Options: Options,
	Organization: Organization,
	Outliers: Outliers,
	Padlock: Padlock,
	Patterns: Patterns,
	Pause: Pause,
	Pencil: Pencil,
	Person: Person,
	Photo: Photo,
	Picture: Picture,
	Pinterest: Pinterest,
	Printer: Printer,
	Profile: Profile,
	Questionmark: Questionmark,
	Quote: Quote,
	Radioinput: Radioinput,
	Radioinputoutline: Radioinputoutline,
	Report: Report,
	Robot: Robot,
	Rule: Rule,
	Sales: Sales,
	Salesorder: Salesorder,
	Search: Search,
	Send: Send,
	Server: Server,
	Signin: Signin,
	Signout: Signout,
	Skill: Skill,
	Skype: Skype,
	Slack: Slack,
	Sortingdown: Sortingdown,
	Sortingup: Sortingup,
	Spreadsheet: Spreadsheet,
	Star: Star,
	Start: Start,
	Stop: Stop,
	Stream: Stream,
	Tag: Tag,
	Task: Task,
	Textfile: Textfile,
	Topic: Topic,
	Trianglearrow: Trianglearrow,
	Trianglearrowup: Trianglearrowup,
	Twitter: Twitter,
	Upload: Upload,
	Website: Website,
	Website2: Website2,
	Wikipedia: Wikipedia,
	Workspace: Workspace,
	Youtube: Youtube,
	Youtube2: Youtube2
});

var _templateObject$3 = taggedTemplateLiteral(['\n  /* ', '; */\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  flex-direction: ', ';\n  justify-content: ', ';\n'], ['\n  /* ', '; */\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  flex-direction: ', ';\n  justify-content: ', ';\n']),
    _templateObject2$1 = taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 4px;\n  max-width: ', ';\n  background: ', ';\n  margin: ', ';\n'], ['\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 4px;\n  max-width: ', ';\n  background: ', ';\n  margin: ', ';\n']),
    _templateObject3$1 = taggedTemplateLiteral(['\n  display: inline-block;\n    margin: ', ';\n'], ['\n  display: inline-block;\n    margin: ', ';\n']),
    _templateObject4$1 = taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: ', ';\n  background: ', ';\n  transition: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: ', ';\n  background: ', ';\n  transition: ', ';\n']);

var ProgressBarWrapperUI = styled__default.div(_templateObject$3, function (_ref) {
  var width = _ref.width;
  return width !== undefined ? 'width: ' + width + 'px' : 'auto';
}, function (_ref2) {
  var labelPosition = _ref2.labelPosition;

  if (labelPosition === 'left') {
    return 'row-reverse';
  }
  if (labelPosition === 'top') {
    return 'column-reverse';
  }
  if (labelPosition === 'bottom') {
    return 'column';
  }
  return 'inherit';
}, function (_ref3) {
  var labelPosition = _ref3.labelPosition;

  if (labelPosition === 'left') {
    return 'flex-end';
  }
  if (labelPosition === 'top') {
    return 'flex-end';
  }
  if (labelPosition === 'bottom') {
    return 'flex-start';
  }
  return 'flex-start';
});

var ProgressIndicatorWrapperUI = styled__default.div(_templateObject2$1, function (_ref4) {
  var width = _ref4.width;
  return width !== undefined ? width + 'px' : 'auto';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.lightGrey;
}, function (_ref6) {
  var labelPosition = _ref6.labelPosition;

  if (labelPosition === 'left') {
    return '0';
  }
  if (labelPosition === 'top') {
    return '4px 0 0 0';
  }
  if (labelPosition === 'bottom') {
    return 0;
  }
  return '0 6px 0 0';
});

var LabelWrapperUI = styled__default.div(_templateObject3$1, function (_ref7) {
  var labelPosition = _ref7.labelPosition;

  if (labelPosition === 'left') {
    return '0 6px 0 0';
  }
  if (labelPosition === 'top') {
    return 0;
  }
  if (labelPosition === 'bottom') {
    return '4px 0 0 0';
  }
  return '0';
});

var ProgressIndicatorUI = styled__default.div(_templateObject4$1, function (_ref8) {
  var value = _ref8.value;
  return value + '%';
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.accent.main;
}, function (_ref10) {
  var transition = _ref10.theme.transition;
  return transition.defaultAll;
});

var _templateObject$4 = taggedTemplateLiteral(['\n    0% {\n      transform: translate(-50%, -50%) rotate(0deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(360deg);\n    }\n  '], ['\n    0% {\n      transform: translate(-50%, -50%) rotate(0deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(360deg);\n    }\n  ']),
    _templateObject2$2 = taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  animation: ', ' 1.5s infinite linear;\n  transform-origin: center;\n  top: 7px;\n  position: relative;\n  left: 7px;\n'], ['\n  display: flex;\n  align-items: center;\n  animation: ', ' 1.5s infinite linear;\n  transform-origin: center;\n  top: 7px;\n  position: relative;\n  left: 7px;\n']);

var getAnim = function getAnim() {
  var bollox = styled.keyframes(_templateObject$4);
  return bollox;
};

var LoaderUI = styled__default.div(_templateObject2$2, function () {
  return getAnim();
});

var Loader = function Loader(_ref) {
  var color = _ref.color,
      size = _ref.size;
  return React__default.createElement(
    LoaderUI,
    { color: color },
    React__default.createElement(Loading, { size: size, fill: color })
  );
};

Loader.displayName = 'Loader';

Loader.defaultProps = {
  color: '#25bcbc'
};

var _templateObject$5 = taggedTemplateLiteral(['\n  box-shadow: none;\n  outline: none;\n  display: flex;\n  box-sizing: border-box;\n  /* &:focus-within {\n  }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    box-shadow: ', ';\n    outline: ', ';\n    button, a { outline: none }\n  } */\n\n  border-radius: ', ';\n  & > div {\n    border-radius: ', ';\n  }\n\n  /* let the ripple effect overflow the component on mobile for better ux\n    since on mobile you\'r thunm or finger will be hiddingthe animation\n\n    no this was a mistake\n  */\n  & > div {\n    overflow: hidden;\n  }\n  & {\n    transition: ', ';\n  }\n  &:not(:hover) {\n    &:focus-within {\n      box-shadow: ', ';\n      outline: ', ';\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    /* & > div {\n      overflow: hidden;\n    } */\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      box-shadow: ', ';\n      outline: ', ';\n      button, a { outline: none }\n    }\n  }\n'], ['\n  box-shadow: none;\n  outline: none;\n  display: flex;\n  box-sizing: border-box;\n  /* &:focus-within {\n  }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    box-shadow: ', ';\n    outline: ', ';\n    button, a { outline: none }\n  } */\n\n  border-radius: ', ';\n  & > div {\n    border-radius: ', ';\n  }\n\n  /* let the ripple effect overflow the component on mobile for better ux\n    since on mobile you\'r thunm or finger will be hiddingthe animation\n\n    no this was a mistake\n  */\n  & > div {\n    overflow: hidden;\n  }\n  & {\n    transition: ', ';\n  }\n  &:not(:hover) {\n    &:focus-within {\n      box-shadow: ', ';\n      outline: ', ';\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    /* & > div {\n      overflow: hidden;\n    } */\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      box-shadow: ', ';\n      outline: ', ';\n      button, a { outline: none }\n    }\n  }\n']);

var Wrapper = styled__default.div(_templateObject$5, function (_ref) {
  var focusWithin = _ref.focusWithin,
      outlineShadow = _ref.theme.outlineShadow;
  return focusWithin && outlineShadow;
}, function (_ref2) {
  var focusWithin = _ref2.focusWithin,
      outline = _ref2.theme.outline;
  return focusWithin && outline;
}, function (_ref3) {
  var radius = _ref3.theme.radius;
  return radius;
}, function (_ref4) {
  var radius = _ref4.theme.radius;
  return radius;
}, function (_ref5) {
  var transition = _ref5.theme.transition;
  return transition.defaultAll;
}, function (_ref6) {
  var outlineShadow = _ref6.theme.outlineShadow;
  return outlineShadow;
}, function (_ref7) {
  var outline = _ref7.theme.outline;
  return outline;
}, function (_ref8) {
  var focusWithin = _ref8.focusWithin,
      outlineShadow = _ref8.theme.outlineShadow;
  return focusWithin && outlineShadow;
}, function (_ref9) {
  var focusWithin = _ref9.focusWithin,
      outline = _ref9.theme.outline;
  return focusWithin && outline;
});

var rippleStyle = {
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  width: 35,
  height: 35,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none'
};

var wrapStyle = {
  position: 'relative',
  display: 'inline-block'
  // overflow: 'hidden', // move decision to parent compo to have media queries
};

var Ripples = function (_Component) {
  inherits(Ripples, _Component);

  function Ripples() {
    var _ref10;

    var _temp, _this, _ret;

    classCallCheck(this, Ripples);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref10 = Ripples.__proto__ || Object.getPrototypeOf(Ripples)).call.apply(_ref10, [this].concat(args))), _this), _this.state = {
      rippleStyle: {},
      focusWithin: false
    }, _this.componentDidMount = function () {
      _this.update();
    }, _this.componentDidUpdate = function () {
      _this.update();
    }, _this.update = function () {
      if (_this.ref) {
        var focusWithin = _this.ref.contains(document.activeElement);
        if (focusWithin !== _this.state.focusWithin) {
          _this.setState({
            focusWithin: focusWithin
          });
        }
      }
    }, _this.storeRef = function (node) {
      _this.ref = node;
    }, _this.handleClick = function (ev) {
      var disabled = _this.props.disabled;

      if (disabled) return false;
      // ev.stopPropagation();
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          color = _this$props.color,
          during = _this$props.during;
      var pageX = ev.pageX,
          clientY = ev.clientY,
          _ev$currentTarget = ev.currentTarget,
          offsetWidth = _ev$currentTarget.offsetWidth,
          offsetHeight = _ev$currentTarget.offsetHeight,
          currentTarget = ev.currentTarget;

      var _currentTarget$getBou = currentTarget.getBoundingClientRect(),
          top = _currentTarget$getBou.top,
          left = _currentTarget$getBou.left;

      var rippleLeft = pageX ? pageX - left : '50%';
      var rippleTop = clientY ? clientY - top : '50%';

      _this.setState({
        rippleStyle: {
          top: rippleTop,
          left: rippleLeft,
          opacity: 1,
          backgroundColor: color
        }
      });

      var cbHandler = window.requestAnimationFrame ? window.requestAnimationFrame : window.setTimeout;

      // setTimeout(() => {
      cbHandler(function () {
        var size = Math.max(offsetWidth, offsetHeight);

        if (_this && _this.setState) {
          _this.setState({
            rippleStyle: {
              top: rippleTop,
              left: rippleLeft,
              backgroundColor: color,
              transition: 'all ' + during + 'ms',
              transform: rippleStyle.transform + ' scale(' + size / 9 + ')',
              opacity: 0
            }
          });
        }
      }, 8);

      if (typeof onClick === 'function') {
        onClick(ev);
      }
      return undefined;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Ripples, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          during = _props.during,
          props = objectWithoutProperties(_props, ['children', 'style', 'during']);
      var state = this.state,
          handleClick = this.handleClick;
      var focusWithin = this.state.focusWithin;


      var s = _extends({}, wrapStyle, style);

      return React__default.createElement(
        Wrapper,
        _extends({}, props, {
          style: style,
          onClick: handleClick,
          focusWithin: focusWithin,
          onFocus: this.update,
          onBlur: this.update,
          'data-ripple-wrapper': true
        }),
        React__default.createElement(
          'div',
          _extends({}, props, { style: s, ref: this.storeRef, 'data-ripple-main': true }),
          React__default.createElement('s', { style: _extends({}, rippleStyle, state.rippleStyle) }),
          children
        )
      );
    }
  }]);
  return Ripples;
}(React.Component);

Ripples.propTypes = {
  during: propTypes.number,
  color: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.node,
  style: propTypes.object
};
Ripples.defaultProps = {
  during: 600,
  color: 'rgba(0, 0, 0, .3)',
  onClick: function onClick() {},
  children: null,
  style: {}
};

var _templateObject$6 = taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: content-box;\n  max-width: 16px;\n  max-height: 16px;\n  margin: ', ';\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: content-box;\n  max-width: 16px;\n  max-height: 16px;\n  margin: ', ';\n']);

var ButtonIconWrapper = styled__default.div(_templateObject$6, function (_ref) {
  var icon = _ref.icon,
      textOrMessage = _ref.textOrMessage;
  return icon && textOrMessage ? '0 4px' : '0';
});

var _templateObject$7 = taggedTemplateLiteral(['\n  margin: 0 4px;\n  display: flex;\n  align-items: center;\n'], ['\n  margin: 0 4px;\n  display: flex;\n  align-items: center;\n']);

var ButtonContentWrapper = styled__default.div(_templateObject$7);

var _templateObject$8 = taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  background-image: none;\n  border-width: 1px;\n  border-style: solid;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 18px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  min-height: 32px;\n  /* border-radius: 2px; */\n  user-select: none;\n  /* transition: all 0.38s ease-out; */\n  transition: ', ';\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  svg {\n    min-width: 26px;\n    width: 26px;\n    max-width: 26px;\n    min-height: 26px;\n    height: 26px;\n    max-height: 26px;\n  }\n  outline: none;\n  box-shadow: none;\n  &:not(:hover) {\n    &:focus {\n      ', ';\n    }\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  background-image: none;\n  border-width: 1px;\n  border-style: solid;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 18px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  min-height: 32px;\n  /* border-radius: 2px; */\n  user-select: none;\n  /* transition: all 0.38s ease-out; */\n  transition: ', ';\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  svg {\n    min-width: 26px;\n    width: 26px;\n    max-width: 26px;\n    min-height: 26px;\n    height: 26px;\n    max-height: 26px;\n  }\n  outline: none;\n  box-shadow: none;\n  &:not(:hover) {\n    &:focus {\n      ', ';\n    }\n  }\n']);

/* eslint-disable indent */
var ButtonBaseStyles = styled.css(_templateObject$8, function (_ref) {
  var transition = _ref.theme.transition;
  return transition.defaultAll;
}, function (_ref2) {
  var disabled = _ref2.disabled,
      theme = _ref2.theme;
  return !disabled ? 'box-shadow: ' + theme.outlineShadow + '; outline: ' + theme.outline : '';
});

var _templateObject$9 = taggedTemplateLiteral([';\n  /* STATIC BASE STYLES: */\n  ', ';\n\n  border-radius: ', ';\n  cursor: pointer;\n\n  /* ICON POSITION: */\n  flex-direction: ', ';\n\n  /* FULL WIDTH STYLES: */\n  ', ';\n}\n'], [';\n  /* STATIC BASE STYLES: */\n  ', ';\n\n  border-radius: ', ';\n  cursor: pointer;\n\n  /* ICON POSITION: */\n  flex-direction: ', ';\n\n  /* FULL WIDTH STYLES: */\n  ', ';\n}\n']);

/* eslint-disable indent */
var ButtonCommonMixin = styled.css(_templateObject$9, ButtonBaseStyles, function (_ref) {
  var radius = _ref.theme.radius;
  return radius;
}, function (_ref2) {
  var iconPosition = _ref2.iconPosition;

  if (iconPosition && iconPosition === 'after') {
    return 'row-reverse';
  }
  return 'row';
}, function (_ref3) {
  var isFullWidth = _ref3.isFullWidth;
  return isFullWidth ? 'width: 100%' : '';
});

var getTypeColor = function getTypeColor(_ref, type) {
  var palette = _ref.palette;

  if (palette.semantic[type]) {
    return palette.semantic[type];
  }
  if (type === 'primary') {
    return palette.accent.main;
  }
  if (type === 'secondary') {
    return palette.primary.main;
  }
  return '#fff';
};

var _templateObject$a = taggedTemplateLiteral([';\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n\n  /* those next line overwritte the \'.root a\' selector rules from uxi NON-StyledComponent theme/css\n  * TODO: remove the overwrite once the .root a rules doesn\'t interfere anymore */\n  * { color: inherit }\n  svg { fill: ', ';}\n\n  &:hover {\n    border-color: ', ';\n    color: ', ';\n    background-color: ', ';\n    * { color: inherit }\n    svg { fill: ', ';}\n  }\n\n  /* DISABLED STYLES: (overrides types styles) */\n  cursor: ', ';\n\n  ', '\n\n  ', ';\n\n  svg {\n    ', ';\n  }\n\n  &:hover {\n    ', ';\n    ', ';\n    svg {\n      ', ';\n    }\n  }\n}\n'], [';\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n\n  /* those next line overwritte the \'.root a\' selector rules from uxi NON-StyledComponent theme/css\n  * TODO: remove the overwrite once the .root a rules doesn\'t interfere anymore */\n  * { color: inherit }\n  svg { fill: ', ';}\n\n  &:hover {\n    border-color: ', ';\n    color: ', ';\n    background-color: ', ';\n    * { color: inherit }\n    svg { fill: ', ';}\n  }\n\n  /* DISABLED STYLES: (overrides types styles) */\n  cursor: ', ';\n\n  ', '\n\n  ', ';\n\n  svg {\n    ', ';\n  }\n\n  &:hover {\n    ', ';\n    ', ';\n    svg {\n      ', ';\n    }\n  }\n}\n']);

/* eslint-disable indent */
var ButtonBaseMixin = styled.css(_templateObject$a, function (_ref) {
  var theme = _ref.theme,
      type = _ref.type;
  return getTypeColor(theme, type);
}, function (_ref2) {
  var theme = _ref2.theme,
      type = _ref2.type;
  return type ? getTypeColor(theme, type) : theme.palette.lightGrey;
}, function (_ref3) {
  var theme = _ref3.theme,
      type = _ref3.type;
  return type ? '#fff' : theme.palette.darkGrey;
}, function (_ref4) {
  var theme = _ref4.theme,
      type = _ref4.type;
  return type ? '#fff' : theme.palette.darkGrey;
}, function (_ref5) {
  var theme = _ref5.theme,
      type = _ref5.type;
  return type ? getTypeColor(theme, type) : theme.palette.grey;
}, function (_ref6) {
  var theme = _ref6.theme,
      type = _ref6.type;
  return type ? getTypeColor(theme, type) : theme.palette.darkGrey;
}, function (_ref7) {
  var type = _ref7.type,
      theme = _ref7.theme;
  return type ? '#fff' : theme.palette.lightGrey;
}, function (_ref8) {
  var theme = _ref8.theme,
      type = _ref8.type;
  return type ? getTypeColor(theme, type) : theme.palette.darkGrey;
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled ? 'normal' : 'pointer';
}, function (_ref10) {
  var disabled = _ref10.disabled,
      theme = _ref10.theme;
  return disabled ? 'background-color: ' + theme.palette.lightGrey + ';\n    color: ' + theme.palette.grey + ';' : '';
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return disabled ? 'border-color: transparent;' : '';
}, function (_ref12) {
  var disabled = _ref12.disabled,
      palette = _ref12.theme.palette;
  return disabled ? 'fill: ' + palette.grey : '';
}, function (_ref13) {
  var disabled = _ref13.disabled,
      palette = _ref13.theme.palette;
  return disabled ? 'background-color: ' + palette.lightGrey + '; color: ' + palette.grey : '';
}, function (_ref14) {
  var disabled = _ref14.disabled;
  return disabled ? 'border-color: transparent;' : '';
}, function (_ref15) {
  var disabled = _ref15.disabled,
      palette = _ref15.theme.palette;
  return disabled ? 'fill: ' + palette.grey : '';
});

var _templateObject$b = taggedTemplateLiteral([';\n  background-color: transparent;\n  border-color: transparent;\n  color: ', ';\n\n  /* those next line overwritte the \'.root a\' selector rules from uxi NON-StyledComponent theme/css\n  * TODO: remove the overwrite once the .root a rules doesn\'t interfere anymore */\n  * { color: inherit }\n  svg { fill: ', '}\n\n  &:hover {\n    border-color: transparent;\n    color: ', ';\n    background-color: ', ';\n    * { color: inherit; }\n    svg { fill: ', '\n  }\n\n  &:hover {\n    ', ';\n    ', ';\n    svg {\n      ', ';\n    }\n  }\n  svg {\n    ', ';\n  }\n}\n'], [';\n  background-color: transparent;\n  border-color: transparent;\n  color: ', ';\n\n  /* those next line overwritte the \'.root a\' selector rules from uxi NON-StyledComponent theme/css\n  * TODO: remove the overwrite once the .root a rules doesn\'t interfere anymore */\n  * { color: inherit }\n  svg { fill: ', '}\n\n  &:hover {\n    border-color: transparent;\n    color: ', ';\n    background-color: ', ';\n    * { color: inherit; }\n    svg { fill: ', '\n  }\n\n  &:hover {\n    ', ';\n    ', ';\n    svg {\n      ', ';\n    }\n  }\n  svg {\n    ', ';\n  }\n}\n']);

/* eslint-disable indent */
var FlatButtonBaseMixin = styled.css(_templateObject$b, function (_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      disabled = _ref.disabled;
  return (
    // eslint-disable-next-line no-nested-ternary
    disabled ? theme.palette.grey : type ? getTypeColor(theme, type) : theme.palette.darkGrey
  );
}, function (_ref2) {
  var theme = _ref2.theme,
      type = _ref2.type,
      disabled = _ref2.disabled;
  return (
    // eslint-disable-next-line no-nested-ternary
    disabled ? theme.palette.grey : type ? getTypeColor(theme, type) : theme.palette.darkGrey
  );
}, function () {
  return '#ffffff';
}, function (_ref3) {
  var type = _ref3.type,
      theme = _ref3.theme;
  return type ? getTypeColor(theme, type) : theme.palette.grey;
}, function (_ref4) {
  var type = _ref4.type;
  return type ? '#ffffff' : '#ffffff';
}, function (_ref5) {
  var disabled = _ref5.disabled,
      palette = _ref5.theme.palette;
  return disabled ? 'background-color: transparent; color: ' + palette.grey : '';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? 'border-color: transparent;' : '';
}, function (_ref7) {
  var disabled = _ref7.disabled,
      palette = _ref7.theme.palette;
  return disabled ? 'fill: ' + palette.grey : '';
}, function (_ref8) {
  var disabled = _ref8.disabled,
      palette = _ref8.theme.palette;
  return disabled ? 'fill: ' + palette.grey : '';
});

var _templateObject$c = taggedTemplateLiteral([';\n  background-color: transparent;\n  color: ', ';\n  border-color: ', ';\n  & {\n    color: ', ';\n  }\n\n  /* those next line overwritte the \'.root a\' selector rules from uxi NON-StyledComponent theme/css\n  * TODO: remove the overwrite once the .root a rules doesn\'t interfere anymore */\n  * { color: inherit }\n  svg { fill: ', '}\n\n  &:hover {\n    & {\n      color: ', ';\n      border-color: ', ';\n    }\n    background-color: ', ';\n    * { color: inherit; }\n    svg { fill: ', '\n  }\n\n  /* svg {\n    fill: ', ';\n  } */\n}\n'], [';\n  background-color: transparent;\n  color: ', ';\n  border-color: ', ';\n  & {\n    color: ', ';\n  }\n\n  /* those next line overwritte the \'.root a\' selector rules from uxi NON-StyledComponent theme/css\n  * TODO: remove the overwrite once the .root a rules doesn\'t interfere anymore */\n  * { color: inherit }\n  svg { fill: ', '}\n\n  &:hover {\n    & {\n      color: ', ';\n      border-color: ', ';\n    }\n    background-color: ', ';\n    * { color: inherit; }\n    svg { fill: ', '\n  }\n\n  /* svg {\n    fill: ', ';\n  } */\n}\n']);

/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
var OutlineButtonBaseMixin = styled.css(_templateObject$c, function (_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      disabled = _ref.disabled;
  return (
    // eslint-disable-next-line no-nested-ternary
    disabled ? theme.palette.lightGrey : type ? getTypeColor(theme, type) : theme.palette.darkGrey
  );
}, function (_ref2) {
  var disabled = _ref2.disabled,
      theme = _ref2.theme,
      type = _ref2.type;
  return disabled ? theme.palette.lightGrey : type ? getTypeColor(theme, type) : theme.palette.darkGrey;
}, function (_ref3) {
  var disabled = _ref3.disabled,
      theme = _ref3.theme,
      type = _ref3.type;
  return disabled ? theme.palette.lightGrey : type ? '' + getTypeColor(theme, type) : theme.palette.darkGrey;
}, function (_ref4) {
  var theme = _ref4.theme,
      type = _ref4.type,
      disabled = _ref4.disabled;
  return (
    // eslint-disable-next-line no-nested-ternary
    disabled ? theme.palette.lightGrey : type ? getTypeColor(theme, type) : theme.palette.darkGrey
  );
}, function (_ref5) {
  var disabled = _ref5.disabled,
      theme = _ref5.theme;
  return disabled ? theme.palette.lightGrey : '#fff';
}, function (_ref6) {
  var disabled = _ref6.disabled,
      theme = _ref6.theme;
  return disabled ? theme.palette.lightGrey : theme.palette.grey;
}, function (_ref7) {
  var disabled = _ref7.disabled,
      type = _ref7.type,
      theme = _ref7.theme;
  return disabled ? 'transparent' : type ? getTypeColor(theme, type) : theme.palette.grey;
}, function (_ref8) {
  var type = _ref8.type,
      disabled = _ref8.disabled,
      theme = _ref8.theme;
  return disabled ? theme.palette.lightGrey : type ? getTypeColor(theme, type) : '#fff';
}, function (_ref9) {
  var type = _ref9.type,
      disabled = _ref9.disabled,
      theme = _ref9.theme;
  return disabled ? theme.palette.lightGrey : type ? getTypeColor(theme, type) : theme.palette.darkGrey;
});

var _templateObject$d = taggedTemplateLiteral([';\n  background-color: transparent;\n  border-color: transparent;\n  font-size: inherit;\n  text-transform: none;\n  &, button {\n    margin: 0;\n    padding: 0;\n    border: none;\n  }\n  button div, & div {\n    margin: 0;\n  }\n  & > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center\n  }\n}\n'], [';\n  background-color: transparent;\n  border-color: transparent;\n  font-size: inherit;\n  text-transform: none;\n  &, button {\n    margin: 0;\n    padding: 0;\n    border: none;\n  }\n  button div, & div {\n    margin: 0;\n  }\n  & > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center\n  }\n}\n']);
// import { getTypeColor } from './utils';

/* eslint-disable indent */
var UnstyledButtonBaseMixin = styled.css(_templateObject$d);

var _templateObject$e = taggedTemplateLiteral(['\n  line-height: 1;\n  ', ';\n  ', ';\n'], ['\n  line-height: 1;\n  ', ';\n  ', ';\n']),
    _templateObject2$3 = taggedTemplateLiteral(['\n  line-height: 1;\n  ', ';\n  ', ';\n  text-decoration: none;\n  &:hover { text-decoration: none }\n'], ['\n  line-height: 1;\n  ', ';\n  ', ';\n  text-decoration: none;\n  &:hover { text-decoration: none }\n']),
    _templateObject3$2 = taggedTemplateLiteral(['\n  line-height: 1;\n  ', ';\n  ', ';\n  & a:hover {\n    text-decoration: none;\n  }\n'], ['\n  line-height: 1;\n  ', ';\n  ', ';\n  & a:hover {\n    text-decoration: none;\n  }\n']);

var attrs = {
  onMouseOut: function onMouseOut(_ref) {
    var _onMouseOut = _ref.onMouseOut;
    return _onMouseOut || function (_ref2) {
      var target = _ref2.target,
          currentTarget = _ref2.currentTarget;

      if (document && document.activeElement && document.activeElement === target) {
        if (target.blur) target.blur();
      } else if (document && document.activeElement && document.activeElement === currentTarget) {
        if (currentTarget.blur) currentTarget.blur();
      } else if (document && target.contains(document.activeElement)) {
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
      } else if (document && currentTarget.contains(document.activeElement)) {
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
      }
    };
  }
};

var ButtonUI = styled__default.button.attrs(_extends({}, attrs))(_templateObject$e, ButtonCommonMixin, ButtonBaseMixin);
var FlatButtonUI = styled__default.button.attrs(_extends({}, attrs))(_templateObject$e, ButtonCommonMixin, FlatButtonBaseMixin);
var OutlineButtonUI = styled__default.button.attrs(_extends({}, attrs))(_templateObject$e, ButtonCommonMixin, OutlineButtonBaseMixin);
var UnstyledButtonUI = styled__default.button.attrs(_extends({}, attrs))(_templateObject$e, ButtonCommonMixin, UnstyledButtonBaseMixin);
/* eslint-enable indent */
var getButtonUI = function getButtonUI(buttonType) {
  if (buttonType === 'FlatButton') return FlatButtonUI;
  if (buttonType === 'OutlineButton') return OutlineButtonUI;
  if (buttonType === 'UnstyledButton') return UnstyledButtonUI;
  return ButtonUI;
};

var ButtonLinkUI = styled__default.a.attrs(_extends({}, attrs))(_templateObject2$3, ButtonCommonMixin, ButtonBaseMixin);
var FlatButtonLinkUI = styled__default.a.attrs(_extends({}, attrs))(_templateObject2$3, ButtonCommonMixin, FlatButtonBaseMixin);
var OutlineButtonLinkUI = styled__default.a.attrs(_extends({}, attrs))(_templateObject2$3, ButtonCommonMixin, OutlineButtonBaseMixin);
var UnstyledButtonLinkUI = styled__default.a.attrs(_extends({}, attrs))(_templateObject2$3, ButtonCommonMixin, UnstyledButtonBaseMixin);
var getButtonLinkUI = function getButtonLinkUI(buttonType) {
  if (buttonType === 'FlatButton') return FlatButtonLinkUI;
  if (buttonType === 'OutlineButton') return OutlineButtonLinkUI;
  if (buttonType === 'UnstyledButton') return UnstyledButtonLinkUI;
  return ButtonLinkUI;
};

var ButtonDivUI = styled__default.div.attrs(_extends({}, attrs))(_templateObject3$2, ButtonCommonMixin, ButtonBaseMixin);
var FlatButtonDivUI = styled__default.div.attrs(_extends({}, attrs))(_templateObject3$2, ButtonCommonMixin, FlatButtonBaseMixin);
var OutlineButtonDivUI = styled__default.div.attrs(_extends({}, attrs))(_templateObject3$2, ButtonCommonMixin, OutlineButtonBaseMixin);
var UnstyledButtonDivUI = styled__default.div.attrs(_extends({}, attrs))(_templateObject3$2, ButtonCommonMixin, UnstyledButtonBaseMixin);
var getButtonDivUI = function getButtonDivUI(buttonType) {
  if (buttonType === 'FlatButton') return FlatButtonDivUI;
  if (buttonType === 'OutlineButton') return OutlineButtonDivUI;
  if (buttonType === 'UnstyledButton') return UnstyledButtonDivUI;
  return ButtonDivUI;
};

// eslint-disable-next-line
var ButtonComponent = function (_Component) {
  inherits(ButtonComponent, _Component);

  function ButtonComponent(props) {
    classCallCheck(this, ButtonComponent);

    var _this = possibleConstructorReturn(this, (ButtonComponent.__proto__ || Object.getPrototypeOf(ButtonComponent)).call(this, props));

    _this.ButtonCommonMixin = '';
    _this.ButtonBaseMixin = '';
    _this.buttonType = ''; // oneOf 'Button', 'FlatButton', 'OutlineButton', 'UnstyledButton'
    return _this;
  }

  createClass(ButtonComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          text = _props.text,
          originalType = _props.type,
          children = _props.children,
          inert = _props.inert,
          link = _props.link,
          readyLink = _props.readyLink,
          isFullWidth = _props.isFullWidth,
          click = _props.click,
          onClick = _props.onClick,
          disabled = _props.disabled,
          iconProp = _props.icon,
          iconPosition = _props.iconPosition,
          style = _props.style,
          className = _props.className,
          target = _props.target,
          loading = _props.loading,
          _props$tabIndex = _props.tabIndex,
          tabIndex = _props$tabIndex === undefined ? 0 : _props$tabIndex,
          onMouseOut = _props.onMouseOut;


      var textOrMessage = message || text || children;

      var wasASubmitInitially = originalType === 'submit';

      var type = wasASubmitInitially ? 'primary' : originalType;

      var icon = void 0;
      var iconSize = 16;
      if (React__default.isValidElement(iconProp)) {
        var iconSizeFromConsumer = iconProp.props ? iconProp.props.size : null;
        if (iconSizeFromConsumer !== undefined) {
          iconSize = iconSizeFromConsumer;
        }
        icon = React__default.cloneElement(iconProp, {
          size: iconSize
        });
      }

      var buttonAttr = _extends({
        onClick: !loading && (click || onClick || null),
        className: className,
        style: _extends({}, style, {
          margin: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0
        })
      }, tabIndex !== undefined && !disabled && !inert ? { tabIndex: tabIndex } : {});

      var marginStyles = _extends({
        display: isFullWidth ? 'block' : 'inline-block'
      }, 'margin' in style ? { margin: style.margin } : {}, 'marginTop' in style ? { marginTop: style.marginTop } : {}, 'marginRight' in style ? { marginRight: style.marginRight } : {}, 'marginBottom' in style ? { marginBottom: style.marginBottom } : {}, 'marginLeft' in style ? { marginLeft: style.marginLeft } : {});

      var styleProps = {
        isFullWidth: isFullWidth,
        disabled: disabled,
        type: type,
        iconPosition: iconPosition,
        icon: icon,
        textOrMessage: textOrMessage
      };

      // which element to render div|a|button
      var TheButtonComponent = null;
      if (inert) {
        TheButtonComponent = getButtonDivUI(this.buttonType);
      } else if (readyLink) {
        var DivButtonComponent = getButtonDivUI(this.buttonType);
        TheButtonComponent = function TheButtonComponent(props) {
          return React__default.createElement(
            DivButtonComponent,
            props,
            readyLink
          );
        };
      } else if (link) {
        TheButtonComponent = getButtonLinkUI(this.buttonType);
      } else {
        TheButtonComponent = getButtonUI(this.buttonType);
      }

      var theButton = React__default.createElement(
        TheButtonComponent,
        _extends({}, link && !disabled ? { href: link } : {}, link && !disabled && target ? { target: target } : {}, styleProps, buttonAttr, {
          onMouseOut: onMouseOut
        }),
        icon && (loading ? React__default.createElement(
          ButtonIconWrapper,
          styleProps,
          ' ',
          React__default.createElement(Loader, { size: '16' }),
          ' '
        ) : React__default.createElement(
          ButtonIconWrapper,
          styleProps,
          ' ',
          icon,
          ' '
        )),
        !icon && loading && React__default.createElement(
          ButtonIconWrapper,
          styleProps,
          ' ',
          React__default.createElement(Loader, { size: '16' }),
          ' '
        ),
        textOrMessage && React__default.createElement(
          ButtonContentWrapper,
          styleProps,
          ' ',
          textOrMessage,
          ' '
        )
      );

      var border = style.border,
          borderBottom = style.borderBottom,
          borderTop = style.borderTop,
          borderLeft = style.borderLeft,
          borderRight = style.borderRight,
          restForRippleStyles = objectWithoutProperties(style, ['border', 'borderBottom', 'borderTop', 'borderLeft', 'borderRight']);


      var rippleStyles = _extends({}, isFullWidth ? { width: '100%' } : {}, restForRippleStyles, {
        margin: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
      });

      return React__default.createElement(
        'div',
        {
          style: _extends({}, marginStyles, {
            lineHeight: 0
          }, style.width ? { width: style.width } : {}, style.minWidth ? { minWidth: style.minWidth } : {}, style.maxWidth ? { maxWidth: style.maxWidth } : {}, style.height ? { height: style.width } : {}, style.minHeight ? { minHeight: style.minHeight } : {}, style.maxHeight ? { maxHeight: style.maxHeight } : {})
        },
        React__default.createElement(
          Ripples,
          { disabled: disabled, style: rippleStyles },
          theButton
        )
      );
    }
  }]);
  return ButtonComponent;
}(React.Component);

ButtonComponent.propTypes = {
  style: propTypes.object,
  type: propTypes.oneOf([// eslint-disable-line
  'primary', 'secondary', 'danger', 'error', 'warning', 'success', 'info', 'default'])
};

ButtonComponent.defaultProps = {
  style: {},
  onMouseOut: undefined
  // type: 'default',
};

// eslint-disable-next-line react/prefer-stateless-function

var Button = function (_ButtonComponent) {
  inherits(Button, _ButtonComponent);

  function Button(props) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.ButtonCommonMixin = ButtonCommonMixin;
    _this.ButtonBaseMixin = ButtonBaseMixin;
    _this.buttonType = 'Button';
    return _this;
  }

  return Button;
}(ButtonComponent);

// eslint-disable-next-line react/prefer-stateless-function

var FlatButton = function (_ButtonComponent) {
  inherits(FlatButton, _ButtonComponent);

  function FlatButton(props) {
    classCallCheck(this, FlatButton);

    var _this = possibleConstructorReturn(this, (FlatButton.__proto__ || Object.getPrototypeOf(FlatButton)).call(this, props));

    _this.ButtonCommonMixin = ButtonCommonMixin;
    _this.ButtonBaseMixin = FlatButtonBaseMixin;
    _this.buttonType = 'FlatButton';
    return _this;
  }

  return FlatButton;
}(ButtonComponent);

// eslint-disable-next-line react/prefer-stateless-function

var OutlineButton = function (_ButtonComponent) {
  inherits(OutlineButton, _ButtonComponent);

  function OutlineButton(props) {
    classCallCheck(this, OutlineButton);

    var _this = possibleConstructorReturn(this, (OutlineButton.__proto__ || Object.getPrototypeOf(OutlineButton)).call(this, props));

    _this.ButtonCommonMixin = ButtonCommonMixin;
    _this.ButtonBaseMixin = OutlineButtonBaseMixin;
    _this.buttonType = 'OutlineButton';
    return _this;
  }

  return OutlineButton;
}(ButtonComponent);

var _templateObject$f = taggedTemplateLiteral(['\n  position: absolute;\n  right: 8px;\n  top: 0;\n  height: 32px;\n  max-height: 32px;\n  min-height: 32px;\n  display: flex;\n  align-items: center;\n  color: ', ';\n  & > svg,\n  & > svg * {\n    fill: currentColor !important;\n    color: currentColor !important;\n  }\n'], ['\n  position: absolute;\n  right: 8px;\n  top: 0;\n  height: 32px;\n  max-height: 32px;\n  min-height: 32px;\n  display: flex;\n  align-items: center;\n  color: ', ';\n  & > svg,\n  & > svg * {\n    fill: currentColor !important;\n    color: currentColor !important;\n  }\n']);

/* eslint-disable no-nested-ternary */
var StatusIconUI = styled__default.span(_templateObject$f, function (_ref) {
  var error = _ref.error,
      success = _ref.success,
      semantic = _ref.theme.palette.semantic;
  return error ? semantic.error : success ? semantic.success : semantic.default;
});

var StatusIcon = function StatusIcon(_ref2) {
  var error = _ref2.error,
      success = _ref2.success,
      style = _ref2.style;

  var stateIcon = error // eslint-disable-line no-nested-ternary
  ? React__default.createElement(Issue, { size: '16' }) : success ? React__default.createElement(Done, { size: '16' }) : null;

  return React__default.createElement(
    StatusIconUI,
    { error: error, success: success, style: style },
    stateIcon
  );
};

StatusIcon.displayName = 'StatusIcon';

var _templateObject$g = taggedTemplateLiteral(['\n  padding: 0 6px;\n  font-size: 12px;\n  color: ', ';\n'], ['\n  padding: 0 6px;\n  font-size: 12px;\n  color: ', ';\n']);

var ErrorWrapperUI = styled__default.div(_templateObject$g, function (_ref) {
  var semantic = _ref.theme.palette.semantic;
  return semantic.error;
});

var _templateObject$h = taggedTemplateLiteral(['\n  position: relative;\n  ', ';\n'], ['\n  position: relative;\n  ', ';\n']),
    _templateObject2$4 = taggedTemplateLiteral(['\n  border-radius: 3px;\n  border-radius: ', ';\n  /* min-height: 32px; */\n  box-sizing: border-box;\n  font-size: 14px;\n  border: 1px solid ', ';\n  padding: 6.5px 26px 6.5px 6.5px;\n  padding: ', ';\n  min-width: 100%;\n  border: 1px solid ', ';\n  transition: ', ';\n  &:focus {\n    outline: none;\n    border: 1px solid ', ';\n    /* box-shadow: 0 0 10px #719ECE;*/ /* where\'s that color from ? */\n    box-shadow: ', ';\n    outline: ', ';\n  }\n'], ['\n  border-radius: 3px;\n  border-radius: ', ';\n  /* min-height: 32px; */\n  box-sizing: border-box;\n  font-size: 14px;\n  border: 1px solid ', ';\n  padding: 6.5px 26px 6.5px 6.5px;\n  padding: ', ';\n  min-width: 100%;\n  border: 1px solid ', ';\n  transition: ', ';\n  &:focus {\n    outline: none;\n    border: 1px solid ', ';\n    /* box-shadow: 0 0 10px #719ECE;*/ /* where\'s that color from ? */\n    box-shadow: ', ';\n    outline: ', ';\n  }\n']);

// const { semantic } = palette;

var InputWrapperUI = styled__default.div.attrs({
  theme: function theme$$1(_ref) {
    var _theme = _ref.theme;
    return _theme || theme;
  }
})(_templateObject$h, function (_ref2) {
  var isFullWidth = _ref2.isFullWidth;
  return isFullWidth ? 'width: 100%' : '';
});

var InputUI = styled__default.input.attrs({
  theme: function theme$$1(_ref3) {
    var _theme2 = _ref3.theme;
    return _theme2 || theme;
  }
})(_templateObject2$4, function (_ref4) {
  var radius = _ref4.theme.radius;
  return radius;
}, function (_ref5) {
  var semantic = _ref5.theme.palette.semantic;
  return semantic.default;
}, function (_ref6) {
  var radius = _ref6.theme.radius;
  return '6.5px 26px 6.5px ' + (6.5 + parseInt(radius.replace('px', ''), 10) * 0.6) + 'px';
}, function (_ref7) {
  var error = _ref7.error,
      success = _ref7.success,
      semantic = _ref7.theme.palette.semantic;
  return error // eslint-disable-line no-nested-ternary
  ? semantic.error : success ? semantic.success : semantic.default;
}, function (_ref8) {
  var transition = _ref8.theme.transition;
  return transition.defaultAll;
}, function (_ref9) {
  var theme$$1 = _ref9.theme;
  return theme$$1.palette.accent.main;
}, function (_ref10) {
  var outlineShadow = _ref10.theme.outlineShadow;
  return outlineShadow;
}, function (_ref11) {
  var outlineShadow = _ref11.theme.outlineShadow;
  return outlineShadow;
});

// const ErrorWrapperUI = styled.span.attrs({
//   theme: ({ theme }) => (theme || defaultTheme),
// })`
//   padding: 0 6px;
//   font-size: 12px;
//   color: ${({ theme: { palette: { semantic } } }) => semantic.error};
// `;

// const StatusIcon = styled.span.attrs({
//   theme: ({ theme }) => (theme || defaultTheme),
// })`
//   position: absolute;
//   right: 8px;
//   top: 9px;
//   color: ${({ error, success, theme: { palette: { semantic } } }) => (error
//     ? semantic.error
//     : (success ? semantic.success : semantic.default)
//   )};
//   & > svg,
//   & > svg * {
//     fill: currentColor !important;
//     color: currentColor !important;
//   }
// `;

// eslint-disable-next-line react/prefer-stateless-function

var TextField = function (_Component) {
  inherits(TextField, _Component);

  // TODO handle generating uid that doesn't force rerebder
  function TextField(props) {
    classCallCheck(this, TextField);

    var _this = possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  createClass(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.isControlled = this.props.value !== undefined;
      if (!this.isControlled) {
        // not controlled, use internal state
        this.setState({
          value: this.props.defaultValue !== undefined ? this.props.defaultValue : ''
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var value = event.target.value;

      if (!this.isControlled) {
        this.setState({ value: value });
      }

      var onChange = this.props.onChange;

      if (onChange) {
        onChange(event, value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          style = _props.style,
          type = _props.type,
          placeholder = _props.placeholder,
          success = _props.success,
          error = _props.error,
          defaultValue = _props.defaultValue,
          _props$tabIndex = _props.tabIndex,
          tabIndex = _props$tabIndex === undefined ? 0 : _props$tabIndex,
          isFullWidth = _props.isFullWidth,
          attributes = objectWithoutProperties(_props, ['onChange', 'style', 'type', 'placeholder', 'success', 'error', 'defaultValue', 'tabIndex', 'isFullWidth']);

      // const stateIcon = error // eslint-disable-line no-nested-ternary
      //   ? <ErrorIcon size="16" />
      //   : (success ? <SuccessIcon size="16" /> : null
      //   );

      var inputAttributes = _extends({}, attributes, tabIndex !== undefined ? { tabIndex: tabIndex } : {}, {
        value: this.isControlled ? this.props.value : this.state.value
      });

      return React__default.createElement(
        InputWrapperUI,
        { isFullWidth: isFullWidth },
        React__default.createElement(InputUI, _extends({}, inputAttributes, {

          type: type,
          style: style,
          placeholder: placeholder,
          onChange: this.handleChange,
          error: error,
          success: success
        })),
        React__default.createElement(StatusIcon, { error: error, success: success }),
        React__default.createElement(
          ErrorWrapperUI,
          null,
          error
        )
      );
    }
  }]);
  return TextField;
}(React.Component);

TextField.propTypes = {
  type: propTypes.oneOf(['text', 'email', 'password', 'search', 'file', 'number']),
  /**
   * onChange: callback function
   * will be passed a first arg 'event' (ReactEvent)
   * as well as a énd arg 'value' (String)
   */
  onChange: propTypes.func
};

TextField.defaultProps = {
  type: 'text',

  onChange: function onChange(event, value) {} // eslint-disable-line no-unused-vars
};

TextField.displayName = 'TextField';

var _templateObject$i = taggedTemplateLiteral(['\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: ', ';\n'], ['\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: ', ';\n']);

// TODO: would using flexbasis allow for auto transitionalbe layout ?
var Flex = styled__default.div(_templateObject$i, function (_ref) {
  var direction = _ref.direction;
  return direction || 'row';
});

var _templateObject$j = taggedTemplateLiteral(['\n  & > *:first-child {\n    flex-grow: 0;\n    flex-shrink: 1;\n    /* align-self: flex-start; ?? is that desirable ? -fd */\n  }\n  & > *:nth-child(2) {\n    flex-grow: 1;\n    flex-shrink: 1;\n    /* align-self: flex-end; ?? is that desirable ? -fd */\n  }\n'], ['\n  & > *:first-child {\n    flex-grow: 0;\n    flex-shrink: 1;\n    /* align-self: flex-start; ?? is that desirable ? -fd */\n  }\n  & > *:nth-child(2) {\n    flex-grow: 1;\n    flex-shrink: 1;\n    /* align-self: flex-end; ?? is that desirable ? -fd */\n  }\n']);

// TODO: would using flexbasis allow for auto transitionalbe layout ?
var FlexLeftCol = Flex.extend(_templateObject$j);

FlexLeftCol.displayName = 'FlexLeftCol';

var _templateObject$k = taggedTemplateLiteral(['\n  & > *:nth-child(1) {\n    flex-grow: 1;\n    flex-shrink: 1;\n    /* align-self: flex-start; ?? is that desirable ? -fd */\n  }\n  & > *:nth-child(2) {\n    flex-grow: 0;\n    flex-shrink: 1;\n    /* align-self: flex-end; ?? is that desirable ? -fd */\n  }\n'], ['\n  & > *:nth-child(1) {\n    flex-grow: 1;\n    flex-shrink: 1;\n    /* align-self: flex-start; ?? is that desirable ? -fd */\n  }\n  & > *:nth-child(2) {\n    flex-grow: 0;\n    flex-shrink: 1;\n    /* align-self: flex-end; ?? is that desirable ? -fd */\n  }\n']);

// TODO: would using flexbasis allow for auto transitionalbe layout ?
var FlexRightCol = Flex.extend(_templateObject$k);

FlexRightCol.displayName = 'FlexRightCol';

var _templateObject$l = taggedTemplateLiteral(['\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  &>* {\n    box-sizing: border-box;\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  &>*:nth-child(2) {\n    flex-grow: 99;\n    flex-shrink: 1;\n    overflow-y: auto;\n  }\n'], ['\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  &>* {\n    box-sizing: border-box;\n    flex-grow: 0;\n    flex-shrink: 0;\n  }\n  &>*:nth-child(2) {\n    flex-grow: 99;\n    flex-shrink: 1;\n    overflow-y: auto;\n  }\n']);

/**
 * This comp takes 3 children and make a simple
 * fully responsive, always at least full-height/width
 * vertical header-content-footer layout
 *
 * If you want to use it for the entire viewport,
 * it's up to you to make the space around available
 * e.g. remove body margin, make the html and body full height...
 *
 * same goes if you want it not to spen wider that a ertain width or height
 * you need to constrict/constrain the available space yourself
 */

// TODO: would using flexbasis allow for auto transitionalbe layout ?
var AppLayout = styled__default.div(_templateObject$l);

AppLayout.displayName = 'AppLayout';

var _templateObject$m = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  width: 100%;\n  border: none;\n  background: transparent;\n  border-radius: 0;\n  font: inherit;\n'], ['\n  box-sizing: border-box;\n  width: 100%;\n  border: none;\n  background: transparent;\n  border-radius: 0;\n  font: inherit;\n']),
    _templateObject2$5 = taggedTemplateLiteral(['\n  & { outline: none; }\n  z-index: 99;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 16px 0;\n  &:hover, &:focus {\n    transition: inherit;\n  }\n\n  @media (min-width: ', ') {\n    justify-content: start;\n    padding: ', ';\n    padding: 16px 24px;\n  }\n\n'], ['\n  & { outline: none; }\n  z-index: 99;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 16px 0;\n  &:hover, &:focus {\n    transition: inherit;\n  }\n\n  @media (min-width: ', ') {\n    justify-content: start;\n    padding: ', ';\n    padding: 16px 24px;\n  }\n\n']);

var defaults$1 = {
  menuWidth: '68px',
  bigMenuWidth: '216px',
  borderThickness: '4px',
  breakpoint: '960px'
};

var buttonReset = styled.css(_templateObject$m);

var GlobalMenuItemBase = styled.css(_templateObject2$5, function (_ref) {
  var breakpoint = _ref.breakpoint;
  return breakpoint || defaults$1.breakpoint;
}, '16px 0 16px ' + defaults$1.borderThickness);

var _templateObject$n = taggedTemplateLiteral(['\n  width: 100vh;\n  min-width: 100vh;\n  max-width: 100vh;\n  justify-content: flex-start;\n  align-items: stretch;\n'], ['\n  width: 100vh;\n  min-width: 100vh;\n  max-width: 100vh;\n  justify-content: flex-start;\n  align-items: stretch;\n']),
    _templateObject2$6 = taggedTemplateLiteral(['\n  min-height: 100vh;\n  height: 100vh;\n  max-height: 100vh;\n  width: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-flow: column nowrap;\n  &>* {}\n  &>*:first-child() { }\n  &>*:nth-child(2) {\n    flex-grow: 9;\n    overflow-y: auto; /* applies to same elem as line 49 */\n    overflow-scrolling: touch;\n    -webkit-overflow-scrolling: touch;\n  }\n  /* TODO: make the entire cluedin content mobile first! */\n  &>* { width: calc(100vw - ', ') }\n  @media (min-width: ', ') {\n    &>* { width: calc(100vw - ', ') }\n  }\n'], ['\n  min-height: 100vh;\n  height: 100vh;\n  max-height: 100vh;\n  width: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-flow: column nowrap;\n  &>* {}\n  &>*:first-child() { }\n  &>*:nth-child(2) {\n    flex-grow: 9;\n    overflow-y: auto; /* applies to same elem as line 49 */\n    overflow-scrolling: touch;\n    -webkit-overflow-scrolling: touch;\n  }\n  /* TODO: make the entire cluedin content mobile first! */\n  &>* { width: calc(100vw - ', ') }\n  @media (min-width: ', ') {\n    &>* { width: calc(100vw - ', ') }\n  }\n']),
    _templateObject3$3 = taggedTemplateLiteral(['\n  &>*:nth-child(1) {\n    flex-grow: 99;\n    flex-shrink: 0;\n  }\n  &>*:nth-child(2) {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n'], ['\n  &>*:nth-child(1) {\n    flex-grow: 99;\n    flex-shrink: 0;\n  }\n  &>*:nth-child(2) {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n']),
    _templateObject4$2 = taggedTemplateLiteral(['\n  min-height: 100%;\n  box-shadow: 0 53px 1px 2px rgba(72, 72, 72, 0.27), 0 53px 1px 2px rgba(32, 32, 32, 0.22);\n  z-index: 2;\n'], ['\n  min-height: 100%;\n  box-shadow: 0 53px 1px 2px rgba(72, 72, 72, 0.27), 0 53px 1px 2px rgba(32, 32, 32, 0.22);\n  z-index: 2;\n']),
    _templateObject5$1 = taggedTemplateLiteral(['\n  box-shadow: 0 0 1px 2px rgba(72, 72, 72, .27), 0 0 1px 2px rgba(32, 32, 32, 0.22);\n  z-index: 1;\n'], ['\n  box-shadow: 0 0 1px 2px rgba(72, 72, 72, .27), 0 0 1px 2px rgba(32, 32, 32, 0.22);\n  z-index: 1;\n']);

// TODO: would using flexbasis allow for auto transitionalbe layout ?


var breakpoint = defaults$1.breakpoint,
    menuWidth = defaults$1.menuWidth,
    bigMenuWidth = defaults$1.bigMenuWidth;
/**
 * the only reason we"'re forcing width
 * is because the content lower down the tree
 * is not worry of being accessible within a small are enough
 * the 'calc(100vw - ${(big)menuWidth})' should be remove eventually
*/

var FlexLeftColExtended = FlexLeftCol.extend(_templateObject$n);

var AppLayoutExtended = AppLayout.extend(_templateObject2$6, menuWidth, breakpoint, bigMenuWidth);

var InnerAppLayoutUI = AppLayout.extend(_templateObject3$3);

var FlexLeftColumnInnerWrapper = styled__default.div(_templateObject4$2);

var HeaderWrapper = styled__default.div(_templateObject5$1);

var _templateObject$o = taggedTemplateLiteral(['\n  display: flex;\n  min-height: 100%;\n  width: 100%;\n  /* overflow: hidden; */\n  flex-flow: ', ';\n'], ['\n  display: flex;\n  min-height: 100%;\n  width: 100%;\n  /* overflow: hidden; */\n  flex-flow: ', ';\n']),
    _templateObject2$7 = taggedTemplateLiteral(['\n  flex:1;\n  /* max-width: 100%;\n  width: 100%;\n  min-width: ', '; */\n  min-width: 100%;\n  min-width: ', ';\n  max-width: 100%;\n\n  width: auto;\n  flex-grow: 999999999;\n  flex-shrink: 0;\n  /* @media (min-width: 1024px) {\n    min-width: ', ';\n  } */\n'], ['\n  flex:1;\n  /* max-width: 100%;\n  width: 100%;\n  min-width: ', '; */\n  min-width: 100%;\n  min-width: ', ';\n  max-width: 100%;\n\n  width: auto;\n  flex-grow: 999999999;\n  flex-shrink: 0;\n  /* @media (min-width: 1024px) {\n    min-width: ', ';\n  } */\n']),
    _templateObject3$4 = taggedTemplateLiteral(['\n  min-width: 100%;\n  width: ', ';\n  max-width: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  ', '\n'], ['\n  min-width: 100%;\n  width: ', ';\n  max-width: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  ', '\n']);

var ContentWithExtraUI = styled__default.div(_templateObject$o, function (_ref) {
  var isAfter = _ref.isAfter;
  return isAfter ? 'row wrap' : 'row wrap';
});

var ContentUI = styled__default.div(_templateObject2$7, function (_ref2) {
  var contentMinWidth = _ref2.contentMinWidth;
  return contentMinWidth;
}, function (_ref3) {
  var contentMinWidth = _ref3.contentMinWidth;
  return contentMinWidth;
}, function (_ref4) {
  var contentMinWidth = _ref4.contentMinWidth;
  return contentMinWidth;
});

var ExtraUI = styled__default.div(_templateObject3$4, function (_ref5) {
  var contentMinWidth = _ref5.contentMinWidth;
  return contentMinWidth;
}, function (_ref6) {
  var extraMinWidth = _ref6.extraMinWidth;
  return extraMinWidth ? 'min-width: ' + extraMinWidth + ';' : '';
});

var ContentWithExtra = function ContentWithExtra(props) {
  var extraPosition = props.extraPosition,
      extra = props.extra,
      children = props.children,
      extraMinWidth = props.extraMinWidth,
      contentMinWidth = props.contentMinWidth,
      contentStyle = props.contentStyle,
      extraStyle = props.extraStyle,
      style = props.style;


  var contentItems = [React__default.createElement(
    ExtraUI,
    { key: 'extra', extraMinWidth: extraMinWidth, style: extraStyle },
    extra
  ), React__default.createElement(
    ContentUI,
    { key: 'content', contentMinWidth: contentMinWidth, style: contentStyle },
    children
  )];

  return React__default.createElement(
    ContentWithExtraUI,
    {
      isAfter: extraPosition === 'after',
      extraPosition: extraPosition,
      style: style
    },
    extraPosition === 'after' ? contentItems.reverse() : contentItems
  );
};

ContentWithExtra.displayName = 'ContentWithExtra';

ContentWithExtra.defaultProps = {
  extraPosition: 'before',
  extraMinWidth: '200px',
  contentStyle: {}
};

ContentWithExtra.propTypes = {
  extraPosition: propTypes.oneOf(['before', 'after'])
};

var _templateObject$p = taggedTemplateLiteral(['\n  display: flex;\n  min-height: 100%;\n  width: 100%;\n  overflow: visible;\n  flex-flow: ', ';\n'], ['\n  display: flex;\n  min-height: 100%;\n  width: 100%;\n  overflow: visible;\n  flex-flow: ', ';\n']),
    _templateObject2$8 = taggedTemplateLiteral(['\n  flex:1;\n  /* max-width: 100%;\n  width: 100%;\n  min-width: ', '; */\n  min-width: 100%;\n  min-width: ', ';\n  max-width: 100%;\n\n  width: auto;\n  flex-grow: 99;\n  flex-shrink: 0;\n  /* @media (min-width: 1024px) {\n    min-width: ', ';\n  } */\n'], ['\n  flex:1;\n  /* max-width: 100%;\n  width: 100%;\n  min-width: ', '; */\n  min-width: 100%;\n  min-width: ', ';\n  max-width: 100%;\n\n  width: auto;\n  flex-grow: 99;\n  flex-shrink: 0;\n  /* @media (min-width: 1024px) {\n    min-width: ', ';\n  } */\n']),
    _templateObject3$5 = taggedTemplateLiteral(['\n  min-width: 100%;\n  width: ', ';\n  max-width: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  ', ';\n'], ['\n  min-width: 100%;\n  width: ', ';\n  max-width: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  ', ';\n']),
    _templateObject4$3 = taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var ContentWithStickyExtraUI = styled__default.div(_templateObject$p, function (_ref) {
  var isAfter = _ref.isAfter;
  return isAfter ? 'row wrap' : 'row wrap';
});

var ContentUI$1 = styled__default.div(_templateObject2$8, function (_ref2) {
  var contentMinWidth = _ref2.contentMinWidth;
  return contentMinWidth;
}, function (_ref3) {
  var contentMinWidth = _ref3.contentMinWidth;
  return contentMinWidth;
}, function (_ref4) {
  var contentMinWidth = _ref4.contentMinWidth;
  return contentMinWidth;
});

var ExtraUI$1 = styled__default.div(_templateObject3$5, function (_ref5) {
  var contentMinWidth = _ref5.contentMinWidth;
  return contentMinWidth;
}, function (_ref6) {
  var extraMinWidth = _ref6.extraMinWidth;
  return extraMinWidth ? 'min-width: ' + extraMinWidth + ';' : '';
});
var ExtraStickyInnerWrapper = styled__default.div(_templateObject4$3, function (_ref7) {
  var top = _ref7.top;
  return 'position: sticky; top: ' + top + 'px';
});

var ContentWithStickyExtra = function (_Component) {
  inherits(ContentWithStickyExtra, _Component);

  function ContentWithStickyExtra(props) {
    classCallCheck(this, ContentWithStickyExtra);

    var _this = possibleConstructorReturn(this, (ContentWithStickyExtra.__proto__ || Object.getPrototypeOf(ContentWithStickyExtra)).call(this, props));

    _this.state = {
      extraHeight: null,
      scrollingElem: null,
      listenerAttached: false,
      totalOffsetBackupScroll: 0
    };

    _this.storeExtraRef = _this.storeExtraRef.bind(_this);
    _this.detachListeners = _this.detachListeners.bind(_this);
    _this.attachListeners = _this.attachListeners.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }

  createClass(ContentWithStickyExtra, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previousProps) {
      if (previousProps.searchFilter !== this.props.searchFilter) {
        this.attachListeners();
        this.handleResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachListeners();
    }
  }, {
    key: 'storeExtraRef',
    value: function storeExtraRef(node) {
      if (node) {
        if (!this.extraRef) {
          this.extraRef = node;

          var _node$getBoundingClie = node.getBoundingClientRect(),
              height = _node$getBoundingClie.height;

          this.setState({ extraHeight: height });
          this.attachListeners();
        } else {
          this.extraRef = null;
        }
      }
    }
  }, {
    key: 'attachListeners',
    value: function attachListeners() {
      var mainScrollingElementSelector = this.props.mainScrollingElementSelector;


      var scrollingElem = document && document.querySelector(mainScrollingElementSelector);

      var windowHeight = window.innerHeight;

      if (!this.state.listenerAttached) {
        if (scrollingElem) {
          scrollingElem.addEventListener('scroll', this.handleScroll);
          scrollingElem.addEventListener('resize', this.handleResize);
          this.setState({ scrollingElem: scrollingElem, listenerAttached: true, windowHeight: windowHeight });
          if (this.extraRef) {
            var _extraRef$getBounding = this.extraRef.getBoundingClientRect(),
                height = _extraRef$getBounding.height;

            this.setState({ extraHeight: height });
            console.log('extraHeight in attachListeners', height);
            console.log('this.extraRef in attachListeners', this.extraRef);
          }
        }
      } else {
        this.setState({ scrollingElem: scrollingElem, windowHeight: windowHeight });
        if (this.extraRef) {
          var _extraRef$getBounding2 = this.extraRef.getBoundingClientRect(),
              _height = _extraRef$getBounding2.height;

          this.setState({ extraHeight: _height });
          console.log('extraHeight in attachListeners', _height);
          console.log('this.extraRef in attachListeners', this.extraRef);
        }
      }
    }
  }, {
    key: 'detachListeners',
    value: function detachListeners() {
      if (this.state.scrollingElem) {
        if (this.state.attachListeners) {
          this.state.scrollingElem.removeEventListener('scroll', this.handleScroll);
          this.state.scrollingElem.removeEventListener('resize', this.handleResize);
        }
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var _extraRef$getBounding3 = this.extraRef.getBoundingClientRect(),
          height = _extraRef$getBounding3.height;

      console.log(height);

      var extraHeight = height;
      // e.persist();
      // console.log(e);
      // console.log(e.originalEvent);

      var _state = this.state,
          scrollingElem = _state.scrollingElem,
          windowHeight = _state.windowHeight,
          previousScrollTop = _state.previousScrollTop,
          totalOffsetBackupScrollState = _state.totalOffsetBackupScroll;


      if (scrollingElem) {
        var scrollTop = scrollingElem.scrollTop;


        var isScrollingBackUp = previousScrollTop >= scrollTop;

        console.log('isScrollingBackUp', isScrollingBackUp);

        var totalOffsetBackupScroll = scrollTop > 0 ? totalOffsetBackupScrollState || 0 : 0;

        var scrollingBackUpOffset = 0;
        if (isScrollingBackUp) {
          // scrolling (back) up
          scrollingBackUpOffset = previousScrollTop - scrollTop;
        } else {
          totalOffsetBackupScroll = 0;
        }

        totalOffsetBackupScroll += scrollingBackUpOffset;

        var headerHeight = 48;
        var paddingTotal = 16;

        var diff = isScrollingBackUp ? windowHeight - (extraHeight + headerHeight + paddingTotal) + totalOffsetBackupScroll : windowHeight - (extraHeight + headerHeight + paddingTotal) + totalOffsetBackupScroll;
        console.log('windowHeight', windowHeight);
        console.log('extraHeight', extraHeight);
        console.log('diff', diff);
        console.log('scrollTop', scrollTop);
        console.log('previousScrollTop', previousScrollTop);
        console.log('totalOffsetBackupScroll', totalOffsetBackupScroll);

        if (scrollTop > diff) {
          this.setState({
            sticky: true,
            top: diff <= paddingTotal ? diff : paddingTotal,
            previousScrollTop: scrollTop,
            isScrollingBackUp: isScrollingBackUp,
            totalOffsetBackupScroll: totalOffsetBackupScroll
          });
          /* eslint-disable */
        } /* else if (scrollTop <= diff) {
          this.setState({
            sticky: false,
            top: paddingTotal,
            previousScrollTop: scrollTop,
            isScrollingBackUp,
            totalOffsetBackupScroll,
          });
          } */else if (scrollTop === 0) {
            /* eslint-enable */
            this.setState({
              sticky: false,
              top: 0,
              previousScrollTop: scrollTop,
              isScrollingBackUp: isScrollingBackUp,
              totalOffsetBackupScroll: totalOffsetBackupScroll
            });
          }
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      if (this.extraRef) {
        var _extraRef$getBounding4 = this.extraRef.getBoundingClientRect(),
            height = _extraRef$getBounding4.height;

        this.setState({ extraHeight: height });
        // console.log('extraHeight in handleResize', height);
        // console.log('this.extraRef in handleResize', this.extraRef);
        this.setState({ windowHeight: window.innerHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          extraPosition = _props.extraPosition,
          extra = _props.extra,
          children = _props.children,
          extraMinWidth = _props.extraMinWidth,
          contentMinWidth = _props.contentMinWidth,
          contentStyle = _props.contentStyle,
          extraStyle = _props.extraStyle,
          style = _props.style;
      var _state2 = this.state,
          sticky = _state2.sticky,
          top = _state2.top;


      var contentItems = [React__default.createElement(
        ExtraUI$1,
        {
          key: 'extra',
          extraMinWidth: extraMinWidth,
          style: extraStyle
        },
        React__default.createElement(
          ExtraStickyInnerWrapper,
          {
            sticky: sticky,
            top: top,
            innerRef: this.storeExtraRef
          },
          extra
        )
      ), React__default.createElement(
        ContentUI$1,
        { key: 'content', contentMinWidth: contentMinWidth, style: contentStyle },
        children
      )];

      return React__default.createElement(
        ContentWithStickyExtraUI,
        {
          isAfter: extraPosition === 'after',
          extraPosition: extraPosition,
          style: style
        },
        extraPosition === 'after' ? contentItems.reverse() : contentItems
      );
    }
  }]);
  return ContentWithStickyExtra;
}(React.Component);

ContentWithStickyExtra.displayName = 'ContentWithStickyExtra';

ContentWithStickyExtra.defaultProps = {
  extraPosition: 'before',
  extraMinWidth: '200px',
  style: {},
  contentStyle: {},
  extraStyle: {},
  mainScrollingElementSelector: 'body'
};

ContentWithStickyExtra.propTypes = {
  extraPosition: propTypes.oneOf(['before', 'after'])
};

var _templateObject$q = taggedTemplateLiteral(['\n  display:flex;\n  flex-wrap: wrap;\n  @media (min-width: ', ') {\n    justify-content: space-between;\n  }\n'], ['\n  display:flex;\n  flex-wrap: wrap;\n  @media (min-width: ', ') {\n    justify-content: space-between;\n  }\n']),
    _templateObject2$9 = taggedTemplateLiteral(['\n  position: relative;\n  box-sizing:border-box;\n  width: ', '%;\n  margin-bottom: ', '\x1B};\n  min-height: ', ';\n\n  @media screen and (min-width: ', ') {\n    width: ', '%;\n    width: ', ';\n    min-height: ', ';\n  }\n  @media screen and (min-width: ', ') {\n    width: ', '%;\n    width: ', ';\n    min-height: ', ';\n  }\n'], ['\n  position: relative;\n  box-sizing:border-box;\n  width: ', '%;\n  margin-bottom: ', '\x1B};\n  min-height: ', ';\n\n  @media screen and (min-width: ', ') {\n    width: ', '%;\n    width: ', ';\n    min-height: ', ';\n  }\n  @media screen and (min-width: ', ') {\n    width: ', '%;\n    width: ', ';\n    min-height: ', ';\n  }\n']);

var SimpleFlexLayoutWrapper = styled__default.div(_templateObject$q, function (_ref) {
  var tabletBreakPoint = _ref.tabletBreakPoint;
  return tabletBreakPoint;
});

var SimpleFlexLayoutItem = styled__default.div(_templateObject2$9, function (_ref2) {
  var mobileWidth = _ref2.mobileWidth;
  return mobileWidth;
}, function (_ref3) {
  var gutterInt = _ref3.gutterInt;
  return gutterInt * 1.5 + 'px;';
}, function (_ref4) {
  var itemMinHeight = _ref4.itemMinHeight;
  return itemMinHeight;
}, function (_ref5) {
  var tabletBreakPoint = _ref5.tabletBreakPoint;
  return tabletBreakPoint;
}, function (_ref6) {
  var tabletColumnWidth = _ref6.tabletColumnWidth;
  return tabletColumnWidth;
}, function (_ref7) {
  var tabletColumnWidth = _ref7.tabletColumnWidth,
      gutterTabletInt = _ref7.gutterTabletInt;
  return 'calc(' + tabletColumnWidth + '% - ' + gutterTabletInt + 'px);';
}, function (_ref8) {
  var itemTabletMinHeight = _ref8.itemTabletMinHeight;
  return itemTabletMinHeight;
}, function (_ref9) {
  var desktopBreakPoint = _ref9.desktopBreakPoint;
  return desktopBreakPoint;
}, function (_ref10) {
  var desktopWidth = _ref10.desktopWidth;
  return desktopWidth;
}, function (_ref11) {
  var desktopWidth = _ref11.desktopWidth,
      gutterDesktopInt = _ref11.gutterDesktopInt;
  return 'calc(' + desktopWidth + '% - ' + gutterDesktopInt + 'px);';
}, function (_ref12) {
  var itemDesktopMinHeight = _ref12.itemDesktopMinHeight;
  return itemDesktopMinHeight;
});

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/**
 * Mobile first (intended to work only with minWidth)
 *
 * const myPropsMapper = props => { return (do stuff) };
 * const myPropsMapper = ({ shouldTooltipBeVisible }) => { return (do stuff) };
 *
 * const rules = [{
 *   minWidth: 700, // number
 *   propsMapper: myPropsMapper,
 * }]
 *
 * <PropsContainerQuery rules={rules} />
 */

var applyRules = function applyRules(props, rules, width, height) {
  if (!rules || rules.length === 0) {
    return props;
  }

  var result = _extends({}, props);

  var internalRules = rules
  // .filter(rule => 'minWidth' in rule)  // TODO improve
  /**
   * we only apply the mapper if the available width
   * is wider or equal than the 'minWidth' condition
   * if you order you rules correcty you get a nice
   * logical, ascending, flow of overwrite
   * !!!avoid cyclic dependent constraint!!
   */
  .filter(function (_ref) {
    var minWidth = _ref.minWidth;
    return !width || width >= minWidth;
  });

  internalRules.forEach(function (_ref2) {
    var mapper = _ref2.mapper;

    result = _extends({}, result, mapper(_extends({}, result, { containerWidth: width, containerHeight: height })));
  });

  return result;
};

var PropsMapperContainerQueries = function (_Component) {
  inherits(PropsMapperContainerQueries, _Component);

  function PropsMapperContainerQueries(props) {
    classCallCheck(this, PropsMapperContainerQueries);

    var _this = possibleConstructorReturn(this, (PropsMapperContainerQueries.__proto__ || Object.getPrototypeOf(PropsMapperContainerQueries)).call(this, props));

    _this.init = _this.init.bind(_this);
    _this.storeRef = _this.storeRef.bind(_this);

    _this.ref = null;
    _this.observer = null;

    _this.state = {
      mappedProps: null
    };
    return _this;
  }

  createClass(PropsMapperContainerQueries, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window && window.addEventListener) {
        window.addEventListener('resize', this.handleResize);
      }
      this.init();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (window && window.removeEventListener) {
        window.removeEventListener('resize', this.handleResize);
      }
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }, {
    key: 'storeRef',
    value: function storeRef(node) {
      this.ref = node;
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      var _props = this.props,
          rules = _props.rules,
          _props$children = _props.children,
          children = _props$children === undefined ? {} : _props$children;


      if (this.observer) ; else if (this.ref) {
        this.observer = new index(function (entries /* , observer */) {
          var last = entries[entries.length - 1];

          var _last$contentRect = last.contentRect,
              width = _last$contentRect.width,
              height = _last$contentRect.height;


          var mappedProps = applyRules(_extends({}, _this2.props, children.props || {}), rules, width, height);
          if (!isEqual_1(_this2.state.mappedProps, mappedProps)) {
            _this2.setState({ mappedProps: mappedProps });
          }
        });

        this.observer.observe(this.ref);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          inline = _props2.inline,
          style = _props2.style;
      var mappedProps = this.state.mappedProps;


      var type = inline ? 'span' : 'div';

      try {
        React__default.Children.only(children);
      } catch (err) {
        console.error('PropsMapperContainerQueries accept a single child, see this SO https://goo.gl/2sF2eb');
        return null;
      }

      var extendedChildren = React__default.cloneElement(children, _extends({}, mappedProps || {}, {
        rules: undefined
      }));

      return React__default.createElement(type, {
        ref: this.storeRef,
        style: _extends({}, style || {}, this.ref && mappedProps ? {} : { opacity: 0 })
      }, extendedChildren);
    }
  }]);
  return PropsMapperContainerQueries;
}(React.Component);

PropsMapperContainerQueries.propTypes = {};

var _templateObject$r = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  margin: 0 auto;\n  display: flex;  /* for IE11 only */\n  flex-flow: row wrap;  /* for IE11 only */\n  display: grid;\n  grid-gap: ', ';\n  grid-template-columns: ', ';\n  grid-template-rows: ', ';\n  font-size: inherit;\n  & > * {\n    box-sizing: border-box;\n    ', ';\n    ', ';\n  }\n\n  /**\n   * add gap for flax layout, (no margin collapse with flex)\n   * Target exclusively IE10 and above: */\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    & {\n      padding: ', ';\n    }\n    & > * {\n      margin: ', ';\n      ', ';\n      ', ';\n      ', ';\n      ', ';\n      ', ';\n    }\n  }\n'], ['\n  box-sizing: border-box;\n  margin: 0 auto;\n  display: flex;  /* for IE11 only */\n  flex-flow: row wrap;  /* for IE11 only */\n  display: grid;\n  grid-gap: ', ';\n  grid-template-columns: ', ';\n  grid-template-rows: ', ';\n  font-size: inherit;\n  & > * {\n    box-sizing: border-box;\n    ', ';\n    ', ';\n  }\n\n  /**\n   * add gap for flax layout, (no margin collapse with flex)\n   * Target exclusively IE10 and above: */\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    & {\n      padding: ', ';\n    }\n    & > * {\n      margin: ', ';\n      ', ';\n      ', ';\n      ', ';\n      ', ';\n      ', ';\n    }\n  }\n']);

var getValueWithUnit = function getValueWithUnit(prop) {
  return typeof prop === 'string' ? prop : prop + 'px';
};

/* eslint-disable indent */
var GridUI = styled__default.div(_templateObject$r, function (_ref) {
  var gap = _ref.gap;
  return '' + getValueWithUnit(gap);
}, function (_ref2) {
  var itemWidth = _ref2.itemWidth,
      columnAutoSizing = _ref2.columnAutoSizing;
  return 'repeat(auto-' + columnAutoSizing + ', minmax(' + getValueWithUnit(itemWidth) + ', 1fr));';
}, function (_ref3) {
  var itemHeight = _ref3.itemHeight,
      rowAutoSizing = _ref3.rowAutoSizing;
  return 'repeat(auto-' + rowAutoSizing + ', minmax(' + getValueWithUnit(itemHeight) + ', 1fr));';
}, function (_ref4) {
  var itemWidth = _ref4.itemWidth;
  return 'min-width: ' + getValueWithUnit(itemWidth);
}, function (_ref5) {
  var itemHeight = _ref5.itemHeight;
  return 'height: ' + getValueWithUnit(itemHeight) + ' !important';
}, function (_ref6) {
  var gap = _ref6.gap;
  return '' + getValueWithUnit(gap);
}, function (_ref7) {
  var gap = _ref7.gap;
  return gap ? getValueWithUnit(gap) : '0';
}, function (_ref8) {
  var itemWidth = _ref8.itemWidth;
  return 'max-width: ' + getValueWithUnit(itemWidth);
}, function (_ref9) {
  var itemWidth = _ref9.itemWidth;
  return 'width: ' + getValueWithUnit(itemWidth);
}, function (_ref10) {
  var itemHeight = _ref10.itemHeight;
  return 'max-height: ' + getValueWithUnit(itemHeight);
}, function (_ref11) {
  var itemHeight = _ref11.itemHeight;
  return 'height: ' + getValueWithUnit(itemHeight) + ' !important';
}, function (_ref12) {
  var itemHeight = _ref12.itemHeight;
  return 'min-height: ' + getValueWithUnit(itemHeight) + ' !important';
});
/* eslint-enable indent */

GridUI.defaultProps = {
  style: {},
  itemWidth: '100%',
  gap: 0,
  columnAutoSizing: 'fill',
  rowAutoSizing: 'fill'
};

GridUI.propTypes = {
  style: propTypes.object,
  itemWidth: propTypes.oneOfType([propTypes.number, propTypes.string]),
  gap: propTypes.oneOfType([propTypes.number, propTypes.string]),
  columnAutoSizing: propTypes.string,
  rowAutoSizing: propTypes.string
};

var _templateObject$s = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  margin: 0 auto;\n  display: flex;  /* for IE11 only */\n  flex-flow: row wrap;  /* for IE11 only */\n  display: grid;\n  grid-gap: ', ';\n  grid-template-columns: ', ';\n  font-size: inherit;\n  & > * {\n    box-sizing: border-box;\n    ', ';\n    ', ';\n  }\n\n  /**\n   * add gap for flax layout, (no margin collapse with flex)\n   * Target exclusively IE10 and above: */\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    & {\n      padding: ', ';\n      margin-left: auto !important;\n      margin-right: auto !important;\n      width: ', ';\n      /* width: ', '; */\n    }\n    & > * {\n      margin: ', ';\n      ', ';\n      ', ';    }\n  }\n'], ['\n  box-sizing: border-box;\n  margin: 0 auto;\n  display: flex;  /* for IE11 only */\n  flex-flow: row wrap;  /* for IE11 only */\n  display: grid;\n  grid-gap: ', ';\n  grid-template-columns: ', ';\n  font-size: inherit;\n  & > * {\n    box-sizing: border-box;\n    ', ';\n    ', ';\n  }\n\n  /**\n   * add gap for flax layout, (no margin collapse with flex)\n   * Target exclusively IE10 and above: */\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    & {\n      padding: ', ';\n      margin-left: auto !important;\n      margin-right: auto !important;\n      width: ', ';\n      /* width: ', '; */\n    }\n    & > * {\n      margin: ', ';\n      ', ';\n      ', ';    }\n  }\n']);

/* eslint-disable indent */
var ExtendedGridUI = GridUI.extend(_templateObject$s, function (_ref) {
  var gap = _ref.gap;
  return gap + 'px';
}, function (_ref2) {
  var itemWidth = _ref2.itemWidth;
  return 'repeat(auto-fill, minmax(' + itemWidth + 'px, 1fr));';
}, function (_ref3) {
  var itemWidth = _ref3.itemWidth;
  return 'min-width: ' + itemWidth + 'px';
}, function (_ref4) {
  var itemHeight = _ref4.itemHeight;
  return 'height: ' + itemHeight + 'px';
}, function (_ref5) {
  var gap = _ref5.gap;
  return gap / 2 + 'px';
}, function (_ref6) {
  var columns = _ref6.columns,
      itemWidth = _ref6.itemWidth,
      gap = _ref6.gap;
  return columns * (itemWidth + gap) + gap + 'px;';
}, function (_ref7) {
  var columns = _ref7.columns,
      itemWidth = _ref7.itemWidth,
      gap = _ref7.gap;
  return 'calc(' + columns + ' * calc(' + itemWidth + 'px + ' + 2 * gap + 'px))';
}, function (_ref8) {
  var gap = _ref8.gap;
  return gap / 2 + 'px';
}, function (_ref9) {
  var itemWidth = _ref9.itemWidth;
  return 'max-width: ' + itemWidth + 'px';
}, function (_ref10) {
  var itemWidth = _ref10.itemWidth;
  return 'width: ' + itemWidth + 'px';
});
/* eslint-enable indent */

var rules = [{
  minWidth: 0,
  mapper: function mapper(_ref11) {
    var itemWidth = _ref11.itemWidth,
        containerWidth = _ref11.containerWidth,
        gap = _ref11.gap;

    var columns = Math.floor(Math.floor(containerWidth) / (itemWidth + gap));

    return {
      columns: columns
    };
  }
}];

var Grid = function Grid(_ref12) {
  var children = _ref12.children,
      restOfProps = objectWithoutProperties(_ref12, ['children']);
  return React__default.createElement(
    PropsMapperContainerQueries,
    _extends({}, restOfProps, {
      rules: rules
    }),
    React__default.createElement(
      ExtendedGridUI,
      null,
      children
    )
  );
};

Grid.propTypes = {
  itemWidth: propTypes.number,
  itemHeight: propTypes.number,
  gap: propTypes.number,
  style: propTypes.object
};

Grid.defaultProps = {
  itemWidth: 96,
  itemHeight: undefined,
  gap: 16,
  style: {}
};

Grid.displayName = 'Grid';

var Panel = function Panel(_ref) {
  var children = _ref.children,
      style = _ref.style,
      onClose = _ref.onClose,
      rounded = _ref.rounded;
  return React__default.createElement(
    AppLayout,
    { style: style },

    /* Pass Panel's onClose to its children */
    React__default.Children.map(children, function (child) {
      return child && React__default.cloneElement(child, _extends({
        onClose: onClose
      }, child.type && child.type.displayName && child.type.displayName.indexOf('Panel') === 0 ? { rounded: rounded } : {}, child.props || {}) // allow consumer final overwrite privilege for onClose
      );
    })
  );
};

Panel.displayName = 'Panel';

Panel.defaultProps = {
  rounded: false
};

var headerHeight = '50px';
var footerHeight = '50px';

var _templateObject$t = taggedTemplateLiteral(['\n  flex-flow: row wrap;\n  align-items: center;\n  width: 100%;\n'], ['\n  flex-flow: row wrap;\n  align-items: center;\n  width: 100%;\n']),
    _templateObject2$a = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  background-color: ', ';\n  transition: ', ';\n  * { transition: ', '; }\n  padding: 8px 16px;\n  color: ', ';\n  display: flex;\n  align-items: center;\n  min-height: 50px;\n  min-height: ', ';\n  border-radius: ', ';\n'], ['\n  box-sizing: border-box;\n  background-color: ', ';\n  transition: ', ';\n  * { transition: ', '; }\n  padding: 8px 16px;\n  color: ', ';\n  display: flex;\n  align-items: center;\n  min-height: 50px;\n  min-height: ', ';\n  border-radius: ', ';\n']),
    _templateObject3$6 = taggedTemplateLiteral(['\n  font-weight: bold;\n'], ['\n  font-weight: bold;\n']),
    _templateObject4$4 = taggedTemplateLiteral(['\n  margin-left: auto;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  & * {\n    fill: currentColor;\n  }\n  opacity: .7;\n  &:hover {\n    opacity: 1;\n    transform: scale(1.15);\n    transform-origin: center;\n  }\n'], ['\n  margin-left: auto;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  & * {\n    fill: currentColor;\n  }\n  opacity: .7;\n  &:hover {\n    opacity: 1;\n    transform: scale(1.15);\n    transform-origin: center;\n  }\n']);

var HorizontalAppLayout = AppLayout.extend(_templateObject$t);

var PanelHeaderUI = styled__default.div(_templateObject2$a, function (_ref) {
  var palette = _ref.theme.palette;
  return palette.accent.main;
}, function (_ref2) {
  var transition = _ref2.theme.transition;
  return transition.defaultAll;
}, function (_ref3) {
  var transition = _ref3.theme.transition;
  return transition.defaultAll;
}, function (_ref4) {
  var palette = _ref4.theme.palette;
  return palette.pureWhite;
}, headerHeight, function (_ref5) {
  var round = _ref5.round,
      radius = _ref5.theme.radius;
  return round && radius + ' ' + radius + ' 0 0';
});

var PanelHeaderTitleWrapper = styled__default.div(_templateObject3$6);

var CloseWrapperUI = styled__default.div(_templateObject4$4);

var PanelHeader = function PanelHeader(props) {
  var children = props.children,
      title = props.title,
      hasClose = props.hasClose,
      onClose = props.onClose,
      style = props.style,
      rounded = props.rounded;


  var close = hasClose || onClose ? React__default.createElement(
    CloseWrapperUI,
    { tabindex: '0', onClick: onClose },
    React__default.createElement(Close, { size: '14px' })
  ) : null;

  return React__default.createElement(
    PanelHeaderUI,
    { style: style, round: rounded || undefined },
    React__default.createElement(
      HorizontalAppLayout,
      null,
      React__default.createElement(
        PanelHeaderTitleWrapper,
        null,
        title
      ),
      React__default.createElement(
        'div',
        null,
        children
      ),
      React__default.createElement(
        'div',
        null,
        close
      )
    )
  );
};

PanelHeader.displayName = 'PanelHeader';

PanelHeader.defaultProps = {
  title: null
};

var PanelContent = function PanelContent(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return React__default.createElement(
    'div',
    {
      style: _extends({
        position: 'relative'
      }, style)
    },
    children
  );
};

PanelContent.displayName = 'PanelContent';

PanelContent.defaultProps = {
  children: null,
  style: {}
};

var keycode = createCommonjsModule(function (module, exports) {
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput);

  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
};

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i;

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {}; // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i;

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias];
}
});
var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;

var PropTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;



var _propTypes2 = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.classNamesShape;
var PropTypes_2 = PropTypes.timeoutsShape;
var PropTypes_3 = PropTypes.transitionTimeout;

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;



var PropTypes$$1 = _interopRequireWildcard(propTypes);



var _react2 = _interopRequireDefault(React__default);



var _reactDom2 = _interopRequireDefault(ReactDOM__default);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm A fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `ENTERING`
 *  - `ENTERED`
 *  - `EXITING`
 *  - `EXITED`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state= { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) when finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$$1.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$$1.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$$1.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$$1.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$$1.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$$1.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEventListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$$1.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$$1.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$$1.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$$1.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$$1.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$$1.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;
});

var Transition = unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

var formatMs = function formatMs(milliseconds) {
  return Math.round(milliseconds) + 'ms';
};

/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */
var transitions = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$duration = options.duration,
        durationOption = _options$duration === undefined ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === undefined ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === undefined ? 0 : _options$delay;

    /* warning(
      isString(props) || Array.isArray(props),
      'Material-UI: argument "props" must be a string or Array',
    );
    warning(
      isNumber(durationOption),
      `Material-UI: argument "duration" must be a number but found ${durationOption}`,
    );
    warning(isString(easingOption), 'Material-UI: argument "easing" must be a string');
    warning(isNumber(delay), 'Material-UI: argument "delay" must be a string');
    warning(
      Object.keys(other).length === 0,
      `Material-UI: unrecognized argument(s) [${Object.keys(other).join(',')}]`,
    ); */

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return animatedProp + ' ' + formatMs(durationOption) + ' ' + easingOption + ' ' + formatMs(delay);
    }).join(',');
  }
};

var reflow = function reflow(node) {
  return node.scrollTop;
};

/**
 * The Fade transition is used by the Modal component.
 * It's using [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = function (_React$Component) {
  inherits(Fade, _React$Component);

  function Fade() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Fade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (node) {
      node.style.opacity = '0'; // eslint-disable-line no-param-reassign
      reflow(node);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var timeout = _this.props.timeout;

      node.style.transition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
        duration: typeof timeout === 'number' ? timeout : timeout.enter
      });
      node.style.webkitTransition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
        duration: typeof timeout === 'number' ? timeout : timeout.enter
      });
      node.style.opacity = '1'; // eslint-disable-line no-param-reassign

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleExit = function (node) {
      var timeout = _this.props.timeout;

      node.style.transition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
        duration: typeof timeout === 'number' ? timeout : timeout.exit
      });
      node.style.webkitTransition = transitions.create('opacity', { // eslint-disable-line no-param-reassign
        duration: typeof timeout === 'number' ? timeout : timeout.exit
      });
      node.style.opacity = '0'; // eslint-disable-line no-param-reassign

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Fade, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          appear = _props.appear,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          styleProp = _props.style,
          other = objectWithoutProperties(_props, ['appear', 'children', 'onEnter', 'onEntering', 'onExit', 'style']);


      var style = _extends({}, styleProp);

      // For server side rendering.
      /* if (!this.props.in || appear) {
        style.opacity = '0';
      } */

      return React__default.createElement(
        Transition,
        _extends({
          appear: appear,
          style: style,
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit
        }, other),
        children
      );
    }
  }]);
  return Fade;
}(React__default.Component);

Fade.propTypes = {
  appear: propTypes.bool,
  children: propTypes.element,
  onEnter: propTypes.func,
  onEntering: propTypes.func,
  onExit: propTypes.func,
  style: propTypes.object,
  timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({ enter: propTypes.number, exit: propTypes.number })])
};

Fade.defaultProps = {
  appear: true,
  timeout: {
    enter: 225,
    exit: 195
  },
  children: null,
  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onExit: function onExit() {},
  style: {}
};

var BackdropStyle = {
  root: {
    zIndex: 12,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    // we should keep those outline and have a better solution that remove -df
    // those are super usefull when keyboard navigating and are -df
    // seriously not that bad visually if well done I thinkg -df
    WebkitTapHightLightColor: 'rgba(0,0,0,0)',
    backgroundColor: 'rgba(0,0,0, 0.25)',
    // transition: 'translate(0px, 0px)',
    willChange: 'opacity',
    opacity: '0.25'
  },
  invisible: {
    opacity: 0
  }
};

var Backdrop = function Backdrop(props) {
  var invisible = props.invisible,
      onClick = props.onClick;


  var mergedStyle = invisible ? Object.assign({}, BackdropStyle.root, BackdropStyle.invisible) : BackdropStyle.root;

  return React__default.createElement('div', { style: mergedStyle, onClick: onClick, 'aria-hidden': 'true' });
};

Backdrop.dispalyName = 'Backdrop';

Backdrop.propTypes = {
  invisible: propTypes.bool
};

Backdrop.defaultProps = {
  invisible: false
};

var Portal = function (_React$Component) {
  inherits(Portal, _React$Component);

  function Portal() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.layer = null, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unrenderLayer();
    }
  }, {
    key: 'getLayer',
    value: function getLayer() {
      if (!this.layer) {
        this.layer = document.createElement('div');
        this.layer.setAttribute('data-uxi-portal', 'true');
        if (document.body && this.layer) {
          document.body.appendChild(this.layer);
        }
      }

      return this.layer;
    }
  }, {
    key: 'unrenderLayer',
    value: function unrenderLayer() {
      if (!this.layer) {
        return;
      }

      if (document.body) {
        document.body.removeChild(this.layer);
      }
      this.layer = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          open = _props.open;

      // Can't be rendered server-side.

      if (open) {
        var layer = this.getLayer();
        return ReactDOM__default.createPortal(children, layer);
      }

      return this.unrenderLayer();
    }
  }]);
  return Portal;
}(React__default.Component);

Portal.propTypes = {
  children: propTypes.node.isRequired,
  open: propTypes.bool
};

Portal.defaultProps = {
  open: false
};

var styles = {
  root: {},
  hidden: {
    visibility: 'hidden'
  }
};

var Modal = function (_Component) {
  inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleDocumentKeyUp = function (event) {
      if (keycode(event) !== 'esc') {
        return;
      }

      var _this$props = _this.props,
          onEscapeKeyUp = _this$props.onEscapeKeyUp,
          onClose = _this$props.onClose,
          ignoreEscapeKeyUp = _this$props.ignoreEscapeKeyUp;


      if (onEscapeKeyUp) {
        onEscapeKeyUp(event);
      }

      if (onClose && !ignoreEscapeKeyUp) {
        onClose(event);
      }
    }, _this.attachGlobalEventHandlers = function () {
      window.addEventListener('keyup', _this.handleDocumentKeyUp);
    }, _this.detachGlobalEventHandlers = function () {
      window.addEventListener('keyup', _this.handleDocumentKeyUp);
    }, _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      var _this$props2 = _this.props,
          onBackdropClick = _this$props2.onBackdropClick,
          onClose = _this$props2.onClose,
          ignoreBackdropClick = _this$props2.ignoreBackdropClick;


      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (onClose && !ignoreBackdropClick) {
        onClose(event);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var show = this.props.show;


      if (show) {
        this.attachGlobalEventHandlers();
      } else {
        this.detachGlobalEventHandlers();
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(_ref2) {
      var show = _ref2.show;

      if (show !== this.props.show) {
        if (show) {
          this.attachGlobalEventHandlers();
        } else {
          this.detachGlobalEventHandlers();
        }
      }
    }
  }, {
    key: 'renderBackdrop',
    value: function renderBackdrop() {
      var _props = this.props,
          BackdropComponent = _props.BackdropComponent,
          BackdropInvisible = _props.BackdropInvisible,
          BackdropTransitionDuration = _props.BackdropTransitionDuration,
          show = _props.show;

      return React__default.createElement(
        Fade,
        { appear: true, 'in': show, timeout: BackdropTransitionDuration },
        React__default.createElement(BackdropComponent, {
          invisible: BackdropInvisible,
          onClick: this.handleBackdropClick
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          disableBackdrop = _props2.disableBackdrop,
          show = _props2.show;


      if (!show) {
        return null;
      }

      return React__default.createElement(
        Portal,
        { open: true },
        React__default.createElement(
          'div',
          {
            style: styles.root,
            ref: function ref(node) {
              _this2.modal = node;
            }
          },
          React__default.createElement(
            'div',
            { className: 'modalContent' },
            children
          ),
          !disableBackdrop && show && this.renderBackdrop()
        )
      );
    }
  }]);
  return Modal;
}(React.Component);

Modal.propTypes = {
  BackdropComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),
  BackdropInvisible: propTypes.bool,
  BackdropTransitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({ enter: propTypes.number, exit: propTypes.number })]),
  disableBackdrop: propTypes.bool,
  ignoreBackdropClick: propTypes.bool,
  ignoreEscapeKeyUp: propTypes.bool,
  onBackdropClick: propTypes.func,
  onClose: propTypes.func,
  onEscapeKeyUp: propTypes.func,
  show: propTypes.bool.isRequired
};

Modal.defaultProps = {
  show: false,
  BackdropComponent: Backdrop,
  BackdropInvisible: false,
  BackdropTransitionDuration: 300,
  disableBackdrop: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  onBackdropClick: function onBackdropClick() {},
  onClose: function onClose() {},
  onEscapeKeyUp: function onEscapeKeyUp() {}
};

var _templateObject$u = taggedTemplateLiteral(['\n  z-index: 999;\n  position: fixed;\n  top: 10vh;\n  width: calc(100% - 20vw);\n  max-width: 700px;\n  max-height: 80vh;\n  margin: 0 auto;\n  bottom: auto;\n  left: 10vw;\n  right: 10vw;\n  backface-visibility: hidden;\n  background: #fff;\n  border-radius: ', ';\n\n  /* overflow: hidden; */\n  box-shadow:\n    rgba(0, 0, 0, 0.5) 0px 1px 6px,\n    rgba(0, 0, 0, 0.2) 0px 4px 16px;\n  box-shadow:\n    rgba(0, 0, 0, 0.3) 0px 2px 21px 1px,\n    rgba(0,0,0,0.2) 0px 1px 22px 4px;\n\n  ', '\n  ', '\n'], ['\n  z-index: 999;\n  position: fixed;\n  top: 10vh;\n  width: calc(100% - 20vw);\n  max-width: 700px;\n  max-height: 80vh;\n  margin: 0 auto;\n  bottom: auto;\n  left: 10vw;\n  right: 10vw;\n  backface-visibility: hidden;\n  background: #fff;\n  border-radius: ', ';\n\n  /* overflow: hidden; */\n  box-shadow:\n    rgba(0, 0, 0, 0.5) 0px 1px 6px,\n    rgba(0, 0, 0, 0.2) 0px 4px 16px;\n  box-shadow:\n    rgba(0, 0, 0, 0.3) 0px 2px 21px 1px,\n    rgba(0,0,0,0.2) 0px 1px 22px 4px;\n\n  ', '\n  ', '\n']);

var DialogUI = styled__default.div(_templateObject$u, function (_ref) {
  var radius = _ref.theme.radius;
  return radius;
}, function (_ref2) {
  var isFullWidth = _ref2.isFullWidth;
  return isFullWidth && '\n    max-width: 80vw;\n  ';
}, function (_ref3) {
  var isFullScreen = _ref3.isFullScreen;
  return isFullScreen && '\n    max-width: 92vw;\n    width: calc(100% - 8vw);\n    max-height: 92vh;\n    height: 100%;\n    left: 4vw;\n    right: 4vw;\n    top: 4vh;\n  ';
});

/**
 *
 * If we have a PanelContent in the Dialog, apply dialog style to penl content:
 * maxHeight: 'calc(80vh - calc( 2 * 50px ))'
 * This assume panelHeader and PanelFooter are present
 */
var Dialog = function Dialog(_ref4) {
  var show = _ref4.show,
      modal = _ref4.modal,
      onClose = _ref4.onClose,
      children = _ref4.children,
      style = _ref4.style,
      isFullWidth = _ref4.isFullWidth,
      isFullScreen = _ref4.isFullScreen;

  var extendedChildren = React__default.Children.map(children, function (c, index) {
    var childExtendedChildren = React__default.Children.map(c.props.children, function (childChildren) {
      if (childChildren && childChildren.type && childChildren.type.displayName === 'PanelContent') {
        var baseHeight = '80vh';
        if (isFullScreen) {
          baseHeight = '92vh';
        }

        return React__default.cloneElement(childChildren, _extends({}, childChildren.props || {}, {
          style: _extends({
            maxHeight: 'calc(' + baseHeight + ' - (' + headerHeight + ' + ' + footerHeight + '))' }, childChildren.props.style)
        }));
      }
      return childChildren;
    });

    return React__default.cloneElement(c, _extends({
      key: 'dialogContent-' + index,
      onClose: onClose,
      style: _extends({}, c && c.props && c.props.style ? c.props.style : {})
    }, c.props || {}, c.type.displayName === 'Panel' ? { rounded: true } : {}, {
      children: childExtendedChildren
    }));
  });

  return React__default.createElement(
    Modal,
    {
      show: show,
      onClose: modal ? null : onClose
    },
    React__default.createElement(
      DialogUI,
      { style: style, isFullScreen: isFullScreen, isFullWidth: isFullWidth },
      extendedChildren
    )
  );
};

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  isFullScreen: false,
  isFullWidth: false
};

var ComponentWithPadding = function (_Component) {
  inherits(ComponentWithPadding, _Component);

  function ComponentWithPadding() {
    classCallCheck(this, ComponentWithPadding);
    return possibleConstructorReturn(this, (ComponentWithPadding.__proto__ || Object.getPrototypeOf(ComponentWithPadding)).apply(this, arguments));
  }

  createClass(ComponentWithPadding, [{
    key: 'getMargin',
    value: function getMargin() {
      var margin = this.props.margin;


      if (!margin) {
        return {};
      }

      if (margin.toLowerCase() === 'xs') {
        return {
          margin: '5px'
        };
      }

      if (margin.toLowerCase() === 's') {
        return {
          margin: '15px'
        };
      }

      if (margin.toLowerCase() === 'm') {
        return {
          margin: '30px'
        };
      }

      if (margin.toLowerCase() === 'l') {
        return {
          margin: '60px'
        };
      }

      return {};
    }
  }, {
    key: 'getPadding',
    value: function getPadding() {
      var padding = this.props.padding;


      if (!padding) {
        return {};
      }

      if (padding.toLowerCase() === 'xs') {
        return {
          padding: '5px'
        };
      }

      if (padding.toLowerCase() === 's') {
        return {
          padding: '15px'
        };
      }

      if (padding.toLowerCase() === 'm') {
        return {
          padding: '30px'
        };
      }

      if (padding.toLowerCase() === 'l') {
        return {
          padding: '60px'
        };
      }

      return {};
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var stylesFromComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var style = this.props.style;


      return Object.assign({}, style || {}, this.getPadding(), this.getMargin(), stylesFromComponent);
    }
  }]);
  return ComponentWithPadding;
}(React.Component);

ComponentWithPadding.propTypes = {
  margin: propTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']) /* .isRequired */
  , padding: propTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']) /* .isRequired */
  , style: propTypes.object
};
ComponentWithPadding.defaultProps = {
  margin: undefined,
  padding: undefined,
  style: {}
};

var DivPadding = function (_ComponentWithPadding) {
  inherits(DivPadding, _ComponentWithPadding);

  function DivPadding() {
    classCallCheck(this, DivPadding);
    return possibleConstructorReturn(this, (DivPadding.__proto__ || Object.getPrototypeOf(DivPadding)).apply(this, arguments));
  }

  createClass(DivPadding, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      return React__default.createElement(
        'div',
        { className: className, style: this.getStyle() },
        children
      );
    }
  }]);
  return DivPadding;
}(ComponentWithPadding);

var ConfirmDialog = function ConfirmDialog(_ref) {
  var show = _ref.show,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? 'Are you sure ?' : _ref$text,
      _ref$confirmLabel = _ref.confirmLabel,
      confirmLabel = _ref$confirmLabel === undefined ? 'Confirm' : _ref$confirmLabel,
      _ref$cancelLabel = _ref.cancelLabel,
      cancelLabel = _ref$cancelLabel === undefined ? 'Cancel' : _ref$cancelLabel;
  return React__default.createElement(
    Dialog,
    { show: show, modal: true, style: { maxWidth: '400px' } },
    React__default.createElement(
      DivPadding,
      { padding: 'M', style: { textAlign: 'center' } },
      React__default.createElement(
        'div',
        null,
        text
      ),
      React__default.createElement(
        'div',
        { style: { marginTop: '30px' } },
        React__default.createElement(
          Button,
          { style: { marginRight: '5px' }, onClick: onConfirm, type: 'primary' },
          confirmLabel
        ),
        React__default.createElement(
          Button,
          { style: { marginLeft: '5px' }, onClick: onCancel },
          cancelLabel
        )
      )
    )
  );
};

var WithConfirmDialogHOC = function WithConfirmDialogHOC(Comp) {
  var WithConfirmDialog = function (_Component) {
    inherits(WithConfirmDialog, _Component);

    function WithConfirmDialog(props) {
      classCallCheck(this, WithConfirmDialog);

      var _this = possibleConstructorReturn(this, (WithConfirmDialog.__proto__ || Object.getPrototypeOf(WithConfirmDialog)).call(this, props));

      _this.state = { showDialog: false };

      _this.handleConfirm = _this.handleConfirm.bind(_this);
      _this.handleCancel = _this.handleCancel.bind(_this);
      return _this;
    }

    createClass(WithConfirmDialog, [{
      key: 'handleConfirm',
      value: function handleConfirm() {
        var onClick = this.props.onClick;

        this.setState({ showDialog: false });
        if (onClick) {
          onClick();
        }
      }
    }, {
      key: 'handleCancel',
      value: function handleCancel() {
        var onCancel = this.props.onCancel;

        this.setState({ showDialog: false });
        if (onCancel) {
          onCancel();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            confirmText = _props.confirmText,
            confirmLabel = _props.confirmLabel,
            cancelLabel = _props.cancelLabel;
        var showDialog = this.state.showDialog;


        return [React__default.createElement(Comp, _extends({}, this.props, {
          onClick: function onClick() {
            console.log('click');
            _this2.setState({ showDialog: true });
          },
          key: 'Component'
        })), React__default.createElement(ConfirmDialog, {
          key: 'confirm-dialog',
          show: showDialog,
          onConfirm: this.handleConfirm,
          onCancel: this.handleCancel,
          text: confirmText,
          confirmLabel: confirmLabel,
          cancelLabel: cancelLabel
        })];
      }
    }]);
    return WithConfirmDialog;
  }(React.Component);

  return WithConfirmDialog;
};

var _templateObject$v = taggedTemplateLiteral(['\n  /* STATIC BASE STYLES: */\n  ', ';\n\n  /* ICON POSITION: */\n  flex-direction: ', ';\n\n  /* FULL WIDTH STYLES: */\n  ', ';\n\n  /* TYPE STYLES: */\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n  svg { fill: ', ';}\n  &:hover {\n    border-color: ', ';\n    color: ', ';\n    background-color: ', ';\n    svg { fill: ', ';}\n  }\n\n  /* DISABLED STYLES: (overrides types styles)*/\n  cursor: ', ';\n  ', '\n  ', ';\n  &:hover {\n    ', ';\n    ', ';\n    svg {\n      ', ';\n    }\n  }\n  svg {\n    ', ';\n  }\n\n}\n'], ['\n  /* STATIC BASE STYLES: */\n  ', ';\n\n  /* ICON POSITION: */\n  flex-direction: ', ';\n\n  /* FULL WIDTH STYLES: */\n  ', ';\n\n  /* TYPE STYLES: */\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n  svg { fill: ', ';}\n  &:hover {\n    border-color: ', ';\n    color: ', ';\n    background-color: ', ';\n    svg { fill: ', ';}\n  }\n\n  /* DISABLED STYLES: (overrides types styles)*/\n  cursor: ', ';\n  ', '\n  ', ';\n  &:hover {\n    ', ';\n    ', ';\n    svg {\n      ', ';\n    }\n  }\n  svg {\n    ', ';\n  }\n\n}\n']),
    _templateObject2$b = taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: ', ';\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: ', ';\n']),
    _templateObject3$7 = taggedTemplateLiteral(['\n  margin: 0 4px;\n'], ['\n  margin: 0 4px;\n']),
    _templateObject4$5 = taggedTemplateLiteral(['', ';'], ['', ';']);

var getTypeColor$1 = function getTypeColor(_ref, type) {
  var palette = _ref.palette;

  if (palette.semantic[type]) {
    return palette.semantic[type];
  }
  if (type === 'primary') {
    return palette.accent.main;
  }
  if (type === 'secondary') {
    return palette.primary.main;
  }
  return '#fff';
};

/* eslint-disable indent */
var ButtonBaseMixin$1 = styled.css(_templateObject$v, ButtonBaseStyles, function (_ref2) {
  var iconPosition = _ref2.iconPosition;

  if (iconPosition && iconPosition === 'after') {
    return 'row-reverse';
  }
  return 'row';
}, function (_ref3) {
  var isFullWidth = _ref3.isFullWidth;
  return isFullWidth ? 'width: 100%' : '';
}, function (_ref4) {
  var theme = _ref4.theme,
      type = _ref4.type;
  return getTypeColor$1(theme, type);
}, function (_ref5) {
  var theme = _ref5.theme,
      type = _ref5.type;
  return type ? getTypeColor$1(theme, type) : 'inherit';
}, function (_ref6) {
  var type = _ref6.type;
  return type ? '#fff' : 'inherit';
}, function (_ref7) {
  var type = _ref7.type;
  return type ? '#fff' : 'inherit';
}, function (_ref8) {
  var theme = _ref8.theme,
      type = _ref8.type;
  return type ? getTypeColor$1(theme, type) : 'inherit';
}, function (_ref9) {
  var theme = _ref9.theme,
      type = _ref9.type;
  return type ? getTypeColor$1(theme, type) : 'inherit';
}, function (_ref10) {
  var type = _ref10.type,
      theme = _ref10.theme;
  return type ? '#fff' : theme.palette.lightGrey;
}, function (_ref11) {
  var theme = _ref11.theme,
      type = _ref11.type;
  return type ? getTypeColor$1(theme, type) : 'inherit';
}, function (_ref12) {
  var disabled = _ref12.disabled;
  return disabled ? 'normal' : 'pointer';
}, function (_ref13) {
  var disabled = _ref13.disabled,
      palette = _ref13.theme.palette;
  return disabled ? 'background-color: ' + palette.lightGrey + '; color: ' + palette.grey + ';' : '';
}, function (_ref14) {
  var disabled = _ref14.disabled;
  return disabled ? 'border-color: transparent;' : '';
}, function (_ref15) {
  var disabled = _ref15.disabled,
      palette = _ref15.theme.palette;
  return disabled ? 'background-color: ' + palette.lightGrey + '; color: ' + palette.grey : '';
}, function (_ref16) {
  var disabled = _ref16.disabled;
  return disabled ? 'border-color: transparent;' : '';
}, function (_ref17) {
  var disabled = _ref17.disabled,
      palette = _ref17.theme.palette;
  return disabled ? 'fill: ' + palette.grey : '';
}, function (_ref18) {
  var disabled = _ref18.disabled,
      palette = _ref18.theme.palette;
  return disabled ? 'fill: ' + palette.grey : '';
});

var ButtonIconWrapper$1 = styled__default.div(_templateObject2$b, function (_ref19) {
  var icon = _ref19.icon;
  return icon ? '0 4px' : '0';
});

var ButtonContentWrapper$1 = styled__default.div(_templateObject3$7);

/* eslint-enable indent */
var ButtonUI$1 = styled__default.button(_templateObject4$5, ButtonBaseMixin$1);
var ButtonLinkUI$1 = styled__default.a(_templateObject4$5, ButtonBaseMixin$1);
var ButtonDivUI$1 = styled__default.div(_templateObject4$5, ButtonBaseMixin$1);

// eslint-disable-next-line react/prefer-stateless-function

var Button$1 = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          text = _props.text,
          originalType = _props.type,
          children = _props.children,
          inert = _props.inert,
          link = _props.link,
          isFullWidth = _props.isFullWidth,
          onClick = _props.onClick,
          disabled = _props.disabled,
          iconProp = _props.icon,
          iconPosition = _props.iconPosition,
          style = _props.style;


      var textOrMessage = message || text || children;

      var wasASubmitInitially = originalType === 'submit';

      var type = wasASubmitInitially ? 'primary' : originalType;

      var icon = void 0;
      if (React__default.isValidElement(iconProp)) {
        icon = React__default.cloneElement(iconProp, { size: '16' });
      }

      var buttonProps = {
        onClick: onClick
      };

      var styleProps = {
        isFullWidth: isFullWidth,
        disabled: disabled,
        type: type,
        iconPosition: iconPosition,
        icon: icon
      };

      // which element to render div|a|button
      var TheButtonComponent = null;
      if (inert) {
        TheButtonComponent = ButtonDivUI$1;
      } else if (link) {
        TheButtonComponent = ButtonLinkUI$1;
      } else {
        TheButtonComponent = ButtonUI$1;
      }

      var theButton = React__default.createElement(
        TheButtonComponent,
        _extends({}, styleProps, buttonProps, { isFullWidth: isFullWidth, style: style }),
        icon && React__default.createElement(
          ButtonIconWrapper$1,
          styleProps,
          ' ',
          icon,
          ' '
        ),
        textOrMessage && React__default.createElement(
          ButtonContentWrapper$1,
          styleProps,
          ' ',
          textOrMessage,
          ' '
        )
      );

      // const rippleStyles = isFullWidth ? { width: '100%' } : {};

      return theButton;
    }
  }]);
  return Button;
}(React.Component);

// eslint-disable-next-line react/prefer-stateless-function
var UnstyledButton = function (_ButtonComponent) {
  inherits(UnstyledButton, _ButtonComponent);

  function UnstyledButton(props) {
    classCallCheck(this, UnstyledButton);

    var _this = possibleConstructorReturn(this, (UnstyledButton.__proto__ || Object.getPrototypeOf(UnstyledButton)).call(this, props));

    _this.ButtonCommonMixin = ButtonCommonMixin;
    _this.ButtonBaseMixin = UnstyledButtonBaseMixin;
    _this.buttonType = 'UnstyledButton';
    return _this;
  }

  return UnstyledButton;
}(ButtonComponent);

var capitalize = function capitalize(x) {
  return x.charAt(0).toUpperCase() + x.slice(1);
};

var getAppropriateIcon = function getAppropriateIcon(identifier) {
  var cleanedIdentifer = capitalize(identifier.toLowerCase());
  return Icons[cleanedIdentifer] ? Icons[cleanedIdentifer] : Circle;
};

var _templateObject$w = taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  opacity: 0;\n  MsInterpolationMode: nearest-neighbor;\n'], ['\n  width: 100%;\n  height: auto;\n  opacity: 0;\n  MsInterpolationMode: nearest-neighbor;\n']),
    _templateObject2$c = taggedTemplateLiteral(['\n  transition: ', ';\n  width: 100%;\n  margin: 0;\n  opacity: 0;\n  display: inline-block;\n  background-image: ', ';\n  background-repeat: no-repeat;\n  background-size: ', ';\n  background-position: center;\n  line-height: 0;\n  overflow: hidden;\n  opacity: ', ';\n\n  ', ';\n\n  /* Thise next bit is there because is would\n   * break img in a lot of places if removed\n   * But enventually, size prop should be prefered to width prop\n   * in order to get a squarely constrained image\n   */\n  ', ';\n\n  ', ';\n'], ['\n  transition: ', ';\n  width: 100%;\n  margin: 0;\n  opacity: 0;\n  display: inline-block;\n  background-image: ', ';\n  background-repeat: no-repeat;\n  background-size: ', ';\n  background-position: center;\n  line-height: 0;\n  overflow: hidden;\n  opacity: ', ';\n\n  ', ';\n\n  /* Thise next bit is there because is would\n   * break img in a lot of places if removed\n   * But enventually, size prop should be prefered to width prop\n   * in order to get a squarely constrained image\n   */\n  ', ';\n\n  ', ';\n']);

var ImgUI = styled__default.img(_templateObject$w);

var FigureUI = styled__default.figure(_templateObject2$c, function (_ref) {
  var transition = _ref.theme.transition;
  return transition.defaultAll;
}, function (_ref2) {
  var src = _ref2.src;
  return 'url(' + src + ')';
}, function (_ref3) {
  var contain = _ref3.contain;
  return contain ? 'contain' : 'cover';
}, function (_ref4) {
  var loaded = _ref4.loaded;
  return loaded ? 1 : 0;
}, function (_ref5) {
  var width = _ref5.style.width;
  return width && '\n    width: ' + width + ';\n    min-width: ' + width + ';\n    max-width: ' + width + ';\n    /* height: ' + width + ';\n    min-height: ' + width + ';\n    max-height: ' + width + ';\n    */\n  ';
}, function (_ref6) {
  var width = _ref6.width;
  return width && '\n    width: ' + width + 'px;\n    min-width: ' + width + 'px;\n    max-width: ' + width + 'px;\n    height: ' + width + 'px;\n    min-height: ' + width + 'px;\n    max-height: ' + width + 'px;\n  ';
}, function (_ref7) {
  var size = _ref7.size;
  return size && '\n    width: ' + size + 'px;\n    min-width: ' + size + 'px;\n    max-width: ' + size + 'px;\n    height: ' + size + 'px;\n    min-height: ' + size + 'px;\n    max-height: ' + size + 'px;\n  ';
});

/**
 * the purpose of this compo is to dispaly image without
 * ever stretching it, no matter the context around
 */
// const Img = props => (

var Img = function (_Component) {
  inherits(Img, _Component);

  // eslint-disable-line react/prefer-stateless-function
  function Img(props) {
    classCallCheck(this, Img);

    // const hasIdleCallback = (window !== undefined && window.requestIdleCallback);
    // work with ssr
    var _this = possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, props));

    var hasIdleCallback = false;
    if (typeof window !== 'undefined') {
      if (window.requestIdleCallback) {
        hasIdleCallback = true;
      }
    }

    _this.state = {
      loaded: !hasIdleCallback,
      hasIdleCallback: hasIdleCallback
    };

    _this.onLoadHandler = _this.onLoadHandler.bind(_this);
    return _this;
  }

  createClass(Img, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var src = this.props.src;
      var hasIdleCallback = this.state.hasIdleCallback;


      if (hasIdleCallback) {
        this.idleCBRef = window.requestIdleCallback(function () {
          var img = new Image();
          img.addEventListener('load', _this2.onLoadHandler);
          img.src = src;
        }, { timeout: 500 });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.idleCBRef && !this.state.loaded) {
        if (cancelIdleCallback) {
          cancelIdleCallback(this.idleCBRef);
        }
      }
    }
  }, {
    key: 'onLoadHandler',
    value: function onLoadHandler() {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          alt = _props.alt,
          async = _props.async,
          style = _props.style,
          imgStyle = _props.imgStyle,
          contain = _props.contain,
          width = _props.width,
          size = _props.size;
      var loaded = this.state.loaded;


      return React__default.createElement(
        FigureUI,
        {
          contain: contain,
          loaded: loaded,
          src: src,
          style: style,
          width: width,
          size: size
        },
        React__default.createElement(ImgUI, {
          src: src,
          alt: alt,
          style: imgStyle,
          async: async ? 'on' : 'off'
        })
      );
    }
  }]);
  return Img;
}(React.Component);

Img.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  contain: propTypes.bool, // eslint-disable-line react/no-unused-prop-types
  style: propTypes.object,
  imgStyle: propTypes.object,
  async: propTypes.bool,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};

Img.defaultProps = {
  src: '',
  alt: '',
  contain: false,
  style: {},
  imgStyle: {},
  async: true,
  size: undefined
};

/* eslint-disable react/prefer-stateless-function */

var Text = function (_Component) {
  inherits(Text, _Component);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$type = _props.type,
          type = _props$type === undefined ? 'body' : _props$type,
          children = _props.children,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style;

      var typeLowerCase = type.toLowerCase();
      var isDark = this.context.isDarkTheme ? this.context.isDarkTheme() : false;
      var correctStyling = isDark ? theme.fontsAndColor.dark[typeLowerCase] : theme.fontsAndColor.light[typeLowerCase];
      var defaultStyle = isDark ? theme.fontsAndColor.dark.body : theme.fontsAndColor.light.body;

      var mergedStyle = Object.assign({}, correctStyling || defaultStyle, style);

      if (type === 'paragraph') {
        return React__default.createElement(
          'p',
          { style: mergedStyle },
          children
        );
      }

      return React__default.createElement(
        'span',
        { style: mergedStyle },
        children
      );
    }
  }]);
  return Text;
}(React.Component);

Text.contextTypes = {
  isDarkTheme: propTypes.func
};

var MarketingText = function (_Component) {
  inherits(MarketingText, _Component);

  function MarketingText() {
    classCallCheck(this, MarketingText);
    return possibleConstructorReturn(this, (MarketingText.__proto__ || Object.getPrototypeOf(MarketingText)).apply(this, arguments));
  }

  createClass(MarketingText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$type = _props.type,
          type = _props$type === undefined ? 'body' : _props$type,
          children = _props.children,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style;

      var typeLowerCase = type.toLowerCase();
      var isDark = this.context.isDarkTheme ? this.context.isDarkTheme() : false;
      var correctStyling = isDark ? theme.marketingText.dark[typeLowerCase] : theme.marketingText.light[typeLowerCase];
      var defaultStyle = isDark ? theme.marketingText.dark.body : theme.marketingText.light.body;

      var mergedStyle = Object.assign({}, correctStyling || defaultStyle, style);

      if (type === 'paragraph') {
        return React__default.createElement(
          'p',
          { style: mergedStyle },
          children
        );
      }

      return React__default.createElement(
        'span',
        { style: mergedStyle },
        children
      );
    }
  }]);
  return MarketingText;
}(React.Component);

MarketingText.contextTypes = {
  isDarkTheme: propTypes.func
};

var styles$1 = {
  color: palette.semantic.error
};

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
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

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var hasOwnProperty$a = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty$a.call(it, key);
};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
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

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": assign, __esModule: true };
});

unwrapExports(assign$1);

var _extends$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

var _extends$2 = unwrapExports(_extends$1);

var objectWithoutProperties$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties$1);

var classCallCheck$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck$1);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
}

var f$3 = _wks;

var _wksExt = {
	f: f$3
};

var iterator = _wksExt.f('iterator');

var iterator$1 = createCommonjsModule(function (module) {
module.exports = { "default": iterator, __esModule: true };
});

unwrapExports(iterator$1);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$1 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: _wksExt.f(name) });
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$4
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
	f: f$5
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol = _core.Symbol;

var symbol$1 = createCommonjsModule(function (module) {
module.exports = { "default": symbol, __esModule: true };
});

unwrapExports(symbol$1);

var _typeof_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator$1);



var _symbol2 = _interopRequireDefault(symbol$1);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof$1 = unwrapExports(_typeof_1);

var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn$1);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
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

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf = _core.Object.setPrototypeOf;

var setPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf, __esModule: true };
});

unwrapExports(setPrototypeOf$1);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object = _core.Object;
var create = function create(P, D) {
  return $Object.create(P, D);
};

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": create, __esModule: true };
});

unwrapExports(create$1);

var inherits$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



var _create2 = _interopRequireDefault(create$1);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var _inherits = unwrapExports(inherits$1);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

if (process.env.NODE_ENV !== 'production') {
  var warning$2 = warning_1;
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = objectAssign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = objectAssign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning$2(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      invariant_1(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      invariant_1(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning$2(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    invariant_1(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    invariant_1(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            invariant_1(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      invariant_1(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      invariant_1(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    invariant_1(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        invariant_1(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning$2(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning$2(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning$2(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  objectAssign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning$2(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      invariant_1(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    invariant_1(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning$2(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning$2(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

var factory_1 = factory;

if (typeof React__default === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React__default.Component().updater;

var createReactClass = factory_1(
  React__default.Component,
  React__default.isValidElement,
  ReactNoopUpdateQueue
);

function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

var EventBaseObject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];
});

unwrapExports(EventBaseObject_1);

var EventObject = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _EventBaseObject2 = _interopRequireDefault(EventBaseObject_1);



var _objectAssign2 = _interopRequireDefault(objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];
});

unwrapExports(EventObject);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;



var _EventObject2 = _interopRequireDefault(EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];
});

var addDOMEventListener = unwrapExports(lib);

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = ReactDOM__default.unstable_batchedUpdates ? function run(e) {
    ReactDOM__default.unstable_batchedUpdates(cb, e);
  } : cb;
  return addDOMEventListener(target, eventType, callback);
}

var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof$2(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils$1 = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils$1.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils$1, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (utils$1.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = utils$1.getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = utils$1.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = utils$1.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

function isAncestorFixed(element) {
  if (utils$1.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils$1.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = utils$1.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils$1.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils$1.css(el, 'overflow') !== 'visible') {
      var pos = utils$1.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!utils$1.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils$1.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils$1.getWindowScrollLeft(win);
  var scrollY = utils$1.getWindowScrollTop(win);
  var viewportWidth = utils$1.viewportWidth(win);
  var viewportHeight = utils$1.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils$1.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils$1.mix(pos, size);
}

function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!utils$1.isWindow(node) && node.nodeType !== 9) {
    offset = utils$1.offset(node);
    w = utils$1.outerWidth(node);
    h = utils$1.outerHeight(node);
  } else {
    var win = utils$1.getWindow(node);
    offset = {
      left: utils$1.getWindowScrollLeft(win),
      top: utils$1.getWindowScrollTop(win)
    };
    w = utils$1.viewportWidth(win);
    h = utils$1.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function isOutOfVisibleRect(target) {
  var visibleRect = getVisibleRectForElement(target);
  var targetRegion = getRegion(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function flip(points, reg, map) {
  var ret = [];
  utils$1.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

function domAlign(el, refNode, align) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var target = align.target || refNode;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = getVisibleRectForElement(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = getRegion(source);
  // 参照节点所占的区域, left/top/width/height
  var refNodeRegion = getRegion(target);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, refNodeRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = utils$1.merge(elRegion, elFuturePos);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTargetNotOutOfVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset);
      utils$1.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    utils$1.css(source, 'width', utils$1.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils$1.css(source, 'height', utils$1.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  utils$1.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

domAlign.__getOffsetParent = getOffsetParent;

domAlign.__getVisibleRectForElement = getVisibleRectForElement;
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isWindow$1(obj) {
  /* eslint no-eq-null: 0 */
  /* eslint eqeqeq: 0 */
  return obj != null && obj == obj.window;
}

function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

var Align = function (_Component) {
  _inherits(Align, _Component);

  function Align() {
    var _temp, _this, _ret;

    _classCallCheck(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
      var props = _this.props;
      if (!props.disabled) {
        var source = ReactDOM__default.findDOMNode(_this);
        props.onAlign(source, domAlign(source, props.target(), props.align));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Align.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  };

  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      if (prevProps.disabled || prevProps.align !== props.align) {
        reAlign = true;
      } else {
        var lastTarget = prevProps.target();
        var currentTarget = props.target();
        if (isWindow$1(lastTarget) && isWindow$1(currentTarget)) {
          reAlign = false;
        } else if (lastTarget !== currentTarget) {
          reAlign = true;
        }
      }
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  };

  Align.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stopMonitorWindowResize();
  };

  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
    }
  };

  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  };

  Align.prototype.render = function render() {
    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = React__default.Children.only(children);
    if (childrenProps) {
      var newProps = {};
      for (var prop in childrenProps) {
        if (childrenProps.hasOwnProperty(prop)) {
          newProps[prop] = this.props[childrenProps[prop]];
        }
      }
      return React__default.cloneElement(child, newProps);
    }
    return child;
  };

  return Align;
}(React.Component);

Align.propTypes = {
  childrenProps: propTypes.object,
  align: propTypes.object.isRequired,
  target: propTypes.func,
  onAlign: propTypes.func,
  monitorBufferTime: propTypes.number,
  monitorWindowResize: propTypes.bool,
  disabled: propTypes.bool,
  children: propTypes.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  onAlign: function onAlign() {},
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};

// export this package's api

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object$1 = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object$1.defineProperty(it, key, desc);
};

var defineProperty$3 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

unwrapExports(defineProperty$3);

var defineProperty$5 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
});

var _defineProperty = unwrapExports(defineProperty$5);

var createClass$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass$1);

function toArrayChildren(children) {
  var ret = [];
  React__default.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

var componentIndexof = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/**
 * Module dependencies.
 */

try {
  var index$1 = indexof;
} catch (err) {
  var index$1 = componentIndexof;
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString$2 = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

var componentClasses = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index$1(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString$2.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index$1(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index$1(this.array(), name);
};

var isCssAnimationSupported = TransitionEvents.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof$1(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = componentClasses(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    TransitionEvents.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  TransitionEvents.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    TransitionEvents.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  TransitionEvents.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  _createClass(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (util.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (util.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (util.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = ReactDOM__default.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof$1(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = cssAnimation(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(React__default.Component);

AnimateChild.propTypes = {
  children: propTypes.any
};

var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (React__default.isValidElement(children)) {
    if (!children.key) {
      return React__default.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  _inherits(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  _createClass(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = React__default.cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return React__default.createElement(
            AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = _extends$2({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return React__default.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(React__default.Component);

Animate.isAnimate = true;
Animate.propTypes = {
  component: propTypes.any,
  componentProps: propTypes.object,
  animation: propTypes.object,
  transitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
  transitionEnter: propTypes.bool,
  transitionAppear: propTypes.bool,
  exclusive: propTypes.bool,
  transitionLeave: propTypes.bool,
  onEnd: propTypes.func,
  onEnter: propTypes.func,
  onLeave: propTypes.func,
  onAppear: propTypes.func,
  showProp: propTypes.string
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (util.allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (util.allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (util.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

var LazyRenderBox = function (_Component) {
  _inherits(LazyRenderBox, _Component);

  function LazyRenderBox() {
    _classCallCheck(this, LazyRenderBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || React__default.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return React__default.createElement('div', props);
    }

    return React__default.Children.only(props.children);
  };

  return LazyRenderBox;
}(React.Component);

LazyRenderBox.propTypes = {
  children: propTypes.any,
  className: propTypes.string,
  visible: propTypes.bool,
  hiddenClassName: propTypes.string
};

var PopupInner = function (_Component) {
  _inherits(PopupInner, _Component);

  function PopupInner() {
    _classCallCheck(this, PopupInner);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return React__default.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      },
      React__default.createElement(
        LazyRenderBox,
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(React.Component);

PopupInner.propTypes = {
  hiddenClassName: propTypes.string,
  className: propTypes.string,
  prefixCls: propTypes.string,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  children: propTypes.any
};

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _extends$2({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps$1.call(_this);

    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
  };

  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return ReactDOM__default.findDOMNode(this.popupInstance);
  };

  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var savePopupRef = this.savePopupRef,
        props = this.props;
    var align = props.align,
        style = props.style,
        visible = props.visible,
        prefixCls = props.prefixCls,
        destroyPopupOnHide = props.destroyPopupOnHide;

    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';
    if (!visible) {
      this.currentAlignClassName = null;
    }
    var newStyle = _extends$2({}, style, this.getZIndexStyle());
    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return React__default.createElement(
        Animate,
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? React__default.createElement(
          Align,
          {
            target: this.getTarget,
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          React__default.createElement(
            PopupInner,
            _extends$2({
              visible: true
            }, popupInnerProps),
            props.children
          )
        ) : null
      );
    }
    return React__default.createElement(
      Animate,
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      React__default.createElement(
        Align,
        {
          target: this.getTarget,
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        React__default.createElement(
          PopupInner,
          _extends$2({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          props.children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = React__default.createElement(LazyRenderBox, {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = React__default.createElement(
          Animate,
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return React__default.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(React.Component);

Popup.propTypes = {
  visible: propTypes.bool,
  style: propTypes.object,
  getClassNameFromAlign: propTypes.func,
  onAlign: propTypes.func,
  getRootDomNode: propTypes.func,
  onMouseEnter: propTypes.func,
  align: propTypes.any,
  destroyPopupOnHide: propTypes.bool,
  className: propTypes.string,
  prefixCls: propTypes.string,
  onMouseLeave: propTypes.func
};

var _initialiseProps$1 = function _initialiseProps() {
  var _this2 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this2.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this2.currentAlignClassName !== currentAlignClassName) {
      _this2.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this2.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.getTarget = function () {
    return _this2.props.getRootDomNode();
  };
};

function defaultGetContainer() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

function getContainerRenderMixin(config) {
  var _config$autoMount = config.autoMount,
      autoMount = _config$autoMount === undefined ? true : _config$autoMount,
      _config$autoDestroy = config.autoDestroy,
      autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy,
      isVisible = config.isVisible,
      isForceRender = config.isForceRender,
      getComponent = config.getComponent,
      _config$getContainer = config.getContainer,
      getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;


  var mixin = void 0;

  function _renderComponent(instance, componentArg, ready) {
    if (!isVisible || instance._component || isVisible(instance) || isForceRender && isForceRender(instance)) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }
      var component = void 0;
      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }
      ReactDOM__default.unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;
        if (ready) {
          ready.call(this);
        }
      });
    }
  }

  if (autoMount) {
    mixin = _extends$2({}, mixin, {
      componentDidMount: function componentDidMount() {
        _renderComponent(this);
      },
      componentDidUpdate: function componentDidUpdate() {
        _renderComponent(this);
      }
    });
  }

  if (!autoMount || !autoDestroy) {
    mixin = _extends$2({}, mixin, {
      renderComponent: function renderComponent(componentArg, ready) {
        _renderComponent(this, componentArg, ready);
      }
    });
  }

  function _removeContainer(instance) {
    if (instance._container) {
      var container = instance._container;
      ReactDOM__default.unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = _extends$2({}, mixin, {
      componentWillUnmount: function componentWillUnmount() {
        _removeContainer(this);
      }
    });
  } else {
    mixin = _extends$2({}, mixin, {
      removeContainer: function removeContainer() {
        _removeContainer(this);
      }
    });
  }

  return mixin;
}

var Portal$1 = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return ReactDOM__default.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(React__default.Component);

Portal$1.propTypes = {
  getContainer: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  didUpdate: propTypes.func
};

function noop$1() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!ReactDOM.createPortal;

var mixins = [];

if (!IS_REACT_16) {
  mixins.push(getContainerRenderMixin({
    autoMount: false,

    isVisible: function isVisible(instance) {
      return instance.state.popupVisible;
    },
    isForceRender: function isForceRender(instance) {
      return instance.props.forceRender;
    },
    getContainer: function getContainer(instance) {
      return instance.getContainer();
    }
  }));
}

var Trigger = createReactClass({
  displayName: 'Trigger',
  propTypes: {
    children: propTypes.any,
    action: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
    showAction: propTypes.any,
    hideAction: propTypes.any,
    getPopupClassNameFromAlign: propTypes.any,
    onPopupVisibleChange: propTypes.func,
    afterPopupVisibleChange: propTypes.func,
    popup: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
    popupStyle: propTypes.object,
    prefixCls: propTypes.string,
    popupClassName: propTypes.string,
    popupPlacement: propTypes.string,
    builtinPlacements: propTypes.object,
    popupTransitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
    popupAnimation: propTypes.any,
    mouseEnterDelay: propTypes.number,
    mouseLeaveDelay: propTypes.number,
    zIndex: propTypes.number,
    focusDelay: propTypes.number,
    blurDelay: propTypes.number,
    getPopupContainer: propTypes.func,
    getDocument: propTypes.func,
    forceRender: propTypes.bool,
    destroyPopupOnHide: propTypes.bool,
    mask: propTypes.bool,
    maskClosable: propTypes.bool,
    onPopupAlign: propTypes.func,
    popupAlign: propTypes.object,
    popupVisible: propTypes.bool,
    maskTransitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
    maskAnimation: propTypes.string
  },

  mixins: mixins,

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      getDocument: returnDocument,
      onPopupVisibleChange: noop$1,
      afterPopupVisibleChange: noop$1,
      onPopupAlign: noop$1,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      mask: false,
      maskClosable: true,
      action: [],
      showAction: [],
      hideAction: []
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    this.prevPopupVisible = popupVisible;

    return {
      popupVisible: popupVisible
    };
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  },
  onMouseEnter: function onMouseEnter(e) {
    this.fireEvents('onMouseEnter', e);
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  },
  onMouseLeave: function onMouseLeave(e) {
    this.fireEvents('onMouseLeave', e);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onPopupMouseEnter: function onPopupMouseEnter() {
    this.clearDelayTimer();
  },
  onPopupMouseLeave: function onPopupMouseLeave(e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && contains(this._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onFocus: function onFocus(e) {
    this.fireEvents('onFocus', e);
    // incase focusin and focusout
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  },
  onMouseDown: function onMouseDown(e) {
    this.fireEvents('onMouseDown', e);
    this.preClickTime = Date.now();
  },
  onTouchStart: function onTouchStart(e) {
    this.fireEvents('onTouchStart', e);
    this.preTouchTime = Date.now();
  },
  onBlur: function onBlur(e) {
    this.fireEvents('onBlur', e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  },
  onContextMenu: function onContextMenu(e) {
    e.preventDefault();
    this.fireEvents('onContextMenu', e);
    this.setPopupVisible(true);
  },
  onContextMenuClose: function onContextMenuClose() {
    if (this.isContextMenuToShow()) {
      this.close();
    }
  },
  onClick: function onClick(event) {
    this.fireEvents('onClick', event);
    // focus will trigger click
    if (this.focusTime) {
      var preTime = void 0;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !this.state.popupVisible;
    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
      this.setPopupVisible(!this.state.popupVisible);
    }
  },
  onDocumentClick: function onDocumentClick(event) {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = ReactDOM.findDOMNode(this);
    var popupNode = this.getPopupDomNode();
    if (!contains(root, target) && !contains(popupNode, target)) {
      this.close();
    }
  },
  handlePortalUpdate: function handlePortalUpdate() {
    if (this.prevPopupVisible !== this.state.popupVisible) {
      this.props.afterPopupVisibleChange(this.state.popupVisible);
    }
  },
  getPopupDomNode: function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  },
  getRootDomNode: function getRootDomNode() {
    return ReactDOM.findDOMNode(this);
  },
  getPopupClassNameFromAlign: function getPopupClassNameFromAlign$$1(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push(getPopupClassNameFromAlign(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  },
  getPopupAlign: function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  },
  getComponent: function getComponent() {
    var props = this.props,
        state = this.state;

    var mouseProps = {};
    if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }
    return React__default.createElement(
      Popup,
      _extends$2({
        prefixCls: props.prefixCls,
        destroyPopupOnHide: props.destroyPopupOnHide,
        visible: state.popupVisible,
        className: props.popupClassName,
        action: props.action,
        align: this.getPopupAlign(),
        onAlign: props.onPopupAlign,
        animation: props.popupAnimation,
        getClassNameFromAlign: this.getPopupClassNameFromAlign
      }, mouseProps, {
        getRootDomNode: this.getRootDomNode,
        style: props.popupStyle,
        mask: props.mask,
        zIndex: props.zIndex,
        transitionName: props.popupTransitionName,
        maskAnimation: props.maskAnimation,
        maskTransitionName: props.maskTransitionName,
        ref: this.savePopup
      }),
      typeof props.popup === 'function' ? props.popup() : props.popup
    );
  },
  getContainer: function getContainer() {
    var props = this.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(ReactDOM.findDOMNode(this)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  },
  setPopupVisible: function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  },
  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible);
        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  },
  clearDelayTimer: function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  },
  clearOutsideHandler: function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  },
  createTwoChains: function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  },
  isClickToShow: function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  },
  isContextMenuToShow: function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  },
  isClickToHide: function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  },
  isMouseEnterToShow: function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  },
  isMouseLeaveToHide: function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  },
  isFocusToShow: function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  },
  isBlurToHide: function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  },
  forcePopupAlign: function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  },
  fireEvents: function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  },
  close: function close() {
    this.setPopupVisible(false);
  },
  savePopup: function savePopup(node) {
    if (IS_REACT_16) {
      this._component = node;
    }
  },
  render: function render() {
    var popupVisible = this.state.popupVisible;

    var props = this.props;
    var children = props.children;
    var child = React__default.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var trigger = React__default.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return trigger;
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || props.forceRender) {
      portal = React__default.createElement(
        Portal$1,
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  }
});

var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [React__default.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), React__default.createElement(
        'div',
        { className: prefixCls + '-inner', key: 'content', id: id },
        typeof overlay === 'function' ? overlay() : overlay
      )];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = _objectWithoutProperties(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = _extends$2({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return React__default.createElement(
      Trigger,
      _extends$2({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  trigger: propTypes.any,
  children: propTypes.any,
  defaultVisible: propTypes.bool,
  visible: propTypes.bool,
  placement: propTypes.string,
  transitionName: propTypes.oneOfType([propTypes.string, propTypes.object]),
  animation: propTypes.any,
  onVisibleChange: propTypes.func,
  afterVisibleChange: propTypes.func,
  overlay: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
  overlayStyle: propTypes.object,
  overlayClassName: propTypes.string,
  prefixCls: propTypes.string,
  mouseEnterDelay: propTypes.number,
  mouseLeaveDelay: propTypes.number,
  getTooltipContainer: propTypes.func,
  destroyTooltipOnHide: propTypes.bool,
  align: propTypes.object,
  arrowContent: propTypes.any,
  id: propTypes.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};

var _templateObject$x = taggedTemplateLiteral(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  /* truncate tail by default */\n  ', ';\n'], ['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  /* truncate tail by default */\n  ', ';\n']);

var TextEllipsisUI = styled__default.div.attrs({
  title: function title(_ref) {
    var children = _ref.children,
        _title = _ref.title;

    if (_title) {
      if (typeof _title === 'string') {
        return JSON.stringify(_title); // not safe to ad dynamic code in html attriubtes
      }
    }
    if (children && typeof children === 'string') {
      return JSON.stringify(children); // not safe to ad dynamic code in html attriubtes
    }
    return undefined;
  }
})(_templateObject$x, function (_ref2) {
  var truncateHead = _ref2.truncateHead,
      leftAligned = _ref2.leftAligned;
  return truncateHead ? 'text-align: ' + (leftAligned ? 'left' : 'right') + '; direction: rtl;' : '';
});
var TextEllipsis = function TextEllipsis() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return props.truncateHead ? React__default.createElement(
    TextEllipsisUI,
    props,
    React__default.createElement(
      'bdi',
      null,
      props.children
    )
  ) : React__default.createElement(TextEllipsisUI, props);
};

/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */

var styles$2 = {
  wrapper: {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  nameWrapper: {
    marginLeft: '6px',
    overflow: 'hidden'
  }
};

var AvatarWithName = function AvatarWithName(_ref) {
  var src = _ref.src,
      icon = _ref.icon,
      name = _ref.name,
      imgSize = _ref.imgSize,
      isSquare = _ref.isSquare,
      onClick = _ref.onClick,
      contain = _ref.contain,
      style = _ref.style,
      nameStyle = _ref.nameStyle,
      inverse = _ref.inverse;

  // eslint-disable-next-line no-nested-ternary
  var imgContent = src ? React__default.createElement(Img, { contain: contain, async: true, width: imgSize || '26', style: { borderRadius: isSquare ? 0 : '50%' }, src: src }) : icon // eslint-disable-line
  ? React__default.isValidElement(icon) ? React__default.cloneElement(icon, { size: imgSize || '26px' }) : React__default.createElement(getAppropriateIcon(icon || 'Circle'), { size: imgSize || '26px' }) : React__default.createElement(getAppropriateIcon('Circle'), { size: imgSize || '26px' });

  return React__default.createElement(
    'div',
    {
      style: _extends({}, styles$2.wrapper, inverse ? { flexDirection: 'row-reverse' } : {}, style),
      onClick: onClick || null
    },
    imgContent,
    React__default.createElement(
      'div',
      {
        style: _extends({}, styles$2.nameWrapper, inverse ? { marginLeft: 0, marginRight: '6px' } : {}, nameStyle)
      },
      React__default.createElement(
        TextEllipsis,
        null,
        name
      )
    )
  );
};

AvatarWithName.displayName = 'AvatarWithName';

var _templateObject$y = taggedTemplateLiteral(['\n  cursor: pointer;\n  color: ', ';\n  display: inline-block;\n  ', ';\n  &:hover {\n    text-decoration: underline;\n  }\n  svg {\n    color: ', ';\n    fill: ', ';\n  }\n'], ['\n  cursor: pointer;\n  color: ', ';\n  display: inline-block;\n  ', ';\n  &:hover {\n    text-decoration: underline;\n  }\n  svg {\n    color: ', ';\n    fill: ', ';\n  }\n']);

var getTypeColor$2 = function getTypeColor(_ref, type) {
  var palette = _ref.palette;

  if (!type) {
    return palette.accent.main;
  }
  if (palette.semantic[type]) {
    return palette.semantic[type];
  }
  return '#fff';
};

var ButtonLinkWrapper = styled__default.a(_templateObject$y, function (_ref2) {
  var theme = _ref2.theme,
      type = _ref2.type;
  return getTypeColor$2(theme, type);
}, function (_ref3) {
  var isFullWidth = _ref3.isFullWidth;
  return isFullWidth ? 'width: 100%' : '';
}, function (_ref4) {
  var theme = _ref4.theme,
      type = _ref4.type;
  return getTypeColor$2(theme, type);
}, function (_ref5) {
  var theme = _ref5.theme,
      type = _ref5.type;
  return getTypeColor$2(theme, type);
});

var ButtonLink = function ButtonLink(_ref6) {
  var _onClick = _ref6.onClick,
      icon = _ref6.icon,
      text = _ref6.text,
      message = _ref6.message,
      children = _ref6.children,
      style = _ref6.style,
      isFullWidth = _ref6.isFullWidth,
      iconAfter = _ref6.iconAfter;

  var content = icon ? React__default.createElement(AvatarWithName, {
    inverse: iconAfter,
    imgSize: 16,
    icon: icon,
    name: text || message || children,
    style: _extends({}, isFullWidth ? { justifyContent: 'center' } : {})
  }) : React__default.createElement(
    'div',
    { style: { textAlign: isFullWidth ? 'center' : 'left' } },
    text || message || children
  );

  return React__default.createElement(
    ButtonLinkWrapper,
    {
      style: style,
      onClick: function onClick(e) {
        e.preventDefault();_onClick(e);
      },
      isFullWidth: isFullWidth
    },
    content
  );
};

ButtonLink.displayName = 'ButtonLink';

ButtonLink.defaultProps = {
  onClick: function onClick() {},
  icon: null,
  text: '',
  message: '',
  children: null,
  style: {},
  isFullWidth: false
};

ButtonLink.propTypes = {
  onClick: propTypes.func,
  icon: propTypes.node,
  text: propTypes.any,
  message: propTypes.any,
  children: propTypes.any,
  style: propTypes.object,
  isFullWidth: propTypes.bool
};

var _templateObject$z = taggedTemplateLiteral(['\n  cursor: pointer;\n  color: ', ';\n  display: inline-block;\n  ', ';\n  &:hover {\n    text-decoration: underline;\n  }\n  svg {\n    color: ', ';\n    fill: ', ';\n  }\n'], ['\n  cursor: pointer;\n  color: ', ';\n  display: inline-block;\n  ', ';\n  &:hover {\n    text-decoration: underline;\n  }\n  svg {\n    color: ', ';\n    fill: ', ';\n  }\n']);

var getTypeColor$3 = function getTypeColor(_ref, type) {
  var palette = _ref.palette;

  if (!type) {
    return palette.accent.main;
  }
  if (palette.semantic[type]) {
    return palette.semantic[type];
  }
  return '#fff';
};

var ButtonLinkWrapper$1 = styled__default.a(_templateObject$z, function (_ref2) {
  var theme = _ref2.theme,
      type = _ref2.type;
  return getTypeColor$3(theme, type);
}, function (_ref3) {
  var isFullWidth = _ref3.isFullWidth;
  return isFullWidth ? 'width: 100%' : '';
}, function (_ref4) {
  var theme = _ref4.theme,
      type = _ref4.type;
  return getTypeColor$3(theme, type);
}, function (_ref5) {
  var theme = _ref5.theme,
      type = _ref5.type;
  return getTypeColor$3(theme, type);
});

var ButtonLinkWrapperInert = ButtonLinkWrapper$1.withComponent('div');

var ButtonLink$1 = function ButtonLink(_ref6) {
  var _onClick = _ref6.onClick,
      icon = _ref6.icon,
      text = _ref6.text,
      message = _ref6.message,
      children = _ref6.children,
      style = _ref6.style,
      isFullWidth = _ref6.isFullWidth,
      iconAfter = _ref6.iconAfter,
      inert = _ref6.inert;

  var content = icon ? React__default.createElement(AvatarWithName, {
    inverse: iconAfter,
    imgSize: 16,
    icon: icon,
    name: text || message || children,
    style: _extends({}, isFullWidth ? { justifyContent: 'center' } : {})
  }) : React__default.createElement(
    'div',
    { style: { textAlign: isFullWidth ? 'center' : 'left' } },
    text || message || children
  );

  var WrapperComp = inert ? ButtonLinkWrapperInert : ButtonLinkWrapper$1;

  return React__default.createElement(
    WrapperComp,
    {
      style: style,
      onClick: function onClick(e) {
        _onClick(e);
      },
      isFullWidth: isFullWidth
    },
    content
  );
};

ButtonLink$1.displayName = 'ButtonLink';

ButtonLink$1.defaultProps = {
  onClick: function onClick() {},
  icon: null,
  text: '',
  message: '',
  children: null,
  style: {},
  isFullWidth: false
};

ButtonLink$1.propTypes = {
  onClick: propTypes.func,
  icon: propTypes.node,
  text: propTypes.any,
  message: propTypes.any,
  children: propTypes.any,
  style: propTypes.object,
  isFullWidth: propTypes.bool
};

var ButtonWithConfirm = WithConfirmDialogHOC(Button);
var FlatButtonWithConfirm = WithConfirmDialogHOC(FlatButton);
var OutlineButtonWithConfirm = WithConfirmDialogHOC(OutlineButton);

var _templateObject$A = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  background-color: ', ';\n  transition: ', ';\n  border-top: 1px solid ', ';\n  padding: 8px 16px;\n  display: flex;\n  justify-content: flex-end;\n  min-height: 50px;\n  min-height: ', ';\n  border-radius: ', ';\n'], ['\n  box-sizing: border-box;\n  background-color: ', ';\n  transition: ', ';\n  border-top: 1px solid ', ';\n  padding: 8px 16px;\n  display: flex;\n  justify-content: flex-end;\n  min-height: 50px;\n  min-height: ', ';\n  border-radius: ', ';\n']);

var PanelFooterUI = styled__default.div(_templateObject$A, function (_ref) {
  var palette = _ref.theme.palette;
  return palette.white;
}, function (_ref2) {
  var transition = _ref2.theme.transition;
  return transition.defaultAll;
}, function (_ref3) {
  var palette = _ref3.theme.palette;
  return palette.lightGrey;
}, footerHeight, function (_ref4) {
  var round = _ref4.round,
      radius = _ref4.theme.radius;
  return round && '0 0 ' + radius + ' ' + radius;
});

var PanelFooter = function PanelFooter(props) {
  var children = props.children,
      hasCancel = props.hasCancel,
      cancelLabel = props.cancelLabel,
      onClose = props.onClose,
      style = props.style,
      rounded = props.rounded;


  var cancel = hasCancel || onClose ? React__default.createElement(
    Button,
    { onClick: onClose, style: { marginLeft: '16px' } },
    cancelLabel
  ) : null;

  return React__default.createElement(
    PanelFooterUI,
    { style: style, round: rounded || undefined },
    children,
    cancel
  );
};

PanelFooter.displayName = 'PanelFooter';

PanelFooter.defaultProps = {
  cancelLabel: 'Cancel'
};

var _templateObject$B = taggedTemplateLiteral(['\n  /** create context to allow being above\n    * menuPanel in z-index stack order */\n    /* position: */\n    /* ', '; */\n\n\n  height: 100%;\n  height: 100vh;\n  height: ', ';\n  text-align: center;\n  width: ', ';\n  background-color: ', ';\n  /* z-index: 99; need to be applied on children */\n  transition:  ', ';\n  @media (min-width: ', ') {\n    width: ', ';\n    transition:  ', ';\n  }\n'], ['\n  /** create context to allow being above\n    * menuPanel in z-index stack order */\n    /* position: */\n    /* ', '; */\n\n\n  height: 100%;\n  height: 100vh;\n  height: ', ';\n  text-align: center;\n  width: ', ';\n  background-color: ', ';\n  /* z-index: 99; need to be applied on children */\n  transition:  ', ';\n  @media (min-width: ', ') {\n    width: ', ';\n    transition:  ', ';\n  }\n']);

var defaultMenuWidth = defaults$1.menuWidth,
    defaultBigMenuWidth = defaults$1.bigMenuWidth,
    defaultBreakpoint = defaults$1.breakpoint;


var getPosition = function getPosition(_ref) {
  var attachToViewport = _ref.attachToViewport;
  return attachToViewport ? 'position: fixed;' + 'top: 0;' + 'bottom: 0;' + 'left: 0' : '';
};
var GlobalMenuDiv = styled__default.div(_templateObject$B, function (props) {
  return getPosition(props);
}, function (_ref2) {
  var attachToViewport = _ref2.attachToViewport;
  return attachToViewport ? '100vh' : '100%';
}, function (_ref3) {
  var menuWidth = _ref3.menuWidth;
  return menuWidth;
}, function (_ref4) {
  var dark = _ref4.theme.palette.primary.dark;
  return dark || '#15303f';
}, function (_ref5) {
  var transition = _ref5.theme.transition;
  return transition.default;
}, function (_ref6) {
  var breakpoint = _ref6.breakpoint;
  return breakpoint;
}, function (_ref7) {
  var bigMenuWidth = _ref7.bigMenuWidth;
  return bigMenuWidth;
}, function (_ref8) {
  var transition = _ref8.theme.transition;
  return transition.default;
});

var GlobalMenuContainer = function GlobalMenuContainer(_ref9) {
  var children = _ref9.children,
      attachToViewport = _ref9.attachToViewport,
      innerStyle = _ref9.innerStyle,
      breakpoint = _ref9.breakpoint,
      menuWidth = _ref9.menuWidth,
      bigMenuWidth = _ref9.bigMenuWidth;
  return React__default.createElement(
    'div',
    { style: { position: 'relative' } },
    React__default.createElement(
      GlobalMenuDiv,
      {
        attachToViewport: attachToViewport,
        style: innerStyle,
        breakpoint: breakpoint,
        menuWidth: menuWidth,
        bigMenuWidth: bigMenuWidth
      },
      children
    )
  );
};

GlobalMenuContainer.propTypes = {
  children: propTypes.node
};

GlobalMenuContainer.defaultProps = {
  children: null,
  breakpoint: defaultBreakpoint,
  menuWidth: defaultMenuWidth,
  bigMenuWidth: defaultBigMenuWidth
};

var _templateObject$C = taggedTemplateLiteral(['\n  & > * {\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: ', ') {\n      flex-direction: row;\n    }\n  }\n\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n  .root & a,\n  & a {\n    ', ';\n    ', ';\n    text-decoration: none;\n\n    color: ', ';\n    border-right: ', ';\n    background: ', ';\n    transition: ', ';\n    &:hover {\n      text-decoration: none;\n      color: ', ';\n      background: ', ';\n      svg {\n        fill: #fff;\n      }\n    }\n    &:focus {\n      color: ', ';\n      background: ', ';\n      color: ', ';\n      svg {\n        fill: ', ';\n      }\n    }\n    svg {\n      fill: ', ';\n    }\n  }\n'], ['\n  & > * {\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: ', ') {\n      flex-direction: row;\n    }\n  }\n\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n  .root & a,\n  & a {\n    ', ';\n    ', ';\n    text-decoration: none;\n\n    color: ', ';\n    border-right: ', ';\n    background: ', ';\n    transition: ', ';\n    &:hover {\n      text-decoration: none;\n      color: ', ';\n      background: ', ';\n      svg {\n        fill: #fff;\n      }\n    }\n    &:focus {\n      color: ', ';\n      background: ', ';\n      color: ', ';\n      svg {\n        fill: ', ';\n      }\n    }\n    svg {\n      fill: ', ';\n    }\n  }\n']),
    _templateObject2$d = taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: ', ') {\n    flex-direction: row;\n  }\n\n\n  ', ';\n  ', ';\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n  text-decoration: none;\n\n  .root &,\n  & {\n    color: ', ';\n  }\n\n  border-right: ', ';\n  background: ', ';\n  transition: ', ';\n  .root &:hover, /* TODO solve this .root a  */\n  &:hover {\n    text-decoration: none;\n    color: ', ';\n    background: ', ';\n    svg {\n      fill: #fff;\n    }\n  }\n\n  .root &:focus, /* TODO solve this .root a  */\n  &:focus {\n    color: ', ';\n    background: ', ';\n    color: ', ';\n    svg {\n      fill: ', ';\n    }\n  }\n\n  svg {\n    fill: ', ';\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: ', ') {\n    flex-direction: row;\n  }\n\n\n  ', ';\n  ', ';\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n  text-decoration: none;\n\n  .root &,\n  & {\n    color: ', ';\n  }\n\n  border-right: ', ';\n  background: ', ';\n  transition: ', ';\n  .root &:hover, /* TODO solve this .root a  */\n  &:hover {\n    text-decoration: none;\n    color: ', ';\n    background: ', ';\n    svg {\n      fill: #fff;\n    }\n  }\n\n  .root &:focus, /* TODO solve this .root a  */\n  &:focus {\n    color: ', ';\n    background: ', ';\n    color: ', ';\n    svg {\n      fill: ', ';\n    }\n  }\n\n  svg {\n    fill: ', ';\n  }\n']),
    _templateObject3$8 = taggedTemplateLiteral(['\n  display: none;\n  display: block;\n  font-size: 10px;\n  white-space: nowrap;\n  justify-content: flex-start;\n  max-width: 56px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (min-width: ', ') {\n    font-size: inherit;\n\n    padding-left: 10px;\n    display: block;\n\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n'], ['\n  display: none;\n  display: block;\n  font-size: 10px;\n  white-space: nowrap;\n  justify-content: flex-start;\n  max-width: 56px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (min-width: ', ') {\n    font-size: inherit;\n\n    padding-left: 10px;\n    display: block;\n\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n']),
    _templateObject4$6 = taggedTemplateLiteral(['\n  background-color: rgb(216, 27, 96);\n  border-radius: 16px;\n  line-height: 16px;\n  color: #fff;\n  width: 16px;\n  height: 16px;\n  font-size: 12px;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: ', ';\n  transition: ', ';\n'], ['\n  background-color: rgb(216, 27, 96);\n  border-radius: 16px;\n  line-height: 16px;\n  color: #fff;\n  width: 16px;\n  height: 16px;\n  font-size: 12px;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: ', ';\n  transition: ', ';\n']);

var borderThickness = defaults$1.borderThickness,
    defaultBreakpoint$1 = defaults$1.breakpoint;


var getIconColor = function getIconColor(_ref) {
  var isSelected = _ref.isSelected,
      isActive = _ref.isActive,
      palette = _ref.theme.palette;

  if (isActive && isSelected) {
    return palette.accent.light;
  }
  return palette.white;
};

/* eslint-disable indent */
var LinkDecorator = styled__default.div(_templateObject$C, function (_ref2) {
  var breakpoint = _ref2.breakpoint;
  return breakpoint;
}, function (_ref3) {
  var palette = _ref3.theme.palette;
  return palette.extraLightGrey;
}, function (_ref4) {
  var isSelected = _ref4.isSelected,
      isActive = _ref4.isActive,
      palette = _ref4.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.extraLightGrey;
}, buttonReset, GlobalMenuItemBase, function (_ref5) {
  var isSelected = _ref5.isSelected,
      isActive = _ref5.isActive,
      palette = _ref5.theme.palette;
  return isSelected && isActive ? palette.accent.light : '#c2c2c2';
}, function (_ref6) {
  var isSelected = _ref6.isSelected,
      isActive = _ref6.isActive,
      palette = _ref6.theme.palette;
  return isSelected && isActive ? borderThickness + ' solid ' + palette.accent.main : '0 solid transparent';
}, function (_ref7) {
  var palette = _ref7.theme.palette;
  return palette.primary.dark || '#15303f';
}, function (_ref8) {
  var transition = _ref8.theme.transition;
  return transition.defaultAll;
}, function (_ref9) {
  var palette = _ref9.theme.palette;
  return palette.pureWhite;
}, function (_ref10) {
  var isActive = _ref10.isActive,
      isSelected = _ref10.isSelected,
      palette = _ref10.theme.palette;
  return isSelected // eslint-disable-line no-nested-ternary
  ? isActive ? palette.primary.dark : palette.primary.light // child is slelected, means we can navigate there
  : palette.primary.light;
}, function (_ref11) {
  var isActive = _ref11.isActive,
      palette = _ref11.theme.palette;
  return isActive ? 'inherit' : palette.pureWhite;
}, function (_ref12) {
  var isSelected = _ref12.isSelected,
      palette = _ref12.theme.palette;
  return isSelected ? palette.primary.main : palette.primary.light;
}, function (_ref13) {
  var isSelected = _ref13.isSelected,
      isActive = _ref13.isActive,
      palette = _ref13.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref14) {
  var isSelected = _ref14.isSelected,
      isActive = _ref14.isActive,
      palette = _ref14.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.pureWhite;
}, function (props) {
  return getIconColor(props);
});
/* eslint-enable indent */

var GlobalMenuItemDiv = styled__default.a(_templateObject2$d, function (_ref15) {
  var breakpoint = _ref15.breakpoint;
  return breakpoint;
}, buttonReset, GlobalMenuItemBase, function (_ref16) {
  var palette = _ref16.theme.palette;
  return palette.extraLightGrey;
}, function (_ref17) {
  var isSelected = _ref17.isSelected,
      palette = _ref17.theme.palette;
  return isSelected ? palette.accent.light : palette.extraLightGrey;
}, function (_ref18) {
  var isSelected = _ref18.isSelected,
      palette = _ref18.theme.palette;
  return isSelected ? palette.accent.light : '#c2c2c2';
}, function (_ref19) {
  var isSelected = _ref19.isSelected,
      palette = _ref19.theme.palette;
  return isSelected ? borderThickness + ' solid ' + palette.accent.main : '0 solid transparent';
}, function (_ref20) {
  var palette = _ref20.theme.palette;
  return palette.primary.dark || '#15303f';
}, function (_ref21) {
  var transition = _ref21.theme.transition;
  return transition.defaultAll;
}, function (_ref22) {
  var palette = _ref22.theme.palette;
  return palette.pureWhite;
}, function (_ref23) {
  var isActive = _ref23.isActive,
      isSelected = _ref23.isSelected,
      palette = _ref23.theme.palette;
  return isSelected // eslint-disable-line no-nested-ternary
  ? isActive ? palette.primary.dark : palette.primary.light // child is slelected, means we can navigate there
  : palette.primary.light;
}, function (_ref24) {
  var isActive = _ref24.isActive,
      palette = _ref24.theme.palette;
  return isActive ? 'inherit' : palette.pureWhite;
}, function (_ref25) {
  var isSelected = _ref25.isSelected,
      palette = _ref25.theme.palette;
  return isSelected ? palette.primary.main : palette.primary.light;
}, function (_ref26) {
  var isSelected = _ref26.isSelected,
      isActive = _ref26.isActive,
      palette = _ref26.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref27) {
  var isSelected = _ref27.isSelected,
      isActive = _ref27.isActive,
      palette = _ref27.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.pureWhite;
}, function (props) {
  return getIconColor(props);
});

var GlobalMenuItemDivFinal = GlobalMenuItemDiv.withComponent('button');

var LabelDiv = styled__default.div(_templateObject3$8, function (_ref28) {
  var breakpoint = _ref28.breakpoint;
  return breakpoint;
});

var NewInfo = styled__default.div(_templateObject4$6, function (_ref29) {
  var isActive = _ref29.isActive,
      isSelected = _ref29.isSelected;
  return isActive || isSelected ? '5px' : '9px';
}, function (_ref30) {
  var transition = _ref30.theme.transition;
  return transition.defaultAll;
});

var GlobalMenuItem = function (_Component) {
  inherits(GlobalMenuItem, _Component);

  function GlobalMenuItem() {
    classCallCheck(this, GlobalMenuItem);
    return possibleConstructorReturn(this, (GlobalMenuItem.__proto__ || Object.getPrototypeOf(GlobalMenuItem)).apply(this, arguments));
  }

  createClass(GlobalMenuItem, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          isActive = _props.isActive,
          isSelected = _props.isSelected;


      if (isActive !== nextProps.isActive) {
        return true;
      }
      if (isSelected !== nextProps.isSelected) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isSelected = _props2.isSelected,
          icon = _props2.icon,
          index = _props2.index,
          dataKey = _props2.dataKey,
          hasNew = _props2.hasNew,
          label = _props2.label,
          onClick = _props2.onClick,
          isActive = _props2.isActive,
          primaryColor = _props2.primaryColor,
          Link = _props2.Link,
          to = _props2.to,
          href = _props2.href,
          breakpoint = _props2.breakpoint;


      var isNewContent = void 0;

      if (hasNew) {
        isNewContent = React__default.createElement(
          NewInfo,
          { isActive: isActive, isSelected: isSelected },
          '!'
        );
      }

      // render the tooltip inert when menu is in "wide" mode (labels are present, tooltip is useless)
      var rules = [{
        minWidth: 0,
        mapper: function mapper() {
          return {
            trigger: ['hover', 'focus']
          };
        }
      }, {
        minWidth: 100,
        mapper: function mapper() {
          return {
            trigger: [],
            visible: false // inject inexisting props
          };
        }
      }];

      var linkProps = {};
      if (Link !== undefined) {
        linkProps = { to: to };
      } else if (href) {
        linkProps = { href: href };
      }

      var resContent = void 0;

      resContent = React__default.createElement(
        GlobalMenuItemDivFinal,
        _extends({
          primaryColor: primaryColor,
          isSelected: isSelected,
          isActive: isActive,
          key: 'mainMenuItemContainer-' + dataKey
        }, linkProps, {
          onClick: onClick,
          breakpoint: breakpoint
        }),
        icon,
        React__default.createElement(
          LabelDiv,
          { breakpoint: breakpoint },
          ' ',
          label,
          ' '
        ),
        isNewContent
      );

      if (Link !== undefined) {
        resContent = React__default.createElement(
          LinkDecorator,
          {
            breakpoint: breakpoint,
            primaryColor: primaryColor,
            isSelected: isSelected,
            isActive: isActive,
            key: 'mainMenuItemContainer-' + index
          },
          React__default.createElement(
            Link,
            _extends({}, linkProps, {

              onClick: onClick
            }),
            icon,
            React__default.createElement(
              LabelDiv,
              { breakpoint: breakpoint },
              ' ',
              label,
              ' '
            ),
            isNewContent
          )
        );
      }

      return React__default.createElement(
        PropsMapperContainerQueries,
        {
          debounceDelay: 80,
          rules: rules,
          trigger: ['hover', 'focus'],
          placement: 'right',
          overlay: React__default.createElement('span', null),
          label: label
        },
        React__default.createElement(
          Tooltip,
          {
            placement: 'right',
            overlay: React__default.createElement(
              'span',
              null,
              label
            ),
            label: label,
            trigger: ['hover', 'focus']
          },
          resContent
        )
      );
    }
  }]);
  return GlobalMenuItem;
}(React.Component);

GlobalMenuItem.displayName = 'GlobalMenuItem';

GlobalMenuItem.propTypes = {
  isSelected: propTypes.bool,
  index: propTypes.string,
  hasNew: propTypes.bool,
  label: propTypes.node,
  onClick: propTypes.func,
  isActive: propTypes.bool,
  primaryColor: propTypes.string
};

GlobalMenuItem.defaultProps = {
  isSelected: false,
  index: '',
  hasNew: false,
  label: null,
  onClick: function onClick() {},
  isActive: false,
  primaryColor: '',
  breakpoint: defaultBreakpoint$1
};

var _templateObject$D = taggedTemplateLiteral(['\n  & a {\n\n    ', ';\n    display: flex;\n\n    z-index: 98;\n    position: relative;\n\n    & > * {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100%;\n    }\n\n    border-bottom:  ', ';\n\n    overflow: hidden;\n    color: #9a9fa5;\n    text-align: left;\n    padding: 16px 32px 4px 32px;\n    padding: ', ';\n    cursor: pointer;\n    background: ', ';\n    color: ', ';\n\n    &,\n    /* TODO fix tihs .root a situation */\n    .root & {\n      color: ', '\n    };\n    height: 0px;\n    max-height: 0px;\n    max-height: ', ';\n    height: ', ';\n    transition: ', ';\n\n    &, &:hover {\n      text-decoration: none;\n      color: #fff;\n    }\n\n    &:focus {\n      & { color: #fff; }\n      transition: inherit;\n      background: ', ';\n      color: ', ';\n    }\n\n    &:hover, &:hover:focus, &:hover:not(:focus) {\n      /* color: #fff; */\n      color: ', ';\n\n      background: ', ';\n      & {\n        color: ', ';\n      }\n    }\n\n\n    @media (max-width: ', ') {\n      display:none;\n    }\n\n    /** a11y */\n    ', ';\n  }\n'], ['\n  & a {\n\n    ', ';\n    display: flex;\n\n    z-index: 98;\n    position: relative;\n\n    & > * {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100%;\n    }\n\n    border-bottom:  ', ';\n\n    overflow: hidden;\n    color: #9a9fa5;\n    text-align: left;\n    padding: 16px 32px 4px 32px;\n    padding: ', ';\n    cursor: pointer;\n    background: ', ';\n    color: ', ';\n\n    &,\n    /* TODO fix tihs .root a situation */\n    .root & {\n      color: ', '\n    };\n    height: 0px;\n    max-height: 0px;\n    max-height: ', ';\n    height: ', ';\n    transition: ', ';\n\n    &, &:hover {\n      text-decoration: none;\n      color: #fff;\n    }\n\n    &:focus {\n      & { color: #fff; }\n      transition: inherit;\n      background: ', ';\n      color: ', ';\n    }\n\n    &:hover, &:hover:focus, &:hover:not(:focus) {\n      /* color: #fff; */\n      color: ', ';\n\n      background: ', ';\n      & {\n        color: ', ';\n      }\n    }\n\n\n    @media (max-width: ', ') {\n      display:none;\n    }\n\n    /** a11y */\n    ', ';\n  }\n']),
    _templateObject2$e = taggedTemplateLiteral(['\n  ', ';\n  display: flex;\n\n  z-index: 98;\n  position: relative;\n\n  & > * {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n  }\n\n  border-bottom:  ', ';\n\n  overflow: hidden;\n  color: #9a9fa5;\n  text-align: left;\n  padding: 16px 32px 4px 32px;\n  padding: ', ';\n  cursor: pointer;\n  background: ', ';\n  color: ', ';\n\n  &,\n  /* TODO fix tihs .root a situation */\n  .root & {\n    color: ', '\n  };\n  height: 0px;\n  max-height: 0px;\n  max-height: ', ';\n  height: ', ';\n  transition: ', ';\n\n  &, &:hover {\n    text-decoration: none;\n    color: #fff;\n  }\n\n  &:focus {\n    & { color: #fff; }\n    transition: inherit;\n    background: ', ';\n    color: ', ';\n  }\n\n  &:hover, &:hover:focus, &:hover:not(:focus) {\n    /* color: #fff; */\n    color: ', ';\n\n    background: ', ';\n    & {\n       color: ', ';\n     }\n  }\n\n\n  @media (max-width: ', ') {\n    display:none;\n  }\n\n  /** a11y */\n  ', ';\n'], ['\n  ', ';\n  display: flex;\n\n  z-index: 98;\n  position: relative;\n\n  & > * {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n  }\n\n  border-bottom:  ', ';\n\n  overflow: hidden;\n  color: #9a9fa5;\n  text-align: left;\n  padding: 16px 32px 4px 32px;\n  padding: ', ';\n  cursor: pointer;\n  background: ', ';\n  color: ', ';\n\n  &,\n  /* TODO fix tihs .root a situation */\n  .root & {\n    color: ', '\n  };\n  height: 0px;\n  max-height: 0px;\n  max-height: ', ';\n  height: ', ';\n  transition: ', ';\n\n  &, &:hover {\n    text-decoration: none;\n    color: #fff;\n  }\n\n  &:focus {\n    & { color: #fff; }\n    transition: inherit;\n    background: ', ';\n    color: ', ';\n  }\n\n  &:hover, &:hover:focus, &:hover:not(:focus) {\n    /* color: #fff; */\n    color: ', ';\n\n    background: ', ';\n    & {\n       color: ', ';\n     }\n  }\n\n\n  @media (max-width: ', ') {\n    display:none;\n  }\n\n  /** a11y */\n  ', ';\n']);

var defaultBreakpoint$2 = defaults$1.breakpoint;


var getAccessibilityRules = function getAccessibilityRules(_ref) {
  var isParentSelected = _ref.isParentSelected;

  if (isParentSelected) {
    return 'pointer-events: all; visibility: visible';
  }
  return 'pointer-events: none; visibility: collapse';
};

/* eslint-disable indent */
var LinkDecorator$1 = styled__default.div(_templateObject$D, buttonReset, function (_ref2) {
  var isLastSubItem = _ref2.isLastSubItem,
      palette = _ref2.theme.palette;
  return isLastSubItem ? '0px' : '.1px solid ' + darken(palette.accent.dark, 0.5);
}, function (_ref3) {
  var isParentSelected = _ref3.isParentSelected;
  return isParentSelected ? '16px 4px 16px 32px' : '0 32px';
}, function (_ref4) {
  var palette = _ref4.theme.palette;
  return darken(palette.primary.dark);
}, function (_ref5) {
  var isSelected = _ref5.isSelected,
      isActive = _ref5.isActive,
      palette = _ref5.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.lightGrey;
}, function (_ref6) {
  var isSelected = _ref6.isSelected,
      isActive = _ref6.isActive,
      palette = _ref6.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.lightGrey;
}, function (_ref7) {
  var isParentSelected = _ref7.isParentSelected;
  return isParentSelected ? '60px' : '0px';
}, function (_ref8) {
  var isParentSelected = _ref8.isParentSelected;
  return isParentSelected ? 'auto' : '0px';
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.transition.defaultAll;
}, function (_ref10) {
  var isSelected = _ref10.isSelected,
      palette = _ref10.theme.palette;
  return isSelected ? palette.primary.dark : palette.primary.light;
}, function (_ref11) {
  var isSelected = _ref11.isSelected,
      isActive = _ref11.isActive,
      palette = _ref11.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref12) {
  var isSelected = _ref12.isSelected,
      isActive = _ref12.isActive,
      palette = _ref12.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref13) {
  var isSelected = _ref13.isSelected,
      isActive = _ref13.isActive,
      palette = _ref13.theme.palette;
  return isSelected && isActive ? darken(palette.primary.dark) : palette.primary.light;
}, function (_ref14) {
  var isSelected = _ref14.isSelected,
      isActive = _ref14.isActive,
      palette = _ref14.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref15) {
  var breakpoint = _ref15.breakpoint;
  return breakpoint;
}, function (props) {
  return getAccessibilityRules(props);
});
/* eslint-enable indent */

var GlobalMenuSubItemDiv = styled__default.a(_templateObject2$e, buttonReset, function (_ref16) {
  var isLastSubItem = _ref16.isLastSubItem,
      palette = _ref16.theme.palette;
  return isLastSubItem ? '0px' : '.1px solid ' + darken(palette.accent.dark, 0.5);
}, function (_ref17) {
  var isParentSelected = _ref17.isParentSelected;
  return isParentSelected ? '16px 4px 16px 32px' : '0 32px';
}, function (_ref18) {
  var palette = _ref18.theme.palette;
  return darken(palette.primary.dark);
}, function (_ref19) {
  var isSelected = _ref19.isSelected,
      isActive = _ref19.isActive,
      palette = _ref19.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.lightGrey;
}, function (_ref20) {
  var isSelected = _ref20.isSelected,
      isActive = _ref20.isActive,
      palette = _ref20.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.lightGrey;
}, function (_ref21) {
  var isParentSelected = _ref21.isParentSelected;
  return isParentSelected ? '60px' : '0px';
}, function (_ref22) {
  var isParentSelected = _ref22.isParentSelected;
  return isParentSelected ? 'auto' : '0px';
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.transition.defaultAll;
}, function (_ref24) {
  var isSelected = _ref24.isSelected,
      palette = _ref24.theme.palette;
  return isSelected ? palette.primary.dark : palette.primary.light;
}, function (_ref25) {
  var isSelected = _ref25.isSelected,
      isActive = _ref25.isActive,
      palette = _ref25.theme.palette;
  return isSelected || isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref26) {
  var isSelected = _ref26.isSelected,
      isActive = _ref26.isActive,
      palette = _ref26.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref27) {
  var isSelected = _ref27.isSelected,
      isActive = _ref27.isActive,
      palette = _ref27.theme.palette;
  return isSelected && isActive ? darken(palette.primary.dark) : palette.primary.light;
}, function (_ref28) {
  var isSelected = _ref28.isSelected,
      isActive = _ref28.isActive,
      palette = _ref28.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.pureWhite;
}, function (_ref29) {
  var breakpoint = _ref29.breakpoint;
  return breakpoint;
}, function (props) {
  return getAccessibilityRules(props);
});

var GlobalMenuItemButton = GlobalMenuSubItemDiv.withComponent('button');

var GlobalMenuSubItem = function (_Component) {
  inherits(GlobalMenuSubItem, _Component);

  function GlobalMenuSubItem() {
    classCallCheck(this, GlobalMenuSubItem);
    return possibleConstructorReturn(this, (GlobalMenuSubItem.__proto__ || Object.getPrototypeOf(GlobalMenuSubItem)).apply(this, arguments));
  }

  createClass(GlobalMenuSubItem, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          isActive = _props.isActive,
          isSelected = _props.isSelected,
          isParentSelected = _props.isParentSelected;


      if (isActive !== nextProps.isActive) {
        return true;
      }
      if (isParentSelected !== nextProps.isParentSelected) {
        return true;
      }
      if (isSelected !== nextProps.isSelected) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onClick = _props2.onClick,
          isSelected = _props2.isSelected,
          isActive = _props2.isActive,
          isParentSelected = _props2.isParentSelected,
          isFirstSubItem = _props2.isFirstSubItem,
          isLastSubItem = _props2.isLastSubItem,
          primaryColor = _props2.primaryColor,
          label = _props2.label,
          Link = _props2.Link,
          to = _props2.to,
          href = _props2.href,
          breakpoint = _props2.breakpoint;


      var linkProps = {};
      if (Link !== undefined) {
        // const GlobalMenuItemDivFinal = Link; // shadow
        linkProps = { to: to };
      } else if (href) {
        linkProps = { href: href };
      }

      // const attributes = {
      //   ...(!isParentSelected
      //     ? { tabIndex: -1, 'aria-hidden': 'true', role: 'navigation' }
      //     : { tabIndex: 0, 'aria-hidden': 'false', role: 'navigation' }
      //   ),
      // };

      var resContent = React__default.createElement(
        GlobalMenuItemButton,
        _extends({
          breakpoint: breakpoint,
          isFirstSubItem: isFirstSubItem,
          isLastSubItem: isLastSubItem,
          primaryColor: primaryColor,
          isSelected: isSelected,
          isActive: isActive,
          key: 'mainMenuItemContainer-' + label
          // style={containerStyle}
        }, linkProps, {
          onClick: onClick,
          isParentSelected: isParentSelected
        }),
        label
      );

      if (Link) {
        resContent = React__default.createElement(
          LinkDecorator$1,
          {
            breakpoint: breakpoint,
            isFirstSubItem: isFirstSubItem,
            isLastSubItem: isLastSubItem,
            primaryColor: primaryColor,
            isSelected: isSelected,
            isActive: isActive,
            key: 'mainMenuItemContainer-' + label,
            isParentSelected: isParentSelected
            // style={containerStyle}
          },
          React__default.createElement(
            Link,
            _extends({}, linkProps, {
              onClick: onClick
            }),
            label
          )
        );
      }

      return resContent;
    }
  }]);
  return GlobalMenuSubItem;
}(React.Component);

GlobalMenuSubItem.displayName = 'GlobalMenuSubItem';

GlobalMenuSubItem.defaultProps = {
  breakpoint: defaultBreakpoint$2
};

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty$6 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols$1) {
            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$6(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var dist = function enhanceWithClickOutside(WrappedComponent) {
  var componentName = WrappedComponent.displayName || WrappedComponent.name;

  var EnhancedComponent = function (_React$Component) {
    _inherits$1(EnhancedComponent, _React$Component);

    function EnhancedComponent(props) {
      _classCallCheck$1(this, EnhancedComponent);

      var _this = _possibleConstructorReturn$1(this, (EnhancedComponent.__proto__ || Object.getPrototypeOf(EnhancedComponent)).call(this, props));

      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }

    _createClass$1(EnhancedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(e) {
        var domNode = this.__domNode;
        if ((!domNode || !domNode.contains(e.target)) && typeof this.__wrappedComponent.handleClickOutside === 'function') {
          this.__wrappedComponent.handleClickOutside(e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            wrappedRef = _props.wrappedRef,
            rest = _objectWithoutProperties$1(_props, ['wrappedRef']);

        return React__default.createElement(WrappedComponent, _extends$3({}, rest, {
          ref: function ref(c) {
            _this2.__wrappedComponent = c;
            _this2.__domNode = ReactDOM__default.findDOMNode(c);
            wrappedRef && wrappedRef(c);
          }
        }));
      }
    }]);

    return EnhancedComponent;
  }(React__default.Component);

  EnhancedComponent.displayName = 'clickOutside(' + componentName + ')';

  return hoistNonReactStatics(EnhancedComponent, WrappedComponent);
};

var GlobalMenuPanelStyle = {
  titleContainer: {
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: '24px 20px 0 24px',
    textAlign: 'left',
    position: 'relative',
    marginBottom: '-7px'
  },
  action: {
    position: 'absolute',
    right: '15px',
    top: '25px'
  },
  title: {
    color: '#565656',
    display: 'inline-block',
    verticalAlign: 'top',
    fontSize: '21px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    fontWeight: 300,
    lineHeight: '26px'
  }
};

var _templateObject$E = taggedTemplateLiteral(['\n  position: ', ';\n  top: 0;\n  top: ', ';\n  bottom: 0;\n  bottom: ', ';\n  margin-left: 0px;\n  background: #fff;\n  border-right: 1px solid #ececec;\n  border-left: 1px solid #ececec;\n  transition: width 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;\n  z-index: 90;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: ', '; /* in case 680 was passed */\n  width: ', '; /* in case auto was passed */\n  width: ', ';\n  will-change: transform;\n  transform: ', ';\n  transition: ', ';\n\n  @media (min-width: ', ') {\n    width: ', '; /* in case auto was passed */\n    width: ', ';\n    transform: ', ';\n    transition: ', ';\n  }\n\n  /* render inert when not visible */\n  /* ', '; */\n  ', ';\n'], ['\n  position: ', ';\n  top: 0;\n  top: ', ';\n  bottom: 0;\n  bottom: ', ';\n  margin-left: 0px;\n  background: #fff;\n  border-right: 1px solid #ececec;\n  border-left: 1px solid #ececec;\n  transition: width 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;\n  z-index: 90;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: ', '; /* in case 680 was passed */\n  width: ', '; /* in case auto was passed */\n  width: ', ';\n  will-change: transform;\n  transform: ', ';\n  transition: ', ';\n\n  @media (min-width: ', ') {\n    width: ', '; /* in case auto was passed */\n    width: ', ';\n    transform: ', ';\n    transition: ', ';\n  }\n\n  /* render inert when not visible */\n  /* ', '; */\n  ', ';\n']);

var breakpoint$1 = defaults$1.breakpoint,
    bigMenuWidth$1 = defaults$1.bigMenuWidth,
    menuWidth$1 = defaults$1.menuWidth;

// eslint-disable-next-line no-unused-vars

var getWidth = function getWidth(_ref, breakpoint) {
  var isOpen = _ref.isOpen,
      panelWidth = _ref.panelWidth,
      fullWidth = _ref.fullWidth,
      attachToViewport = _ref.attachToViewport,
      fullViewportWidthPanel = _ref.fullViewportWidthPanel;
  // eslint-disable-line no-shadow
  var theMenuWidth = breakpoint === 'desktop' ? bigMenuWidth$1 : menuWidth$1;
  var unit = fullViewportWidthPanel ? 'vw' : '%';

  if (fullWidth) {
    // if (fullViewportWidthPanel) {
    // return `calc(100vw - ${theMenuWidth})` // yep it's weird, layout context stuff...
    // }
    // return '100%';
    return 'calc(100' + unit + ' - ' + theMenuWidth + ')';
  }

  return panelWidth + 'px';
};

// eslint-disable-next-line no-shadow
var getTransform = function getTransform(_ref2, breakpoint) {
  var panelWidth = _ref2.panelWidth,
      fullWidth = _ref2.fullWidth,
      isOpen = _ref2.isOpen;

  var x = panelWidth;
  // const theMenuWidth = breakpoint === 'desktop' ? bigMenuWidth : menuWidth;

  if (isOpen) {
    if (breakpoint === 'desktop') {
      x = bigMenuWidth$1;
    } else {
      x = menuWidth$1;
    }
  } else if (fullWidth) {
    // x = `calc(-100vh - ${theMenuWidth})`;
    x = '-100vw';
  } else {
    // x = `calc(-${width}px)`;
    x = '-' + panelWidth + 'px';
  }

  return 'translate3d(' + x + ', 0, 0)';
};

var getAccessibilityRules$1 = function getAccessibilityRules(_ref3) {
  var isOpen = _ref3.isOpen;

  if (isOpen) {
    return 'pointer-events: all; visibility: visible';
  }
  return 'pointer-events: none; visibility: collapse';
};

var GlobalMenuPanelWrapper = styled__default.div(_templateObject$E, function (_ref4) {
  var attachToViewport = _ref4.attachToViewport;
  return attachToViewport ? 'fixed' : 'absolute';
}, function (_ref5) {
  var panelOffsetTop = _ref5.panelOffsetTop;
  return panelOffsetTop;
}, function (_ref6) {
  var panelOffsetBottom = _ref6.panelOffsetBottom;
  return panelOffsetBottom;
}, function (_ref7) {
  var panelWidth = _ref7.panelWidth;
  return panelWidth + 'px';
}, function (_ref8) {
  var panelWidth = _ref8.panelWidth;
  return panelWidth;
}, function (props) {
  return getWidth(props);
}, function (props) {
  return getTransform(props);
}, function (_ref9) {
  var transition = _ref9.theme.transition;
  return transition.defaultAll;
}, breakpoint$1, function (_ref10) {
  var panelWidth = _ref10.panelWidth;
  return panelWidth;
}, function (props) {
  return getWidth(props, 'desktop');
}, function (props) {
  return getTransform(props, 'desktop');
}, function (_ref11) {
  var transition = _ref11.theme.transition;
  return transition.defaultAll;
}, function (_ref12) {
  var isOpen = _ref12.isOpen;
  return isOpen ? '' : 'pointer-events: none; visibility: hidden';
}, function (props) {
  return getAccessibilityRules$1(props);
});

var GlobalMenuPanel = function (_Component) {
  inherits(GlobalMenuPanel, _Component);

  function GlobalMenuPanel() {
    classCallCheck(this, GlobalMenuPanel);
    return possibleConstructorReturn(this, (GlobalMenuPanel.__proto__ || Object.getPrototypeOf(GlobalMenuPanel)).apply(this, arguments));
  }

  createClass(GlobalMenuPanel, [{
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      var _props = this.props,
          onClickOutside = _props.onClickOutside,
          isOpen = _props.isOpen;

      if (isOpen) {
        if (onClickOutside) {
          onClickOutside();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isOpen = _props2.isOpen,
          Title = _props2.Title,
          Content = _props2.Content,
          Action = _props2.Action,
          width = _props2.width,
          onClickOutside = _props2.onClickOutside,
          fullWidth = _props2.fullWidth,
          attachToViewport = _props2.attachToViewport,
          fullViewportWidthPanel = _props2.fullViewportWidthPanel,
          panelOffsetTop = _props2.panelOffsetTop,
          panelOffsetBottom = _props2.panelOffsetBottom;

      var actionContent = void 0;
      var closeContent = void 0;

      if (fullWidth) {
        closeContent = React__default.createElement(Close, {
          style: { marginLeft: '15px', cursor: 'pointer' },
          onClick: onClickOutside
        });
      }

      if (Action) {
        actionContent = React__default.createElement(
          'div',
          { style: GlobalMenuPanelStyle.action },
          React__default.createElement(Action, { close: onClickOutside }),
          closeContent
        );
      }

      if (!Action && fullWidth) {
        actionContent = React__default.createElement(
          'div',
          { style: GlobalMenuPanelStyle.action },
          closeContent
        );
      }

      var isTitleString = Title && typeof Title === 'string';
      var title = Title;

      var attributes = _extends({}, !isOpen ? { tabIndex: -1, 'aria-hidden': 'true' } : { tabIndex: 0, autofocus: 'true' });

      return React__default.createElement(
        GlobalMenuPanelWrapper,
        _extends({
          className: 'rc-GlobalMenuPanelWrapper',
          panelOffsetTop: panelOffsetTop,
          panelOffsetBottom: panelOffsetBottom,
          isOpen: isOpen,
          panelWidth: width,
          fullWidth: fullWidth,
          attachToViewport: attachToViewport,
          fullViewportWidthPanel: fullViewportWidthPanel
        }, attributes),
        React__default.createElement(
          'div',
          { style: GlobalMenuPanelStyle.titleContainer },
          actionContent,
          React__default.createElement(
            'div',
            { style: GlobalMenuPanelStyle.title },
            Title && !isTitleString && React__default.createElement(Title, { close: onClickOutside }),
            Title && isTitleString && title
          )
        ),
        React__default.createElement(
          'div',
          { style: GlobalMenuPanelStyle.panel },
          Content && React__default.createElement(Content, { close: onClickOutside })
        )
      );
    }
  }]);
  return GlobalMenuPanel;
}(React.Component);

GlobalMenuPanel.propTypes = {
  onClickOutside: propTypes.func,
  isOpen: propTypes.bool,
  Title: propTypes.any,
  Content: propTypes.any,
  Action: propTypes.any,
  width: propTypes.number,
  fullWidth: propTypes.bool,
  attachToViewport: propTypes.bool,
  fullViewportWidthPanel: propTypes.bool,
  panelOffsetTop: propTypes.string,
  panelOffsetBottom: propTypes.string

};

GlobalMenuPanel.defaultProps = {
  width: 400,
  attachToViewport: false,
  onClickOutside: function onClickOutside() {},
  isOpen: false,
  Title: null,
  Content: null,
  Action: null,
  fullWidth: false,
  fullViewportWidthPanel: false,
  panelOffsetTop: '0px',
  panelOffsetBottom: '0px'
};

var GlobalMenuPanel$1 = dist(GlobalMenuPanel);

var _templateObject$F = taggedTemplateLiteral(['\n  position: absolute;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 97;\n  height: 100%;\n  background: ', ';\n'], ['\n  position: absolute;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 97;\n  height: 100%;\n  background: ', ';\n']);

var FlexExtended = Flex.extend(_templateObject$F, function (_ref) {
  var palette = _ref.theme.palette;
  return palette.primary.dark || '#15303f';
});

var GlobalMenuWrapper = function GlobalMenuWrapper(_ref2) {
  var selectedKey = _ref2.selectedKey,
      logo = _ref2.logo,
      backgroundColor = _ref2.backgroundColor,
      primaryColor = _ref2.primaryColor,
      menuDescriptors = _ref2.menuDescriptors,
      attachToViewport = _ref2.attachToViewport,
      innerStyle = _ref2.innerStyle,
      fullViewportWidthPanel = _ref2.fullViewportWidthPanel,
      handlePanelClickOutside = _ref2.handlePanelClickOutside,
      breakpoint = _ref2.breakpoint,
      menuWidth = _ref2.menuWidth,
      bigMenuWidth = _ref2.bigMenuWidth,
      panelOffsetTop = _ref2.panelOffsetTop,
      panelOffsetBottom = _ref2.panelOffsetBottom;

  var menuDescriptorsContent = [];

  (menuDescriptors || []).forEach(function (menuDescriptor) {
    menuDescriptorsContent.push(React__default.createElement(GlobalMenuItem, {
      breakpoint: breakpoint,
      key: menuDescriptor.key + '-rootitem',
      isSelected: menuDescriptor.isSelected,
      isActive: menuDescriptor.isActive,
      onClick: function onClick() {
        if (menuDescriptor.onClick && menuDescriptor.onClick) {
          menuDescriptor.onClick();
        }
      },
      hasNew: menuDescriptor.hasNew,
      label: menuDescriptor.displayName,
      index: menuDescriptor.key,
      dataKey: menuDescriptor.key,
      icon: menuDescriptor.icon,
      Link: menuDescriptor.Link,
      to: menuDescriptor.to,
      href: menuDescriptor.href,
      primaryColor: primaryColor,
      hasPanel: !!menuDescriptor.panel
    }));

    if (menuDescriptor.children && menuDescriptor.children.length > 0) {
      menuDescriptor.children.forEach(function (child, idx, list) {
        menuDescriptorsContent.push(React__default.createElement(GlobalMenuSubItem, {
          breakpoint: breakpoint,
          isFirstSubItem: idx === 0,
          isLastSubItem: idx === list.length - 1,
          key: menuDescriptor.key + '-subitem-' + child.key,
          isSelected: child.isSelected,
          isParentSelected: menuDescriptor.isSelected,
          isActive: child.isActive,
          onClick: child.onClick,
          hasNew: child.hasNew,
          content: child.content,
          label: child.displayName,
          index: child.key,
          primaryColor: primaryColor,
          Link: child.Link,
          to: child.to,
          href: child.href
        }));
      });
    }

    if (menuDescriptor && menuDescriptor.panel) {
      menuDescriptorsContent.push(
      /* this wrapper div required for layout context */
      React__default.createElement(
        'div',
        {
          key: menuDescriptor.key + '-panel-' + menuDescriptor.panel.key
        },
        React__default.createElement(GlobalMenuPanel$1, {
          panelOffsetTop: panelOffsetTop,
          panelOffsetBottom: panelOffsetBottom,
          onClickOutside: function onClickOutside() {
            handlePanelClickOutside(menuDescriptor.key);
          },
          Title: menuDescriptor.panel.Title,
          Content: menuDescriptor.panel.Content,
          Action: menuDescriptor.panel.Action,
          width: menuDescriptor.panel.width,
          fullWidth: menuDescriptor.panel.fullWidth,
          isOpen: menuDescriptor.key === selectedKey,
          attachToViewport: attachToViewport,
          fullViewportWidthPanel: fullViewportWidthPanel
        })
      ));
    }
  });

  var gapFiller = React__default.createElement(FlexExtended, { key: 'single-gap-filler' });

  return React__default.createElement(
    GlobalMenuContainer,
    {
      breakpoint: breakpoint,
      menuWidth: menuWidth,
      bigMenuWidth: bigMenuWidth,
      backgroundColor: backgroundColor,
      attachToViewport: attachToViewport,
      innerStyle: innerStyle,
      fullViewportWidthPanel: fullViewportWidthPanel
    },
    logo,
    menuDescriptorsContent,
    fullViewportWidthPanel && gapFiller
  );
};

GlobalMenuWrapper.propTypes = {
  selectedKey: propTypes.string,
  logo: propTypes.node,
  backgroundColor: propTypes.string,
  primaryColor: propTypes.string,
  menuDescriptors: propTypes.array
};

GlobalMenuWrapper.defaultProps = {
  selectedKey: '',
  activeKey: '',
  logo: null,
  backgroundColor: '',
  primaryColor: '',
  menuDescriptors: []
};

var _templateObject$G = taggedTemplateLiteral(['\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n\n  & a {\n    ', ';\n    z-index: 99;\n    height: 48px; /* harcoding height because */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ', ';\n    width: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    margin: 0 auto;\n    padding: 8px 0;\n    position: relative;\n    background: ', ';\n    transition: ', ';\n    &:hover {\n      color: ', ';\n      background: ', ';\n      transition: inherit;\n      svg {\n        fill: #fff;\n      }\n    }\n    &:focus {\n      color: ', ';\n      transition: inherit;\n      background: ', ';\n      svg {\n        fill: #fff;\n      }\n    }\n    svg {\n      fill: ', ';\n    }\n    @media (min-width: ', ') {\n      justify-content: flex-start;\n      padding: 0 24px;\n    }\n    /** a11y */\n    ', ';\n  }\n'], ['\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n\n  & a {\n    ', ';\n    z-index: 99;\n    height: 48px; /* harcoding height because */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ', ';\n    width: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    margin: 0 auto;\n    padding: 8px 0;\n    position: relative;\n    background: ', ';\n    transition: ', ';\n    &:hover {\n      color: ', ';\n      background: ', ';\n      transition: inherit;\n      svg {\n        fill: #fff;\n      }\n    }\n    &:focus {\n      color: ', ';\n      transition: inherit;\n      background: ', ';\n      svg {\n        fill: #fff;\n      }\n    }\n    svg {\n      fill: ', ';\n    }\n    @media (min-width: ', ') {\n      justify-content: flex-start;\n      padding: 0 24px;\n    }\n    /** a11y */\n    ', ';\n  }\n']),
    _templateObject2$f = taggedTemplateLiteral(['\n  ', ';\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n\n  z-index: 99;\n  height: 48px; /* harcoding height because */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ', ';\n  width: 100%;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 8px 0;\n  position: relative;\n  background: ', ';\n  transition: ', ';\n  &:hover {\n    color: ', ';\n    background: ', ';\n    transition: inherit;\n    svg {\n      fill: #fff;\n    }\n  }\n  &:focus {\n    color: ', ';\n    transition: inherit;\n    background: ', ';\n    svg {\n      fill: #fff;\n    }\n  }\n  svg {\n    fill: ', ';\n  }\n  @media (min-width: ', ') {\n    justify-content: flex-start;\n    padding: 0 24px;\n  }\n  /** a11y */\n  ', ';\n'], ['\n  ', ';\n  html body & svg,\n  html body & svg > svg {\n    /* fill: ', '; */\n    fill: ', ';\n  }\n\n  z-index: 99;\n  height: 48px; /* harcoding height because */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ', ';\n  width: 100%;\n  box-sizing: border-box;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 8px 0;\n  position: relative;\n  background: ', ';\n  transition: ', ';\n  &:hover {\n    color: ', ';\n    background: ', ';\n    transition: inherit;\n    svg {\n      fill: #fff;\n    }\n  }\n  &:focus {\n    color: ', ';\n    transition: inherit;\n    background: ', ';\n    svg {\n      fill: #fff;\n    }\n  }\n  svg {\n    fill: ', ';\n  }\n  @media (min-width: ', ') {\n    justify-content: flex-start;\n    padding: 0 24px;\n  }\n  /** a11y */\n  ', ';\n']),
    _templateObject3$9 = taggedTemplateLiteral(['\n  display: none;\n  width: 52px;\n  @media (min-width: ', ') {\n    display: block;\n    /* padding-left: 3px; */\n  }\n'], ['\n  display: none;\n  width: 52px;\n  @media (min-width: ', ') {\n    display: block;\n    /* padding-left: 3px; */\n  }\n']);

var breakpoint$2 = defaults$1.breakpoint;


var getIconColor$1 = function getIconColor(_ref) {
  var isSelected = _ref.isSelected,
      isActive = _ref.isActive,
      palette = _ref.theme.palette;

  if (isActive && isSelected) {
    return palette.accent.light;
  }

  return palette.lightGrey;
};

var LinkDecorator$2 = styled__default.div(_templateObject$G, function (_ref2) {
  var palette = _ref2.theme.palette;
  return palette.extraLightGrey;
}, function (_ref3) {
  var isSelected = _ref3.isSelected,
      isActive = _ref3.isActive,
      palette = _ref3.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.extraLightGrey;
}, buttonReset, function (_ref4) {
  var isSelected = _ref4.isSelected,
      isActive = _ref4.isActive,
      theme = _ref4.theme;
  return isSelected || isActive ? theme.palette.pureWhite : theme.palette.lightGrey;
}, function (_ref5) {
  var palette = _ref5.theme.palette;
  return palette.primary.main || '#1b3c4f';
}, function (_ref6) {
  var transition = _ref6.theme.transition;
  return transition.defaultAll;
}, function (_ref7) {
  var palette = _ref7.theme.palette;
  return palette.pureWhite;
}, function (_ref8) {
  var isActive = _ref8.isActive,
      isSelected = _ref8.isSelected,
      palette = _ref8.theme.palette;
  return !isActive && !isSelected ? palette.primary.light : palette.primary.dark;
}, function (_ref9) {
  var palette = _ref9.theme.palette;
  return palette.pureWhite;
}, function (_ref10) {
  var isActive = _ref10.isActive,
      isSelected = _ref10.isSelected,
      palette = _ref10.theme.palette;
  return !isActive && !isSelected ? palette.primary.light : palette.primary.dark;
}, function (props) {
  return getIconColor$1(props);
}, breakpoint$2, GlobalMenuItemBase);

var GlobalMenuLogoDiv = styled__default.a(_templateObject2$f, buttonReset, function (_ref11) {
  var palette = _ref11.theme.palette;
  return palette.extraLightGrey;
}, function (_ref12) {
  var isSelected = _ref12.isSelected,
      isActive = _ref12.isActive,
      palette = _ref12.theme.palette;
  return isSelected && isActive ? palette.accent.light : palette.extraLightGrey;
}, function (_ref13) {
  var isSelected = _ref13.isSelected,
      isActive = _ref13.isActive,
      theme = _ref13.theme;
  return isSelected || isActive ? theme.palette.pureWhite : theme.palette.lightGrey;
}, function (_ref14) {
  var palette = _ref14.theme.palette;
  return palette.primary.main || '#1b3c4f';
}, function (_ref15) {
  var transition = _ref15.theme.transition;
  return transition.defaultAll;
}, function (_ref16) {
  var palette = _ref16.theme.palette;
  return palette.pureWhite;
}, function (_ref17) {
  var isActive = _ref17.isActive,
      isSelected = _ref17.isSelected,
      palette = _ref17.theme.palette;
  return !isActive && !isSelected ? palette.primary.light : palette.primary.dark;
}, function (_ref18) {
  var palette = _ref18.theme.palette;
  return palette.pureWhite;
}, function (_ref19) {
  var isActive = _ref19.isActive,
      isSelected = _ref19.isSelected,
      palette = _ref19.theme.palette;
  return !isActive && !isSelected ? palette.primary.light : palette.primary.dark;
}, function (props) {
  return getIconColor$1(props);
}, breakpoint$2, GlobalMenuItemBase);

var LabelDiv$1 = styled__default.div(_templateObject3$9, breakpoint$2);

var GlobalMenuLogo = function (_Component) {
  inherits(GlobalMenuLogo, _Component);

  function GlobalMenuLogo() {
    classCallCheck(this, GlobalMenuLogo);
    return possibleConstructorReturn(this, (GlobalMenuLogo.__proto__ || Object.getPrototypeOf(GlobalMenuLogo)).apply(this, arguments));
  }

  createClass(GlobalMenuLogo, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          isActive = _props.isActive,
          isSelected = _props.isSelected;


      if (isActive !== nextProps.isActive) {
        return true;
      }
      if (isSelected !== nextProps.isSelected) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          icon = _props2.icon,
          label = _props2.label,
          Link = _props2.Link,
          to = _props2.to,
          href = _props2.href,
          onClick = _props2.onClick,
          primaryColor = _props2.primaryColor,
          logoTooltipLabel = _props2.logoTooltipLabel,
          isActive = _props2.isActive;

      var containerStyle = void 0;

      var linkProps = {};
      if (Link !== undefined) {
        linkProps = { to: to };
      } else if (href) {
        linkProps = { href: href };
      }

      // render the tooltip inert above window width of 699px
      var rules = [{
        minWidth: 100,
        mapper: function mapper() {
          return { trigger: [] };
        }
      }];

      var resContent = React__default.createElement(
        GlobalMenuLogoDiv,
        _extends({}, linkProps, {
          primaryColor: primaryColor,
          key: 'mainMenuItemContainer-' + label,
          style: containerStyle,
          onClick: onClick,
          isActive: isActive
        }),
        icon,
        React__default.createElement(
          LabelDiv$1,
          null,
          ' ',
          label,
          ' '
        )
      );

      if (Link) {
        resContent = React__default.createElement(
          LinkDecorator$2,
          _extends({}, linkProps, {
            primaryColor: primaryColor,
            key: 'mainMenuItemContainer-' + label,
            style: containerStyle,
            onClick: onClick,
            isActive: isActive
          }),
          React__default.createElement(
            Link,
            linkProps,
            icon,
            React__default.createElement(
              LabelDiv$1,
              null,
              ' ',
              label,
              ' '
            )
          )
        );
      }

      return React__default.createElement(
        PropsMapperContainerQueries,
        { rules: rules, trigger: ['hover'], debounceDelay: 120 },
        React__default.createElement(
          Tooltip,
          { placement: 'right', overlay: React__default.createElement(
              'span',
              null,
              logoTooltipLabel || label || ''
            ) },
          resContent
        )
      );
    }
  }]);
  return GlobalMenuLogo;
}(React.Component);

GlobalMenuLogo.displayName = 'GlobalMenuLogo';

GlobalMenuLogo.propTypes = {
  // isSelected: PropTypes.bool,
  icon: propTypes.any,
  // index: PropTypes.string,
  // hasNew: PropTypes.bool,
  label: propTypes.node,
  onClick: propTypes.func,
  isActive: propTypes.bool,
  primaryColor: propTypes.string
};

GlobalMenuLogo.defaultProps = {
  // isSelected: false,
  icon: null,
  // index: '',
  // hasNew: false,
  label: null,
  onClick: function onClick() {},
  isActive: false,
  primaryColor: ''
};

var GlobalMenu = function (_Component) {
  inherits(GlobalMenu, _Component);

  function GlobalMenu(props) {
    classCallCheck(this, GlobalMenu);

    var _this = possibleConstructorReturn(this, (GlobalMenu.__proto__ || Object.getPrototypeOf(GlobalMenu)).call(this, props));

    var initialSelected = props.initialSelected;
    var firstActiveMaybe = _this.getFirstActiveFoundMaybe();
    _this.state = {
      selected: initialSelected || firstActiveMaybe || ''
    };
    return _this;
  }

  createClass(GlobalMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var firstActiveFound = this.getFirstActiveFoundMaybe();

      if (firstActiveFound) {
        var activeChild = firstActiveFound && firstActiveFound.children && firstActiveFound.children.find(function (child) {
          return child.isActive;
        });

        if (activeChild) {
          this.changeSelected(activeChild.key);
        } else {
          this.changeSelected(firstActiveFound.key);
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var menuDescriptor = this.props.menuDescriptor;


      if (!isEqual_1(nextProps.menuDescriptor) !== menuDescriptor) {
        return true;
      }

      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var selected = this.state.selected;


      if (prevProps.menuDescriptors !== this.props.menuDescriptors) {
        var firstActive = this.getFirstActiveFoundMaybe();
        if (!firstActive) {
          this.changeSelected('');
        } else {
          if (firstActive.key !== selected) {
            // eslint-disable-line
            this.changeSelected(firstActive.key);
          }
        }
      }
    }
  }, {
    key: 'getFirstActiveFoundMaybe',
    value: function getFirstActiveFoundMaybe() {
      var menuDescriptors = this.props.menuDescriptors;


      var activeMaybe = menuDescriptors.find(function (menuDescriptor) {
        var hasChildren = menuDescriptor.children;
        return menuDescriptor.isActive === true || hasChildren && menuDescriptor.children.find(function (child) {
          return child.isActive;
        });
      });

      if (activeMaybe && activeMaybe.key) {
        return activeMaybe.key;
      }
      return null;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(key) {
      var selected = this.state.selected;


      return selected === key;
    }
  }, {
    key: 'changeSelected',
    value: function changeSelected(value) {
      this.setState({
        selected: value
      });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(value) {
      var newSelectedKeyValue = value === this.state.selected ? '' : this.state.selected;

      this.setState({
        selected: newSelectedKeyValue
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          menuDescriptors = _props.menuDescriptors,
          onLogoClick = _props.onLogoClick,
          logoDescriptor = _props.logoDescriptor,
          attachToViewport = _props.attachToViewport,
          style = _props.style,
          breakpoint = _props.breakpoint,
          menuWidth = _props.menuWidth,
          bigMenuWidth = _props.bigMenuWidth,
          innerStyle = _props.innerStyle,
          fullViewportWidthPanelProp = _props.fullViewportWidthPanel,
          panelOffsetTop = _props.panelOffsetTop,
          panelOffsetBottom = _props.panelOffsetBottom;


      var fullViewportWidthPanel = attachToViewport ? true : fullViewportWidthPanelProp;

      var selected = this.state.selected;


      var menuDescriptorWithActiveAndSelected = (menuDescriptors || []).map(function (menuDescriptor) {
        var isSelected = _this2.getSelected(menuDescriptor.key);
        var menuDescriptorChildren = [];
        var isMenuSelected = void 0;

        if (menuDescriptor.children) {
          menuDescriptor.children.forEach(function (m) {
            var isChildrenSelected = _this2.getSelected(m.key);
            if (isChildrenSelected) {
              isMenuSelected = true;
            }

            var children = menuDescriptor.children,
                menuDescriptorProps = objectWithoutProperties(menuDescriptor, ['children']);


            menuDescriptorChildren.push(_extends({}, menuDescriptorProps, m, { // not react children
              isSelected: isChildrenSelected,
              isOpen: !!(isChildrenSelected && m.panel && m.panel.Content),
              onClick: function onClick() {
                _this2.changeSelected(m.key);
                if (m.onClick) {
                  m.onClick();
                }
              }
            }));
          });
        }

        return _extends({}, menuDescriptor, {
          isSelected: isSelected || isMenuSelected || menuDescriptor.isActive,
          isOpen: !!(isSelected && menuDescriptor.panel && menuDescriptor.panel.Content),
          onClick: function onClick() {
            _this2.changeSelected(menuDescriptor.key);
            if (menuDescriptor.onClick) {
              menuDescriptor.onClick();
            }
          },
          children: menuDescriptorChildren
        });
      });

      var theLogo = logoDescriptor && React__default.createElement(GlobalMenuLogo, {

        key: logoDescriptor.key || 'GlobalMenuMainLogo',
        label: logoDescriptor.displayName || '',
        icon: logoDescriptor.icon,
        Link: logoDescriptor.Link,
        to: logoDescriptor.to,
        href: logoDescriptor.href,
        logoTooltipLabel: logoDescriptor.tooltipLabel || logoDescriptor.displayName || '',
        selectedKey: selected,
        onClick: function onClick() {
          _this2.changeSelected(logoDescriptor.key || 'GlobalMenuMainLogo');
          if (logoDescriptor.onClick) {
            logoDescriptor.onClick();
          }
        }
      });

      var layoutContext = attachToViewport ? { position: 'fixed', zIndex: 80, top: 0, left: 0, bottom: 0, overflowX: 'hidden' } : _extends({ position: 'relative' }, fullViewportWidthPanel ? {} : { overflowX: 'hidden' });

      return React__default.createElement(
        'div',
        { style: _extends({}, layoutContext, style) },
        React__default.createElement(
          'div',
          null,
          React__default.createElement(GlobalMenuWrapper, {
            breakpoint: breakpoint,
            menuWidth: menuWidth,
            bigMenuWidth: bigMenuWidth,
            panelOffsetTop: panelOffsetTop,
            panelOffsetBottom: panelOffsetBottom,
            logo: theLogo,
            onLogoClick: onLogoClick,
            selectedKey: selected,
            menuDescriptors: menuDescriptorWithActiveAndSelected,
            attachToViewport: attachToViewport,
            innerStyle: innerStyle,
            fullViewportWidthPanel: fullViewportWidthPanel,
            handlePanelClickOutside: this.handleClickOutside.bind(this)
          })
        )
      );
    }
  }]);
  return GlobalMenu;
}(React.Component);

GlobalMenu.propTypes = {
  // initialActive: PropTypes.string,
  initialSelected: propTypes.string,
  onLogoClick: propTypes.func,
  // backgroundColor: PropTypes.string,
  // Logo: PropTypes.any,
  // primaryColor: PropTypes.string,
  menuDescriptors: propTypes.array,
  style: propTypes.object,
  panelOffsetTop: propTypes.string,
  panelOffsetBottom: propTypes.string
};

GlobalMenu.defaultProps = {
  // initialActive: '',
  initialSelected: undefined,
  onLogoClick: function onLogoClick() {},
  // backgroundColor: '',
  // Logo: PropTypes.any,
  // primaryColor: '',
  menuDescriptors: [],
  style: {},
  panelOffsetTop: '0px',
  panelOffsetBottom: '0px'
};

var _templateObject$H = taggedTemplateLiteral(['\n  visibility: ', '\n  z-index: 99;\n  position: absolute;\n  max-height: 0;\n  top: 100%;\n  ', ';\n\n  /**\n    * fix flex scroll bar issue on IE */\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    /* &, & > div,  */& > div > div {\n      /* width: 100%; */\n      ', ';\n    }\n  };\n  ', ';\n  /* width: 100%; */\n  ', ';\n  border-radius: ', ';\n  transition: ', ';\n  transition-duration: ', ';\n  max-height: ', ';\n\n  &, & > div {\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  /* TODO shoadow and focus stylesshould be managed by component orchestrating a dropDown2 */\n  &:focus, &:focus-within {\n    ', ';\n  };\n  ', ';\n'], ['\n  visibility: ', '\n  z-index: 99;\n  position: absolute;\n  max-height: 0;\n  top: 100%;\n  ', ';\n\n  /**\n    * fix flex scroll bar issue on IE */\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    /* &, & > div,  */& > div > div {\n      /* width: 100%; */\n      ', ';\n    }\n  };\n  ', ';\n  /* width: 100%; */\n  ', ';\n  border-radius: ', ';\n  transition: ', ';\n  transition-duration: ', ';\n  max-height: ', ';\n\n  &, & > div {\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  /* TODO shoadow and focus stylesshould be managed by component orchestrating a dropDown2 */\n  &:focus, &:focus-within {\n    ', ';\n  };\n  ', ';\n']);

/* eslint-disable indent */
var BoxWrapperUI = styled__default.div.attrs({})(_templateObject$H, function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'visible' : 'collapse';
}, function (_ref2) {
  var fullWidthContent = _ref2.fullWidthContent;
  return fullWidthContent ? 'width: 100%' : '';
}, function (_ref3) {
  var childrenWith = _ref3.childrenWith;
  return childrenWith ? 'width: ' + childrenWith + ';' : 'width: calc(100% - 24px);' /* 24 px => IE crollBar width */
  ;
}, function (_ref4) {
  var anchor = _ref4.anchor;
  return anchor === 'right' ? 'right: 0' : '';
}, function (_ref5) {
  var isFullWidth = _ref5.isFullWidth;
  return isFullWidth && 'width: 100%';
}, function (_ref6) {
  var radius = _ref6.theme.radius;
  return radius;
}, function (_ref7) {
  var transition = _ref7.theme.transition;
  return transition.defaultAll;
}, function (_ref8) {
  var isOpen = _ref8.isOpen,
      transition = _ref8.theme.transition;
  return isOpen ? transition.durationIn : transition.durationOut;
}, function (_ref9) {
  var isOpen = _ref9.isOpen,
      maxHeight = _ref9.maxHeight;
  return isOpen ? maxHeight + 'px' : '0px';
}, function (_ref10) {
  var theme = _ref10.theme;
  return 'box-shadow: ' + theme.outlineShadow + '; outline: ' + theme.outline;
}, function (_ref11) {
  var theme = _ref11.theme,
      forceShadow = _ref11.forceShadow,
      isOpen = _ref11.isOpen;
  return forceShadow && isOpen && 'box-shadow: ' + theme.outlineShadow + '; outline: ' + theme.outline;
});
/* eslint-enble indent */

var DropDown2 = function (_Component) {
  inherits(DropDown2, _Component);

  function DropDown2(props) {
    classCallCheck(this, DropDown2);

    var _this = possibleConstructorReturn(this, (DropDown2.__proto__ || Object.getPrototypeOf(DropDown2)).call(this, props));

    _this.ref = null;

    _this.isControlled = _this.props.isOpen !== undefined;

    _this.state = {
      isOpen: _this.isControlled ? _this.props.isOpen : false,
      height: 0
    };

    _this.update = _this.update.bind(_this);
    _this.storeRef = _this.storeRef.bind(_this);
    _this.toggleVisibility = _this.toggleVisibility.bind(_this);
    _this.storeWrapperRef = _this.storeWrapperRef.bind(_this);
    return _this;
  }

  createClass(DropDown2, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (React__default.Children.count(this.props.children) !== React__default.Children.count(prevProps.childrenProps)) {
        this.update();
      } else if (this.props.children !== prevProps.childrenProps) ;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scrollingContextRef = null;

      window.cancelAnimationFrame(this.rafRef);
    }
  }, {
    key: 'toggleVisibility',
    value: function toggleVisibility() {
      if (!this.isControlled) {
        var nextIsOpen = !this.state.isOpen;

        this.setState({ isOpen: nextIsOpen });
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.ref) {
        var newHeight = this.ref.getBoundingClientRect().height;
        if (newHeight !== this.state.height) {
          this.setState({
            height: newHeight
          });
        }

        // this.rafRef = requestAnimationFrame(this.update);
      }
    }
  }, {
    key: 'storeWrapperRef',
    value: function storeWrapperRef(node) {
      this.wrapperRef = node;
      if (this.props.onTriggerWrapperRef) {
        this.props.onTriggerWrapperRef(node);
      }
      this.update();
    }
  }, {
    key: 'storeRef',
    value: function storeRef(node) {
      this.ref = node;
      if (this.props.onChildrenWrapperRef) {
        this.props.onChildrenWrapperRef(node);
      }
      this.update();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          trigger = _props.trigger,
          children = _props.children,
          isFullWidth = _props.isFullWidth,
          anchor = _props.anchor,
          fullWidthContent = _props.fullWidthContent,
          forceShadow = _props.forceShadow;
      var height = this.state.height;


      var isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

      var _children$props = children.props,
          childrenProps = _children$props === undefined ? {} : _children$props;


      var TriggerWithHandler = React__default.cloneElement(trigger, _extends({}, trigger && trigger.props || {}, {
        // 'data-drop-down-trigger': true,
        onClick: function onClick() {
          _this2.toggleVisibility.apply(_this2, arguments);
          if (trigger.props && trigger.props.onClick) {
            var _trigger$props;

            (_trigger$props = trigger.props).onClick.apply(_trigger$props, arguments);
          }
        }
      }));

      return React__default.createElement(
        'div',
        {
          style: _extends({
            position: 'relative'
          }, !isFullWidth ? { display: 'inline-block' } : {}),
          ref: this.storeWrapperRef
        },
        React__default.createElement(
          'span',
          { 'data-drop-down-trigger': true },
          TriggerWithHandler
        ),
        React__default.createElement(
          BoxWrapperUI,
          {
            forceShadow: forceShadow,
            fullWidthContent: fullWidthContent,
            'data-box-wrapper-ui': true,
            onScroll: function onScroll(e) {
              e.stopPropagation();
            },
            anchor: anchor,
            isFullWidth: isFullWidth,
            isOpen: isOpen,
            maxHeight: height,
            childrenWith: childrenProps.style && childrenProps.style.width || null
          },
          React__default.createElement(
            'div',
            { ref: this.storeRef, 'data-drop-down-content': true },
            React__default.Children.only(children)
          )
        )
      );
    }
  }]);
  return DropDown2;
}(React.Component);

DropDown2.propTypes = {
  isOpen: propTypes.bool,
  children: propTypes.element,
  onTriggerWrapperRef: propTypes.func,
  onChildrenWrapperRef: propTypes.func,
  trigger: propTypes.element,
  anchor: propTypes.oneOf(['left', 'right'])
};
DropDown2.defaultProps = {
  isOpen: undefined,
  fullWidthContent: false,
  onTriggerWrapperRef: function onTriggerWrapperRef() {},
  onChildrenWrapperRef: function onChildrenWrapperRef() {},
  trigger: React__default.createElement('div', null),
  children: React__default.createElement('div', null),
  anchor: 'left'
};

var DropDownWithClickOutside = function (_DropDown) {
  inherits(DropDownWithClickOutside, _DropDown);

  function DropDownWithClickOutside() {
    classCallCheck(this, DropDownWithClickOutside);
    return possibleConstructorReturn(this, (DropDownWithClickOutside.__proto__ || Object.getPrototypeOf(DropDownWithClickOutside)).apply(this, arguments));
  }

  createClass(DropDownWithClickOutside, [{
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      var isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;
      if (isOpen) {
        if (!this.isControlled) {
          this.setState({ isOpen: false });
        } else {
          var onClickOutside = this.props.onClickOutside;

          if (onClickOutside) {
            onClickOutside();
          }
        }
      }
    }
  }]);
  return DropDownWithClickOutside;
}(DropDown2);

var DropDown = dist(DropDownWithClickOutside);

var _templateObject$I = taggedTemplateLiteral(['\n  border: none;\n  padding: 0;\n  font-size: inherit;\n  background: transparent;\n  border-radius: 0;\n  cursor: pointer;\n'], ['\n  border: none;\n  padding: 0;\n  font-size: inherit;\n  background: transparent;\n  border-radius: 0;\n  cursor: pointer;\n']);

var buttonResetStylesCSSString = styled.css(_templateObject$I).join('\n');

var _templateObject$J = taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n'], ['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n']),
    _templateObject2$g = taggedTemplateLiteral(['\n  a, a *, a:hover, a:hover * {\n    text-decoration: none;\n    color: ', ';\n  }\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  ', ';\n  min-width: 180px;\n  max-width: 100vw;\n  justify-content: flex-start;\n  height: ', ';\n  min-height: ', ';\n  max-height: ', ';\n  box-sizing: border-box;\n  ', ';\n  outline: none;\n  &:focus, &:hover {\n    outline: none;\n    background: #ebebeb;\n  }\n  &:focus:hover {\n    background: #ebebeb;\n  }\n'], ['\n  a, a *, a:hover, a:hover * {\n    text-decoration: none;\n    color: ', ';\n  }\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  ', ';\n  min-width: 180px;\n  max-width: 100vw;\n  justify-content: flex-start;\n  height: ', ';\n  min-height: ', ';\n  max-height: ', ';\n  box-sizing: border-box;\n  ', ';\n  outline: none;\n  &:focus, &:hover {\n    outline: none;\n    background: #ebebeb;\n  }\n  &:focus:hover {\n    background: #ebebeb;\n  }\n']);

var WrapperComponentFn = styled__default.div(_templateObject$J);

var height = '38px';
var iconSize = '18';

var ButtonMenuItemItemFlex = styled__default.li.attrs({
  // onMouseOut: () => ({ target }) => target.blur && target.blur(),
  // onMouseEnter: () => ({ target }) => target.focus && target.focus(),
  // tabIndex: ({ isOpen }) => (isOpen ? '0' : '-1'),
  tabIndex: 0
})(_templateObject2$g, function (_ref) {
  var palette = _ref.theme.palette;
  return palette.darkGrey;
}, buttonResetStylesCSSString, height, height, height, function (_ref2) {
  var Link = _ref2.Link;
  return Link ? '' : 'padding: 4px 8px';
});

var ButtonMenuItem = function (_Component) {
  inherits(ButtonMenuItem, _Component);

  function ButtonMenuItem() {
    classCallCheck(this, ButtonMenuItem);
    return possibleConstructorReturn(this, (ButtonMenuItem.__proto__ || Object.getPrototypeOf(ButtonMenuItem)).apply(this, arguments));
  }

  createClass(ButtonMenuItem, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _props = this.props,
          style = _props.style,
          iconProp = _props.icon,
          children = _props.children,
          extra = _props.extra,
          _onClick = _props.onClick,
          shouldClose = _props.shouldClose,
          Link = _props.Link,
          linkProps = _props.linkProps;


      var icon = null;
      if (iconProp) {
        icon = React__default.cloneElement(iconProp, { size: iconSize, style: { marginRight: '8px' } });
      }

      var LinkWrapperOrDiv = WrapperComponentFn;

      if (Link && linkProps) {
        LinkWrapperOrDiv = Link;
      }

      return React__default.createElement(
        ButtonMenuItemItemFlex,
        {
          Link: Link
          // isOpen={isOpen}
          , style: style,
          onClick: function onClick(e) {
            for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              a[_key - 1] = arguments[_key];
            }

            if (shouldClose) {
              shouldClose.apply(undefined, [e].concat(a));
            }
            if (_onClick) {
              _onClick.apply(undefined, [e].concat(a));
            }
          },
          onKeyDown: function onKeyDown(e) {
            for (var _len2 = arguments.length, a = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              a[_key2 - 1] = arguments[_key2];
            }

            if (e.key === 'Enter' || e.key === ' ') {
              if (shouldClose) {
                shouldClose.apply(undefined, [e].concat(a));
              }
              if (_onClick) {
                _onClick.apply(undefined, [e].concat(a));
              }
            } else if (e.key === 'Escape') {
              if (shouldClose) {
                shouldClose.apply(undefined, [e].concat(a));
              }
            }
          }
        },
        React__default.createElement(
          LinkWrapperOrDiv,
          _extends({}, linkProps, {
            style: _extends({
              width: '100%',
              height: '100%'
            }, Link ? { padding: '4px 8px' } : {}, linkProps.style || {})
          }),
          icon,
          React__default.createElement(
            TextEllipsis,
            {
              style: {
                // width: '100%',
                height: '100%',
                // display: 'flex',
                alignItems: 'center'
              }
            },
            React__default.createElement(
              'div',
              {
                style: {
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }
              },
              children
            )
          ),
          React__default.createElement(
            'div',
            { style: { marginLeft: 'auto' } },
            extra
          )
        )
      );
    }
  }]);
  return ButtonMenuItem;
}(React.Component);

ButtonMenuItem.defaultProps = {
  style: {},
  icon: null,
  children: null,
  extra: null,
  onClick: function onClick() {},
  shouldClose: function shouldClose() {},
  Link: undefined,
  linkProps: {}
};

ButtonMenuItem.propTypes = {
  style: propTypes.object,
  icon: propTypes.any,
  children: propTypes.any,
  extra: propTypes.any,
  onClick: propTypes.func,
  shouldClose: propTypes.func,
  Link: propTypes.func,
  linkProps: propTypes.object
};

var focusTimeout = 128;

var ButtonMenu = function (_Component) {
  inherits(ButtonMenu, _Component);

  function ButtonMenu(props) {
    classCallCheck(this, ButtonMenu);

    var _this = possibleConstructorReturn(this, (ButtonMenu.__proto__ || Object.getPrototypeOf(ButtonMenu)).call(this, props));

    _this.childrenWrapperRef = null;
    _this.triggerWrapperRef = null;

    _this.isControlled = _this.props.isOpen !== undefined;

    _this.state = {
      isOpen: _this.isControlled ? _this.props.isOpen : false
    };

    _this.toggleVisibility = _this.toggleVisibility.bind(_this);
    _this.close = _this.close.bind(_this);
    // this.focusButton = this.focusButton.bind(this);
    _this.focusMenu = _this.focusMenu.bind(_this);
    _this.storeChildrenWrapperRef = _this.storeChildrenWrapperRef.bind(_this);
    _this.storeTriggerWrapperRef = _this.storeTriggerWrapperRef.bind(_this);
    return _this;
  }

  /*
  focusButton() {
    return
    // return;
    let focusTarget = this.triggerWrapperRef;
     if (focusTarget) {
      if (
        this.triggerWrapperRef
        && this.triggerWrapperRef.querySelector
        && this.triggerWrapperRef.querySelector('button')
      ) {
        focusTarget = this.triggerWrapperRef.querySelector('button');
      } else if (
        this.triggerWrapperRef
        && this.triggerWrapperRef.firstChild
        && this.triggerWrapperRef.firstChild.focus
      ) {
        focusTarget = this.triggerWrapperRef.firstChild;
      }
       if (focusTarget.focus) {
        const timerRef = setTimeout(() => {
          if (focusTarget && focusTarget.focus) {
            focusTarget.focus();
          }
          clearTimeout(timerRef);
        }, focusTimeout);
      }
    }
  }
    */

  createClass(ButtonMenu, [{
    key: 'focusMenu',
    value: function focusMenu() {
      var elem = this.childrenWrapperRef && this.childrenWrapperRef.firstChild && this.childrenWrapperRef.firstChild.firstChild;

      if (elem && elem.focus) {
        var timerRef = setTimeout(function () {
          if (elem && elem.focus) {
            elem.focus();
          }
          clearTimeout(timerRef);
        }, focusTimeout);
      }
    }
  }, {
    key: 'storeTriggerWrapperRef',
    value: function storeTriggerWrapperRef(node) {
      this.triggerWrapperRef = node;
    }
  }, {
    key: 'storeChildrenWrapperRef',
    value: function storeChildrenWrapperRef(node) {
      this.childrenWrapperRef = node;
    }
  }, {
    key: 'toggleVisibility',
    value: function toggleVisibility() {
      if (!this.isControlled) {
        var nextIsOpen = !this.state.isOpen;

        if (nextIsOpen) {
          this.setState({ isOpen: true }, this.focusMenu);
        } else {
          this.setState({ isOpen: false } /* this.focusButton */);
        }
      }
    }
  }, {
    key: 'close',
    value: function close() {
      if (!this.isControlled) {
        this.setState({ isOpen: false });
        // this.focusButton();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          button = _props.button,
          anchor = _props.anchor,
          menuWidth = _props.menuWidth,
          menuMinWidth = _props.menuMinWidth,
          menuMaxWidth = _props.menuMaxWidth,
          menuMaxHeight = _props.menuMaxHeight;


      var isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

      var extendedButton = React__default.cloneElement(button, {

        onClick: function onClick() {
          if (button.props.onClick) {
            var _button$props;

            (_button$props = button.props).onClick.apply(_button$props, arguments);
          }

          _this2.toggleVisibility();
        }
      });

      return React__default.createElement(
        'div',
        {
          onKeyDown: function onKeyDown(e) {
            if (e.key === 'Escape') {
              _this2.close();
            } else if (e.key === 'ArrowDown') {
              e.preventDefault();
              // e.stopPropagation();
              var _document = document,
                  activeElement = _document.activeElement;


              if (activeElement.nextElementSibling && activeElement.nextElementSibling && activeElement.nextElementSibling.focus) {
                if (activeElement.nodeName !== activeElement.nextElementSibling.nodeName) {
                  // divider
                  if (activeElement.nextElementSibling.nextElementSibling && activeElement.nextElementSibling.nextElementSibling.focus) {
                    activeElement.nextElementSibling.nextElementSibling.focus();
                  }
                } else {
                  activeElement.nextElementSibling.focus();
                }
              } /*  else if (
                 activeElement.nextElementSibling
                 && activeElement.nextElementSibling
                 && activeElement.nextElementSibling.nextElementSibling
                 && activeElement.nextElementSibling.nextElementSibling.focus
                ) {
                 activeElement.nextElementSibling.nextElementSibling.focus();
                } */
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              // e.stopPropagation();
              var _document2 = document,
                  _activeElement = _document2.activeElement;


              if (_activeElement.previousElementSibling && _activeElement.previousElementSibling.nodeName !== 'BUTTON' && _activeElement.previousElementSibling.focus) {
                // activeElement.previousElementSibling.focus();
                if (_activeElement.nodeName !== _activeElement.previousElementSibling.nodeName) {
                  // divider
                  if (_activeElement.previousElementSibling.previousElementSibling && _activeElement.previousElementSibling.previousElementSibling.focus) {
                    _activeElement.previousElementSibling.previousElementSibling.focus();
                  }
                } else {
                  _activeElement.previousElementSibling.focus();
                }
              }
            }
          }
        },
        React__default.createElement(
          DropDown
          // isFullWidth={isFullWidth}
          ,
          { anchor: anchor,
            onClickOutside: this.close,
            isOpen: isOpen,
            trigger: extendedButton,
            onTriggerWrapperRef: this.storeTriggerWrapperRef,
            onChildrenWrapperRef: this.storeChildrenWrapperRef
          },
          React__default.createElement(
            'ul',
            {
              style: _extends({
                // padding: 0,
                // margin: 0,
                // listStyle: 'none',
                background: 'white',
                maxHeight: menuMaxHeight,
                overflowY: 'auto',
                overflowX: 'hidden'
              }, menuWidth ? { width: menuWidth } : {}, menuMinWidth ? { minWidth: menuMinWidth } : {}, menuMaxWidth ? { maxWidth: menuMaxWidth } : {})
            },
            React__default.Children.map(children, function (child) {
              if (child.type && child.type === ButtonMenuItem) {
                return React__default.cloneElement(child, {
                  shouldClose: _this2.close
                });
              }
              return child;
            })
          )
        )
      );
    }
  }]);
  return ButtonMenu;
}(React.Component);

ButtonMenu.defaultProps = {
  children: [],
  button: React__default.createElement(FlatButton, { icon: React__default.createElement(Options, null) }),
  menuMaxHeight: '396px',
  menuWidth: undefined,
  menuMinWidth: undefined,
  menuMaxWidth: '300px'
};

ButtonMenu.propTypes = {
  button: propTypes.element,
  children: propTypes.arrayOf(propTypes.node),
  menuMaxHeight: propTypes.string,
  menuWidth: propTypes.string,
  menuMinWidth: propTypes.string,
  menuMaxWidth: propTypes.string
};

exports.ThemeProvider = UXISCThemeProvider;
exports.Button = Button;
exports.FlatButton = FlatButton;
exports.OutlineButton = OutlineButton;
exports.TextField = TextField;
exports.Panel = Panel;
exports.PanelHeader = PanelHeader;
exports.PanelContent = PanelContent;
exports.PanelFooter = PanelFooter;
exports.GlobalMenu = GlobalMenu;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.Administrator = Administrator;
exports.Anonymize = Anonymize;
exports.Archive = Archive;
exports.Barchart = Barchart;
exports.Businessinteligence = Businessinteligence;
exports.Checkmark = Checkmark;
exports.Circledcheckmark = Circledcheckmark;
exports.Circledintegration = Circledintegration;
exports.Circleduser = Circleduser;
exports.Cluedin = Cluedin;
exports.Connectors = Connectors;
exports.Consuming = Consuming;
exports.Cookie = Cookie;
exports.Country = Country;
exports.Dataretention = Dataretention;
exports.Datasoverignty = Datasoverignty;
exports.Databreach = Databreach;
exports.Datacleaning = Datacleaning;
exports.Datalineage = Datalineage;
exports.Datapolicy = Datapolicy;
exports.Datacatalog = Datacatalog;
exports.Directory = Directory;
exports.Document = Document;
exports.Download = Download;
exports.Duplicates = Duplicates;
exports.Engagement = Engagement;
exports.Erase = Erase;
exports.Filearchive = Filearchive;
exports.File = File;
exports.Forbidden = Forbidden;
exports.Gdpr = Gdpr;
exports.Governance = Governance;
exports.Graphql = Graphql;
exports.Group = Group;
exports.Hamburger = Hamburger;
exports.Help = Help;
exports.History = History;
exports.Idbadge = Idbadge;
exports.Industry = Industry;
exports.Integration = Integration;
exports.Intelligence = Intelligence;
exports.Iteration = Iteration;
exports.Language = Language;
exports.License = License;
exports.List = List;
exports.Listul = Listul;
exports.Management = Management;
exports.Manipulation = Manipulation;
exports.Merge = Merge;
exports.Minusbox = Minusbox;
exports.News = News;
exports.Note = Note;
exports.Pbcopy = Pbcopy;
exports.Phone = Phone;
exports.Pin = Pin;
exports.Plugedin = Plugedin;
exports.Plusbox = Plusbox;
exports.Position = Position;
exports.Preparation = Preparation;
exports.Presentation = Presentation;
exports.Process = Process;
exports.Recipes = Recipes;
exports.Reply = Reply;
exports.Sar = Sar;
exports.Sandbox = Sandbox;
exports.Settings = Settings;
exports.Signals = Signals;
exports.Sitemap = Sitemap;
exports.Smileyhappy = Smileyhappy;
exports.Smileyneutral = Smileyneutral;
exports.Smileysad = Smileysad;
exports.Sourcebranch = Sourcebranch;
exports.Thumbdown = Thumbdown;
exports.Thumbup = Thumbup;
exports.Training = Training;
exports.Unpluged = Unpluged;
exports.User = User;
exports.Video = Video;
exports.Visibility = Visibility;
exports.Visibilityunabled = Visibilityunabled;
exports.Access = Access;
exports.Activity = Activity;
exports.Add = Add;
exports.Aggregate = Aggregate;
exports.Album = Album;
exports.Alert = Alert;
exports.Angellist = Angellist;
exports.Announcement = Announcement;
exports.Application = Application;
exports.Arrowdown = Arrowdown;
exports.Arrowleft = Arrowleft;
exports.Arrowright = Arrowright;
exports.Arrowup = Arrowup;
exports.At = At;
exports.Audio = Audio;
exports.Backlogitem = Backlogitem;
exports.Book = Book;
exports.Changeview = Changeview;
exports.Changes = Changes;
exports.Checkbox = Checkbox;
exports.Checkboxoutline = Checkboxoutline;
exports.Circle = Circle;
exports.City = City;
exports.Clock = Clock;
exports.Close = Close;
exports.Cloud = Cloud;
exports.Cluedinlogo = Cluedinlogo;
exports.Codefile = Codefile;
exports.Code = Code;
exports.Comment = Comment;
exports.Competitoropportunity = Competitoropportunity;
exports.Consent = Consent;
exports.Contact = Contact;
exports.Copylink = Copylink;
exports.Creditcard = Creditcard;
exports.Crunchbase = Crunchbase;
exports.Cta = Cta;
exports.Customerinteligence = Customerinteligence;
exports.Datamart = Datamart;
exports.Database = Database;
exports.Defaultorganizationimage = Defaultorganizationimage;
exports.Delete = Delete;
exports.Department = Department;
exports.Deployment = Deployment;
exports.Diagram = Diagram;
exports.Directoryopen = Directoryopen;
exports.Discussion = Discussion;
exports.Domain = Domain;
exports.Done = Done;
exports.Emailthread = Emailthread;
exports.Engine = Engine;
exports.Epic = Epic;
exports.Event = Event;
exports.Externallink = Externallink;
exports.Facebook = Facebook;
exports.Filter = Filter;
exports.Followactivestate = Followactivestate;
exports.Followentities = Followentities;
exports.Fullscreen = Fullscreen;
exports.Gift = Gift;
exports.Github = Github;
exports.Googleplus = Googleplus;
exports.Home = Home;
exports.Idea = Idea;
exports.Instagram = Instagram;
exports.Issue = Issue;
exports.Keepintheloop = Keepintheloop;
exports.Linkedin = Linkedin;
exports.Loading = Loading;
exports.Markassensitive = Markassensitive;
exports.Markasunsensitive = Markasunsensitive;
exports.Networkadress = Networkadress;
exports.Nosorting = Nosorting;
exports.Notification = Notification;
exports.Notifivationcenter = Notifivationcenter;
exports.Options = Options;
exports.Organization = Organization;
exports.Outliers = Outliers;
exports.Padlock = Padlock;
exports.Patterns = Patterns;
exports.Pause = Pause;
exports.Pencil = Pencil;
exports.Person = Person;
exports.Photo = Photo;
exports.Picture = Picture;
exports.Pinterest = Pinterest;
exports.Printer = Printer;
exports.Profile = Profile;
exports.Questionmark = Questionmark;
exports.Quote = Quote;
exports.Radioinput = Radioinput;
exports.Radioinputoutline = Radioinputoutline;
exports.Report = Report;
exports.Robot = Robot;
exports.Rule = Rule;
exports.Sales = Sales;
exports.Salesorder = Salesorder;
exports.Search = Search;
exports.Send = Send;
exports.Server = Server;
exports.Signin = Signin;
exports.Signout = Signout;
exports.Skill = Skill;
exports.Skype = Skype;
exports.Slack = Slack;
exports.Sortingdown = Sortingdown;
exports.Sortingup = Sortingup;
exports.Spreadsheet = Spreadsheet;
exports.Star = Star;
exports.Start = Start;
exports.Stop = Stop;
exports.Stream = Stream;
exports.Tag = Tag;
exports.Task = Task;
exports.Textfile = Textfile;
exports.Topic = Topic;
exports.Trianglearrow = Trianglearrow;
exports.Trianglearrowup = Trianglearrowup;
exports.Twitter = Twitter;
exports.Upload = Upload;
exports.Website = Website;
exports.Website2 = Website2;
exports.Wikipedia = Wikipedia;
exports.Workspace = Workspace;
exports.Youtube = Youtube;
exports.Youtube2 = Youtube2;
//# sourceMappingURL=index.js.map
