import { useState, useEffect } from "react";
import useEmployees from "../hooks/useEmployees";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "../components/HRTable/Table";
const Homepage = () => {
  const { employees, onAdd, onDelete, onUpdate } = useEmployees();
  return (
    <>
      <ToastContainer />
      <Table
        tableData={employees}
        onAdd={onAdd}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </>
  );
};
export default Homepage;
