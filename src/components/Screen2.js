import m from 'mithril';
import { registerButton, unregisterButton } from '../services/keyboardController';
import { keys, routes } from '../enums';

function Screen2() {
  const handleReturn = () => {
    m.route.set(routes.MENU);
  };

  return {
    oncreate: function() {
      registerButton(keys.BACKSPACE, handleReturn);
    },
    onremove: function() {
      unregisterButton(keys.BACKSPACE);
    },
    view: function() {
      return m('main', [
        m('p',  'Screen2')
      ]);
    }
  };
}

export default Screen2;
