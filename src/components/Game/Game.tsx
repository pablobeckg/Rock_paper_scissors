import { useEffect, useState } from "react";
import Paper from "../../assets/svg/Paper";
import Rock from "../../assets/svg/Rock";
import Scissors from "../../assets/svg/Scissors";
import "./Game.css";

interface IChoices {
  rock: string;
  paper: string;
  scissors: string;
}

const Game = () => {
  const [myChoice, setMyChoice] = useState<string>("Let select a choice!");
  const [cpuChoice, setCpuChoice] = useState<string>("?");
  const [result, setResult] = useState<string>("");

  const handleMyChoice = (choice: string) => {
    setMyChoice(choice);
    handleCPUChoice();
  };

  const handleCPUChoice = () => {
    const choices: IChoices = {
      rock: "Rock",
      paper: "Paper",
      scissors: "Scissors",
    };

    const choicesArray = Object.values(choices);
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    const randomChoice = choicesArray[randomIndex];

    setCpuChoice(randomChoice);
  };
  
  const handleResult = () => {
    if (myChoice === cpuChoice) {
      setResult("Draw");
    } else if (
      (myChoice === "Rock" && cpuChoice === "Scissors") ||
      (myChoice === "Paper" && cpuChoice === "Rock") ||
      (myChoice === "Scissors" && cpuChoice === "Paper")
    ) {
      setResult("You Win");
    } else {
      setResult("CPU Wins");
    }
  };

  useEffect(() => {
    if (myChoice && cpuChoice) {
      handleResult();
    }
  }, [myChoice, cpuChoice]);

  return (
    <section>
      <div className="results">
        <h1>Your choice: {myChoice}</h1>
        <h1>CPU choice: {cpuChoice}</h1>
        <h1>Result: {result}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => handleMyChoice('Rock')}><Rock /></button>
        <button onClick={() => handleMyChoice('Paper')}><Paper /></button>
        <button onClick={() => handleMyChoice('Scissors')}><Scissors /></button>
      </div>
      <button className="restart" onClick={() => { setMyChoice("Let select a choice!"); setCpuChoice("?"); }}>Restart Game</button>
    </section>
  );
};

export default Game;
