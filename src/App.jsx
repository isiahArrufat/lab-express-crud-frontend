import React from "react";
import { useState } from "react";
import Logs from "./Logs";


const App = () => {
  const [allLogs, setAllLogs] = useState([])
  

  return (
    <div>
      <h1>Logs CRUD</h1>
     <Logs 
     logs={allLogs} 
     setAllLogs={setAllLogs}
     />
    </div>
  );
};

export default App;
