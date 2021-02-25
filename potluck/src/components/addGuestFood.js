import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axioswithauth";

const initialPotLuck = {
  food: "",
  // food:''
};

const AddPotLuck = (props) => {
  const { push } = useHistory();
  const [food, setFood] = useState(initialPotLuck);

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //need an endpoint as a guest to post the food i want to bring and update API( please without 2 ids, its CRAZY)
    axiosWithAuth()
      .post("", food)
      .then((res) => {
        console.log("res when posting:", res);
        setFood(initialPotLuck);
        push("/display");
      })
      .catch((err) => {
        console.log("error posting Potluck:", err);
      });
  };

  return (
    <div className="added-potluck">
      <form onSubmit={handleSubmit}>
        <label>Desired Food To Bring:</label>
        <input
          name="potLuckName"
          onChange={handleChange}
          type="text"
          value={food.food}
          placeholder="Enter Food You Want To Bring"
        ></input>

        <button>Add Your Food!</button>
        <button
          onClick={() => {
            push("/display");
          }}
        >
          Show Potlucks Already In
        </button>
      </form>
    </div>
  );
};

export default AddPotLuck;
