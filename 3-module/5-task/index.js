/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(/,| /);

  let filteredArray = arr.filter( value => {
    value = +value;
    if(typeof value == 'number'){;
      return +value;
    }
  });
  
  let sortedArray = filteredArray.sort( (a,b) => a-b);

  return {
    min: +sortedArray[0],
    max: +sortedArray[sortedArray.length-1],
  };
}
