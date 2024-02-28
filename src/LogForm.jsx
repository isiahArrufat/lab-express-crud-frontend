import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LogForm = ({ setAllLogs }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [createLog, setCreateLog] = useState({
    captainName:"",
    title: "",
    post: "",
    mistakesWereMadeToday:false ,
    daysSinceLastCrisis: 0,
  });

  const handleChange = (e) => {
    setCreateLog({ ...createLog, [e.target.id]: e.target.value });
  };

  const handleCancel = () => {
    navigate("/")
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createLog),
    };

    fetch("http://localhost:3003/api/logs", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("All inputs must be filled!!!!");
        } else {
          setAllLogs(data.logs); 
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

 
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3003/api/logs/${id}`)
        .then((res) => res.json())
        .then((data) => setCreateLog(data)); 
    }
  }, [id]);
    

    return (
        <div>
            <h1> New Log Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Captain Name:
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="captainName"
                        value={createLog.captainName}
                    />
                </label>
                <label htmlFor="title">
                    Title:
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="title"
                        value={createLog.title}
                    />
                </label>
                <label htmlFor="post">
                    Post:
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="post"
                        value={createLog.post}
                    />
                </label>
                <label htmlFor="mistakes">
                    Mistakes Were Made Today?? :
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="mistakesWereMadeToday"
                        value={createLog.mistakesWereMadeToday}
                    />
                </label>
                <label htmlFor="last-crisis">
                    Days Since Last Crisis?? :
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="daysSinceLastCrisis"
                        value={createLog.daysSinceLastCrisis != null ? createLog.daysSinceLastCrisis : ''}
                    />
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default LogForm