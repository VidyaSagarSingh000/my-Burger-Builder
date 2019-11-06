import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-7db64.firebaseio.com/"
});

export default instance;
