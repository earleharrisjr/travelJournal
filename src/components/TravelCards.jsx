import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';



export default function TravelCards(props) {

    return (
        <div className="travel--card">
            <img src={props.card.cardImage} className="card--image"></img>
            <div className="card--info">
                <span className="location"> <FaMapMarkerAlt className="icon--marker" /> {props.card.location}
                    <a className="view--map" href={props.card.map} target="_blank">View on Google Maps</a>
                </span>

                <h2 className="landmark">{props.card.landmark}</h2>
                <span className="date">{props.card.date}</span>
                <p className="details">{props.card.details}</p>
            </div>
        </div>


    )
}