import { useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState("Bob");
  const [isUK, setIsUK] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState("fahrenheit");
  const [temperature, setTemperature] = useState(94);
  const [weightUnit, setWeightUnit] = useState("pounds");
  const [weight, setWeight] = useState(300);

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  function handleClick() {
    const inputName = document.getElementById("customname").value;
    setName(inputName);

    setShowStory(true);

    if (isUK) {
      setTemperatureUnit("centigrade");
      setTemperature(34);
      setWeightUnit("stone");
      setWeight(21);
    }else{
      setTemperatureUnit("fahrenheit");
      setTemperature(94);
      setWeightUnit("pounds");
      setWeight(300);
    }
  }

  function handleUKRadioChange() {
    setIsUK(!isUK);
  }

  const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
  const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" id="customname" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" id="us" value="us" checked={!isUK} onChange={handleUKRadioChange} />
        <label htmlFor="uk">UK</label>
        <input type="radio" id="uk" value="uk" checked={isUK} onChange={handleUKRadioChange} />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temperature} {temperatureUnit} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs {weight} {weightUnit}
          , and it was a hot day.
        </p>
      )}
    </>
  );
}