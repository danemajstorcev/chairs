import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="Footer container-fluid">
      <div className="row lists">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-4">
                  <h2>company</h2>
                  <ul>
                    <li>
                      <Link to="/">about</Link>
                    </li>
                    <li>
                      <Link to="/">store location</Link>
                    </li>
                    <li>
                      <Link to="/">collection</Link>
                    </li>
                    <li>
                      <Link to="/">brands</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2>support</h2>
                  <ul>
                    <li>
                      <Link to="/">contact</Link>
                    </li>
                    <li>
                      <Link to="/">terms</Link>
                    </li>
                    <li>
                      <Link to="/">privacy policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2>company</h2>
                  <ul>
                    <li>
                      <Link to="/">about</Link>
                    </li>
                    <li>
                      <Link to="/">store location</Link>
                    </li>
                    <li>
                      <Link to="/">collection</Link>
                    </li>
                    <li>
                      <Link to="/">brands</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row copyright">
        <div className="col-md-12">
          <p>
            Copyrights &copy; 2019 <span>furwood</span>. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
