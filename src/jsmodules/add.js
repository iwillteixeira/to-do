import { uPStoreValues } from './storevalues.js';
import { ul } from './selectors.js';

export class TaskAdd {
  constructor(task, completed, index) {
    this.task = task;
    this.completed = completed;
    this.index = index;
  }
}

export const addItem = (item, array) => {
  const sizeArr = JSON.parse(localStorage.getItem('taskList')).length + 1;
  const itemAdd = new TaskAdd(item, false, sizeArr);
  ul.insertAdjacentHTML('beforeend',
    `<li><input type="checkbox" class="form-check-input" name="checkboxL" id="${itemAdd.index}" value="checkedValue"><label contenteditable class="editable-label" data-label="${itemAdd.index}">${itemAdd.task}</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="${itemAdd.index}"></i></li>`);

  array.push(itemAdd);
  uPStoreValues(array);
};
