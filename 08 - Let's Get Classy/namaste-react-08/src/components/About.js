import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User
        name={"Akshay Saini (function)"}
        location={"Dehradun (function)"}
      />
      
      <UserClass
        name={"Akshay Saini (class)"}
        location={"Dehradun (class)"}
      />
    </div>
  )
}

export default About;