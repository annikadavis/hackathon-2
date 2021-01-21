import React, { useState, useEffect } from "react";
import "./App.css";
import BasicTable from "./components/BasicTable/BasicTable";
import Table from "./components/HRTable/Table";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

function App() {
  const [empolyees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/employees?key=e1692940")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  console.log("fake data u there?", empolyees);
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/home" component={BasicTable}></Route>
        </Switch>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/edit" component={Table} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
