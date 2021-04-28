import axios from "axios";

const KEY = "AIzaSyBx0tn3uujHyJjBTuBK1TcuR2DGH_A2Ego";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
  },
});
