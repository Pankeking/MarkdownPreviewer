import React, {useState} from "react";
// import {Link} from 'react-router-dom'

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

//import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputComp() {

    const [show, setShow] = useState(true);

    return (
        <div>
            <>
            <h1>Editor</h1>
            <div className="container d-flex fs-1 justify-content-center">
                <Alert show={show} variant="success"> 
                    <Alert.Heading>This is shown when it is open</Alert.Heading>
                    
                    <Button onClick={() => setShow(false)} variant="outline-success"> Click to close </Button>
                </Alert>
            {!show && <div> <p>Inside Editor</p> <Button onClick={() => setShow(true)} variant="success" >Open</Button> </div>}
                
            </div>
        </>
        </div>
    )
}
export default InputComp;