# ReactSnippets

Tried to learn some basic concepts of React with hooks.
Please un comment the components from App.js to run the below snippets one by one.

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
      <table>
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
```

## JavaScript Array Methods

Show the table and card view of the list

### Usage

fetch, useState, useEffects, Material UI responsive design, component composition

```js
//JSArrayMethods.js
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
//JSArrayCards.js
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import AlarmOn from "@material-ui/icons/AlarmOn";
import AlarmOff from "@material-ui/icons/AlarmOff";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#eaeaea",
    margin: "1rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  code: {
    backgroundColor: "#ffffff"
  },
  actions: {
    backgroundColor: "#dadada"
  }
}));

export default function JSArrayCards({ method }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card className={classes.root}>
        <CardHeader title={method.name} subheader={method.syntax} />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Returns: {method.returns}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {method.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
          <IconButton aria-label="is Mutates">
            {method.isMutates ? (
              <AlarmOn aria-label="mutates" />
            ) : (
              <AlarmOff aria-label="do not mutates" />
            )}
          </IconButton>
          {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {method.category.toUpperCase()} METHOD
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.code}>
            <Typography paragraph>code will go here...</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
```
test git 