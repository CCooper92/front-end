import React, { useState, useEffect } from "react";
import { PotCardDiv } from "./potLuckCard";
import { axiosWithAuth } from "../utils/axioswithauth";
import { Link } from "react-router-dom";

const initialValue = {
  potluck_name: "",
};

const SearchPot = ({ potLuck }) => {
  const [formValues, setFormValues] = useState(initialValue);
  const [searchResults, setSearchResults] = useState([]);

  console.log("search results are HERE:", searchResults);

  const fetchPotLuck = () => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log("GET Res in Search:", res);
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.log("ERR in Search:", err.message);
      });
  };
  useEffect(() => {
    fetchPotLuck();
  }, []);

  const onChange = (e) => {
    e.persist();
    setFormValues({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResults(onChange);
  };

  return (
    <div className="search-container">
      <Link to="/guest">Back to Guest Dash</Link>
      <h1>Search Here</h1>
      <p>(*Type: 'foo','baz','toz'*) To see Potluck</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formValues.potluck_name}
          onChange={onChange}
          placeholder="Search Potlucks"
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="fetched-potluck">
        {searchResults.map((res) => {
          if (res.potluck_name === formValues.name) {
            return (
              <PotCardDiv>
                <h3>
                  Potluck Name:<br></br>
                  {res.potluck_name}
                </h3>
                <h3>Date:{res.date}</h3>
                <h3>Location:{res.location}</h3>
                <h3>Starting Time:{res.time}</h3>
              </PotCardDiv>
            );
          } else {
            return <div />;
          }
        })}
      </div>
    </div>
  );
};

export default SearchPot;

// {/* {fetchPotLuck.map((res) =>{
//     if(res.data.potluck_name){

//     }
// })} */}
