// Creation of our element using React
const heading = React.createElement(
  "h1",
  {id: "heading"},                    // second args is for the attributes of a tag
  "Hello World from React!"
);

// React needs a root to work on, creating the root using our div element earlier.
// Everything that we will render, we will render inside this root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our elements in our root
root.render(heading);