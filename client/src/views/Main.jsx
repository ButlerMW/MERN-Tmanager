import React, { useEffect, useState } from 'react';
import axios from 'axios'
import TeamList from '../components/TeamList';
import PlayerLink from '../components/PlayerLink';
import { Link } from '@reach/router'

export default () => {
    // const [team, setTeam] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/players')
    //         .then(res => {
    //             setProduct(res.data) // Added ***********************************************************************************
    //             setLoaded(true);
    //         });
    // }, [])

    // const removeFromDom = productId => {
    //     setProduct(product.filter(product => product._id !== productId))
    // }

    // const createProduct = product1 => {
    //     axios.post("http://localhost:8000/api/product/new", product1) /// this entire 'const' added
    //         .then(res => {
    //             setProduct([...product, res.data]);  
    //         })
    // }

    return (
        <div>
            <PlayerLink />
            <TeamList />
        </div>
    )
}
