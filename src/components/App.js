import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inputs, setInputs] = useState([{ name: "", age: "" }]);

  const handleAdd = () => {
    setInputs([...inputs, { name: "", age: "" }]);
  };

  const handleRemove = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleChange = (index, e) => {
    const newInputs = [...inputs];
    newInputs[index][e.target.name] = e.target.value;
    setInputs(newInputs)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <form >
        {inputs.map((input, index) => {
          return (
            <div key={index}>
              <input placeholder="Name" name="name" value={input.name} onChange={(e) => handleChange(index, e)}/>
              <input placeholder="Age" name="age" value={input.age} onChange={(e) => handleChange(index, e)}/>
              <button type="button" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </div>
          );
        })}
      </form>
      <button onClick={handleAdd}> Add More.. </button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p>After Clicking submit check console for data</p>
    </div>
  );
};

export default App;