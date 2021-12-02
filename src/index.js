import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './scss/style.scss';
import firstDisplay from './jsmodules/array.js';
import { updateItem, upgTask } from './jsmodules/update.js';
import { setStoreValues, lastArray, uPStoreValues } from './jsmodules/storevalues.js';
import {
  ul, inputTask, clearbtn, resetList,
} from './jsmodules/selectors.js';
import { addItem } from './jsmodules/add.js';
import { clearCompleted, showClear } from './jsmodules/clearcompleted.js';
import { removeItem } from './jsmodules/remove.js';

document.addEventListener('DOMContentLoaded', () => {
  const arrayItems = setStoreValues(firstDisplay);
  arrayItems.forEach((e) => {
    if (e.bool === false) {
      ul.insertAdjacentHTML('beforeend',
        `<li><input type="checkbox" class="form-check-input checked" name="checkboxL" id="${e.id}" value="checkedValue" checked><label contenteditable class="editable-label taskdone" data-label="${e.id}">${e.task}</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="${e.id}"></i></li>`);
    } else {
      ul.insertAdjacentHTML('beforeend',
        `<li><input type="checkbox" class="form-check-input" name="checkboxL" id="${e.id}" value="checkedValue"><label contenteditable="true" class="editable-label" data-label="${e.id}">${e.task}</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="${e.id}"></i></li>`);
    }
  });

  inputTask.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const array = lastArray();
      addItem(inputTask.value, array);
      inputTask.value = '';
    }
  });
  clearbtn.addEventListener('click', () => {
    const checkedItems = document.querySelectorAll('.checked');
    showClear(checkedItems);
    const arrUp = setStoreValues(arrayItems);
    clearCompleted(arrUp);
  });

  resetList.addEventListener('click', () => {
    const array = [];
    uPStoreValues(array);
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

  ul.addEventListener('click', (e) => {
    const array = lastArray();
    if (e.target.getAttribute('data-list')) {
      const element = e.target;
      removeItem(element, array);
    }
  });

  ul.addEventListener('change', (e) => {
    const array = lastArray();
    e.target.classList.toggle('checked');
    updateItem(e.target, array);
  });

  ul.addEventListener('input', (e) => {
    const array = lastArray();
    if (e.target.getAttribute('data-label')) {
      const element = e.target;
      upgTask(element, array);
    }
  });
});