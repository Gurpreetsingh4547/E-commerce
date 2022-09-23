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
