import React from "react";
import Project from "./Project";

const projects = [
  {
    URL: "https://github.com/Grgs/HumansVsGoblins_GUI",
    name: "Humans Vs. Goblins",
    description: "A tile-based game, where the player controls a human character and must navigate through a grid, avoiding or fighting the goblin along the way.",
    image: "./images/human-vs-goblin-screenshot.png",
  },
  {
    URL: "https://github.com/Grgs/HyperskillAccountService",
    name: "Hyperskill Account Service",
    description: "This is a Rest service that allows you to create an account and login to your account. It also manages lockout after repeated authentication failure.",
    image: "./images/hyperskill_account_services_dalle.png",
  },
  {
    URL: "https://github.com/Grgs/NumbersToWords",
    name: "Words to Numbers",
    description: "This program converts numbers to English words. It can convert the numbers to the modern English, traditional long scale British, traditional long scale European and Indian English number systems.",
    image: "./images/numbers-to-words-dalle.png",
    more: <div><h6>Example:</h6>
      <p>for 123456789012</p>
      Western Modern number system:
      <pre><code> one hundred and twenty-three billion four hundred and fifty-six million seven hundred and eighty-nine thousand twelve</code></pre>
      Indian English number system:
      <pre><code>one kharab twenty-three arab forty-five crore sixty-seven lakh eighty-nine thousand twelve</code></pre>
      Traditional European long scale number system:
      <pre><code>one hundred and twenty-three millard four hundred and fifty-six million seven hundred and eighty-nine thousand twelve
      </code></pre>
      Traditional British long scale number system:
      <pre><code>one hundred and twenty-three thousand million four hundred and fifty-six million seven hundred and eighty-nine thousand twelve
      </code></pre></div>
  },
  {
    URL: "https://github.com/Grgs/Hangman",
    name: "Hangman",
    description: "A word guessing game.",
    image: "./images/hangman-dalle.png",
  },
  {
    URL: "https://github.com/Grgs/LS",
    name: "ls",
    description: "A simple command line interface for listing files and directories into columns. The utility should support any operating system that can run Python."
  },
  {
    URL: "https://github.com/Grgs",
    name: "More on Github",
    description: "My Github profile."
  }
];
export default function MainBody() {
  return (
    <div className="App-MainBody container flex-content-center">
      {projects.map((project) => <Project {...project} />)}
    </div>
  );
}