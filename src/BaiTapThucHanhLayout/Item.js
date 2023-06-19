import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { icon, title, desc } = this.props;

    return (
      <div className="col-lg-6 col-xl-4 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary text-white mb-4">
              <i className={icon} />
            </div>
            <h2 className="fs-4 fw-bold">{title}</h2>
            <p className="mb-0">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
