/**
 * @jest-environment jsdom
 */
import { beforeAll, expect, test } from '@jest/globals';
import { TaskAdd } from './add.js';
import { uPStoreValues, refresh } from './storevalues.js';

const mockArray = [];
const fakeLocalStorage = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

describe('Add and remove tests', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
    + ' <ul></ul>'
    + '</div>';
    const ul = document.querySelector('ul');

    const addItem = (item, array) => {
      const sizeArr = fakeLocalStorage;
      const itemAdd = new TaskAdd(item, false, sizeArr);
      ul.insertAdjacentHTML('beforeend',
        `<li><input type="checkbox" class="form-check-input" name="checkboxL" id="${itemAdd.index}" value="checkedValue"><label contenteditable class="editable-label" data-label="${itemAdd.index}">${itemAdd.task}</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="${itemAdd.index}"></i></li>`);

      array.push(itemAdd);
      uPStoreValues(array);
    };

    addItem('test', mockArray);
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(1);
  });

  test('Remove one item from the list', () => {
    const element = document.createElement('li');
    element.innerHTML = '<input type="checkbox" class="form-check-input" name="checkboxL" id="1" value="checkedValue"><label contenteditable="" class="editable-label" data-label="1" spellcheck="false">zxczxc</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="1"></i>';
    const removeElementBtn = element.querySelector('.remove');
    document.body.innerHTML = '<div>'
    + ' <ul></ul>'
    + '</div>';
    const ul = document.querySelector('ul');
    ul.appendChild(element);
    const showClear = (array) => {
      array.forEach((e) => {
        e.parentElement.remove();
      });
      const ave = ul.querySelectorAll('input[type="checkbox"]');
      ave.forEach((e, i) => {
        e.id = i + 1;
      });
    };
    const removeItem = (item, array) => {
      let idInt = item.previousElementSibling.previousElementSibling.id;
      const arrItem = [];
      arrItem.push(item);
      idInt = parseInt(idInt, 10);
      const index = array.findIndex((e) => e.index === idInt);
      array.splice(index, 1);
      showClear(arrItem);
      refresh(array);
    };
    removeItem(removeElementBtn, mockArray);
  });
});
