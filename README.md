# ReactSnippets

## Show Password

Show the password as text when click on the button

### Usage

useState, conditional rendering, controlled input, default Value

```javascript
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
```

## Public APIs List

Show the list of available public APIs

### Usage

fetch, useState, useCallback, useEffects

```javascript
import React, { useState, useEffect, useCallback } from "react";
function PublicApisList() {
  // useState
  const [apis, setApis] = useState(null);
  // useCallback
  const getApis = useCallback(() => {
    fetch("https://api.publicapis.org/entries")
      .then((result) => result.json())
      .then((result) => {
        setApis(result.entries);
      });
  }, []);
  // useEffect
  useEffect(() => getApis(), [getApis]);

  return (
    <>
      <h2>Public APIs List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Auth</th>
            <th>Link</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {apis &&
            apis.length > 0 &&
            apis.map((api, index) => (
              <tr key={index}>
                <td>{api.API}</td>
                <td>{api.Description}</td>
                <td>{api.Auth}</td>
                <td>
                  <a href={api.Link}>Click</a>
                </td>
                <td>{api.Category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
export default PublicApisList;
```
