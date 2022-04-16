import React, { useState } from "react";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import barista from "../images/barista.jpg";
import mock1 from "../images/mock1.png";
import mock2 from "../images/mock2.png";
import tea from "../images/tea.jpg";
import small_cup from "../images/small_cup.jpg";
import krispy from "../images/krispy.jpg";
import panda_cup from "../images/panda_cup.jpg";
import huge_cup from "../images/huge_cup.jpg";
import coffee_paper_cup from "../images/coffee-paper-cup.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: barista,
    },
    {
      id: 2,
      imgSrc: mock1,
    },
    {
      id: 3,
      imgSrc: mock2,
    },
    {
      id: 4,
      imgSrc: tea,
    },
    {
      id: 5,
      imgSrc: panda_cup,
    },
    {
      id: 6,
      imgSrc: small_cup,
    },
    {
      id: 7,
      imgSrc: krispy,
    },
    {
      id: 8,
      imgSrc: huge_cup,
    },
    {
      id: 9,
      imgSrc: coffee_paper_cup,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <video src="/videos/back2.mp4" autoPlay loop muted />
      <h1 style={{ color: "#DCDCDC", fontFamily: "Helvetica" }}>
        Our Products Gallery
      </h1>
      <div className={model ? "model open" : "model"}>
        <img src={tempingSrc} alt="pop-up" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
