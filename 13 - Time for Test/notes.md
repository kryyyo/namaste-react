# 3 Types of Testing by Writing Code
1. Unit Testing (developer)
- test one react component in isolation (one unit of an app)

2. Integration Testing (developer)
- testing the multiple components talking to each other

3. End to End Testing - E2E Testing (qa)
- how the user will flow across the application
- eg. of tools: cypress, selenium

# Setting Up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel Dependencies for Jest
- Configure Babel
- Configure Parcel Config to disable default babel transpilation
- Jest Configuration
- Install jsdom library
- Install @babel/preset-react - to make JSX Work in tests cases
- Include @babel/preset-react inside the presets of babel config
- Include @testing-library/jest-dom

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

# Jest Configuration
1. ```npx jest --init```
- test environment: jsdom (JavaScript-based headless browser that can be used to create a realistic testing environment)
- coverage report: yes
- provider for coverage: babel
- automatically clear: yes

# JSDom Library
https://testing-library.com/docs/react-testing-library/setup#jest-28
```npm install -D jest-environment-jsdom```

Test File Matches
Folder: __tests__
Files:
- <name>.test.ts
- <name>.test.js
- <name>.spec.ts
- <name>.spec.js

"__" called as 'dunder';
Dunder methods, also known as magic methods or special methods, are predefined methods in Python that have double underscores (or “dunders”) at the beginning and end of their names
- so that no user will accidentally create these kinds of folder


# Running Tests
1. Install first ```npm install --save-dev @babel/preset-react```
2. Add preset to babel.config.js ```['@babel/preset-react', {runtime: 'automatic'}]```
- this is for converting jsx into normal html
3. Add library @testing-library/jest-dom```npm install --save-dev @testing-library/jest-dom```