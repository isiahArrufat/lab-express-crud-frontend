import { useEffect } from "react";

const Log = ({ singleLog, setSingleLog}) => {
    useEffect(() => {
        if(singleLog && singleLog.id) {
            fetch(`http://localhost:3003/api/logs/${singleLog.id}`)
            .then((res) => res.json())
            .then((data) => setSingleLog(data.singleLog))
        }
    }, [singleLog, setSingleLog])

    if(!singleLog) return null

    const { captainName, title, post, mistakesWereMandToday, daysSinceLastCrisis } = singleLog

    return (
        <div key={singleLog.id}>
        <h3>Captain Name: {captainName}</h3>
        <h3>Title: {title}</h3>
        <p>Post: {post}</p>
        <h3>Mistakes Were Made Today?: {mistakesWereMandToday === true ? "Yes" : "No"}</h3>
        <h3>Days Since Last Crisis: {daysSinceLastCrisis}</h3>
        <hr />
      </div>
    )
}

export default Log