/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './App';

const root = document.getElementById('root');

render(
    () =>(
        <Router root={App}>
            {/* <Route path={"/"} component={Component} /> This is the syntax for adding a new route*/}
        </Router>
    ),
     root!
);
