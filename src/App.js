import { useState, useEffect, useCallback } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [num1] = useState(4);
  const [num2] = useState(5);
  const [result, setResult] = useState(0);

  // const sum = () => num1 + num2;

  // If you have a function in a dependency array of useEffect it's better for the function to use the useCallback function else the function will be called with every render leading to an endless rendering loop.

  const sum = useCallback(() => num1 + num2, [num1, num2]); // calls sum only when num1 or num2 changes

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
  }, [sum]); //causes infinite loop if not using useCallback function in dependencies

  // const buildArray = () => [num1, num2];
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]); //causes infinite loop if not using useCallback function in dependencies

  return (
    <main className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || "--"}</h1>
      <p>Result: {JSON.stringify(result)}</p>
    </main>
  );
};

export default App;
