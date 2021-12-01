import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './scss/style.scss';
import firstDisplay from './jsmodules/array.js';
import { updateItem } from './jsmodules/update.js';
import { setStoreValues } from './jsmodules/storevalues.js';

import ul from './jsmodules/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  const arrayItems = setStoreValues(firstDisplay);
  arrayItems.forEach((e) => {
    if (e.bool === false) {
      ul.insertAdjacentHTML('beforeend',
        `<li><input type="checkbox" class="form-check-input checked" name="checkboxL" id="${e.id}" value="checkedValue" checked><p class="taskdone">${e.task}</p> <i class="fa fa-ellipsis-v mv" aria-hidden="true"></i></li>`);
    } else {
      ul.insertAdjacentHTML('beforeend',
        `<li><input type="checkbox" class="form-check-input" name="checkboxL" id="${e.id}" value="checkedValue"><p>${e.task}</p> <i class="fa fa-ellipsis-v mv" aria-hidden="true"></i></li>`);
    }
  });
  const checkId = ul.querySelectorAll('input[type="checkbox"]');
  updateItem(checkId, arrayItems);
});