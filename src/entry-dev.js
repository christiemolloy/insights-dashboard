/* eslint-disable no-console */
import App from './App';
import { IntlProvider } from '@redhat-cloud-services/frontend-components-translations';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/files/helpers';
import { init } from './Store';
import logger from 'redux-logger';
import messages from '../locales/data.json';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <IntlProvider locale={ navigator.language } messages={ messages } onError={ console.log }>
        <Provider store={ init(logger).getStore() }>
            <Router basename={ getBaseName(window.location.pathname) }>
                <App />
            </Router>
        </Provider>
    </IntlProvider>,

    rootEl,
    () => rootEl.setAttribute('data-ouia-safe', true)
);
