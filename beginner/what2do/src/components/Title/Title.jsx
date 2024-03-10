/* eslint-disable react/prop-types */
import "./Title.css";
function Title({ title }) {
  return (
    <div className="titleContainer">
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default Title;
