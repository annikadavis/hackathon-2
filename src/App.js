import React, { useState, useEffect } from "react";
import "./App.css";
import BasicTable from "./components/BasicTable/BasicTable";
import Table from "./components/HRTable/Table";

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
      {/* <Table /> */}
      <BasicTable />
    </div>
  );
}

export default App;
