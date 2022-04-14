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
              src="images/coffee.jpg"
              text="Custom branding"
              label="Services"
              path="/services"
            />
            <CardItem
              src="images/cardboard-cups.jpg"
              text="Exquisite quality"
              label="Products"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/coffee-paper-cup.jpg"
              text="Customer Services"
              label="Services"
              path="/services"
            />
            <CardItem
              src="images/barista.jpg"
              text="No matter how early your company is"
              label="Services"
              path="/services"
            />
            <CardItem
              src="images/true_coffee.jpg"
              text="We are READY whenever you are"
              label="Sign-Up"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
