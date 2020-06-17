/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let counter = 0;

  for(let key in obj) {
    counter++;
  }

  return !counter;
}
