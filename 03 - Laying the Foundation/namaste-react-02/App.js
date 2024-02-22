import React from "react";
import ReactDOM from "react-dom/client";

/**
 * React.createElement => React Element (Object) => render => DOM/HTML Element
 * 
 * React Element (kind of equal to DOM Elements)
 * const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🐱‍🏍"); // not an HTML Element, but an Object 
 * console.log(heading); // => Object
 * 
 * JSX - is just a syntax not React itself, HTML/XML-like syntax
 * JSX (transpiled before it reaches the JS) - PARCEL - Babel
 * JSX => Babel transpiles => React.createElement => React Element (Object) => render => DOM/HTML Element
 * not HTML syntax, but JSX syntax! -> Still an Object (React Element)!!
 */

/**
 * React Element
 * const heading = (
 *  <h1 id="heading" className="root">
 *    Namaste React using JSX 🐱‍🏍
 *  </h1>
 * );
 */

const TitleNormalFunction = function () {
  return (
    <h1 className="head" tabIndex={5}>
      Namaste React using JSX 🐱‍🏍
    </h1>
  );
};

const Title = () => (
  <h1 className="head" tabIndex={5}>
    Namaste React using JSX 🐱‍🏍
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">
      Namaste React Functional Component
    </h1>
  </div>
);

// Creating the root where we will render our React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

// RENDERING REACT ELEMENT
// When we render the React Element to the DOM, then it becomes an HTML Element
// root.render(heading);

// RENDERING REACT FUNCTIONAL COMPONENT
// Babel understands this syntax and will transpile it to React Element
root.render(<HeadingComponent />);