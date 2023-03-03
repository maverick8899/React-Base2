import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import { publicRoutes } from "./routes/routes";
import Home from "./pages/Home/Home";
import config from "./config";
import Admin from "./pages/Admin/Admin";
import ManagerUsers from "./pages/Admin/Contents/ManagerUsers/ManagerUsers";
import Dashboard from "./pages/Admin/Contents/Dashboard";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          {/* hiểu là đang ở path main thì mặc định render pageHome, khi click vào đường dẫn đến các page 
          khác trong phần bọc của App thì nó sẽ nối theo đương dẫn đến page đó */}
          <Route path={config.routes.main} element={<App />}>
            <Route index element={<Home />} />
            {publicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
          <Route path={config.routes.admin} element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route
              path={config.routes.managerUser}
              element={<ManagerUsers />}
            />
          </Route>
          <Route path={config.routes.login} element={<Login />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
