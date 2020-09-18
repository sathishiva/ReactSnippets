import React from "react";
import ShowPassword from "./ShowPassword";
import "./styles.css";
import PublicApisList from "./PublicApisList";
import JSArrayMethods from "./JSArrayMethods";
export default function App() {
  return (
    <div className="App">
      <JSArrayMethods />
      <hr />
      <ShowPassword />
      <hr />
      <PublicApisList />
    </div>
  );
}
