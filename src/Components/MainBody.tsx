import React from "react";
import Project from "./Project";

export default function MainBody() {
  const projects = [
    {
      URL: "https://github.com/Grgs/HumansVsGoblins_GUI",
      name: "Humans Vs. Goblins",
      description: "A tile-based game, where the player controls a human character and must navigate through a grid, avoiding or fighting the goblin along the way."
    },
    {
      URL: "https://github.com/Grgs/NumbersToWords",
      name: "Words to Numbers",
      description: "This program converts numbers to English words. It can convert the numbers to the modern English, traditional long scale British, traditional long scale European and Indian English number systems."
    },
    {
      URL: "https://github.com/Grgs/Hangman",
      name: "Hangman",
      description: "A word guessing game."
    },
    {
      URL: "https://github.com/Grgs",
      name: "More on Github",
      description: "My Github profile."
    }
  ];
  const projectList = projects.map((project) => <Project {...project} />);

  return (
    <div className="App-MainBody container flex-content-center">
      <ul>
        {projectList}
      </ul>
    </div>
  );
}