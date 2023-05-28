import React, { useState } from "react";
import "./PasswordInputs.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ placeholder, value, onPaste, name, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        name={name}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
      />
      <div className="icon" onClick={togglePassword}>
        {showPassword ? (
          <AiOutlineEyeInvisible size={20} />
        ) : (
          <AiOutlineEye size={20} />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
