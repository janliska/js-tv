import m from 'mithril';
import { registerButton, unregisterButton } from '../services/keyboardController';
import { keys, routes } from '../enums';

function Screen2() {
  const handleReturn = () => m.route.set(routes.MENU);

  return {
    oncreate: () => registerButton(keys.BACKSPACE, handleReturn),
    onremove: () => unregisterButton(keys.BACKSPACE),
    view: () => m('main', [ m('p',  'Screen 2') ])
  };
}

export default Screen2;
