import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Games from '../components/Games';
import PlayerLink from '../components/PlayerLink';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from '@reach/router';

export default props => {
    const { gameId } = props;
    const [ team, setTeam ] = useState([]);

        useEffect(() => {
            axios.get("http://localhost:8000/api/players")
                .then(res => setTeam(res.data));
        }, [])

    
    return (
        <div>
            <PlayerLink />
            <h1>Player Status - Game {gameId}</h1>
            <h3>
                <Link to={"/status/game/1"}>Game 1</Link> | <Link to={"/status/game/2"}>Game 2</Link> | <Link to={"/status/game/3"}>Game 3</Link>
            </h3>
            <div>
                {/* <form onSubmit={onSubmitUpdate}> */}
            <table>
                <thead>
                    <tr>
                        <th>Player Names</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* {team.map((team, idx) => {  */}
                {team.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 :-1 ).map((team, idx) => { 
                    return (
                        <tr key={idx}>
                            <td>
                                {team.name}
                            </td>
                            <td>
                                <Games teamId={team._id} gameId={gameId} />
                            </td>
                        </tr>
                    
                    )
                })}
                </tbody>
            </table>
                {/* </form> */}
        </div>
        </div>
    )
}