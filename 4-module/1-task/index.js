/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  let li;

  friends.forEach( friend => {
    li = document.createElement("li");
    li.innerText = friend.firstName + " " + friend.lastName;
    ul.append(li);
  });

  return ul;
}
