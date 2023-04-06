import React, { useState } from "react";

function Dropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState("");

  const onSelect = (event)=>{
    const option = event.target.value
    setSelectedOption(option)

    document.getElementById('myid').innerHTML=`Selected practice: ${option}`
  }

  return (
    <div style={{ textAlign: "center", paddingTop: '5rem' }}>
      <h3>Select a practice:</h3>
      <select
        value={selectedOption}
        onChange={onSelect}
      >
        <option value="" disabled selected hidden>
          Please select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h5 id="myid" style={{paddingTop: '2rem'}}></h5>
    </div>
  );
}
export default Dropdown;
