/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {

    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.tr = document.createElement('tr');

    for(let i = 0; i < 4; i++) {
      this.td = document.createElement('td');
      switch(i) {
          case 0 :
            this.td.textContent = "Имя";
            this.td.style.border = 0;
            this.td.style.fontWeight = 'bold';
            break;
          case 1 : 
            this.td.textContent = "Возраст";
            this.td.style.border = 0;
            this.td.style.fontWeight = 'bold';
            break;
          case 2 : 
            this.td.textContent = "Зарплата";
            this.td.style.border = 0;
            this.td.style.fontWeight = 'bold';
            break;
          case 3 : 
            this.td.textContent = "Город";
            this.td.style.border = 0;
            this.td.style.fontWeight = 'bold';
            break;
        }  
        this.tr.appendChild(this.td);
      }

    this.thead.appendChild(this.tr);

    for(let i = 0; i < rows.length; i++) {
      this.tr = document.createElement('tr');
      this.tr.classList.add(`row${i}`);


      for (let j = 0; j < 5; j++) {
          this.td = document.createElement('td');

          switch(j) {
            case 0 :
              this.td.textContent = rows[i].name;
              break;
            case 1 : 
              this.td.textContent = rows[i].age;
              break;
            case 2 : 
              this.td.textContent = rows[i].salary;
              break;
            case 3 : 
              this.td.textContent = rows[i].city;
              break;
            case 4 : 
              const button = document.createElement("button");
              button.textContent = "X";
              button.id = i;
              button.addEventListener('click', () => { 
                const row = document.querySelectorAll(`.row${button.id}`);
                row[0].remove();
              });
              this.td.appendChild(button);
              break;
          }  

          this.tr.appendChild(this.td)
      }

      this.tbody.appendChild(this.tr);
    }
    this.table.appendChild(this.thead);
    this.table.appendChild(this.tbody);
    this.elem = this.table;
  }
}
