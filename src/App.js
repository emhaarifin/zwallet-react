import React, { Fragment } from 'react';
import Login from './pages/login';
import LandingPages from './pages/LandingPages';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './middlewares/PrivateRoute';
import CreatePin from './pages/createPin';
import verifiedAccounts from './pages/verifiedAccounts';
import PinSuccess from './pages/confirmPin';
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPages} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verified-accounts/:token" component={verifiedAccounts} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/pin" component={CreatePin} />
        <Route path="/pin-success" component={PinSuccess} />
        <PrivateRoute path="/dashboard" version={2} component={() => <p></p>} />
      </Switch>
    </Fragment>
  );
}

export default App;
