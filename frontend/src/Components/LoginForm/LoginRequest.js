import axios from "axios";

const LoginRequest = async (formData) => {

  try {
    const response = await axios.post("test/login", {
      username: formData.username,
      password: formData.password,
    });

    // Handle response based on your backend logic
    console.log("Login successful:", response.data);
  } catch (error) {
    // Handle errors
    console.error("Login failed:", error);
  }
};

export default LoginRequest;
