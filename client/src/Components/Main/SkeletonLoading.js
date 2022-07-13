import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonLoading() {
    return (
        <div style={{'display': 'flex'}}>
            <div className="skeleton-loading project">
                <Skeleton height={180}/>
                <Skeleton count={6} />
            </div>
            <div className="skeleton-loading project">
                <Skeleton height={180}/>
                <Skeleton count={6} />
            </div>
            <div className="skeleton-loading project">
                <Skeleton height={180}/>
                <Skeleton count={6} />
            </div>
            <div className="skeleton-loading project">
                <Skeleton height={180}/>
                <Skeleton count={6} />
            </div>
        </div>
    );
}

export default SkeletonLoading;
