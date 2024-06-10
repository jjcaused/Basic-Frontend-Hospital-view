import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";

export const Focuspart = () => {
  return (
    <div className="focus-part-container">
      <div className="right-btn">
        <Button variant="text">
          <PhoneForwardedIcon
            sx={{
              width: 50,
              height: 50,
              bgcolor: "#2196f3",
              color: "white",
              borderRadius: 2,
            }}
          />
        </Button>
        <p>Contact us</p>
      </div>
      <div className="center-text">
        <p>OUR FOCUS</p>
        <h1>
          We're Dedicated to{" "}
          <span className="highlight">Advancing Cardiology</span> and
        </h1>
        <h1>Interventional Radiology in Tamil Nadu</h1>
      </div>
    </div>
  );
};
