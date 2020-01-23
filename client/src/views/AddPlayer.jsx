import React, { useEffect, useState } from 'react';
import TeamForm from '../components/TeamForm';
import PlayerLink from '../components/PlayerLink';
import { Link } from '@reach/router'

export default () => {
    const [team, setTeam] = useState([]);

    return (
        <div>
            <PlayerLink />
            <TeamForm />
        </div>
    )
}
