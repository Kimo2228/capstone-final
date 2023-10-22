import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Character.module.css";

function Character() {
  const [queryParams] = useSearchParams();
  const [character, setCharacter] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //https://www.anapioficeandfire.com/api/character?page=1&pageSize=10

    fetch(queryParams.get("api"))
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setCharacter(data);
      })
      .catch();
  }, []);

  return (
    <div className={styles["section__container"]}>
      <h1>List of Character</h1>
      {/*Loop on data and display as a list*/}
      <p>
        Name: {character.name != "" ? character.name : character.aliases[0]},
        Culture: {character.culture}, Gender: {character.gender}
        when click on character, route to character page by passing the
        character.url on the props
      </p>
    </div>
  );
}

export default Character;
