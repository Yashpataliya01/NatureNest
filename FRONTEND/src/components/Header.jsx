import React, { useState, useContext, useEffect } from "react";
import Styles from "./Header.module.css";
import { AppContext } from "../context/islogin";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Header() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { islogin, setislogin, rewardscount, setrewardscount } =
    useContext(AppContext);
  const [showLogout, setShowLogout] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLogin = () => {
    setShowLogout(!showLogout);
  };

  const logout = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error signing out");
      }
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        setislogin(false);
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setMessage(error.message || "Error signing out");
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "transparent",
        position: "fixed",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <label className={Styles.logo}>
        Plant <span style={{ color: "green", fontSize: "1.5em" }}>Future</span>
      </label>
      <div className={Styles.checkbtn} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`${Styles.ullist} ${menuOpen ? Styles.show : ""}`}>
        <li className={Styles.list}>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li className={Styles.list}>
          <Link to="/about">About</Link>
        </li>
        <li className={Styles.list}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={Styles.list}>
          <Link to="/donation">Donation</Link>
        </li>
        <li className={Styles.list}>
          <Link to="#">Join Us</Link>
        </li>
        <li className={Styles.list}>
          {islogin ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "-30px",
                }}
              >
                <Link to="/myrewards" className={Styles.links}>
                  <MenuItem className={Styles.menuitem}>
                    <IconButton
                      className={Styles.icons}
                      size="large"
                      aria-label="show 4 new mails"
                      color="inherit"
                    >
                      <Badge
                        className={Styles.icons}
                        badgeContent={rewardscount}
                        color="error"
                      >
                        <EmojiEventsIcon className={Styles.icons} />
                      </Badge>
                    </IconButton>
                  </MenuItem>
                </Link>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <i
                    className="fa-solid fa-user"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: "1.2em",
                      cursor: "pointer",
                    }}
                    onClick={toggleLogin}
                  ></i>
                  {showLogout && (
                    <button
                      style={{
                        marginTop: "10px",
                        padding: "5px",
                        borderRadius: "10px",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}
                      onClick={logout}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/signin"
              style={{
                padding: "0px 0px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
