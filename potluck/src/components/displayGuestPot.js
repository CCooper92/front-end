import { axiosWithAuth } from "../utils/axioswithauth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PotCardDiv } from "./potLuckCard";

const DisplayGuestPot = () => {
  const [data, setData] = useState([]);
  const id = 1;

  const fetchPotWithGuest = () => {
    axiosWithAuth()
      .get(`/guests/${id}/potlucks`)
      .then((res) => {
        console.log("RES IN DISPLAY:", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error getting potluck with ", err);
      });
  };
  useEffect(() => {
    fetchPotWithGuest();
  }, []);
  return (
    <div>
      <h1>These are the Potlucks you are In!</h1>
      <Link to="/guest">Guest DashBoard</Link>
      {data.map((potlucks) => {
        return (
          <PotCardDiv key={potlucks.potluck_id}>
            <h3>
              Potluck Name:<br></br>
              {potlucks.potluck_name}
            </h3>
            <h3>Date:{potlucks.date}</h3>
            <h3>Location:{potlucks.location}</h3>
            <h3>Starting Time:{potlucks.time}</h3>
          </PotCardDiv>
        );
      })}
    </div>
  );
};

export default DisplayGuestPot;
