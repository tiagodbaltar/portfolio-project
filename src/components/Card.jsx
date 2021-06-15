import React from "react";

const Body = () => {
  return (
    <div className="card-box" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{ color: "orange", textAlign: "center", fontSize: "1.5rem" }}
        >
          Tiago Baltar
        </h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ textAlign: "center" }}
        >
          Web Developer
        </h6>
        <p className="card-text">
          Hi, Welcome to my website. I am a Web Develper based in Melbourne
          Australia. To find out more about me, click in the button below.
        </p>
        <button type="button" class="btn btn-warning" className="btn-card">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Body;
