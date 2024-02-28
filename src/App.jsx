import { Routes, Route, Link, Router } from "react-router-dom"
import { useState, useEffect } from "react";

import Logs from "./Logs";
import Log from "./Log";
import LogForm from "./LogForm";
import LogEdit from "./LogEdit";

const App = () => {
  const [allLogs, setAllLogs] = useState([])
  const [singleLog, setSingleLog] = useState({})
  const [toggleForm, setToggleForm] = useState(false)
  const [edit, setEdit] = useState({ Show: false, id:null });
 
 
  useEffect(() => {
    fetch("http://localhost:3003/api/logs")
    .then((res) => res.json())
    .then((data) => setAllLogs(data.logs))
}, [])
  
return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Routes>
        <Route path="/" 
        element={
          <Logs 
            logs={allLogs} 
            setAllLogs={setAllLogs} 
            edit={edit}
            setEdit={setEdit}
          />
        } 
      />
        <Route path="/edit/:id" 
          element={
            <LogEdit 
              logs={allLogs} 
              setAllLogs={setAllLogs} 
              edit={edit}
              setEdit={setEdit}
            />
          } 
        />
        <Route 
          path="/:id" 
          element={
            <Log />
          } 
        />
        <Route 
          path="/new" 
          element={
            <LogForm 
            logs={allLogs} 
            setAllLogs={setAllLogs} 
            edit={edit}
            setEdit={setEdit} 
            />
          } 
        />
      </Routes>
    </div>
);


};

export default App;
