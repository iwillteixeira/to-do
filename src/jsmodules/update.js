import { uPStoreValues } from './storevalues.js';

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
export const updateItem = (array, arrayItems) => {
  array.forEach((element) => {
    element.addEventListener('change', () => {
      element.classList.toggle('checked');
      validateCheck(element, arrayItems);
    });
  });
};
