import React, { useState, useEffect } from "react";
import "./App.css";
import BasicTable from "./components/BasicTable/BasicTable";
import Table from "./components/HRTable/Table";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={BasicTable}></Route>
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Switch>
          <Route exact path="/edit" component={Table} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
