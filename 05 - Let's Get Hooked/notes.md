Best practice
1. separate files for separate components
2. create `src` folder (convention) and put App.js there (and future components) but this is just optional.
it is up to the developer or the team to structure project folders
guide: https://legacy.reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes
3. if you name a file, match the exact name of the component (convention only depends on the team/dev)
4. `utils` folder for constants, mock data etc.
5. Whenever you have hard-coded data, never keep it in your components file. (constants files)
6. Name your constants into capital letters, snake case

Note: files can be of extension .jsx but for this project we will follow .js for all

How to export:
1. Default Export: `export default <ComponentName>` (1 default export per module only)
  - standard for components!
2. Named Export: `export const <variableName>`
  - if in one file, you need to export multiple things
  - sample : ![named-export](image.png)

Export first before you can import your component
1. Default import `import <ComponentName> from "path/<Filename>"`
  - standard for components!
2. Named import `import { <importname> } from "path/<filename>"`
  - sample : ![named-import](image-1.png)

UI Will not change when you just use variables like this
![normal-js-variable](image-2.png)

This in turn will be the use for hooks
# React Hooks
- React hooks are a NORMAL JS Utility Functions which is given to us by React!
- from React import (as a named import)
- how to use it? import from React!

2 most important hooks
1. useState() - super powerful state variables in React
  - whenever a state variable changes, react will rerender the component
2. useEffect()