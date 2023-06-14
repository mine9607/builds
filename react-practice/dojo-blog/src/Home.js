import { useState } from "react";

const Home = () => {
  //note - the variable name is not reactive - it will update with the changeName event but not render the new name
  //note - to make something reactive in React we use a hook: "useState"
  //note - all hooks in React start with 'use'

  //let name = "mario";
  //the setName function is what is used to update the state of the variable 'name'
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("37");

  //note - by default functiions are given access to event properties 'e' that allow additional functionality
  //onClick log message to the console and list event properties 'e'
  const handleClick = (e) => {
    console.log("hello world", e);
  };

  //onClick change the name displayed on the webpage and log the message and its target to console

  /*   const changeName = (name, e) => {
    name = "luigi";
    console.log(`hello ${name}`, e.target);
  }; */

  const changeName = () => {
    setName("luigi");
    setAge("35");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <br />
      <p>
        {name} is {age}
      </p>
      <br />
      <button style={{ backgroundColor: "slategrey", color: "white", borderRadius: "15px" }} onClick={handleClick}>
        Click Me
      </button>
      <br />
      <br />
      <button onClick={(e) => changeName("mario", e)}>Change Name</button>
    </div>
  );
};

export default Home;
