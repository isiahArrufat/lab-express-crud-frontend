import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LogEdit = ({ setAllLogs }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // const [updateLog, setUpdateLog] = useState({
  //   captainName:"",
  //   title: "",
  //   post: "",
  //   mistakesWereMadeToday:false ,
  //   daysSinceLastCrisis: 0,
  // });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3003/api/logs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const updatedLog = {
            captainName: data.captainName || "",
            title: data.title || "",
            post: data.post || "",
            mistakesWereMadeToday: data.mistakesWereMadeToday || false,
            daysSinceLastCrisis: data.daysSinceLastCrisis || 0,
          };
          setUpdateLog(updatedLog);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setUpdateLog({ ...updateLog, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateLog),
      };

      fetch(`http://localhost:3003/api/logs/${id}`, options)
        .then((res) => res.json())
        .then((data) => {
          setAllLogs(data.logs); 
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleCancel = () => {
    navigate("/")
  }
  
  return (
    <div>
      <h1> Edit Log Form </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Captain Name:
          <input 
            onChange={handleChange}
            type="text"
            id="captainName"
            value={updateLog.captainName}
          />
        </label>
        <label htmlFor="title">
          Title:
          <input 
            onChange={handleChange}
            type="text"
            id="title"
            value={updateLog.title}
          />
        </label>
        <label htmlFor="post">
          Post:
          <input 
            onChange={handleChange}
            type="text"
            id="post"
            value={updateLog.post}
          />
        </label>
        <label htmlFor="mistakes">
          Mistakes Were Made Today?? :
          <input 
            onChange={handleChange}
            type="text"
            id="mistakesWereMadeToday"
            value={updateLog.mistakesWereMadeToday}
          />
        </label>
        <label htmlFor="last-crisis">
          Days Since Last Crisis?? :
          <input 
            onChange={handleChange}
            type="text"
            id="daysSinceLastCrisis"
            value={updateLog.daysSinceLastCrisis != null ? updateLog.daysSinceLastCrisis : ''}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  )

}





              

export default LogEdit