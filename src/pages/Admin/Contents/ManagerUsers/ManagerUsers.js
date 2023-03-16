import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { FcPlus } from "react-icons/fc";

import styles from "./ManagerUsers.module.scss";
import ModalUser from "./ModalUser";
import * as userServices from "../../../../services/userServices";
import TableUsers from "./TableUsers/TableUsers";
import ModalTitle from "./ModalTitle";
import { toast } from "react-toastify";
import * as backend from "../../../../services/backend";

const cx = classNames.bind(styles);
const ManagerUsers = () => {
  //INITIALIZE
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showViewUser, setShowViewUser] = useState(false);
  const [showNotifyDeleteSuccess, setShowNotifyDeleteSuccess] = useState(false);

  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [userView, setUserView] = useState({});

  const ref = useRef(); //chứa user,dùng cho update delete

  useEffect(() => {
    fetchAPI();
  }, []);

  //FUNCTION
  //Attention:  ModalUser sau khi handleSave thì call fetchAPI <=> setUsers=> re-render DOM
  const fetchAPI = async () => {
    try {
      const res = await backend.getUser({ page: 1, perPage: 12 });
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickUpdateBtn = (user) => {
    setShowUpdateUser(true);
    setUserUpdate(user);
  };
  const handleClickViewBtn = (user) => {
    setShowViewUser(true);
    setUserView(user);
  };
  const getUser = (user) => {
    setShowNotifyDeleteSuccess(true);
    ref.user = user;
  };
  const handleDeleteUser = async () => {
    const res = await backend.deleteUser(ref.user.id);
    await fetchAPI();
    res.status === 200 && toast.success("User Deleted Success");
  };
  //
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>Manager Users</div>
      <div className={cx("content")}>
        <div className={cx("btn-add-user")}>
          <button
            className="btn btn-primary"
            onClick={() => setShowCreateUser(true)}
          >
            <FcPlus /> Add new Users
          </button>
        </div>
        <div className={cx("table-user")}>
          <TableUsers
            users={users}
            handleClickUpdateBtn={handleClickUpdateBtn}
            handleClickViewBtn={handleClickViewBtn}
            getUser={getUser}
          />
        </div>
        <ModalUser
          show={showCreateUser}
          setShow={setShowCreateUser}
          fetchAPI={fetchAPI}
        />
        <ModalUser
          show={showUpdateUser}
          setShow={setShowUpdateUser}
          fetchAPI={fetchAPI}
          update
          dataUpdate={userUpdate}
        />
        <ModalUser
          show={showViewUser}
          setShow={setShowViewUser}
          fetchAPI={fetchAPI}
          view
          dataUpdate={userView}
        />
        <ModalTitle
          show={showNotifyDeleteSuccess}
          setShow={setShowNotifyDeleteSuccess}
          handleDeleteUser={handleDeleteUser}
          dataDelete={ref.user}
        />
      </div>
    </div>
  );
};

export default ManagerUsers;
