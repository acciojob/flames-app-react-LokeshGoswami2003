import React, { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");
    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    const remainingLength =
      arr1.join("").length + arr2.join("").length;

    const flames = ["Siblings","Friends", "Love", "Affection", "Marriage", "Enemy"];
    const relation = flames[remainingLength % 6];

    setResult(relation);
  };

  const clearAll = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div >
    
      <input
        data-testid="input1"
        name="name1"
        placeholder="Enter first name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        data-testid="input2"
        name="name2"
        placeholder="Enter second name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship
      </button>

      <button
        data-testid="clear"
        name="clear"
        onClick={clearAll}
      >
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;