import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login("John Doe"));
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
