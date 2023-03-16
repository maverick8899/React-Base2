import axios from "axios";

const getUser = async ({ page, perPage }) => {
  try {
    const res = await axios.get("http://localhost:8080/users/paginate", {
      params: { page, per_page: perPage },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
const postUser = async (email, password, username, role, userImage) => {
  try {
    const res = await axios.post("http://localhost:8080/users/store", {
      password,
      role,
      userImage,
      username,
      email,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
const putUser = async (id, username, role, userImage) => {
  try {
    return await axios.put(`http://localhost:8080/users/${id}/update`, {
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
    return await axios.delete(`http://localhost:8080/users/${id}/delete`);
  } catch (error) {
    console.log(error);
  }
};
export { getUser, postUser, putUser, deleteUser };
