import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import DeleteButton from './DeleteButton'
import axios from 'axios'

export default props => {

    const [ team, setTeam ] = useState([]);
        useEffect(() => {
            axios.get("http://localhost:8000/api/players")
                .then(res => setTeam(res.data));
        }, [])

    const removeFromDom = teamId => {
        setTeam(team.filter(team => team._id != teamId))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player Names</th>
                        <th>Preferred Position</th>
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
                                {team.position}
                            </td>
                            <td>
                                <DeleteButton teamId={team._id} successCallback={() => removeFromDom(team._id)} />
                            </td>
                        </tr>
                    
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}