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

export { getUser };
