/**
 * @jest-environment jsdom
 */
import { expect, test } from '@jest/globals';
import { upgTask, updateArray } from './update.js';
import { clearCompleted } from './clearcompleted.js';

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

describe('Edit, update completed and clear all completed functions testing', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  test('Edit function works', () => {
    const mockArray = [{ task: 'task one', completed: false, index: 1 }, { task: 'task two', completed: false, index: 2 }, { task: 'task three', completed: false, index: 3 }];
    document.body.innerHTML = `<div>
     <ul>
       <li><input type="checkbox" class="form-check-input" name="checkboxL" id="1" value="checkedValue"><label contenteditable="" class="editable-label" data-label="1" spellcheck="false">task one</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="1"></i></li>
       <li><input type="checkbox" class="form-check-input" name="checkboxL" id="2" value="checkedValue"><label contenteditable="" class="editable-label" data-label="2" spellcheck="false">task two</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="2"></i></li>
       <li><input type="checkbox" class="form-check-input" name="checkboxL" id="3" value="checkedValue"><label contenteditable="" class="editable-label" data-label="3" spellcheck="false">task three</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="3"></i></li>
     </ul>
   </div>`;
    const elementTwo = document.querySelector('[data-label="2"]');
    elementTwo.textContent = 'element change';
    upgTask(elementTwo, mockArray);
    expect(mockArray[1].task).toBe('element change');
  });

  test('Update complete status', () => {
    const mockArray = [{ task: 'task one', completed: false, index: 1 }, { task: 'task two', completed: false, index: 2 }, { task: 'task three', completed: false, index: 3 }];
    document.body.innerHTML = `<div>
     <ul>
       <li><input type="checkbox" class="form-check-input" name="checkboxL" id="1" value="checkedValue"><label contenteditable="" class="editable-label" data-label="1" spellcheck="false">task one</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="1"></i></li>
       <li><input type="checkbox" class="form-check-input" name="checkboxL" id="2" value="checkedValue"><label contenteditable="" class="editable-label" data-label="2" spellcheck="false">task two</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="2"></i></li>
       <li><input type="checkbox" class="form-check-input" name="checkboxL" id="3" value="checkedValue"><label contenteditable="" class="editable-label" data-label="3" spellcheck="false">task three</label> <i class="fas fa-trash-alt remove" aria-hidden="true" data-list="3"></i></li>
     </ul>
   </div>`;
    const idInt = 2;

    updateArray(idInt, mockArray);
    expect(mockArray[1].completed).toBe(true);
  });

  test('Clear all completed', () => {
    const mockArray = [{ task: 'task one', completed: false, index: 1 }, { task: 'task two', completed: true, index: 2 }, { task: 'task three', completed: false, index: 3 }];
    const finalArray = clearCompleted(mockArray);
    expect(finalArray).toHaveLength(2);
  });
});
