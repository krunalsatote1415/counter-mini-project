import { useState } from "react";
import "./index.css";
import Reset from "./Reset";
import Increase from "./Increase";
import Decrease from "./Decrease";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("text-black");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-red-500 text-5xl font-bold">Counter Mini Project</h1>

      {/* <h2 className="text-6xl text-green-600">Counter Value is: {count}</h2> */}
      <h1 className={`${color} text-6xl`}>Counter Value is: {count}</h1>
      <div className="flex gap-5">
        <Increase count={count}  setCount={setCount} setColor={setColor}/>

        <Decrease count={count}  setCount={setCount} setColor={setColor} />
          <Reset setCount={setCount} setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
