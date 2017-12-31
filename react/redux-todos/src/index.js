import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import {Provider} from 'react-redux';
import Store from './Store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <TodoApp />
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();
