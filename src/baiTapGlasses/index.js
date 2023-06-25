import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class Glasses extends Component {
  state = {
    currentGlass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((glass, index) => {
      return (
        <img
          style={{
            width: "150px",
            cursor: "pointer",
            margin: "15px",
            border: "1px solid #333",
          }}
          key={index}
          src={glass.url}
          alt=""
          onClick={() => {
            this.changeGlass(glass);
          }}
        />
      );
    });
  };

  changeGlass = (glass) => {
    this.setState({
      currentGlass: glass,
    });
  };

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

    const infoGlasses = {
      position: "absolute",
      width: "250px",
      height: "110px",
      top: "195px",
      left: "50%",
      transform: "translate(-50%)",
      backgroundColor: "rgb(136 53 15 / 40%)",
      textAlign: "left",
      padding: "5px",
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
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt=""
                />
              </div>
              <div className="col-6">
                <div className="position-relative">
                  <img
                    style={modelStyle}
                    src="./glassesImage/model.jpg"
                    alt=""
                  />
                  <img
                    style={glassStyle}
                    src={this.state.currentGlass.url}
                    alt=""
                  />
                  <div style={infoGlasses}>
                    <p style={{ color: "rgb(94 8 157)", marginBottom: "5px" }}>
                      {this.state.currentGlass.name}
                    </p>
                    <p className="text-light">{this.state.currentGlass.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "50px" }} className="bg-light p-3">
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
