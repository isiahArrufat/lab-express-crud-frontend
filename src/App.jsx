import React from "react";
import { useState } from "react";
import Logs from "./Logs";
import Log from "./Log";
import LogForm from "./LogForm";


const App = () => {
  const [allLogs, setAllLogs] = useState([])
  const [singleLog, setSingleLog] = useState({})
  const [createLog, setCreateLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis:0
  })
  

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
      createLog={createLog}
      setCreateLog={setCreateLog}
      setAllLogs={setAllLogs}
     />
    </div>
  );
};

export default App;
