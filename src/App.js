import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [password, setPassword] = useState("default_password");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="App">
      <label>Password: </label>
      <input
        type={showPassword ? "text" : "password"}
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "hide " : "show "} password
      </button>
    </div>
  );
}
