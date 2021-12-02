import { uPStoreValues } from './storevalues.js';

// update array
const updateArray = (idInt, arrayItems) => {
  const index = arrayItems.findIndex((e) => e.id === idInt);
  arrayItems[index].bool = false;
  uPStoreValues(arrayItems);
};

export const validateCheck = (elementCheck, arrayItems) => {
  const idInt = parseInt(elementCheck.id, 10);
  if (elementCheck.classList.contains('checked')) {
    elementCheck.nextSibling.classList.add('taskdone');
    updateArray(idInt, arrayItems);
  } else {
    elementCheck.nextSibling.classList.remove('taskdone');
    const index = arrayItems.findIndex((e) => e.id === idInt);
    arrayItems[index].bool = true;
    uPStoreValues(arrayItems);
  }
};
export const updateItem = (e, arrayItems) => {
  validateCheck(e, arrayItems);
};

export const upgTask = (element, array) => {
  const id = parseInt(element.getAttribute('data-label'), 10);
  array[id].task = element.textContent;
  uPStoreValues(array);
};
