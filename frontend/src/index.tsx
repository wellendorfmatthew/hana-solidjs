/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './pages/App';
import PhoneNumber from './pages/Phonenumber';
import OTP from './pages/OTP';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import GenderIdentity from './pages/GenderIdentity';
import SexualIdentity from './pages/SexualIdentity';
import RelationshipType from './pages/RealtionshipType';
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
            <Route path={"/genderidentity"} component={GenderIdentity} />
            <Route path={"/sexualidentity"} component={SexualIdentity} />
            <Route path={"/relationshiptype"} component={RelationshipType} />
            <Route path={"/commitment"} component={Commitment} />
        </Router>
    ),
     root!
);
