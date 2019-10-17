import m from 'mithril';
import '../public/index.css';
import { getRoutes } from './services/routerFactory';
import { routes } from './enums';

m.route(
  document.getElementById('root'),
  routes.SPLASH,
  getRoutes()
);
