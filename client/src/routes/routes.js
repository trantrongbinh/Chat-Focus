import Register from '../components/users/Register';

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Register,
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
