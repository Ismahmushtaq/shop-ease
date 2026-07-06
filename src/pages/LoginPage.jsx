import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("loginInfo:", loginInfo);

    if (loginInfo.username && loginInfo.password) {
      try {
        const request = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginInfo),
        });
        const res = await request.json();
        console.log("res:", res);
        if (request.ok && res.accessToken) {
          localStorage.setItem("token", JSON.stringify(res.accessToken));
          navigate("/");
        } else {
          alert("Login Failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    } else {
      alert("name and passord  are required");
    }
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setLoginInfo({
      ...loginInfo,
      [key]: value,
    });
  };

  return (
    <div
      style={{
        width: "349px",
        padding: "34px",
        margin: "20px auto",
      }}
    >
      <h2>Login</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={loginInfo.username}
          onChange={changeHandler}
          autoComplete="username"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={loginInfo.password}
          onChange={changeHandler}
          autoComplete="current-password"
        />

        <button
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "#222",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
