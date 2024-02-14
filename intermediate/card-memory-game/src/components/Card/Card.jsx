/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./Card.module.css";
function Card({ svg, handleClick }) {
  const [faceUp, setFaceUp] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <div
      className={classes.card}
      onClick={() =>
        handleClick(
          faceUp,
          solved,
          svg,
          (value) => setFaceUp(value),
          (value) => setSolved(value)
        )
      }
    >
      {faceUp && (
        <div className={`${classes.cardSide} ${classes.cardFront}`}>
          <img src={svg} />
        </div>
      )}
      {!faceUp && (
        <div className={`${classes.cardSide} ${classes.cardBack}`}></div>
      )}
    </div>
  );
}

export default Card;
