/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  str = str.split('-');
  let result = [];

  str.forEach( (element, index)  => {
    if(index != 0) {
     element = element[0].toUpperCase() + element.slice(1);
    }
    result.push(element);
  });

  return result.join('');
}