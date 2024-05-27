import axios from "axios";
import { message } from "react-message-popup";

const LoginRequest = async (formData) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users/login", {
      username: formData.username,
      password: formData.password,
    });

    message.success("Erfolgreich angemeldet!", 2500);

    return response.data.jwt;
  } catch (error) {
    // Handle errors
    console.error("Login failed:", error);
  }
};

export default LoginRequest;
