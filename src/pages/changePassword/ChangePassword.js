import React, { useState } from "react";
import "./ChangePassword.scss";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import Card from "../../components/card/Card";
import PageMenu from "../../components/pageMenu/PageMenu";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};
const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;
  const handleInput = () => {};
  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Change Password</h2>
          <div className="--flex-start change-password">
            <Card cardClass={"card"}>
              <div>
                <form>
                  <p>
                    <label>Current Password: </label>
                    <PasswordInput
                      type="password"
                      placeholder={"Current Password"}
                      name={"oldPassword"}
                      value={oldPassword}
                      onChange={handleInput}
                    />
                  </p>
                  <p>
                    <label>New Password: </label>
                    <PasswordInput
                      type="password"
                      placeholder={"New Password"}
                      name={"password"}
                      value={password}
                      onChange={handleInput}
                    />
                  </p>
                  <p>
                    <label>Change Password: </label>
                    <PasswordInput
                      type="password"
                      placeholder={"Confirm New Password"}
                      name={"password2"}
                      value={password2}
                      onChange={handleInput}
                    />
                  </p>

                  <button className="--btn --btn-danger --btn-block">
                    Change Password
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
