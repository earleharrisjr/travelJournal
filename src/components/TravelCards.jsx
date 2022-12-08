import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';



export default function TravelCards() {

    return (
        <div className="travel--card">
            <img src="public\images\maryWyoming.jpg" className="card--image"></img>
            <div className="card--info">
                <span className="location"> <FaMapMarkerAlt className="icon--marker" /> JACKSON HOLE, WYOMING
                    <a className="view--map" href="https://goo.gl/maps/R8GB28ULSJVVvaRt8" target="_blank">View on Google Maps</a>
                </span>

                <h2 className="landmark">Grand Tetons</h2>
                <span className="dates">September 2020</span>
                <p className="details">Located in northwestern Wyoming, Grand Teton National Park protects stunning mountain scenery and a diverse array of wildlife.
                    Rising more than 7,000 feet above the valley of Jackson Hole, the Teton Range dominates the park's skyline</p>
            </div>
        </div>


    )
}