import "../css/App.css";
import Greeter from "./Greeter";
import Count from "./Count";

function App() {
  // create a list of users
  const users = ["Todd", "Lachlan"];
  // return html and jsx
  return (
    // return multiple divs by starting with a blank tag
    <>
      <div id="hello-world" className="App">
        {/* manually assign the name prop */}
        <Greeter name="Natasha Romanoff" />
        <Greeter name="Peter Parker" />
        {/* manually pick which user is passed via id */}
        <Greeter name={users[0]} />
        <Greeter name={users[1]} />
        {/* defaults to world (from Greeter.js using ||) */}
        <Greeter />
        {/* map the users list via index for key*/}
        {users.map((person, index) => {
          return <Greeter key={index} name={person} />;
        })}
        {/* or use the person as the unique key */}
        {users.map((person) => {
          return <Greeter key={person} name={person} />;
        })}
      </div>
      <br></br>
        <div id="count" className="App">
          <Count />
        </div>
      {/* close the blank tag */}
    </>
  );
}

export default App;
