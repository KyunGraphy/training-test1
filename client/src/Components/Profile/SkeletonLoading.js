import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonLoading() {
    return (
        <div className="profile">
            <div className="profileInfoSkeleton">
                <Skeleton count={5} />
            </div>
            <div className="profileProject">
                <div className="container">
                    <div className="white my-2 px-5 profile-project-skeleton-item">
                        <Skeleton count={5} />
                    </div>
                    <div className="white my-2 px-5 profile-project-skeleton-item">
                        <Skeleton count={5} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonLoading;
