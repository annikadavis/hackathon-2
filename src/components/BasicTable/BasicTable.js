import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import picasso from "../images/Girl-Before-a-Mirror.jpg";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



function BasicTable() {
  const [empolyees, setEmployees] = useState([]);

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'TheSansOsF',
      ].join(','),
    },
  });

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/employees?key=e1692940")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  console.log("fake data u there?", empolyees);
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
        options={{ searchFieldAlignment: "left" },
          {headerStyle: {
          backgroundColor: 'grey',
          color: 'white',}}}
        style={{ border: "solid,1px,rgba(0, 0, 0, 1)" }}
        icons={tableIcons}
        title={"Search all employees to find the perfect member of your new team."}
        columns={[
          { title: "Name", field: "name"},
          { title: "E-mail", field: "email"},
          { title: "Position", field: "position"},
          { title: "Education", field: "education"},
          { title: "Former Employers", field: "former_employers"},
          {
            title: "Experience in field",
            field: "experience_in_the_trade",
          },
          { title: "Special Knowledge", field: "special_knowledge"},
          { title: "Hobbies", field: "hobbies"},
          { title: "Network Connections", field: ""},
          { title: "Special Skills", field: "skills"},
          { title: "Languages", field: "languages"},
          { title: "Software Skills", field: "software_skills"},
          { title: "Talents", field: "talents"},
          { title: "Customers", field: "customers"},
          { title: "Projects", field: "projects"},
          { title: "Further Training", field: "further_training"},
        ]}
        data={empolyees}
      />
      </MuiThemeProvider>
    </div>
  );
}

export default BasicTable;
