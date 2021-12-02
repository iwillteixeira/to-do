import { ul } from './selectors.js';
import { uPStoreValues } from './storevalues.js';

const ave = ul.querySelectorAll('input[type="checkbox"]');

export const showClear = (array) => {
  array.forEach((e) => {
    e.parentElement.remove();
  });
  ave.forEach((e, i) => {
    e.id = i + 1;
  });
};
export const clearCompleted = (array) => {
  const up = array.filter((e) => e.completed !== true);
  up.forEach((e, a) => {
    e.index = a + 1;
  });
  uPStoreValues(up);
};