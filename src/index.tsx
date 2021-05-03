import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import Routes from './routes/Routes';
import Providers from './Providers';
import Loading from './shared/common/Loading';
import ErrorBoundaryRetry from './shared/common/ErrorBoundaryRetry';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <Providers>
      <ErrorBoundaryRetry>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </ErrorBoundaryRetry>
    </Providers>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
