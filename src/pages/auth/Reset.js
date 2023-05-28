import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const handleInputChange = () => {};
  const loginUser = () => {};

  return (
    <div className={`conatiner ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          {/* form here */}
          <form onSubmit={loginUser}>
            <PasswordInput
              placeholder="New Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Confirm New Password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />

            <button className="--btn --btn-primary --btn-block" type="submit">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to={"/"}>Home</Link>
              </p>
              <p>
                <Link to={"/login"}>login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
