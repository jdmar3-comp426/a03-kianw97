/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
export function identifyVariable(variable) {
   let ret = new Object();

   if (typeof varibale == 'undefined') {
      ret.type = 'undefined';
   } else if (typeof varibale == 'object') {
      ret.type = 'object';
   } else if (typeof varibale == 'boolean') {
      ret.type = 'boolean';
   } else if (typeof varibale == 'number')  {
      ret.type = 'number';
   } else if (typeof varibale == 'string') {
      ret.type = 'string';
   } else if (typeof varibale == 'function') {
      ret.type = 'function';
   } else if (typeof varibale == 'symbol') {
      ret.type = 'symbol';
   } else if (typeof varibale == 'bigint') {
      ret.type = 'bigint';
   } 

   ret.value = variable;
   return ret;
}


/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
export function identifyArray(array) {
let temp = new Object();

   for (let i = 0; i < array.length; i++) {
      array[i] = identifyVariable(array[i]);
   }
   return array;
}

/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
export function removeKey(object, key) {
   delete object.password;
}

/**
 * Does not mutate the object passed in
 * @param object
 * @param key
 * @returns {*} The object with its keys removed
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 obj = removeKeyNonDestructive(obj, 'password');
 obj will not have the `password` field only because it was assigned the result of the function.
 If only `removeKeyNonDestructive` was called, nothing would have changed.
 */
export function removeKeyNonDestructive(object, key) {
   const { [key]: foo, ...ret } = object;
   return ret;
}

/**
 * Remove and return the listed keys. Without mutating the object passed in.
 * @param object
 * @param {string[]} keyList
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * example:


 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object not looks like this
 { name: 'Mr. Boss', title: 'boss' }

 * @return {*} The object with its keys removed.
 */
export function removeKeys(object, keyList) {
   for(let i =0; i < keyList.length; i++) {
      object = removeKeyNonDestructive(object, keyList[i]);
   }

   return object;
}
