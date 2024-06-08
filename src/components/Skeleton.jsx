import React from "react";
import '../css/Skeleton.css'

function Skeleton() {
    return(
        <React.Fragment>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
        </React.Fragment>
    )
}

export default Skeleton;