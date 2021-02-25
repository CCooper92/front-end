import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axioswithauth";
import { useParams, Link, useHistory } from "react-router-dom";
import { PotCardDiv } from "./potLuckCard";
import styled from "styled-components";

function GuestDash({ getPotLuck }) {
  const [potLuck, setPotLuck] = useState([]);
  const [user, setUser] = useState([]);
  // const[confirmedGuest, setConfirmedGuest] = useState([])
  const { id } = useParams();
  const { push } = useHistory();
  console.log(user, id);

  const fetchPotLuck = () => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log("GET Res in Guest Dashboard:", res);
        setPotLuck(res.data);
      })
      .catch((err) => {
        console.log("ERR getting potluck:", err.message);
      });
  };

  const fetchGuest = () => {
    axiosWithAuth()
      .get("/guests/1")
      .then((res) => {
        console.log("guest res:", res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log("Err in getting JONATHAN:", err);
      });
  };
  useEffect(() => {
    fetchPotLuck();
    fetchGuest();
  }, []);

  const handleConfirm = () => {
    axiosWithAuth()
      .post("/potlucks/1/guests/1/confirm")
      .then((res) => {
        // window.alert('You have confirmed')
        console.log("res inside of confirm:", res);
        push("/add-guestfood");
      })
      .catch((err) => {
        console.log("error confirming guest:", err);
        window.alert("you have been confirmed to join this potluck");
      });
  };

  return (
    <StyledGuestDashDiv>
      <h2>Welcome to Guest DashBoard </h2>
      <Link to="/searchPotLuck">Search Potluck</Link>
      <ol>
        {potLuck.map((potlucks) => {
          return (
            <PotCardDiv key={potlucks.potluck_id}>
              <h3>
                Potluck Name:<br></br>
                {potlucks.potluck_name}
              </h3>
              <h3>Date:{potlucks.date}</h3>
              <h3>Location:{potlucks.location}</h3>
              <h3>Starting Time:{potlucks.time}</h3>
              <button onClick={handleConfirm}>Confirm</button>
            </PotCardDiv>
          );
        })}
      </ol>
    </StyledGuestDashDiv>
  );
}

export default GuestDash;

const StyledGuestDashDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 100%;
  background: #f5f0e1;
  height: 100vh;
  color: #dc143c;

  h2 {
    border: 1px solid black;
    border-radius: 15px;
    padding: 1%;
    text-align: center;
    background: #1e3d59;
    color: #dc143c;
    text-decoration: underline;
  }
`;

// const fetchConfirmedGuest = () => {
//     axiosWithAuth()
//     .get('/potlucks/1/guests/confirmed')
//     .then((res) =>{
//         console.log('RES in ConfirmedGuest GET:',res)

//     })
//     .catch((err) =>{
//         console.log('Error getting Confirmed Guest',err)
//     })
// }
// useEffect(() =>{
//     fetchConfirmedGuest()
// },[])
