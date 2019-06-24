import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
