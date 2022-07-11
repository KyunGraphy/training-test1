import React from "react";
import "./Overview.css";

function Overview() {
  return (
    <div className="overview">
      <div className="title">
        <div className="subject">
          <h3>Digital Logic Design Project</h3>
          <p>Hai Phong</p>
        </div>
        <div className="author">
          <img src="https://lh3.googleusercontent.com/a-/AOh14GhoEu9U8ce_FBpNtNTPj5e1G_9VWOryds6WcT_r" />
          <b>Mogzzer</b>
        </div>
        <div className="deadline">
          <b>Tomorrow</b>
          <p>Deadline</p>
        </div>
        <button className="btn btn-success">Apply Now</button>
      </div>

      <div className="image">
        <img src="https://firebasestorage.googleapis.com/v0/b/socialject-alpha-1.appspot.com/o/images%2F%C4%90%E1%BB%93ng%20Kh%C6%A1i.jpg?alt=media&token=42943827-6fb2-4345-9321-d4ba6bc328c3"/>
      </div>
    </div>
  );
}

export default Overview;
