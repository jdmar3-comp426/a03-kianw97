/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    var sum = a + b;
    return a + " + " + b + " = " + sum;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const ret = [];
    let index = 0;
    for(startNumber; startNumber <= endNumber; startNumber++) {
        ret[index] = startNumber;
        index++;
    }
    return ret;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let ret = new Object();

    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    ret.max = max;
    ret.min = min;

    return ret;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let mappy = new Map();
    let arr = [];
    let ret = new Object();
    let val = 0;

    for(let i = 0; i < array.length; i++) {
        if(mappy.has(array[i])) {
            val = mappy.get(array[i]);
            val++;
            mappy.set(array[i], val);
        } else {
            val = 1;
            mappy.set(array[i], val);
            arr.push(array[i]);
        }
    }

    for(let x = 0; x < arr.length; x++) {
        ret[arr[x]] = mappy.get(arr[x]);
    }

    return ret;
}
