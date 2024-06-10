import React from "react";
import Paper from "@mui/material/Paper";
import twofour from "../images/twofourhours.png";
import Button from "@mui/material/Button";
import cardi from "../images/cardiac.png";
import ircare from "../images/ircare.png";
import feetcare from "../images/feetcare.png";

export const Papercard = () => {
  return (
    <div>
      <div className="paperCard">
        <Paper
          elevation={16}
          sx={{
            width: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
          }}
        >
          <img src={twofour} style={{ width: 150, height: 150 }} />
          <h3>
            24/7
            <br />
            Infrastructure Service
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button variant="contained" sx={{ width: 100 }}>
            EXPLORE
          </Button>
        </Paper>

        <Paper
          elevation={16}
          sx={{
            width: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
          }}
        >
          <img src={cardi} style={{ width: 200, height: 150 }} />
          <h3>CARDIAC CARE</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of
          </p>
          <Button variant="contained" sx={{ width: 100 }}>
            EXPLORE
          </Button>
        </Paper>

        <Paper
          elevation={16}
          sx={{
            width: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
          }}
        >
          <img src={ircare} style={{ width: 200, height: 150 }} />
          <h3>IR CARE</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of
          </p>
          <Button variant="contained" sx={{ width: 100 }}>
            EXPLORE
          </Button>
        </Paper>

        <Paper
          elevation={16}
          sx={{
            width: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
          }}
        >
          <img src={feetcare} style={{ width: 200, height: 150 }} />
          <h3>HEALTH CARE</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of
          </p>
          <Button variant="contained" sx={{ width: 100 }}>
            EXPLORE
          </Button>
        </Paper>
      </div>
    </div>
  );
};
