import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { UserSearchPage, ProfilePage } from '../features/users';
import { FamousReposPage } from '../features/repos';
import NoMatchPage from '../shared/common/NoMatchPage';
import Loading from '../shared/common/Loading';

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/repo-list" />
          </Route>
          <Route path="/repo-list" component={FamousReposPage} />
          <Route path="/search" component={UserSearchPage} />
          <Route path="/profile/:slug" component={ProfilePage} />
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
