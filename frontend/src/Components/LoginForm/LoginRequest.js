import axios from "axios";
import { message } from "react-message-popup";

const LoginRequest = async (formData) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users/login", {
      username: formData.username,
      password: formData.password,
    });

    message.success("Successfully logged in", 1500);

    return response.data.jwt;
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export default LoginRequest;
