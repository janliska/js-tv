const buttonHandlers = {};

export const registerButton = ( buttonCode, handler ) => {
  buttonHandlers[buttonCode] = handler;
};
export const unregisterButton = buttonCode => {
  delete buttonHandlers[buttonCode];
};

const keyDownHandler = ({ code }) => {
  if (buttonHandlers[code]) {
    buttonHandlers[code]();
  }
};

document.onkeydown = keyDownHandler;
