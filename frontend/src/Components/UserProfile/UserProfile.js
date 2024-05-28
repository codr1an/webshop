import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";
import MenuBar from "../Home/MenuBar/MenuBar";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        };
        console.log(headers);
        const response = await axios.get("http://localhost:8080/api/users/me", {
          headers: headers,
        });

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="front-page">
      <MenuBar />
      <div className="user-dashboard">
        <div className="user-profile">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
