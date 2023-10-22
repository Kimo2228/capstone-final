import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  const [queryParams] = useSearchParams();
  const [home, setHome] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //https://www.anapioficeandfire.com/api/character?page=1&pageSize=10

    fetch(queryParams.get("api"))
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setHome(data);
      })
      .catch();
  }, []);

  return (
    <div className={styles["section__container"]}>
      <h1> Home</h1>
      {/*Loop on data and display as a list*/}
      <p>
        Building a fun application called Game of Thrones, Game of Thrones used
        seven writers over its six seasons. Benioff and Weiss wrote most of each
        season's episodes.[73] A Song of Ice and Fire author George R. R. Martin
        wrote one episode in each of the first four seasons. Martin did not
        write an episode for the later seasons, since he wanted to focus on
        completing the sixth novel (The Winds of Winter).[74] Jane Espenson
        co-wrote one first-season episode as a freelance writer.[75] Cogman,
        initially a script coordinator for the series,[75] was promoted to
        producer for the fifth season. Cogman, who wrote at least one episode
        for the first five seasons, was the only other writer in the writers'
        room with Benioff and Weiss.[73] Before Cogman's promotion, Vanessa
        Taylor—a writer during the second and third seasons—worked closely with
        Benioff and Weiss. Dave Hill joined the writing staff for the fifth
        season after working as an assistant to Benioff and Weiss.[76] Although
        Martin was not in the writers' room, he read the script outlines and
        made comments.[73] Benioff and Weiss sometimes assigned characters to
        particular writers; for example, Cogman was assigned to Arya Stark for
        the fourth season. The writers spent several weeks writing a character
        outline, including what material from the novels to use and the
        overarching themes. After these individual outlines were completed, they
        spent another two to three weeks discussing each main character's
        individual arc and arranging them episode by episode.[73] A detailed
        outline was created, with each of the writers working on part of it to
        create a script for each episode. Cogman, who wrote two episodes for the
        fifth season, took a month and a half to complete both scripts. They
        were then read by Benioff and Weiss, who made notes, and parts of the
        script were rewritten. All ten episodes were written before filming
        began since they were shot out of order by two units in different
        countries.[73] Benioff and Weiss wrote their episodes together; one
        wrote the first half of the script with the other writing the second
        half. They then passed the drafts back and forth to make notes and do
        rewrites.[50]George R. R. Martin, author of A Song of Ice and Fire, is a
        series co-executive producer and wrote one episode for each of the first
        four seasons.
      </p>
    </div>
  );
}

export default Home;
