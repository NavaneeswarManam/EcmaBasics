this.window = this.window || {};
this.window.EcmaSamples = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Home = function Home(a, b, c, d) {
    _classCallCheck(this, Home);

    console.log(arguments);
  };

  var ArraySet =
  /*#__PURE__*/
  function () {
    function ArraySet(data) {
      _classCallCheck(this, ArraySet);

      this.sum = 0;
      this.data = data;
      this.sumObjects(data);
      console.log(this.sum);
    }

    _createClass(ArraySet, [{
      key: "mapTest",
      value: function mapTest() {
        this.data.map(function (x) {
          return x * 2;
        });
      }
    }, {
      key: "displayArray",
      value: function displayArray() {
        this.data.forEach(function (ele, index) {//console.log(`${ele}---${index}`);
        });
      }
    }, {
      key: "sumObjects",
      value: function sumObjects(data) {
        var _this = this;

        data.forEach(function (ele) {
          if (Array.isArray(ele)) _this.sumObjects(ele);
          if (!isNaN(ele)) _this.sum += ele;
        });
      }
    }]);

    return ArraySet;
  }();

  var Onida =
  /*#__PURE__*/
  function () {
    function Onida() {
      _classCallCheck(this, Onida);

      var home = new Home("eswar", "Manam", "Ram", "Raj");
      console.log('this is onida');
      this.arrayTest();
    }

    _createClass(Onida, [{
      key: "arrayTest",
      value: function arrayTest() {
        var data = [1, 3, [121, 123, 125, {
          x: 23,
          y: 34
        }, 7, 3, 54], 7, [true, false], undefined, 3];
        var arr = new ArraySet(data);
        arr.displayArray();
      }
    }]);

    return Onida;
  }();

  var index = new Onida();

  return index;

}());

//# sourceMappingURL=maps/ecma.js.map
