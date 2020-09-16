import React,{Component} from 'react';
import { BrowserRouter as Router ,Switch, Route, Link, Redirect } from "react-router-dom";
// import AddForm from '../../screen/AddForm/AddForm';
// import Dashboard from '../../screen/Dashboard/Dashboard';
// import Login from '../../screen/Login/Login';

import * as Screens from '../../screen'

const Routes =() => {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Screens.Login}>
            </Route >
            <Route exact path="/addForm" component={Screens.AddForm}>
            </Route>
            <PrivateRoute path="/Dashboard" component={Screens.Dashboard}> </PrivateRoute>
            {/* <Route path="/dashboard/:userId" component={Screens.Dashboard}></Route>
            <Route exact path="/dashboard" component={Screens.Dashboard}> */}
            {/* </Route> */}
        </div>
      </Router>
    );
  }
  
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  function PrivateRoute({path}) {
    return (
      <Route
        path={path}
        render={({ props }) =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location,fakeAuth }
              }}
            />
          )
        }
      />
    );
  }
  

  function AuthButton() {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }
export default Routes;  