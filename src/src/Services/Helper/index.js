/**
 * Check Array is Array
 * @param {Array} arr
 * @returns [Bool]
 */
export const IsArray = (arr) => {
  if (typeof arr !== "undefined" && arr !== null && Array.isArray(arr)) {
    return true;
  }
  return false;
};

/**
 * Check Array Have value
 * @param {Array} Arr
 * @returns [Bool]
 */
export const ArrayHaveValue = (arr) => {
  if (IsArray(arr) && arr.length > 0) return true;
  return false;
};

/**
 * Compare two values
 * @param {[number, string]} value1
 * @param {[number, string]} value2
 * @returns [Node]
 */
export const IsEqual = (value1, value2) => {
  if (value1 === value2) return true;
  return false;
};

/**
 * @param  {[bool]} bool
 * @param  {[bool]} returnNumeric
 * @return {[bool]}
 */
export const IsTrue = (bool, returnNumeric) => {
  if (bool === true || bool === "true" || bool === 1 || bool === "1") {
    return returnNumeric === true ? 1 : true;
  }

  return returnNumeric === true ? 0 : false;
};

/**
 * [description]
 * @param  {[any]}  text
 * @param  {[bool]} nullOption
 * @return {[bool]}
 */
export const HaveValue = (text, nullOption, noneOption) => {
  if (typeof text === "undefined") {
    return false;
  }

  if (IsTrue(nullOption) && (text === "null" || text === null)) {
    return false;
  }

  if (IsTrue(noneOption) && text.toLowerCase() === "none") {
    return false;
  }

  if (text === "0" || text === 0) {
    return true;
  }

  if (text !== "" && text != null) {
    return true;
  }

  return false;
};

/**
 * @param  {Function} functionToCheck
 * @return {boolean}
 */
export const IsFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
