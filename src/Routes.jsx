import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Space from "./component/Space";
import TodoList from "./component/features/todoList/TodoList";
import Filter from "./component/features/filter/Filter";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/space" />
        <Route exact path="/space" component={Space} />
        <Route exact path="/space/todo-list" component={TodoList} />
        <Route exact path="/space/filter" component={Filter} />
      </Switch>
    </Router>
  )
}

export default Routes;