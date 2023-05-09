import React, {useState} from "react";
// import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function MarkdownComp() {

    const [show, setShow] = useState(true);

    return (
        <>  
            <h1>Markdown</h1>
            <div className="container d-flex w-75 fs-1 justify-content-center" >
                <Alert show={show} variant="success"> 
                    <Alert.Heading>This is shown when it is open</Alert.Heading>
                    
                    <Button onClick={() => setShow(false)} variant="outline-success"> Click to close </Button>
                </Alert>
            {!show && <div> <p>Inside MarkdownComp</p> <Button onClick={() => setShow(true)} variant="success" >Open</Button> </div>}
                
            </div>
        </>
    )
}
export default MarkdownComp;