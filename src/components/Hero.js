import React from "react";
import ImageGrid from "../images/hero_image.png";

export default function Hero() {
  return (
    <section className="hero-container">
      <img src={ImageGrid} alt="hero-images" className="hero-image" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
