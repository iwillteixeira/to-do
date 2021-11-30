import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './scss/style.scss';
import firstDisplay from './jsmodules/array.js';
import ul from './jsmodules/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  firstDisplay.forEach((e) => {
    ul.insertAdjacentHTML('beforeend',
      `<li><input type="checkbox" class="form-check-input" name="" id="${e.id}" value="checkedValue"><p>${e.task}</p> <i class="fa fa-ellipsis-v mv" aria-hidden="true"></i></li>`);
  });
});