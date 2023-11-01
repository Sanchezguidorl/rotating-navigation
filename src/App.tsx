import img1 from "./assets/img.webp";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>

      <div id="Contend" className={showNav ? "show-nav" : ""}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          minus inventore numquam deleniti optio alias veniam placeat nisi illo
          eius quo quidem, quam ullam dolorem, odio necessitatibus praesentium
          culpa libero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          minus inventore numquam deleniti optio alias veniam placeat nisi illo
          eius quo quidem, quam ullam dolorem, odio necessitatibus praesentium
          culpa libero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          minus inventore numquam deleniti optio alias veniam placeat nisi illo
          eius quo quidem, quam ullam dolorem, odio necessitatibus praesentium
          culpa libero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          minus inventore numquam deleniti optio alias veniam placeat nisi illo
          eius quo quidem, quam ullam dolorem, odio necessitatibus praesentium
          culpa libero.
        </p>
        <img src={img1} alt="" />
      </div>
      <div
          className={`show-nav-controll ${showNav && "rotate-controll"}`}
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon className="open" icon={faBars} />
          <FontAwesomeIcon className="close" icon={faX} />
        </div>
      <nav id="Nav" className={`${showNav && 'show-nav-links'}`}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </li>
          <li className="margin-l-mid">
            <FontAwesomeIcon icon={faUser} />
            About
          </li>
          <li className="margin-l-large">
            <FontAwesomeIcon icon={faAddressBook} />
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
