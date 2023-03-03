import React, { useEffect } from "react";

import styles from "./User.module.scss";
import * as backend from "../../services/backend";

function User() {
  //chạy localhost8080 express trả về json=> dùng như api
  useEffect(() => {
    fetchAPI();
  });
  const fetchAPI = async () => {
    const data = await backend.getData();
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.user}>Page User</div>
    </div>
  );
}

export default User;
