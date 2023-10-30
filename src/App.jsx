import { useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState("Bob");
  const [isUK, setIsUK] = useState(false);
  const [xItem, setXItem]= useState();
  const [yItem, setYItem]= useState();
  const [zItem, setZItem]= useState();
  const [temperatureUnit, setTemperatureUnit] = useState("fahrenheit");
  const [temperature, setTemperature] = useState(94);
  const [weightUnit, setWeightUnit] = useState("pounds");
  const [weight, setWeight] = useState(300);

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  function radioClickUS(){
    setIsUK(false);
  }
  function radioClickUK(){
    setIsUK(true);
  }

  function handleClick(event) {
    event.preventDefault();
    const inputName = document.getElementById("customname");
    setName(inputName.value);
    
    setXItem(randomValueFromArray(insertX));
    setYItem(randomValueFromArray(insertY));
    setZItem(randomValueFromArray(insertZ));

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

  const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
  const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

  return (
    <>
    <form onSubmit={handleClick}>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" id="customname" placeholder=""/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio"  id="us" name="usuk" value="us" checked={!isUK} onChange={radioClickUS}/>
        <label htmlFor="uk">UK</label>
        <input type="radio"  id="uk" name="usuk" value="uk" checked={isUK} onChange={radioClickUK}/>
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
    </form>
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
