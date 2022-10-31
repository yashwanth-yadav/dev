import React from 'react';

const Calender = React.lazy(() => import('./components/Calendar'));

const routes = [
  {
    path: '/calender',
    component: Calender
  }
];

export default routes;