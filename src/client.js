import  './style.css';
import Message from './components/Message';
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Message />,
    document.getElementById('app')
);


console.log('ok ,no more');





// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
}