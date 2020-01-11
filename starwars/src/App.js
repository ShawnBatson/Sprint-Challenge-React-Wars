import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WarCard from "./components/WarriorCard";
import styled from "styled-components";

// import styled from "styled-components";

const Card = styled.div`
  border: 2px solid black;
  min-height: 250px;
  width: 30%;
  margin 1%;
  background: tan;
  opacity: 0.6;
  box-shadow: 5px 10px;
  border-radius: 10px;
`;

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  return (
    <div className="App">
      <h1 className="ReactWar">React Wars</h1>
      <div>
        <MainCard className="MainCards">
          {warrior.map(warrior => (
            <Card className="renderedCard">
              <WarCard warrior={warrior} />
            </Card>
          ))}
        </MainCard>
      </div>
    </div>
  );
};

export default App;
