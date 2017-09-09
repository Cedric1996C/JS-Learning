import React from 'react';
import {render} from 'react-dom';
import greeter from './greeter';
import config from './config.json';

render(<greeter />, document.getElementById('root'));
console.log(config.greetText);
