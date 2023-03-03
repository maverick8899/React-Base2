import classNames from "classnames/bind";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import style from "./Login.module.scss";
import config from "../../config";

const cx = classNames.bind(style);
const Login = () => {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleOnBack = () => {
    navigate(config.routes.home);
  };
  //
  return (
    <div className={`${cx("container")} col-5 mx-auto`}>
      <div className={`${cx("header")}`}>
        <span> Don't have an account yet?</span>
        <button>Login</button>
      </div>
      <div className={`${cx("title")}`}>Form Login</div>
      <div className={`${cx("welcome")}`}>Hello, who's this?</div>
      <div className={`${cx("content-form")}`}>
        <div className={`${cx("form-group")}`}>
          <label>Email</label>
          <input
            value={email}
            type="email"
            className={`${cx("form-control")}`}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${cx("form-group")}`}>
          <label>Password</label>
          <input
            value={password}
            type="password"
            className={`${cx("form-control")}`}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className={`${cx("forgot-password")}`}>Forgot Password </span>
        <div>
          <button className={`${cx("btn-submit")} `}>
            Login to My WebSite
          </button>
        </div>
        <div className={cx("back")}>
          <span onClick={handleOnBack}>
            <MdArrowBack
              size="1.5em"
              title="Go to HomePage"
              color="rgb(93, 150, 255)"
            />
            Go to HomePage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
