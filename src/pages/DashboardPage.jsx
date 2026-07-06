import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const productHandler = () => {
    navigate("/products");
  };

  const profileHandler = () => {
    navigate("/profile");
  };

  const cartHandler = () => {
    navigate("/cart");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <h2>Welcome to Shopping Store 🛍️</h2>

      <div className="card">
        <h3>Store Summary</h3>

        <p>📦 Total Products : 194</p>
        <p>🛒 Cart Items : 5</p>
        <p>❤️ Wishlist : 3</p>
        <p>📂 Categories : 24</p>
      </div>

      <button onClick={productHandler}>View Products</button>

      <button onClick={profileHandler}>My Profile</button>

      <button onClick={cartHandler}>My Cart</button>

      <button onClick={logoutHandler}>Logout</button>

    </div>
  );
}

export default DashboardPage;