import { useEffect } from "react";
import { Link } from "react-router-dom";


const Logs = ({ setAllLogs, logs }) => {

  const handleDelete = (id) => {
    console.log(id)
  const options = {
    method: "DELETE",
    };

    fetch(`http://localhost:3003/api/logs/${id}`, options)
      .then((res) => res.json())
      .then((data) => setAllLogs(data.logs))
    }

  return (
    <div>
      <Link to={"/new"}>
      <button>Create Log</button>
      </Link>
      {logs.map(({ id, captainName, title, post, mistakesWereMandToday, daysSinceLastCrisis,}) => (
        <div key={id}>
          <h3>Captain Name: {captainName}</h3>
          <h3>Title: {title}</h3>
          <p>Post: {post}</p>
          <h3>Mistakes Were Made Today?: {mistakesWereMandToday === true ? "Yes" : "No"}</h3>
          <h3>Days Since Last Crisis: {daysSinceLastCrisis != null ? daysSinceLastCrisis : ''}</h3>
          <Link to={`/edit/${id}`}><button>Edit</button></Link>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
      
  );
}          

export default Logs