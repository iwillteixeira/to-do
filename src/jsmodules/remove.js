import { refresh } from './storevalues.js';
import { showClear } from './clearcompleted.js';

export const removeItem = (item, array) => {
  let idInt = item.previousElementSibling.previousElementSibling.id;
  const arrItem = [];
  arrItem.push(item);
  idInt = parseInt(idInt, 10);
  const index = array.findIndex((e) => e.index === idInt);
  array.splice(index, 1);
  showClear(arrItem);
  refresh(array);
};
