import React, {Component} from 'react'
import config from './config.json';

class greeter extends Component{
  	render(){
    return (
      <div>
        {config.greetText}
      </div>
    );
 }
}

export default greeter