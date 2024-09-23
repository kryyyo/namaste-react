import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.com"
      }
    }

    // console.log(this.props.name + "Child Constructor")
  }

  async componentDidMount() {
    // // console.log(this.props.name + "Child Component Did Mount")
    // this.timer = setInterval(() => console.log("NAMASTE REACT OP"), 1000);

    // API Call
    const data = await fetch("https://api.github.com/users/kryyyo");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // counter part of having dependency array in useEffect:
    if (
      this.state.className !== prevState.className ||
      this.state.userInfo !== prevState.userInfo
    ) {
      // code
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component will unmount")
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "Child Render")
    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar-url" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    )
  }
}

export default UserClass;