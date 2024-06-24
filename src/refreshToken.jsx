import axios from "axios"

const refreshToken = () => {
    axios.post("http://localhost:8080/api/v1/auth/token/refresh")
    .then((response) => {
      if(response.status === 200) {
        sessionStorage.setItem(
          "Authorization",
          response.headers.authorization
        );
        console.log("hi");
      }
    })
};

export default refreshToken;