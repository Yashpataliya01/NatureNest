import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/islogin";
import { Link } from "react-router-dom";

function Signin() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { islogin, setislogin } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error signing in");
      }
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        setislogin(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setMessage(error.message || "Error signing in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #2E8B57, #3CB371)",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          border: "2px solid #228B22",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "20px",
            color: "#228B22",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Sign In
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            style={inputStyle}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            style={inputStyle}
          />
          <Link to="/signup">
            <span>Signup</span>
          </Link>
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              color: "#228B22",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
              letterSpacing: "1px",
            }}
          >
            {message}
          </p>
        )}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url('/path/to/jungle-pattern.png') center/cover",
            pointerEvents: "none",
            zIndex: -1,
            animation: "jungleBackground 20s linear infinite",
          }}
        ></div>
      </div>
    </div>
  );
}

const inputStyle = {
  marginBottom: "15px",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #228B22",
  width: "80%",
  maxWidth: "300px",
  textAlign: "center",
  outline: "none",
  transition: "border-color 0.3s ease-in-out",
  backgroundColor: "#f0fff0",
};

const buttonStyle = {
  backgroundColor: "#228B22",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  fontSize: "18px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "20px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.4)",
  transition: "background-color 0.3s ease-in-out",
};

export default Signin;
