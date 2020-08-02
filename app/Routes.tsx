/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

// Lazily load routes and code split with webpacck
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

<<<<<<< HEAD
const LazyPortlistPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/PortlistPage')
);

=======
>>>>>>> e799828... Update dependency @types/react to ^16.9.44
const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

<<<<<<< HEAD
const PortlistPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyPortlistPage {...props} />
  </React.Suspense>
);

=======
>>>>>>> e799828... Update dependency @types/react to ^16.9.44
export default function Routes() {
  return (
    <App>
      <Switch>
<<<<<<< HEAD
        <Route path={routes.PORTLIST} component={PortlistPage} />
=======
>>>>>>> e799828... Update dependency @types/react to ^16.9.44
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
