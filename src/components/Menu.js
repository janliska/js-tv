import m from 'mithril';
import { registerButton, unregisterButton } from '../services/keyboardController';
import { keys, routes } from '../enums';

function Menu () {
  let currentItem = null;
  const items = [
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
    if (currentItem === null) return;
    m.route.set(items[currentItem].route);
  };

  const handleUp = () => {
    if (currentItem !== null && currentItem > 0) {
      currentItem--;
    } else {
      currentItem = items.length - 1;
    }
    m.redraw();
  };

  const handleDown = () => {
    if (currentItem !== null  && currentItem < items.length - 1) {
      currentItem++;
    } else {
      currentItem = 0;
    }
    m.redraw();
  };

  const getClassNames = item => {
    const baseClassName = 'item';
    const activeClassName = (currentItem === item) ? 'active' : 'not-active';
    return `${baseClassName} ${activeClassName}`;
  };

  return {
    oncreate: function() {
      registerButton(keys.ENTER, handleEnterScreen);
      registerButton(keys.UP, handleUp);
      registerButton(keys.DOWN, handleDown);
    },
    onremove: function() {
      unregisterButton(keys.ENTER);
      unregisterButton(keys.UP);
      unregisterButton(keys.DOWN);
    },
    view: function() {
      return m('main', [
        items.map((item, i) => m('div', { class: getClassNames(i) }, item.title))
      ]);
    }
  };
}

export default Menu;
