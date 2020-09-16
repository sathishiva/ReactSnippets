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
  useEffect(() => {
    // cleanup subscription/unsubscription
    let current = true;
    console.log("subscribed the current state");
    current && getApis();
    return () => {
      console.log("unsubscribed the previous state");
      current = false;
    };
  }, [getApis]);
  // useEffect(() => getApis(), [getApis]);

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
