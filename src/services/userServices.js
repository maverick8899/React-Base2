import axiosUserHTTP from "../utils/axiosCustomize";

const getUser = async () => {
  try {
    const res = await axiosUserHTTP.get("user/users");
    return res;
  } catch (error) {
    console.log(error);
  }
};

const postUser = (email, password, username, role, userImage) => {
  try {
    return axiosUserHTTP.post("user/users", {
      email,
      password,
      username,
      role,
      userImage,
    });
  } catch (error) {
    console.log(error);
  }
};

const putUser = async (id, username, role, userImage) => {
  try {
    return await axiosUserHTTP.put(`user/users/${id}`, {
      username,
      role,
      userImage,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    return await axiosUserHTTP.delete(`user/users/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { postUser, getUser, putUser, deleteUser };
