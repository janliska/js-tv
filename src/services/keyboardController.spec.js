import { registerButton, unregisterButton } from './keyboardController';
import { keys } from '../enums';

const pressKey = keyCode => {
  const event = new KeyboardEvent('keydown', {
    bubbles: true, cancelable: true, code: keyCode
  });
  document.body.dispatchEvent(event);
};

describe('Keyboard controller', () => {
  let callLog;
  beforeEach(() => {
    callLog = 0;
  });

  test('should register handler and call it when button pressed', () => {
    registerButton(keys.UP, () => callLog = true);
    pressKey(keys.UP);

    expect(callLog).toBe(true);
  });

  test('should unregister handler', () => {
    registerButton(keys.UP, () => callLog++);
    pressKey(keys.UP);

    expect(callLog).toBe(1);

    unregisterButton(keys.UP);
    pressKey(keys.UP);

    expect(callLog).toBe(1);
  });

  test('should ignore other buttons press', () => {
    registerButton(keys.UP, () => callLog++);
    pressKey(keys.DOWN);
    pressKey(keys.ENTER);
    pressKey(keys.BACKSPACE);

    expect(callLog).toBe(0);
  });
});
