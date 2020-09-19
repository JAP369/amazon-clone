import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/cl-76b33/us-central1/api",
});

export default instance;


  