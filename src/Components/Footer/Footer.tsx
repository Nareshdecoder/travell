import React from "react";
import facebook from "../../Assets/Images/facebook.svg";
import twitter from "../../Assets/Images/twitter.svg";
import instagram from "../../Assets/Images/instagram.svg";
import youtube from "../../Assets/Images/youtube.svg";
function Footer() {
  return (
    <div>
      <div className="bg-dark d-flex flex-wrap justify-content-between mt-4">
        <div className="text-white ms-4 mt-5">Voyaging</div>
        <div>
          <div className="text-white mt-4">Learn More</div>
          <div>
            <ul className="text-white footer-ul ">
              <li className="mt-3">About Lift</li>
              <li className="mt-2">Press Releses</li>{" "}
              <li className="mt-2">Environment</li> <li>Jobs</li>
              <li className="mt-2">Privacy Policy</li>{" "}
              <li className="mt-2">Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-white mt-4">Tickets & Booking</div>
          <div>
            <ul className="text-white footer-ul mt-2">
              <li className="mt-3">Lift Tickets</li>
              <li className="mt-2">Season Passes</li>{" "}
              <li className="mt-2">Vacation Packages</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-white mt-4">Contact Us</div>
          <div>
            <ul className="text-white footer-ul ">
              <li className="mt-3">
                Hotel Reservation:<span>123-456-7890</span>
              </li>
              <li className="mt-2">
                Ticket Office:<span>123-456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-white mt-4 me-3 ">Social</div>
          <div className="d-flex gap-3 mt-3 me-3">
            <div>
              {" "}
              <img src={facebook} alt="side1" />
            </div>
            <div>
              {" "}
              <img src={twitter} alt="side1" />
            </div>
            <div>
              {" "}
              <img src={instagram} alt="side1" />
            </div>
            <div>
              {" "}
              <img src={youtube} alt="side1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
