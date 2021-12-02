export const lastArray = () => JSON.parse(localStorage.getItem('taskList'));
export const setStoreValues = () => {
  const e = [];
  if (!localStorage.getItem('taskList') || localStorage.getItem('taskList') === undefined) {
    localStorage.setItem('taskList', JSON.stringify(e));
    return e;
  }
  return lastArray();
};

export const uPStoreValues = (e) => {
  localStorage.setItem('taskList', JSON.stringify(e));
};

export const refresh = (array) => {
  array.forEach((e, a) => {
    e.index = a + 1;
  });
  uPStoreValues(array);
};
