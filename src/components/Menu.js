import m from 'mithril';
import { registerButton, unregisterButton } from '../services/keyboardController';
import { keys, routes } from '../enums';

function Menu () {
  let currentScreen = null;
  const screens = [
    {
      title: 'Screen 1',
      route: routes.SCREEN1
    },
    {
      title: 'Screen 2',
      route: routes.SCREEN2
    },
    {
      title: 'Screen 3',
      route: routes.SCREEN3
    }
  ];

  const handleEnterScreen = () => {
    if (currentScreen === null) return;
    m.route.set(screens[currentScreen].route);
  };

  const handleUp = () => {
    if (currentScreen !== null && currentScreen > 0) {
      currentScreen--;
    } else {
      currentScreen = screens.length - 1;
    }
    m.redraw();
  };

  const handleDown = () => {
    if (currentScreen !== null  && currentScreen < screens.length - 1) {
      currentScreen++;
    } else {
      currentScreen = 0;
    }
    m.redraw();
  };

  const getClassNames = item => {
    const baseClassName = 'item';
    const activeClassName = (currentScreen === item) ? 'active' : 'not-active';
    return `${baseClassName} ${activeClassName}`;
  };

  return {
    oncreate: () => {
      registerButton(keys.ENTER, handleEnterScreen);
      registerButton(keys.UP, handleUp);
      registerButton(keys.DOWN, handleDown);
    },
    onremove: () => {
      unregisterButton(keys.ENTER);
      unregisterButton(keys.UP);
      unregisterButton(keys.DOWN);
    },
    view: () => m('main', [
      screens.map((item, i) => m('div', { class: getClassNames(i) }, item.title))
    ])
  };
}

export default Menu;
