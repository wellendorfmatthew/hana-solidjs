/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './pages/App';
import PhoneNumber from './pages/Phonenumber';
import OTP from './pages/OTP';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import { Preview } from './pages/Preview';

const root = document.getElementById('root');

render(
    () =>(
        <Router >
            <Route path={"/"} component={App} />
            <Route path={"/phonenumber"} component={PhoneNumber} />
            <Route path={"/otp"} component={OTP} />
            <Route path={"/sign-up"} component={SignUp} />
            <Route path={"/homepage"} component={Homepage} />
            <Route path={"/preview"} component={Preview} />
        </Router>
    ),
     root!
);
