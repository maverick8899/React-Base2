import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="sidebar">{/*  */}</div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
