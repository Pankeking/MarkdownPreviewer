import React from "react";
import ToggleButtonComp from "./ToggleButtonComp";

function TitleWithToggle({ title, open, onClick }) {

    return (
        <div className="border border-success bg-success row shadow-lg">
            <div className="col-1"></div>
            <p className="col-10">{title}</p>
            <div className="col-1">
                <ToggleButtonComp open={open} onClick={onClick} /> 
            </div>
        </div>
    )
}
export default TitleWithToggle;