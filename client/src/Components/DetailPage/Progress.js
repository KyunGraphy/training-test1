import React from "react";
import "./styles/Progress.css";

function Progress({ project }) {
    return (
        <div className="prog">
            <b>Progress</b>
            <div className="nested-progress">
                <img src={project.image} alt={project.title}/>
                <div className="nested-progress-bar">
                    <div class="fw-bold">Found the project</div>
                    <div class="fw-light">Fri Oct 16 2020</div>
                    <div class="fw-light">Ho Chi Minh</div>
                    <div class="fw-bold">Visit Dong Khoi street</div>
                </div>{" "}
            </div>{" "}
        </div>
    );
}

export default Progress;
