import m from 'mithril';
import { registerButton, unregisterButton } from '../services/keyboardController';
import { keys, routes } from '../enums';

function Screen1() {
  const handleReturn = () => m.route.set(routes.MENU);

  return {
    oncreate: () => registerButton(keys.BACKSPACE, handleReturn),
    onremove: () => unregisterButton(keys.BACKSPACE),
    view: () => m('main', [ m('p',  'Screen 1') ])
  };
}

export default Screen1;
