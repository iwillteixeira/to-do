export const setStoreValues = (e) => {
  if (!localStorage.getItem('taskList')) {
    localStorage.setItem('taskList', JSON.stringify(e));
    return e;
  }
  return JSON.parse(localStorage.getItem('taskList'));
};

export const uPStoreValues = (e) => {
  localStorage.setItem('taskList', JSON.stringify(e));
};
