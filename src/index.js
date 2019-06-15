import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={ store }>
            <App />
        </Provider>
    </ErrorBoundary>, document.getElementById('root')
);
