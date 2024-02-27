import React from "react";
import { useState, useEffect } from "react";
import Logs from "./Logs";
import Log from "./Log";
import LogForm from "./LogForm";


const App = () => {
  const [allLogs, setAllLogs] = useState([])
  const [singleLog, setSingleLog] = useState({})
 
  useEffect(() => {
    fetch("http://localhost:3003/api/logs")
    .then((res) => res.json())
    .then((data) => setAllLogs(data.logs))
}, [])
  

  return (
    <div>
      <h1>Logs CRUD</h1>
     <Logs 
     logs={allLogs} 
     setAllLogs={setAllLogs}
     />
     <Log 
      log={singleLog}
      setSingleLog={setSingleLog}
     />
     <LogForm 
      logs={allLogs}
      setAllLogs={setAllLogs}
     />
    </div>
  );
};

export default App;
