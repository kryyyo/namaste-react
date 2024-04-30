Class-Based Component
- normal JS Class
- extends React.Component -> in this way, react will be able to tell that your class is a component
- class with render method that returns JSX

Functional VS Class Based
![functional-vs-class-based](image-1.png)

Passing Props
- same as functional component

Accessing props
- using constructor
- always have to write super(props)
- The purpose of using the super constructor with a props argument is to inherit the properties of the parent class and also pass in additional properties as arguments to the child class.
![passing-props-using-constructor](image-2.png)
- this.props.<prop-name>
![accessing-the-prop](image-3.png)

We can also destructure the props inside the render function
![destructuring-the-props](image-4.png)