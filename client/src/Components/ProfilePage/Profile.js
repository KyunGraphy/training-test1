import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Info from "./Info";
import "./styles/Profile.css";
import ProjectList from "./ProjectList";
import SkeletonLoading from "./SkeletonLoading";

function Profile() {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <SkeletonLoading />
        )
    } else {
        return (
            <div className="profile">
                <div className="profile-info">
                    <Info />
                    <Contact />
                </div>
                <div className="profile-project">
                    <div className="container">
                        <div className="white my-2 px-5">
                            <About />
                        </div>
                        <div className="white my-2 px-5">
                            <ProjectList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    }

export default Profile;
