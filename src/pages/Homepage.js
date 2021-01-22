import { useState, useEffect } from "react";
import useEmployees from "../hooks/useEmployees";
import Table from "../components/HRTable/Table";
const Homepage = () => {
  const { employees, onAdd, onDelete, onUpdate } = useEmployees();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
    console.log(localStorage.getItem("isAuth") === "true");
  }, [localStorage]);
  return (
    <>
      <Table
        tableData={employees}
        onAdd={onAdd}
        onDelete={onDelete}
        onUpdate={onUpdate}
        editable={isAuth}
      />
    </>
  );
};
export default Homepage;
