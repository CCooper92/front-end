import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialPotLuck = {
  name: "",
  location: "",
  date: "",
  time: "",
  // food:''
};

const AddPotLuck = (props) => {
  const { push } = useHistory();
  const { id } = useParams();
  const [potLuck, setPotLuck] = useState(initialPotLuck);

  const handleChange = (e) => {
    setPotLuck({
      ...potLuck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/potlucks", potLuck)
      .then((res) => {
        console.log("res when posting:", res);
        props.getPotLuck();
        setPotLuck(initialPotLuck);
        push("/organizers");
      })
      .catch((err) => {
        console.log("error posting Potluck:", err);
      });
  };

  return (
    <div className="added-potluck">
      <form onSubmit={handleSubmit}>
        <label>Potluck Name:</label>
        <input
          name="potLuckName"
          onChange={handleChange}
          type="text"
          value={potLuck.name}
          placeholder="Enter Potluck Name"
        ></input>
        <label>Location:</label>
        <input
          name="location"
          onChange={handleChange}
          type="text"
          value={potLuck.location}
          placeholder="Enter Location Here"
        ></input>
        <label>Date:</label>
        <input
          name="date"
          onChange={handleChange}
          type="text"
          value={potLuck.date}
          placeholder="Enter Date here"
        ></input>
        <label>Time:</label>
        <input
          name="time"
          onChange={handleChange}
          type="text"
          value={potLuck.time}
          placeholder="Enter Time here"
        ></input>
        {/* <label>Needed Food:</label>
            <input name='food' onChange={handleChange} type='text' value={potLuck.food} placeholder='Desired Foods Here'></input> */}
        <button>Add Potluck!</button>
      </form>
    </div>
  );
};

export default AddPotLuck;
