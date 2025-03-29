import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/Users/UserProfile';
import CreatedCard from './components/Users/CreatedCard';
import FavoriteCard from './components/Users/FavoriteCard';
import Dashboard from './components/Admin/Dashboard';
import AdminProfile from './components/Admin/AdminProfile';
import UserManagement from './components/Admin/User/UserManagement';
import AddUser from './components/Admin/User/AddUser';
import EditUser from './components/Admin/User/EditUser';
import Card from './components/Cards/Card';
import EditCard from "./components/Cards/EditCard";
import CreateCard from "./components/Cards/CreateCard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="user/" element={<UserProfile/>}>
                <Route path="CreatedCard" element={<CreatedCard/>}></Route>
                <Route path="FavoriteCard" element={<FavoriteCard/>}></Route>
            </Route>
            <Route path="card/:cardId" element={<Card/>}></Route>
            <Route path="CreateCard" element={<CreateCard/>}></Route>
            <Route path="EditCard/:cardId" element={<EditCard/>}></Route>
            <Route path="admin/" element={<Dashboard/>}>
                <Route path="AdminProfile" element={<AdminProfile/>}></Route>
                <Route path="UserManagement" element={<UserManagement/>}></Route>
                <Route path="AddUser" element={<AddUser/>}></Route>
                <Route path="EditUser" element={<EditUser/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
);

reportWebVitals();
