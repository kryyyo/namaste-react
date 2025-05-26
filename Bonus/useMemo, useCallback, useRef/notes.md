# New React documentation
react.dev

# useMemo
- cache result of calculation between renders until dependency change
- returns a value
`useMemo(calculatedValue, dependencies)`

# useCallback
- cache result of a function definition until dependency change
- returns a function
`useCallback(fn, dependencies)`


# useRef
- lets you reference a value that's not needed for rendering
- when you want to change/store a value, but dont want the component to rerender
- persisting not unlike the simple `let` variable declaration even though the component is not rerendering
- not restarting the value on rerenders

=> `{ current: <i>value</i> }`
- returns an <b>object</b> not a value;

- it will be displayed (if you reference the value from the ref object `ref.current`) on rerender of other triggers like useState
`useRef(initialValue)`