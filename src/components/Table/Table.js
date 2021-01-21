import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import Search from "@material-ui/icons/Search";
import AddBox from "@material-ui/icons/AddBox";
import { FormatAlignCenter } from "@material-ui/icons";
import styled from "styled-components";

//Styled components

const TableDiv = styled.div`
  display: flex;
  align-items: center;
`;

function Table(props) {
  const [empolyees, setEmployees] = useState([]);
  const [data, setData] = useState(0);

  const tableIcons = {
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  };

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/employees?key=e1692940")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  console.log("fake data u there?", empolyees);
  return (
    <TableDiv style={{ maxWidth: "90%" }}>
      <MaterialTable
        icons={tableIcons}
        columns={[
          { title: "Name", field: "name" },
          { title: "E-mail", field: "email" },
          { title: "Position", field: "position" },
          { title: "Education", field: "education" },
          { title: "Former Employers", field: "former_employers" },
          {
            title: "Experience in field",
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
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => {
              // Do save operation
            },
          },
        ]}
        editable={{
          isEditable: (rowData) => rowData.name === "a", // only name(a) rows would be editable
          isEditHidden: (rowData) => rowData.name === "x",
          isDeletable: (rowData) => rowData.name === "b", // only name(b) rows would be deletable,
          isDeleteHidden: (rowData) => rowData.name === "y",
          onBulkUpdate: (changes) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                /* setData([...data, newData]); */

                resolve();
              }, 1000);
            }),
          onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
          onRowUpdateCancelled: (rowData) =>
            console.log("Row editing cancelled"),
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                /* setData([...data, newData]); */

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </TableDiv>
  );
}

export default Table;
