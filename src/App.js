import React from "react";
import ShowPassword from "./ShowPassword";
import "./styles.css";
import PublicApisList from "./PublicApisList";
export default function App() {
  return (
    <div className="App">
      <ShowPassword />
      <hr />
      <PublicApisList />
    </div>
  );
}
