import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreateContact from "./containers/CreateContact";
import EditContact from "./containers/EditContact";
import DetailContact from "./containers/DetailContact";
import ListContactContainer from "./containers/ListContactContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={ListContactContainer} />

          <Route path="/create" exact component={CreateContact} />

          <Route path="/detail/:id" exact component={DetailContact} />

          <Route path="/edit/:id" exact component={EditContact} />
        </BrowserRouter>
      </div>
    );
  }
}