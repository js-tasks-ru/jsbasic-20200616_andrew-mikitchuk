/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;

  for(let key in salaries) {
    if( isNumber(salaries[key]) ) {
      sum += salaries[key];
    } 
  }

  return sum;
}

var isNumber = function isNumber(value) {
   return typeof value === 'number' && isFinite(value);
}
