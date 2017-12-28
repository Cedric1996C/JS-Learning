import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';
import Provider from './Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
