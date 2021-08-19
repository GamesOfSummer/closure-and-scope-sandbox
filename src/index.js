var rotLeft = function (arraySize, timesToRotate, array) {
    var pair = 0;
    for (var i = 0; i < timesToRotate; i++) {
        var newEndValue = array.shift();
        if (newEndValue) {
            array.push(newEndValue);
        }
    }
    return array;
};
var result = rotLeft(20, 10, [
    41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
    51,
]);
console.log(result);
var result2 = rotLeft(5, 4, [1, 2, 3, 4, 5]);
console.log(result2);
var rotLeftCorrectInput = function (array, timesToRotate) {
    var pair = 0;
    for (var i = 0; i < timesToRotate; i++) {
        var newEndValue = array.shift();
        if (newEndValue) {
            array.push(newEndValue);
        }
    }
    return array;
};
var result3 = rotLeftCorrectInput([1, 2, 3, 4, 5], 4);
console.log(result2);
