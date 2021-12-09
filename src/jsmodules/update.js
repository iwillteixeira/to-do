import { uPStoreValues } from './storevalues.js';

// update array
export const updateArray = (idInt, arrayItems) => {
  const index = arrayItems.findIndex((e) => e.index === idInt);
  arrayItems[index].completed = true;
  uPStoreValues(arrayItems);
};

export const validateCheck = (elementCheck, arrayItems) => {
  const idInt = parseInt(elementCheck.id, 10);
  if (elementCheck.classList.contains('checked')) {
    elementCheck.nextSibling.classList.add('taskdone');
    updateArray(idInt, arrayItems);
  } else {
    elementCheck.nextSibling.classList.remove('taskdone');
    const index = arrayItems.findIndex((e) => e.index === idInt);
    arrayItems[index].completed = false;
    uPStoreValues(arrayItems);
  }
};
export const updateItem = (e, arrayItems) => {
  validateCheck(e, arrayItems);
};

export const upgTask = (element, array) => {
  let { id } = element.previousElementSibling;
  id -= 1;
  array[id].task = element.textContent;
  uPStoreValues(array);
};
