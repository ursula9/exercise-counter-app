import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';

//import App from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp/>
        {/* <FirstApp title="chopp" subTitle={ 123 } /> */}
        {/* <FirstApp title="hola, soy chopper"/> */}
        <CounterApp value={20}/>
    </React.StrictMode>
)