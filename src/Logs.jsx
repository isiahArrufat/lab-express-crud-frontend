import { useEffect } from "react";


const Logs = ({ logs, setAllLogs }) => {
        useEffect(() => {
            fetch("http://localhost:3003/api/logs")
            .then((res) => res.json())
            .then((data) => setAllLogs(data.logs))
        }, [])

        if(logs?.length === 0) return null;

        return (
            <div>
              <h1>Logs</h1>
              { !logs || logs.length === 0 ? (
                  <div>Loading...</div>
                ) : (
                  logs.map(({ id, captainName, title, post, mistakesWereMandToday, daysSinceLastCrisis }) => (
                    <div key={id}>
                      <h3>Captain Name: {captainName}</h3>
                      <h3>Title: {title}</h3>
                      <p>Post: {post}</p>
                      <h3>Mistakes Were Made Today?: {mistakesWereMandToday === true ? "Yes" : "No"}</h3>
                      <h3>Days Since Last Crisis: {daysSinceLastCrisis}</h3>
                      <hr />
                    </div>
                  ))
                )
              }
            </div>
          );
}          

export default Logs