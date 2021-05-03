import React from 'react';
import { Provider } from 'react-redux';
import { RelayEnvironmentProvider } from 'react-relay';
// @ts-ignore
import { PersistGate } from 'redux-persist/es/integration/react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { getPersistor } from '@rematch/persist';

import { store } from './state/store';
import Environment from './services/relay/Environment';

type Props = {
  children: React.ReactNode;
};

const persistor = getPersistor();

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  input[type="text"] {
    text-transform: lowercase;
  }
`;

const Providers = ({ children }: Props) => {
  return (
    <React.StrictMode>
      <RelayEnvironmentProvider environment={Environment}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <>
              <GlobalStyle />
              {children}
            </>
          </PersistGate>
        </Provider>
      </RelayEnvironmentProvider>
    </React.StrictMode>
  );
};

export default Providers;
