import { useState } from "react"

const LogForm = ({  setAllLogs }) => {

    const [createLog, setCreateLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis:0
      })

    const handleChange = (e) => {
        setCreateLog({ ...createLog, [e.target.id]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const createdLog = {
            captainName: createLog.captainName,
            title: createLog.title,
            post: createLog.post,
            mistakesWereMadeToday: createLog.mistakesWereMadeToday,
            daysSinceLastCrisis: createLog.daysSinceLastCrisis
        };
        setAllLogs((prevLogs) => [...prevLogs, createdLog]);
        
        setCreateLog({
            captainName: "",
            title: "",
            post: "",
            mistakesWereMadeToday: false,
            daysSinceLastCrisis: 0
        });
    };

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
                </label><label htmlFor="last-crisis">
                Days Since Last Crisis?? :
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="daysSinceLastCrisis"
                        value={createLog.daysSinceLastCrisis.toString()}
                    />
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default LogForm