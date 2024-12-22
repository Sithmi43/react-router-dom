import React from "react";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>Welcome to the Employee List!</h2>
            <button onClick={() => navigate("/add-employee")} style={{ padding: "10px 20px", margin: "0 10px" }}>
                Add Employee
            </button>
            <button onClick={() => navigate("/update-employee/:id")} style={{ padding: "10px 20px", margin: "0 10px" }}>
                Update Employee
            </button>
        </>
    );
};

export default ListEmployeeComponent;
