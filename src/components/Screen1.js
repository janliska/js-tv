import m from 'mithril';
import { registerButton, unregisterButton } from '../services/keyboardController';
import { keys, routes } from '../enums';

function Screen1() {
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
        m('p',  'Screen1')
      ]);
    }
  };
}

export default Screen1;