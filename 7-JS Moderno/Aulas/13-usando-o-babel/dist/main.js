"use strict";

var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var quantNumbers = numbers.length;
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  var media = sum / quantNumbers;
  return media;
};
console.log("M\xE9dia --> ".concat(media(2, 3, 6, 7, 4)));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var num = _ref.num,
      weight = _ref.weight;
    return accum + num * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("Media Ponderada --> ".concat(mediaPonderada({
  num: 2,
  weight: 2
}, {
  num: 2,
  weight: 1
}, {
  num: 5
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var sortedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var quantNumbers = sortedNumbers.length;
  if (quantNumbers % 2 === 1) {
    quantNumbers = (quantNumbers + 1) / 2 - 1;
    return numbers[quantNumbers];
  } else {
    var num1 = numbers[quantNumbers / 2];
    var num2 = numbers[quantNumbers / 2 - 1];
    var num = media(num1, num2);
    return Math.floor(num); //metodo Math.floor seve para arredondar o número para baixo
  }
};

console.log("Mediana --> ".concat(mediana(2, 5, 4, 6, 5, 7, 2, 4, 6)));
console.log("Mediana --> ".concat(mediana(9, 2, 5, 8, 6, 2)));
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log(moda("Moda --> ".concat((2, 4, 6, 4, 6, 6))));