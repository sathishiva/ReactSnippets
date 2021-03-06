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
  // useEffect without cleanup
  // useEffect(() => getApis(), [getApis]);

  const [sortorder, setSortorder] = useState("ascending");
  const [sortordercolumn, setSortordercolumn] = useState("");
  const handleColumnSort = (columnName) => {
    const copyOfApis = [...apis];
    setSortordercolumn(columnName);
    const sortedApis = copyOfApis.sort((a, b) => {
      if (sortorder === "ascending") {
        setSortorder("descending");
        return a[columnName] < b[columnName] ? 1 : -1;
      } else {
        setSortorder("ascending");
        return a[columnName] > b[columnName] ? 1 : -1;
      }
    });
    setApis(sortedApis);
  };
  return (
    <>
      <h2>Public APIs List</h2>
      <table className="api-list-table">
        <thead>
          <tr>
            <th>
              <button
                className={sortordercolumn === "API" && sortorder}
                onClick={() => handleColumnSort("API")}
              >
                Name
              </button>
            </th>
            <th>Description</th>
            <th>
              <button
                className={sortordercolumn === "Auth" && sortorder}
                onClick={() => handleColumnSort("Auth")}
              >
                Auth
              </button>
            </th>
            <th>Link</th>
            <th>
              <button
                className={sortordercolumn === "Category" && sortorder}
                onClick={() => handleColumnSort("Category")}
              >
                Category
              </button>
            </th>
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
