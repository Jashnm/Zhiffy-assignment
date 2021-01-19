import axios from "axios";

export const getUser = async (email) => {
  try {
    const res = await axios.post("http://localhost:5000/session", {
      email
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
