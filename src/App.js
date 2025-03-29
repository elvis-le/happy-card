import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import {useDispatch, useSelector} from "react-redux";
import Login from "./components/Login";
import CreateCard from "./components/Cards/CreateCard";
import Dashboard from "./components/Admin/Dashboard";
import {setCurrentPage} from "./redux/pageSlice";

function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const currentPage = useSelector(state => state.page.currentPage);
  if (!isAuthenticated) {
    return <Login />;
  }

  return (
      <div>
        <nav>
          <button onClick={() => dispatch(setCurrentPage("home"))}>Home</button>
          <button onClick={() => dispatch(setCurrentPage("createCard"))}>Create Card</button>
          <button onClick={() => dispatch(setCurrentPage("dashboard"))}>Dashboard</button>
        </nav>

        {currentPage === "home" && <Home />}
        {currentPage === "createCard" && <CreateCard />}
        {currentPage === "dashboard" && <Dashboard />}
      </div>
  );
}

export default App;
