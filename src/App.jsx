import { useState } from "react";
import "./styles/styles.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Movie Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR Add a comment here
          to do initial push
          {/* please do "git checkout -b "yourname-branch" without the quotation marks */}
          {/* after creating your own branch, please add a comment here just like mine, save, then do a commit named "initial commit -yourname"
          then push the commit and merge with branch main*/}
          {/* please be sure to inform the group chat once its done */}
          {/* Initial Push - Marc */}
          {/* Initial Push - Yining */}
        </p>
      </div>
    </>
  );
}

export default App;
