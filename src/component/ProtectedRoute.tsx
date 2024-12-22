import React from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: React.ReactNode;
    isAuthenticated: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    isAuthenticated,
}) => {
    const navigate = useNavigate();

    if (!isAuthenticated) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ color: "red" }}>You need to log in to access this page.</p>
                <button onClick={() => navigate("/")} style={{ padding: "10px 20px" }}>
                    Go to Login
                </button>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
