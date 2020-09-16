import React, { useState } from "react";

export default function ShowPassword() {
  const [password, setPassword] = useState("default_password");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h2>Show Password</h2>
      <label>Password: </label>
      <input
        type={showPassword ? "text" : "password"}
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "hide " : "show "} password
      </button>
    </>
  );
}
