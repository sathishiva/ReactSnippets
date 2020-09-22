import React, { useState } from "react";
import arrayMethods from "./JSArraysData";
import JSArrayCards from "./JSArrayCards";
import Grid from "@material-ui/core/Grid";

export default function JSArrayMethods() {
  const [methodsList, setMethodsList] = useState(arrayMethods);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedMutate, setSelectedMutate] = useState("");
  const [selectedViewMode, setSelectedViewMode] = useState("table");
  const handleCategoryChange = (e) => {
    const options = e.target.options;
    let categorySelection = [];
    for (const option of options) {
      if (option.selected) {
        categorySelection = [...categorySelection, option.value];
      }
    }
    setSelectedCategory(categorySelection);
    // setting filtered
    const copyOfList = [...arrayMethods];
    const filtered = copyOfList.filter((v) =>
      categorySelection.find((o) => v.category === o)
    );
    if (categorySelection[0] === "all") {
      // console.log("showing all");
      setMethodsList(arrayMethods);
    } else {
      setMethodsList(filtered);
    }
  };

  const handlMutateChange = (e) => {
    if (e.target.value === "ALL") {
      setMethodsList(arrayMethods);
      setSelectedMutate(e.target.value);
      return;
    }
    setSelectedMutate(e.target.value);
    const selected = e.target.value === "NO" ? false : true;
    console.log(selected);
    const copyOfList = [...arrayMethods];
    const filtered = copyOfList.filter((v) => v.isMutates === selected);
    console.log(filtered);
    if (selected === "ALL") {
      setMethodsList(arrayMethods);
    }
    setMethodsList(filtered);
  };
  const handleMethodChange = (e) => {
    const methodName = e.target.value;
    if (methodName === "") {
      setMethodsList(arrayMethods);
      return;
    }
    const copyOfList = [...arrayMethods];
    const filtered = copyOfList.filter((v) => v.name.includes(methodName));
    setMethodsList(filtered);
  };
  const handleViewChange = (mode) => {
    setSelectedViewMode(mode);
  };
  const handleCardFilter = (e) => {
    const value = e.target.value;
    if (value === "") {
      setMethodsList(arrayMethods);
      return;
    }
    setSelectedCategoryFilter("all");
    const copyOfList = [...arrayMethods];
    const filtered = copyOfList.filter((v) => v.name.includes(value));
    setMethodsList(filtered);
  };
  const handleCategoryFilter = (e) => {
    const selected = e.target.value;
    // console.log(selected);
    setSelectedCategoryFilter(selected);
    const copyOfList = [...arrayMethods];
    const filtered = copyOfList.filter((v) => v.category === selected);
    if (selected === "all") {
      // console.log("showing all");
      setMethodsList(arrayMethods);
    } else {
      setMethodsList(filtered);
    }
  };
  return (
    <>
      <div className="header-container">
        <h2>JavaScript Array Methods</h2>&nbsp;&nbsp;
        <div className="header-btn-container">
          <button
            className={selectedViewMode === "table" ? "selected" : ""}
            onClick={() => handleViewChange("table")}
          >
            table
          </button>
          <button
            className={selectedViewMode === "card" ? "selected" : ""}
            onClick={() => handleViewChange("card")}
          >
            card
          </button>
        </div>
      </div>
      <div className="content-container">
        {selectedViewMode === "table" && (
          <table>
            <thead>
              <tr>
                <th>
                  Method
                  <input type="text" onChange={handleMethodChange} />
                </th>
                <th>Description</th>
                <th>Syntax</th>
                <th>Returns</th>
                <th>
                  <label>Mutates?</label>
                  <select onChange={handlMutateChange} value={selectedMutate}>
                    <option>ALL</option>
                    <option>YES</option>
                    <option>NO</option>
                  </select>
                </th>
                <th>
                  <label>Category</label>
                  <select
                    multiple={true}
                    onChange={(e) => handleCategoryChange(e)}
                    value={selectedCategory}
                  >
                    <option defaultValue value="all">
                      All
                    </option>
                    <option value="access">Access</option>
                    <option value="iteration">Iteration</option>
                    <option value="mutator">Mutator</option>
                    <option value="general">General</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {methodsList.map((obj) => (
                <tr key={obj.id}>
                  <td>{obj.name}</td>
                  <td>{obj.description}</td>
                  <td>{obj.syntax}</td>
                  <td>{obj.returns}</td>
                  <td>{obj.isMutates ? "YES" : "NO"}</td>
                  <td>{obj.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {selectedViewMode === "card" && (
          <>
            <input
              type="text"
              onChange={handleCardFilter}
              placeholder="Filter by method name"
            />
            <select
              onChange={handleCategoryFilter}
              value={selectedCategoryFilter}
            >
              <option value="all">Filter by category</option>
              <option value="access">Access</option>
              <option value="iteration">Iteration</option>
              <option value="mutator">Mutator</option>
              <option value="general">General</option>
            </select>
          </>
        )}
        <Grid container spacing={1} style={{ padding: "0.5rem" }}>
          {selectedViewMode === "card" &&
            methodsList.map((method) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                <JSArrayCards method={method} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
