import React, { useState, useEffect } from "react";
import "../components/StarWars.css";
import styled from "styled-components";

export default function WarCard(props) {
  return (
    <div className="Card">
      <h1>{props.warrior.name}</h1>
      <h3>Mass: {props.warrior.mass}</h3>
      <h3>Height: {props.warrior.height}</h3>
      <h3>Hair Color: {props.warrior.hair_color}</h3>
      <h3>Eye Color: {props.warrior.eye_color}</h3>
      <h3>Birth Year: {props.warrior.birth_year}</h3>
      <h3>Gender: {props.warrior.gender}</h3>
    </div>
  );
}
