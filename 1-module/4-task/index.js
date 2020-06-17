/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLocaleLowerCase();

  return ( str.indexOf("1xbet") != -1 || str.indexOf("xxx") != -1) ? true : false;
}
