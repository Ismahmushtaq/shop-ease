import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const dashboardHandler = () => {
    navigate("/dashboard");
  };

  const productsHandler = () => {
    navigate("/products");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid gray",
        textAlign: "center",
      }}
    >
      <h2>My Profile</h2>

      <img
        src={user.image}
        alt="Profile"
        width="120"
        height="120"
        style={{ borderRadius: "50%" }}
      />

      <h3>{user.firstName} {user.lastName}</h3>

      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Age:</b> {user.age}</p>
      <p><b>Gender:</b> {user.gender}</p>
      <p><b>City:</b> {user.address?.city}</p>

      <br />

      <button onClick={dashboardHandler} style={{
    padding: "8px 15px",
    margin: "5px"
  }}>
        Dashboard
      </button>

      <button
        onClick={productsHandler}
        style={{
    padding: "8px 15px",
    margin: "5px"
  }}
      >
        Products
      </button>

      <button
        onClick={logoutHandler}
       style={{
    padding: "8px 15px",
    margin: "5px"
  }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
