import React, { useState } from 'react';
import { navigate } from '@reach/router';
import faker from 'faker';
import axios from 'axios';

export default props => {
    // const { initialName, intialPosition } = props;
    const [name, setName] = useState(faker.name.firstName)
    const [position, setPosition] = useState(faker.name.jobTitle)
    const [ game1, setGame1 ] = useState(0)
    const [ game2, setGame2 ] = useState(0)
    const [ game3, setGame3 ] = useState(0)
    const [errors, setErrors] = useState([])
    const [nameError, setNameError] = useState("Please add a name")
    const [positionError, setPositionError] = useState("Position is optional")

    const onSubmitHandler = e => {
        e.preventDefault();
        // onSubmitProp({ name, position });
        axios.post("http://localhost:8000/api/players/new", {
            name,
            position,
            game1,
            game2,
            game3
        })
            .then(res => {
                
                navigate("/players/list")})
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    };


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {name.length == 0 ? <div>{nameError}</div> : <div></div>}
                <p>
                    <label>Player Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        style={name.length == 0 ? {background: 'red'} : {}}
                        onChange={e => setName(e.target.value)} />
                    {errors.map((err, idx) => <p key={idx}>*{err}</p>)}
                </p>
                <p>
                    <label>Preferred Position:</label>
                    <input 
                        type="text"
                        name="position"
                        value={position}
                        id="inputPosition"
                        onChange={e => setPosition(e.target.value)} />
                </p>
                {position.length == 0 ? <div>{positionError}</div> : <div></div>}
                <input type="submit" />
            </form>
        </div>
    )
}