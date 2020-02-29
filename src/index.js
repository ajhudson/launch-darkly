import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

(async () => {
    const LDProvider = await asyncWithLDProvider({
        clientSideID: '5e59491b5ffa0909a383a3dd'
    });

    ReactDOM.render(<LDProvider><App /></LDProvider>, document.getElementById('root'));
})();

//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
