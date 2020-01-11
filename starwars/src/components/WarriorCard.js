import React, { useState, useEffect } from "react";
import axios from "axios";
import getHome from "./HomeWorld";

export default function WarCard(props) {
  return (
    <div className="Card">
      <h1>{props.warrior.name}</h1>
      <h6>Mass: {props.warrior.mass}</h6>
      <h6>Hair Color: {props.warrior.hair_color}</h6>
    </div>
  );
}
