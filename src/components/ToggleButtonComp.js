import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";

function ToggleButtonComp({ open, onClick}) {

    return (
        <Button 
        onClick={onClick}
        aria-expanded={open}
        >
            {!open ? (<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />)
            : (<FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />)}
        </Button>
    )
}
export default ToggleButtonComp;