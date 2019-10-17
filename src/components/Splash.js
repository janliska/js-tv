import m from 'mithril';
import logo from '../../public/logo.png';
import { routes } from '../enums';

function Splash() {
  window.setTimeout(() => {
    m.route.set(routes.MENU);
  }, 5000);

  return {
    view: () => m('main', [ m('img', { src: logo }) ])
  };
}

export default Splash;
