import { ul } from './selectors.js';
import { uPStoreValues } from './storevalues.js';

export const showClear = (array) => {
  array.forEach((e) => {
    e.parentElement.remove();
  });
  const ave = ul.querySelectorAll('input[type="checkbox"]');
  ave.forEach((e, i) => {
    e.id = i;
  });
};
export const clearCompleted = (array) => {
  const up = array.filter((e) => e.bool !== false);
  up.forEach((e, a) => {
    e.id = a;
  });
  uPStoreValues(up);
};