import React from "react";
import Star from "../images/star.png";

const cardImages = require.context("../images", true); //TO IMPORT CARDS PICTURES FOLDER

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT';
    } else if(props.location === "Online"){
        badgeText = 'ONLINE';
    }

  return (
    <div className="card">
      {badgeText && <div className="soldout-badge">{badgeText}</div>} {/*If the first statement is truthy then the second will run*/}
      <img
        src={cardImages(`./${props.coverImg}`)}
        alt="pro-swimmer"
        className="card-image"
      />
      <div className="card-stats">
        <img src={Star} alt="star" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="gray-color">({props.stats.reviewCount}) •&nbsp;</span>
        <span className="gray-color">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
