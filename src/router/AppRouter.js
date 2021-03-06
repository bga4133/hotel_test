import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp } from "../components/SignUp/SignUp";
import { FormHotel } from "../components/SignUp/formHotel/FormHotel";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/formHotel" component={FormHotel} />
        </Switch>
      </div>
    </Router>
  );
};
