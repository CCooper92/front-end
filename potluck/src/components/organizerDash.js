import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axioswithauth'
import {useParams, useHistory} from 'react-router-dom'

 const OrganizerDash = () => {

    const [ potlucks , setPotlucks ] = useState([])
    const [ guests, setGuests ] = useState([])
    const { push } = useHistory();

    useEffect (() => {
        axiosWithAuth()
        .get("/guests")
        .then((res) => {
            console.log(res)
            setGuests(res.data)
        })
        .catch((err) => {
            console.log("guests not found", err)
        })
    },[])

    
    useEffect (() => {
        axiosWithAuth()
        .get("/potlucks")
        .then((res) => {
            console.log("potluck alert", res)
            setPotlucks(res.data)
        })
        .catch((err) => {
            console.log("alert-potlucks-not-found" , err)
        })
    },[]);


    return (
        <div>
            <h1>Operator Dashboard</h1>
            <h3>Potlucks Available</h3>
            <ul>
            {potlucks.map((e) => {
                return(
                    <div key={e.potluck_id}>
                    <h4>Name: {e.potluck_name}</h4>
                    <h4>When: {e.date}</h4>
                    <h4>Where: {e.location}</h4>
                    <h4>Time: {e.time}</h4>
                    <button onClick={() =>{push("/edit-potluck")}}>Edit Potluck</button>
                    </div>
                )
            })}
            </ul>
            <span>
                <ul>
                    {guests.map((e) => {
                        return(
                            <div key={e.guest_name}>
                                <h4>Guest Name: {e.guest_name} </h4>
                            </div>
                        )
                    })}
                </ul>
            </span>
        </div>
    )
};

export default OrganizerDash;