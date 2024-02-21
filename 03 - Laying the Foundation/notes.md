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