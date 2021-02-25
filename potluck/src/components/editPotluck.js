import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axioswithauth'

const initialState = {
    potlucks: {
        potluck_id: null,
        potluck_name: "",
        date: "",
        location: "",
        time: "",
        error: ""
    }
};

const EditPotluck = () => {
    const [ updatePotluck, setUpdatePotluck ] = useState(initialState);

    useEffect (() => {
        axiosWithAuth()
        .get("/potlucks")
        .then((res) => {
            console.log("potluck alert", res)
            setUpdatePotluck(res.data)
        })
        .catch((err) => {
            console.log("alert-potlucks-not-found" , err)
        })
    },[]);

    const handleChange = (e) => {
        e.preventDefault();
        setUpdatePotluck({ ...updatePotluck, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put("//NO EDIT")
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
         })
      }

    return(
        //NO END POINT TO EDIT
        <div>
            <form onSubmit={handleSubmit}>
            <label>Potluck Name:</label>
            <input name='potLuckName' onChange={handleChange} type='text' value={updatePotluck.potluck_name} placeholder='Enter Potluck Name'></input>
            <label>Location:</label>
            <input name='location' onChange={handleChange} type='text' value={updatePotluck.location} placeholder='Enter Location Here'></input>
            <label>Date:</label>
            <input name='date' onChange={handleChange} type='text' value={updatePotluck.date} placeholder='Enter Date here'></input>
            <label>Time:</label>
            <input name='time' onChange={handleChange} type='text' value={updatePotluck.time} placeholder='Enter Time here'></input>
                <button>Edit Potluck!</button>
            </form>
        </div>
    )
};

export default EditPotluck;