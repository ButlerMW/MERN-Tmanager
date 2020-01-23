import React, { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default (props) => {
    const { teamId, gameId } = props;
    const [ team, setTeam ] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/players/" + teamId)
            .then(res => setTeam(res.data));
    }, [])

    const onSubmitUpdate = (statNum) => {
        const updatedPlayer = {
            ...team,
            status: {
                ...team.status,
                [`game${gameId}`]: statNum
            }
        }
        axios.put('http://localhost:8000/api/players/edit/' + teamId, updatedPlayer)
            .then(res => {
                setTeam(updatedPlayer);
        }, [])
        .catch(err => console.log(err, "ERROR UPDATING PLAYER"));
        // console.log(team._id)
        // console.log(team.status.game1)

    }

    return (
        <div>
            <button style={{backgroundColor:team && team.status[`game${gameId}`] == 2 ? "#4CAF50" : ""}} onClick={(e) => onSubmitUpdate(2)}>Playing</button>
            <button style={{backgroundColor:team && team.status[`game${gameId}`] == 1 ? "#FF0000" : ""}} onClick={(e) => onSubmitUpdate(1)}>Not Playing</button>
            <button style={{backgroundColor:team && team.status[`game${gameId}`] == 0 ? "#FFFF00" : ""}} onClick={(e) => onSubmitUpdate(0)}>Undecided</button>
        </div>
    )
}
 