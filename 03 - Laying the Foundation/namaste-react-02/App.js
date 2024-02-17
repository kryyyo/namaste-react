import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element (Object) => render => DOM/HTML Element

// React Element (kind of equal to DOM Elements)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🐱‍🏍"); // not an HTML Element, but an Object 

// Creating the root where we will render our React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

// When we render the React Element to the DOM, then it becomes an HTML Element
root.render(heading);