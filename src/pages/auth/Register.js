import React, { useEffect, useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { BsCheck2All } from "react-icons/bs";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { FaTimes } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const [uCase, setUCase] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [num, setnum] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const swhitchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    if (password.match(/([0-9])/)) {
      setnum(true);
    } else {
      setnum(false);
    }

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }

    if (password.length >= 6) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const loginUser = () => {};

  return (
    <div className={`conatiner ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          {/* form here */}
          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <PasswordInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
            {/* password strength checker */}
            <Card cardClass={styles.group}>
              <ul className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {/* {uCase ? checkIcon : timesIcon} */}
                    {swhitchIcon(uCase)}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {swhitchIcon(num)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {swhitchIcon(sChar)}
                    &nbsp; Special Character (!@#$%^&*)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {swhitchIcon(passLength)}
                    &nbsp; At least 6 characters
                  </span>
                </li>
              </ul>
            </Card>
            <button className="--btn --btn-primary --btn-block" type="submit">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <Link to={"/"}>Home</Link>
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
