# 3 Types of Testing by Writing Code
1. Unit Testing (developer)
- test one react component in isolation (one unit of an app)

2. Integration Testing (developer)
- testing the multiple components talking to each other

3. End to End Testing - E2E Testing (qa)
- how the user will flow across the application
- eg. of tools: cypress, selenium


# Packages for Testing in React
1. React Testing Library
https://testing-library.com/docs/react-testing-library/intro/
- utilizes DOM Testing Library behind the scenes
https://testing-library.com/docs/dom-testing-library/intro
```npm i -D @testing-library/react```

2. Jest Library
https://jestjs.io/
```npm i -D jest```

3. if you will be using with Babel, follow these:
https://jestjs.io/docs/getting-started#using-babel
```npm install -D babel-jest @babel/core @babel/preset-env```
babel.config.js
- this will conflict with Parcel's current babel configuration

# Solving the conflict of Parcel's Babel
https://parceljs.org/languages/javascript/#babel
https://parceljs.org/languages/javascript/#usage-with-other-tools
1. create .parcelrc file in root folder
2. paste the config
3. it will now disable default babel transpilation - this will now use babel.config.js