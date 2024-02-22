Creating scripts
![scripts-for-start-and-build](image.png)

How to run your scripts:
- npm run <script-name>

Scripts with shortcut (npm <script-name>)
- start
- test


JSX
- JS Syntax for creating React Elements
- developed by Facebook developers
- not a part of React!
- goal: merge html, css, and js!
- HTML-like or XML-like syntax only! not HTML/XML in JS!

Write Code for:
1. Humans - priority!
2. Machines

Who understands JSX?
- JS Engine does not understand JSX, only EcmaScript.
- Browser console also does not understand JSX.
- Babel is the one understanding JSX! JSX code is transpiled/converted before it reaches JS Engine.

Babel
- JavaScript compiler/transpiler
- a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
- this package is included in the modules when we installed *parcel*. One of the dependencies for parcel. 
- takes JSX and converts/transpiled it that JS Engine will understand
- not created by Facebook! (not React!)
- JSX => transpiled => React.createElement => React Element (Object) => render => DOM/HTML Element
![babel-compiler-in-action-playground](image-1.png)



HTML VS JSX
- HTML: "class" , JSX: "className"
![html-class](image-2.png)
![JSX-className](image-3.png)
![DOM-rendered](image-4.png)

- JSX attributes -> camelCase
- JSX needs to be wrapped in parenthesis for multiline - required so Babel will know when will it stop transpiling JSX

React Components (2 Types)
1. Class Based Component = OLD
2. Functional Component = NEW


React Functional Component
- just a normal JS Function that returns a JSX Element/React Element
- just Capitalize the first letter when creating a functional component
![react-functional-component](image-6.png)
![other-syntax-implicit-return](image-7.png)
![nested-react-elements](image-8.png)

Rendering a Functional Component
![rendered-functional-component-inside-DOM](image-9.png)
![rendering-in-js](image-10.png)


Some interviews called this "Component Composition"
- composing two or more functional components into one
![component-composition](image-11.png)

Note: you can use a normal function in writing components
![normal-functions](image-12.png)


Writing JS Expressions inside the JSX Component using Curly Braces
![writing-js-expression-inside-JSX](image-13.png)
![dom-js-expression-inside-JSX](image-14.png)
![any-js-expression](image-15.png)

You can also write the React Element since it is also JS
![react-element-in-jsx](image-16.png)
![react-element-in-jsx-in-dom](image-17.png)
![react-elem-in-jsx](image-18.png)

Cross-site scripting (XSS)
- attack in which an attacker injects malicious executable scripts into the code of a trusted application or website
- but JSX is so amazing that it takes care of this injection attacks! It will sanitize data before parsing it!

Two ways of writing
![two-ways-of-writing-react-functional-component](image-19.png)

You can also call the functional component since it is a normal JS function at the end of the day (but not conventional)
![calling-the-functional-component-as-JS-function](image-20.png)

Options for the 'type' attribute in script tag
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type