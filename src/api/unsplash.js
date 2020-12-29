import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tUz9RWmyxp2eU4NIJWsTtFhR4GUvFtHl2aI3ytg322U",
  },
});
