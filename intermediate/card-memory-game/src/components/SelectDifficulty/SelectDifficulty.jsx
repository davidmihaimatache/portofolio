/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import classes from "./SelectDifficulty.module.css";
function SelectDifficulty({ difficultyState: { difficulty, setDifficulty } }) {
  return (
    <div className={classes.container}>
      <label>Select the difficulty</label>
      <select
        type="select"
        onChange={(e) => setDifficulty(e.target.value)}
        defaultValue={difficulty}
      >
        <option value={2}>very easy</option>
        <option value={3}>easy</option>
        <option value={6}>medium</option>
        <option value={8}>hard</option>
      </select>
    </div>
  );
}

export default SelectDifficulty;
