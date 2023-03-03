import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import classNames from "classnames/bind";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import _ from "lodash";

import styles from "./ManagerUsers.module.scss";
import * as userServices from "../../../../services/userServices";

const cx = classNames.bind(styles);
function ModalUser({
  show,
  setShow,
  fetchAPI,
  update = false,
  view = false,
  dataUpdate,
}) {
  //INIT
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  //
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      view && setPassword(dataUpdate.password);
      setUserName(dataUpdate.username);
      setRole(dataUpdate.role);
      dataUpdate.userImage && setPreview(dataUpdate.userImage);
    }
  }, [dataUpdate, view]);
  //HANDLE
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleClose = () => {
    if (!!update || !!view) {
      setShow(false);
      return;
    }
    setTimeout(() => {
      setPreview("");
    }, 500);
    setShow(false);
    setEmail("");
    setPassword("");
    setUserName("");
    setRole("User");
    setImage("");
  };

  const handleUploadImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSave = async () => {
    if (!update) {
      if (!validateEmail(email)) {
        toast.error("Invalid email");
        return;
      }
      if (!password) {
        toast.error("Enter Password, please");
        return;
      }
      if (!userName) {
        toast.error("Enter User Name, please");
        return;
      }
    } else {
      await userServices.putUser(dataUpdate.id, userName, role, image);
    }
    // khi click save thì close modal đồng thời set mặc định các field
    setShow(false);
    handleClose();
    //post user
    if (!update) {
      let res = await userServices.postUser(
        email,
        password,
        userName,
        role,
        image
      );
      res.status === 201 && toast.success("Add User Success");
    }
    //sau khi post lên thì getApi, để render lại list user
    await fetchAPI();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className={cx("modal-add-user")}
      >
        <Modal.Header closeButton>
          <Modal.Title>{update ? "Update User" : "Add New Users"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={update || view ? true : false}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type={view ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={update || view ? true : false}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">User name</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                disabled={view ? true : false}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Roles</label>
              <select
                className="form-select"
                onChange={(e) => setRole(e.target.value)}
                defaultValue={dataUpdate ? dataUpdate.role : role}
                disabled={view ? true : false}
              >
                <option value="User">User</option>
                <option value="Admin"> Admin</option>
              </select>
            </div>
            {view || (
              <div className="col-md-12">
                <label
                  className={`form-label ${cx("label-upload")}`}
                  htmlFor="labelUpload"
                >
                  <FcPlus /> Upload File Image
                </label>
                <input
                  type="file"
                  hidden
                  id="labelUpload"
                  onChange={(e) => handleUploadImage(e)}
                />
              </div>
            )}
            <div className={`col-md-12 ${cx("image-preview")}`}>
              {preview ? (
                <img src={preview} alt="img" />
              ) : (
                <span>Image preview</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {view || (
            <Button variant="primary" onClick={handleSave}>
              {update ? "Update" : "Save"}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUser;
