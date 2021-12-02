import { uPStoreValues } from './storevalues.js';
import { ul } from './selectors.js';

export class TaskAdd {
  constructor(task, bool, id) {
    this.task = task;
    this.bool = bool;
    this.id = id;
  }
}

export const addItem = (item, array) => {
  const sizeArr = JSON.parse(localStorage.getItem('taskList')).length;
  const itemAdd = new TaskAdd(item, true, sizeArr);
  ul.insertAdjacentHTML('beforeend',
    `<li><input type="checkbox" class="form-check-input" name="checkboxL" id="${itemAdd.id}" value="checkedValue"><label contenteditable class="editable-label" data-label="${itemAdd.id}">${itemAdd.task}</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="${itemAdd.id}"></i></li>`);

  array.push(itemAdd);
  uPStoreValues(array);
};