/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let usersToShow = [];

  usersToShow = users.filter( user => user.age <= age);

  let stringToShow = '';

  for(let i = 0; i < usersToShow.length; i++) {
    stringToShow += `${usersToShow[i].name}, ${usersToShow[i].balance}`
    if(i != usersToShow.length-1) {
      stringToShow += `\n`;
    }

  }
    return stringToShow;
}
