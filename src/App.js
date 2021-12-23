import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { IdvPage } from "./pages/idv/idv";
import { IvcPage } from "./pages/ivc/ivc";

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IdvPage} />
        <Route path="/ivc" exact component={IvcPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
