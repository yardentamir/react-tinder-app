

import React, { useState, useEffect } from 'react';
import Card from "../Components/card";
import CostumeButton from "../Components/CostumeButton";
import Headers from "../Components/headers";
import DATA from "../Data.json";
import { v4 as uuidv4 } from "uuid"; // makes random IDs

export default function MainPage() {

  const [data, setData] = useState(0);
  const [countLIkes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);

  useEffect(() => {
    console.log(DATA);
    console.log(DATA[data].images);
    console.log(DATA[data].name);
    setData(data);
  }, [data]);

  const likeClick = () => {
    setCountLikes(countLIkes + 1);
    counter();
  }

  const dislikeClick = () => {
    setCountDislikes(countDislikes + 1);
    counter();
  }

  const counter = () => {
    setData((data + 1) % DATA.length);
  }

  const buttons = [
    { icon: "fa-times", meaning: "no", callBack: likeClick },
    { icon: "fa-heart", meaning: "yes", callBack: dislikeClick }
  ];

  const headers = [
    { icon: "fa-times", side: "left", value: countLIkes },
    { icon: "fa-heart", side: "right", value: countDislikes }
  ]

  return (
    <div className="container">
      <section id="fake-tinder">
        <div className="header">
          {headers.map((header) => <Headers key={uuidv4()} icon={header.icon} side={header.side} value={header.value} />)}
        </div>
        <div className="cards">
          <Card id={DATA[data].id} name={DATA[data].name} img={DATA[data].images} />
        </div>
        <div className="buttons">
          {buttons.map((button) => <CostumeButton key={uuidv4()} icon={button.icon} meaning={button.meaning} callBack={button.callBack} />)}
        </div>
      </section>
    </div>
  )
}