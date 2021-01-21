import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function Table() {
  const [empolyees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/employees?key=e1692940")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  console.log("fake data u there?", empolyees);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "E-mail", field: "email" },
          { title: "Position", field: "position" },
          { title: "Education", field: "education" },
          { title: "Former Employers", field: "former_employers" },
          {
            title: "Experience in the trade",
            field: "experience_in_the_trade",
          },
          { title: "Special Knowledge", field: "special_knowledge" },
          { title: "Hobbies", field: "hobbies" },
          { title: "Network Connections", field: "" },
          { title: "Special Skills", field: "skills" },
          { title: "Languages", field: "languages" },
          { title: "Software Skills", field: "software_skills" },
          { title: "Talents", field: "talents" },
          { title: "Customers", field: "customers" },
          { title: "Projects", field: "projects" },
          { title: "Further Training", field: "further_training" },
        ]}
        data={empolyees}
        options={{
          search: true
        }}
      />
    </div>
  );
}

export default Table;
