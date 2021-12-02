import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {
        city: mpg_data.map(e=>e.city_mpg).reduce((a, b) => {return a+b})/len,
        highway: mpg_data.map(e=>e.highway_mpg).reduce((a, b) => {return a+b})/len
    },
    allYearStats: getStatistics(mpg_data.map(a=>a.year)),
    ratioHybrids: mpg_data.map(a=>a.hybrid).filter(Boolean).length/mpg_data.length
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    get makerHybrids() {
        let result = [];
        let makes = [];
        for (let i = 0; i < mpg_data.length; i++) {
            if (!makes.includes(mpg_data[i]['make']) && mpg_data[i]['hybrid']) {
                makes.push(mpg_data[i]['make']);
            }
        }
        for (let i = 0; i < makes.length; i++) {
            for(let j = 0; j < mpg_data.length; j++) {
                if (mpg_data[j]['make'] == makes[i] && mpg_data[j]['hybrid']) {
                    arrr.push(mpg_data[j]['id']);
                }
            }   
            same['hybrids'] = arrr;
            result.push(same);
        }
        return result;
    },
    
    get avgMpgByYearAndHybrid() {
        let result = [];
        let yrs = [];
        for (let i = 0; i < mpg_data.length; i++) {
            if (!yrs.includes(mpg_data[i]['year'])) {
                yrs.push(mpg_data[i]['year']);
            }
        }
        for (let i = 0; i < yrs.length; i++) {
            result[yrs[i]] = {};
            let hyb_data = 0;
            let non_data = 0;
            let hyb_city = 0;
            let non_city = 0;
            let hyb_high = 0;
            let non_high = 0;
            let count = 0;
            let count2 = 0;
            for (let j = 0; j < mpg_data.length; j++) {
                if(mpg_data[j]['year'] == yrs[i] && mpg_data[j]['hybrid']) {
                    hyb_city += mpg_data[j]['city_mpg'];
                    hyb_high += mpg_data[j]['highway_mpg'];
                    count++;
                } else if (mpg_data[j]['year'] == yrs[i] && !mpg_data[j]['hybrid']) {
                    non_city += mpg_data[j]['city_mpg'];
                    non_high += mpg_data[j]['highway_mpg'];
                    count2++;
                }
            }
            hyb_data.city = hyb_city/count;
            hyb_data.highway = hyb_high/count;
            non_data.city = non_city/count2;
            non_data.highway = non_high/count2;
            result[yrs[i]]['hybrid'] = hyb_data;
            result[yrs[i]]['notHybrid'] = non_data;
        }
        return result;
    }
};
