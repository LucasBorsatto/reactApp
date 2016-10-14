import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import ContainerForm from '../components/Transfer/ContainerForm';
import List from '../components/Transfer/List';

export default (<Route path="/" component={App}>
  <IndexRoute component={ContainerForm} />
  <Route path="new" component={ContainerForm} />
  <Route path="list" component={List} />
</Route>
);

