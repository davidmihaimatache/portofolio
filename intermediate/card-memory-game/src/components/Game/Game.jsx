/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import Card from "../Card/Card";
import classes from "./Game.module.css";
import one from "../../../public/1.svg";
import two from "../../../public/2.svg";
import three from "../../../public/3.svg";
import four from "../../../public/4.svg";
import five from "../../../public/5.svg";
import six from "../../../public/6.svg";
import seven from "../../../public/7.svg";
import eight from "../../../public/8.svg";
import { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
const veryEasy = shuffle([one, one, two, two]);
const easy = shuffle([one, one, two, two, three, three]);
const medium = shuffle([
  one,
  one,
  two,
  two,
  three,
  three,
  four,
  four,
  five,
  five,
  six,
  six,
]);
const hard = shuffle([
  one,
  one,
  two,
  two,
  three,
  three,
  four,
  four,
  five,
  five,
  six,
  six,
  seven,
  seven,
  eight,
  eight,
]);
function Game({ difficulty, setGameOver, timePassed }) {
  const disabled = useRef(false);
  const firstClick = useRef(true);

  const firstSVG = useRef(undefined);
  const firstSetSolved = useRef(undefined);
  const firstSetFaceUp = useRef(undefined);

  const [leftToSolve, setLeftToSolve] = useState(difficulty);

  const cards =
    difficulty == 2
      ? veryEasy
      : difficulty == 3
      ? easy
      : difficulty == 6
      ? medium
      : hard;
  const difficultyClass =
    difficulty == 2
      ? classes.gameVeryEasy
      : difficulty == 3
      ? classes.gameEasy
      : difficulty == 6
      ? classes.gameMedium
      : classes.gameHard;

  function handleClick(faceUp, solved, svg, setFaceUp, setSolved) {
    if (faceUp || solved || disabled.current) return;
    if (firstClick.current) {
      // * We swap the turn
      firstClick.current = false;
      // * We set the card to be face up
      setFaceUp(true);
      // * We memo the card svg
      firstSVG.current = svg;
      firstSetFaceUp.current = setFaceUp;
      firstSetSolved.current = setSolved;
    } else {
      disabled.current = true;

      // * We swap the turn
      firstClick.current = true;
      // * We set the card to be face up
      setFaceUp(true);

      if (firstSVG.current === svg) {
        setSolved(true);
        setLeftToSolve((amount) => amount - 1);

        firstSetSolved.current(true);
        disabled.current = false;
      } else
        setTimeout(() => {
          setFaceUp(false);
          firstSetFaceUp.current(false);
          disabled.current = false;
        }, 750);
      // if current card === memoized card then both are solved
      //    is game over? => ...
      // else flip both of them back
    }
  }
  return (
    <div className={classes.container}>
      {!leftToSolve && (
        <h1>{`You won in ${Math.floor(timePassed.current / 1000)}.${
          timePassed.current % 1000
        }s`}</h1>
      )}
      <div className={difficultyClass}>
        {cards.map((svg, i) => (
          <Card key={`${i}${i}`} svg={svg} handleClick={handleClick} />
        ))}
      </div>
      {!leftToSolve && (
        <button onClick={() => setGameOver(true)} className={classes.reset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Game;
