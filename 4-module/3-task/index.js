/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];

    let isDataAvailable = row.lastElementChild.getAttribute("data-available");

    if (isDataAvailable === "true") {
      row.classList.add("available");
    } else if (isDataAvailable === "false") {
      row.classList.add("unavailable");
    } else {
      row.hidden = true;
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let gender = row.lastElementChild.previousElementSibling;

    if( gender.textContent === "m") {
     row.classList.add("male");
    } else if (gender.textContent === "f") {
     row.classList.add("female");
   }
  }

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let age = row.lastElementChild.previousElementSibling.previousElementSibling;
    let ageLimit = 18;

    if( age.textContent < ageLimit) {
      row.style ="text-decoration: line-through";
    }
  }

}
