import Splash from '../components/Splash';
import Menu from '../components/Menu';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import { routes } from '../enums';

const routeHandlers = {
  [routes.SPLASH]: Splash,
  [routes.MENU]: Menu,
  [routes.SCREEN1]: Screen1,
  [routes.SCREEN2]: Screen2,
  [routes.SCREEN3]: Screen3,
};

export const getRoutes = () => routeHandlers;
