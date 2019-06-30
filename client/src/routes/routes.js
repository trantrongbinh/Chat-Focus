import Home from '../pages';
import Register from '../components/users/Register';

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Home,
  },
  //notFound
  // {
  //   path: '',
  //   exact: true,
  //   auth: false,
  //   component: NotFound,
  // },
];

export default routes;
