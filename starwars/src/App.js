import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WarCard from "./components/WarriorCard";
import styled from "styled-components";

// import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  width: 30%;
  margin: 1%;
  min-height: 150px;
`;

const App = () => {
  const [warrior, setWarrior] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        setWarrior(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  if (warrior.length === 0) {
    return <h1>Loading...</h1>;
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1>React Wars</h1>

      {/* Grid Styled Component that was created above on line 8 */}
      <div>
        {warrior.map(warrior => (
          /* Card Styled Component created above on line 14 */
          <Card>
            <WarCard warrior={warrior} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
