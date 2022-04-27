import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Coffee from "./../images/coffee.jpg";
import Cardboard from "./../images/cardboard-cups.jpg";
import Paper_coffee from "./../images/coffee-paper-cup.jpg";
import Barista from "./../images/barista.jpg";
import TrueCoffee from "./../images/true_coffee.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Coffee}
              text="Custom branding"
              label="Services"
              path="/services"
            />
            <CardItem
              src={Cardboard}
              text="Exquisite quality"
              label="Gallery"
              path="/gallery"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Paper_coffee}
              text="Customer Services"
              label="Services"
              path="/services"
            />
            <CardItem
              src={Barista}
              text="No matter how early your company is"
              label="Services"
              path="/services"
            />
            <CardItem
              src={TrueCoffee}
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
