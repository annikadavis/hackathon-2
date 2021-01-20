import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table/Table";

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
      <Table />
    </div>
  );
}

export default App;
