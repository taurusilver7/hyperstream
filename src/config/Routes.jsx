import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:catagory/search/:keyword" component={Catalog} />
      <Route path="/:catagory/:id" component={Detail} />
      <Route path="/:catagory/" component={Catalog} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
