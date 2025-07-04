import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext.js";

class About extends Component {
  constructor(props) {
    super(props)

    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount")
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {(data) => <h1 className="text-xl font-bold">{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Akshay Saini (class)"}
          location={"Dehradun (class)"}
        />
        <UserClass
          name={"Elon Musk"}
          location={"US"}
        />
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <UserClass
//         name={"Akshay Saini (class)"}
//         location={"Dehradun (class)"}
//       />
//     </div>
//   )
// }

export default About;