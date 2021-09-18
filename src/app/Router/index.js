/**
 * App/Main/Router.js
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route, useLocation } from 'react-router-dom';

import NotFoundPage from 'pages/NotFound';
import withGA from './withGA';
import Config from './Config';
import Private from './Private';

const routeItems = [];
const routeComponents = {};
for (let i = 0; i < Config.length; i += 1) {
  const route = Config[i];
  const { name, component } = route;
  routeItems.push(route);
  routeComponents[name] = component;
}

const MainRouter = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const modal = location.state && location.state.modal;

  const isModal = !!(
    location.state &&
    location.state.modal &&
    background.pathname !== location.pathname
  );
  // && background.pathname.indexOf(location.pathname) !== 0

  // Always go to top if change location
  // useEffect(() => {
  //   // window.scrollTo(0, 0);
  // }, [location]);

  return (
    <Switch location={isModal ? background : location}>
      {routeItems.map((route) => {
        const { name, modalSupport } = route;
        if (modalSupport && isModal && modal === name) {
          return null;
        }
        const LoadableComponent = routeComponents[name];
        const GAComponent = withGA(LoadableComponent);

        if (route.requiresAuth) {
          return (
            <Private
              key={`route-${route.name}`}
              path={route.path}
              exact={route.exact}
              component={GAComponent}
            />
          );
        }
        return (
          <Route
            key={`route-${route.name}`}
            path={route.path}
            exact={route.exact}
            component={GAComponent}
          />
        );
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default withRouter(MainRouter);
