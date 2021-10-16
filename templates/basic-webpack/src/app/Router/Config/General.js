//
// Router general config
//
import Homepage from 'pages/Homepage/Loadable';
import About from 'pages/About/Loadable';
import Contact from 'pages/Contact/Loadable';

export default [
  {
    name: 'Homepage',
    path: '/',
    component: Homepage,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
    exact: true,
    requiresAuth: false,
  },
];
