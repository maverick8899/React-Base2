import axios from "axios";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:8081/");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getData };
