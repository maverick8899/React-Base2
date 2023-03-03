import classNames from "classnames/bind";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Sidebar from "../Sidebar/Sidebar";
import styles from "./Admin.module.scss";

const cx = classNames.bind(styles);
function Admin() {
  //
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={cx("container")}>
      <div className={cx("sidebar")}>
        <Sidebar collapsed={collapsed} />
      </div>
      <div className={cx("content")}>
        <div className={cx("header")}>
          <FaBars
            onClick={() => setCollapsed(!collapsed)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={cx("main")}>
          <Outlet />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default Admin;
