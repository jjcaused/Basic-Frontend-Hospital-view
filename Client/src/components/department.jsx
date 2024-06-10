import React from "react";
import Button from "@mui/material/Button";
import baby from "../images/baby.png";
import trauma from "../images/trauma.png";
import hand from "../images/hand.png";
import ent from "../images/ent.png";
import diabetes from "../images/diabetes.png";
import derma from "../images/derma.png";
import cardio from "../images/cardio.png";

export const Department = () => {
  return (
    <div className="Department">
      <div className="top-text">
        <h1>DEPARTMENTS</h1>
        <p style={{ marginLeft: 200, marginRight: 200 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="hex-all">
        <div className="hex-pos-1">
          <div className="hex">
            <img src={trauma} alt="Description" />
            <h3>TRAUMA CARE</h3>
          </div>
          <div className="hex">
            <img src={baby} alt="Description" />
            <h3>PEDIATRIC & NEWBORN</h3>
          </div>
          <div className="hex">
            <img src={cardio} alt="Description" />
            <h3>CARDIOLOGY</h3>
          </div>
          <div className="hex">
            <img src={hand} alt="Description" />
            <h3>HAND SURGERY</h3>
          </div>
        </div>
        <div className="hex-pos-2">
          <div className="hex">
            <img src={derma} alt="Description" />
            <h3>DERMATOLOGY</h3>
          </div>
          <div className="hex">
            <img src={diabetes} alt="Description" />
            <h3>DIABETOLOGY</h3>
          </div>
          <div className="hex">
            <img src={ent} alt="Description" />
            <h3>ENT</h3>
          </div>
        </div>{" "}
        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: 5,
            marginLeft: 96,
            bgcolor: "green",
          }}
        >
          EXPLORE MORE
        </Button>
      </div>
    </div>
  );
};
