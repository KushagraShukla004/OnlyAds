import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images1/coffee.jpg"
              text="Custom branding"
              label="Services"
              path="/services"
            />
            <CardItem
              src="/images1/cardboard-cups.jpg"
              text="Exquisite quality"
              label="Gallery"
              path="/gallery"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images1/coffee-paper-cup.jpg"
              text="Customer Services"
              label="Services"
              path="/services"
            />
            <CardItem
              src="/images1/barista.jpg"
              text="No matter how early your company is"
              label="Services"
              path="/services"
            />
            <CardItem
              src="/images1/true_coffee.jpg"
              text="We are READY whenever you are"
              label="Sign-Up"
              path="/register"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
