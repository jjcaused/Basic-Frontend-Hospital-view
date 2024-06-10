import "./App.css";
import headerLogo from "./images/headerLogo.png";
import doc from "./images/doc.png";
import twofour from "./images/twofourhours.png";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Focuspart } from "./components/focuspart";
import { Papercard } from "./components/papercard";
import { Carespart } from "./components/carespart";
import { Aboutpart } from "./components/aboutpart";
import { Department } from "./components/department";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={headerLogo} alt="Header Logo" />
            <div className="logo-text">
              <h1 style={{fontSize: 40}}>SRI HOSPITALS</h1>
              <p>We care  |  We Heal  |  We lead</p>
            </div>
          </div>
          <div className="dashboardMenu">
            <Button
              variant="contained"
              sx={{ borderRadius: 5, boxShadow: "none" }}
            >
              HOME
            </Button>
            <Button variant="text">DEPARTMENT</Button>
            <Button variant="text">FACILITIES</Button>
            <Button variant="text">BLOGS</Button>
            <Button variant="text">CAREERS</Button>
          </div>
          <div className="dashboardIcons">
            <SearchIcon />
            <Button variant="text" sx={{ color: "black" }}>
              <FacebookIcon />
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              <GoogleIcon />
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              <WhatsAppIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="middle-content">
        <div className="text-content">
          <img src={twofour} />
          <h1 style={{fontSize: 50}}>WE CARE</h1>
          <h1 style={{ color: "orange",fontSize: 50 }}>WE HEAL</h1>
          <h1 style={{fontSize: 50}}>WE LEAD</h1>
        </div>
        <img src={doc} alt="Doctor" className="overlay-image" />
      </div>

      <Focuspart/>
      <Papercard/>
      <Carespart/>
      <Aboutpart/>
      <Department/>
    </>
  );
}

export default App;
