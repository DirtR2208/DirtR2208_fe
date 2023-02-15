import React, { useReducer } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrail, setLoading } from "../../actions"
import { postToFavorites } from "../../utilis/apiCalls";

function Card(props) {
  const county = useSelector((state) =>
    state.counties.find((county) => {
      return county.id === props.countyId.toFixed();
    })
  );
  const dispatch = useDispatch()

  const selectTrail = (id) => {
    dispatch(setLoading)
    return fetch('http://localhost:3000/api/v1/trail?id=' + id, {
    })
      .then(response => response.json())
      .then(data => dispatch(setTrail(data)))
      .then(() => dispatch(setLoading))
      .catch(err => console.log(err))
  }
  const currentUser = useSelector((state) => state.selectedUser);
  const trails = useSelector((state) => state.trails);

  const addToFavorites = (propsId) => {
    const foundTrail = trails.find(trail => trail.id === propsId)
    postToFavorites(foundTrail, currentUser.data.id)
  }

  return (
    <div className="card">
      <NavLink to="/individual_trail">
        <div className="card-top" onClick={() => selectTrail(props.id)}>
          <img
            src={props.image}
            className="scenery-image"
            alt="scenery image"
          />
          <div className="trail-county-container">
            <p className="trail-name">{props.name}</p>
            <div className="divider-bar"></div>
            <p className="county-name">{county.name}</p>
          </div>
        </div>
      </NavLink>
      <div className="card-bottom">
        <p className="trail-difficulty">{props.difficulty}</p>
        <p className="trail-distance">{props.distance} miles</p>
        <button className="favorite-button" onClick={() => addToFavorites(props.id)}>
          <div className="heart-image-container" alt="favorite button" />
        </button>
      </div>
    </div>
  );
}

export default Card;
