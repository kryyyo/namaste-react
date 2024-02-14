/**
 * 
 * <div id="parent">
 *    <div id="child">
 *      <h1>I'm h1 tag</h1>
 *    </div>
 * 
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      {},
      "I'm h1 tag"
    )
  )
);

/**
 * 
// Creation of our element using React
const heading = React.createElement(
  "h1",
  { id: "heading" },                    // second args is for the attributes of a tag
  "Hello World from React!"
);

console.log(heading); // not an actual h1 tag yet! this is an object
 */

console.log(parent);

// React needs a root to work on, creating the root using our div element earlier.
// Everything that we will render, we will render inside this root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our elements in our root. This is the one who is converting the object to element.
root.render(parent);