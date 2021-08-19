let rotLeft = (arraySize: number, timesToRotate: number, array: Number[]) => {
    let pair = 0;

    for (let i = 0; i < timesToRotate; i++) {
        const newEndValue = array.shift();

        if (newEndValue) {
            array.push(newEndValue);
        }
    }

    return array;
};

const result = rotLeft(
    20,
    10,
    [
        41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
        51,
    ]
);
console.log(result);
const result2 = rotLeft(5, 4, [1, 2, 3, 4, 5]);
console.log(result2);

let rotLeftCorrectInput = (array: Number[], timesToRotate: number) => {
    for (let i = 0; i < timesToRotate; i++) {
        const newEndValue = array.shift();

        if (newEndValue) {
            array.push(newEndValue);
        }
    }

    return array;
};

const result3 = rotLeftCorrectInput([1, 2, 3, 4, 5], 4);
console.log(result2);
