import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WarCard from "./components/WarriorCard";
import styled from "styled-components";

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

const FormOne = styled.form`
  display: flex;
  margin: 10rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 0, auto;
  border-radius: 5px;
  box-shadow: 1px 2px;
`;

const App = () => {
  const [warrior, setWarrior] = useState([]);
  const [inputValue, setInputValue] = useState(""); //not used..couldn't finish stretch

  // const changeHandler = event => {
  //   setInputValue(event.target.value);
  //   // const searchWar = warrior.filter(element => {
  //   //   return element.name.includes(inputValue);
  //   // });
  //   // setWarrior(searchWar);
  //   // console.log(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const searchWar = warrior.filter(element => {
  //     return element.name.includes(inputValue);
  //   });
  //   setWarrior(searchWar);
  //   console.log(event);
  // };

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        setWarrior(res.data.results);
        console.log(res.data.results);
        console.log(res.data);
      })
      .catch(err => console.log("You've encountered an error", err));
  }, []);

  if (warrior.length === 0) {
    return <h1>Loading...</h1>;
  }

  const changeHandler = event => {
    setInputValue(event.target.value);
    const searchWar = warrior.filter(element => {
      return element.name.includes(inputValue);
    });
    setWarrior(searchWar);
    console.log(event.target.value);
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const searchWar = warrior.filter(element => {
  //     return element.name.includes(inputValue);
  //   });
  //   setWarrior(searchWar);
  //   console.log(event);
  // };

  return (
    <div className="App">
      <div className="title">
        <h1 className="ReactWar">React Wars</h1>
      </div>
      <div>
        <MainCard className="MainCards">
          {warrior.map(warrior => {
            if (warrior.name.includes(inputValue)) {
              return (
                <Card className="renderedCard">
                  <WarCard warrior={warrior} />
                </Card>
              );
            }
            // <Card className="renderedCard">
            //   <WarCard warrior={warrior} />
            // </Card>
          })}
        </MainCard>
      </div>
      <FormOne className="form">
        <label>
          Search:
          <input
            name="nameInput"
            value={inputValue}
            type="text"
            onChange={changeHandler}
          />
        </label>
        {/* <Button type="submit">Search!</Button> */}
      </FormOne>
    </div>
  );
};

export default App;
