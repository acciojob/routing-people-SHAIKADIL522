import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
         <Route exact path="/" component={UserList} />
         <Route path="/users/:id" component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
