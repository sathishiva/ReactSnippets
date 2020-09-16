import React, { useState } from "react";

export default function ShowPassword() {
  // use state with default string
  const [password, setPassword] = useState("default_password");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h2>Show Password</h2>
      <label>Password: </label>
      {/* controlled input */}
      <input
        type={showPassword ? "text" : "password"}
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {/* conditional rendering */}
        {showPassword ? "hide " : "show "} password
      </button>
    </>
  );
}
