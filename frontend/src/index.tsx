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
import Gender from './pages/Gender';
import SexualOrient from './pages/SexualOrientation';
import RelationType from './pages/RelationshipType';
import Commitment from './pages/Commitment';

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
            <Route path={"/gender"} component={Gender} />
            <Route path={"/sexualorientation"} component={SexualOrient} />
            <Route path={"/relationshiptype"} component={RelationType} />
            <Route path={"/commitment"} component={Commitment} />
        </Router>
    ),
     root!
);
