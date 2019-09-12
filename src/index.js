import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

// Solution to github pages routing problem (inclusion of "basename" parameter): 
// https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819
// Hashrouter fixing the refresh 404 problem
// https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages
ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
    </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
