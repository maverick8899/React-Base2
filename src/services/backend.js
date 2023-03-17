import axiosBackend from "../utils/axiosCustomizeBackend";

// console.log(process.env); //show object .env chứa các biến môi trường

const getUser = async ({ page, perPage }) => {
  try {
    const res = await axiosBackend.get("paginate", {
      params: { page, per_page: perPage },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
const postUser = async (email, password, username, role, userImage) => {
  try {
    const res = await axiosBackend.post("store", {
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
    return await axiosBackend.put(`${id}/update`, {
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
    return await axiosBackend.delete(`${id}/delete`);
  } catch (error) {
    console.log(error);
  }
};
export { getUser, postUser, putUser, deleteUser };
