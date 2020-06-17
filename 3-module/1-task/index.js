/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];

  for(let user in users){
    names.push(users[user].name);
  }

  return names;
}
