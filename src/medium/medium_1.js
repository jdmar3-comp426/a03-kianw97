import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    const adder = (a, b) => a +b;
    return array.reduce(adder);
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort((x,y) => x-y);
    let middle = array.length/2;
    if(middle % 1) {
        return array[middle - 0.5];
    } else {
        return (array[middle - 1] + array[middle]) / 2;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let ret = {};
    ret.length = array.length;
    ret.sum = getSum(array);
    ret.mean = ret.sum/ret.length;
    ret.median = getMedian(array);
    ret.min = Math.min(...array);
    ret.max = Math.max(...array);
    ret.variance = variance(array, ret.mean);
    ret.standard_deviation = Math.sqrt(ret.variance);
    return ret;
}

