import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element (Object) => render => DOM/HTML Element

// React Element (kind of equal to DOM Elements)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🐱‍🏍"); // not an HTML Element, but an Object 
console.log(heading); // => Object

// JSX - is just a syntax not React itself, HTML/XML-like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => transpiled => React.createElement => React Element (Object) => render => DOM/HTML Element
const jsxHeading = <h1 id="heading">Namaste React using JSX 🐱‍🏍</h1>; // not HTML syntax, but JSX syntax! -> Still an Object (React Element)!!
console.log(jsxHeading); // => Object

// Creating the root where we will render our React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

// When we render the React Element to the DOM, then it becomes an HTML Element
root.render(jsxHeading);