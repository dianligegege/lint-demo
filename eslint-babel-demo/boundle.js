let _objectSpread2, _num;

function ownKeys (object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable })), keys.push.apply(keys, symbols) } return keys }

function _objectSpread (target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)) }) } return target }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

const fun1 = function fun1 (a) {
    return a;
};

fun1();
const str1 = "age";
const str2 = "id";
const obj1 = {
    name: 1,
};

const obj2 = _objectSpread(_objectSpread({}, obj1), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, str1, [str1]), _defineProperty(_objectSpread2, "str2", str2), _objectSpread2));

console.log(obj2);
const num = 0;
const num1 = num !== null && num !== void 0 ? num : 12;
console.log(num1); // 0

let num3 = 0;
(_num = num3) !== null && _num !== void 0 ? _num : num3 = 10;
console.log(num3);
