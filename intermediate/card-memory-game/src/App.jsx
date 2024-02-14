import Title from "./components/Title/Title";
import classes from "./App.module.css";
import SelectDifficulty from "./components/SelectDifficulty/SelectDifficulty";
import { useEffect, useRef, useState } from "react";
import Game from "./components/Game/Game";
function App() {
  const [difficulty, setDifficulty] = useState(2);
  const [gameOver, setGameOver] = useState(true);
  const timePassed = useRef(0);
  const timer = useRef(undefined);
  function handleStartGame() {
    timePassed.current = 0;
    setGameOver(false);
    timer.current = setInterval(function () {
      timePassed.current += 10;
    }, 10);
  }
  useEffect(
    function () {
      if (gameOver === true) clearInterval(timer.current);
    },
    [gameOver]
  );
  console.log(difficulty);
  return (
    <div className={classes.app}>
      <Title />
      {gameOver && (
        <SelectDifficulty difficultyState={{ difficulty, setDifficulty }} />
      )}
      <div className={classes.gameContainer}>
        {gameOver && (
          <button onClick={handleStartGame} className={classes.startButton}>
            Start
          </button>
        )}
        {!gameOver && (
          <Game
            difficulty={difficulty}
            setGameOver={setGameOver}
            timePassed={timePassed}
          />
        )}
      </div>
      {/*
      <Start />
      <Game /> */}
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
    </div>
  );
}

export default App;
