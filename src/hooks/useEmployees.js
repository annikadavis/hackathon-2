import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { validateEmail } from "../helper/validateEmail";
const API_URL = process.env.REACT_APP_API_URL;
export default function useEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/user`)
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleAdd = (newData) => {
    console.log("hey", newData);
    if (!newData.name) {
      toast.error("Please fill the name !");
    }
    if (!newData.email) {
      toast.error("Please provide a valide email !");
    }
    if (!newData.position) {
      toast.error("Please provide a valid position !");
    }
    if (newData.name && newData.email && newData.position) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      };
      fetch(`${API_URL}/user`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            response.json().then((json) => {
              toast.error(json.message);
            });
          } else {
            return response.json();
          }
        })
        .then((employee) => setEmployees([...employees, employee]));
      // TODO: need to catch the error.
      // .catch(err =>  toast.error(json.message);)
      // TODO: if fetch fail, then we should see a toast as well
    }
  };

  const handleUpdate = (userId, newData) => {
    console.log("update", newData);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    };

    fetch(`${API_URL}/user/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setEmployees((employees) =>
          employees.map((employee) => {
            if (employee.id === userId) {
              return data;
            }
          })
        );
      });
  };

  const handleDelete = (userId) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`${API_URL}/user/${userId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setEmployees(data.id));
  };
  return {
    onAdd: (newData) => handleAdd(newData),
    onDelete: (id) => handleDelete(id),
    employees,
    onUpdate: (userId, newData) => handleUpdate(userId, newData),
  };
}
