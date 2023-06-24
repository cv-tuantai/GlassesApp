import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    const background = {
      backgroundImage: "url(./glassesImage/background.jpg)",
      height: "100vh",
      backgroundSize: "Cover",
    };

    const cover = {
      backgroundColor: "rgba(0,0,0,0.7)",
      height: "100vh",
    };

    const glassStyle = {
      position: "absolute",
      width: "150px",
      top: "75px",
      opacity: "0.7",
      left: "50%",
      transform: "translate(-50%)",
    };

    const modelStyle = {
      position: "absolute",
      width: "250px",
      left: "50%",
      transform: "translate(-50%)",
    };

    return (
      <div style={background}>
        <div style={cover}>
          <h1
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            className="text-light p-4"
          >
            TRY GLASSES APP ONLINE
          </h1>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    style={modelStyle}
                    src="./glassesImage/model.jpg"
                    alt=""
                  />
                  <img style={glassStyle} src="./glassesImage/v1.png" alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="position-relative">
                  <img
                    style={modelStyle}
                    src="./glassesImage/model.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
