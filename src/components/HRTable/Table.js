import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import picasso from "../images/Girl-Before-a-Mirror.jpg";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

function Table({ tableData, onAdd, onDelete, onUpdate }) {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    setData(tableData);
  }, [tableData]);
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["TheSansOsF"].join(","),
    },
  });

  return (
    <div
      style={{
        maxWidth: "95%",
        maxHeight: "200px",
        margin: "auto",
      }}
    >
      <img
        src={picasso}
        alt="painting"
        style={{ maxWidth: "100%", marginTop: "30px" }}
      />
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          options={
            ({ searchFieldAlignment: "left" },
            {
              headerStyle: {
                backgroundColor: "grey",
                color: "white",
              },
            })
          }
          style={{ border: "solid,1px,rgba(0, 0, 0, 1)" }}
          icons={tableIcons}
          title={
            "Search all employees to find the perfect member of your new team."
          }
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
            { title: "Network Connections", field: "network connections" },
            { title: "Special Skills", field: "skills" },
            { title: "Languages", field: "languages" },
            { title: "Software Skills", field: "software_skills" },
            { title: "Talents", field: "talents" },
            { title: "Customers", field: "customers" },
            { title: "Projects", field: "projects" },
            { title: "Further Training", field: "further_training" },
          ]}
          data={data}
          editable={{
            onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
            onRowUpdateCancelled: (rowData) =>
              console.log("Row editing cancelled"),
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  /* setData([...data, newData]); */

                  onAdd(newData);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  console.log(dataUpdate);
                  setData(dataUpdate);
                  onUpdate(dataUpdate[index].id, newData);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...tableData];
                  const index = oldData.tableData.id;
                  console.log(oldData);
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  onDelete(oldData.id);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default Table;
