import { useState } from "react";
import { generateColor } from "./generateColor";

export const RandomizeColor = ({ text, defaultColor }) => {
  const [color, setColor] = useState(defaultColor);
  const [secondColor, setSecondColor] = useState(defaultColor);
  const [thirdColor, setThirdColor] = useState(defaultColor);
  const clearColor = () => {
    setColor();
    setSecondColor();
    setThirdColor();
  };

  const handleChangeColors = () => {
    const firstColor = generateColor();
    const secondColor = generateColor();
    const thirdColor = generateColor();

    setColor(firstColor);
    setSecondColor(secondColor);
    setThirdColor(thirdColor);
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleChangeColors}>Click me to randomize color</button>
      <button onClick={clearColor}>Clear</button>
      <div className="box" style={{ backgroundColor: color }} />
      <div className="box" style={{ backgroundColor: secondColor }} />
      <div className="box" style={{ backgroundColor: thirdColor }} />
      <p>{color}</p>
    </div>
  );
};
