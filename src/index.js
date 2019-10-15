import m from 'mithril';
import '../public/index.css';
import { Hello } from './components/Hello';
import { Splash } from './components/Splash';

m.route(document.getElementById('root'), '/splash', {
  '/splash': Splash,
  '/hello': Hello,
});

window.setTimeout(() => {
  // eslint-disable-next-line no-console
  console.log('yep');
  m.route.set('/hello');
}, 5000);

