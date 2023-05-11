import React from "react";
import ToggleButtonComp from "./ToggleButtonComp";

function TitleWithToggle({ title, open, onClick }) {

    return (
        <div className="border border-primary bg-primary opacity-75 row shadow-lg">
            <p className="justify-content-center">
                {title}
                <ToggleButtonComp open={open} onClick={onClick} /> 
            </p>
        </div>
    )
}
export default TitleWithToggle;