import React, {useState} from "react";
// import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";




function InputComp() {

    const [open, setOpen] = useState(true);
    
    const htmlText = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
    
    

    return (
        <>  

            

        <div className="container fs-1 justify-content-center">
            <h1>Editor </h1>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="editor-text"
                aria-expanded={open}
            >
               {(!open && <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /> )
               || (open && <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />)}
            </Button>
            <Collapse in={open}>
                <div id="editor-text">
             <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label></Form.Label>
                 <Form.Control as="textarea" rows={10} />
                </Form.Group>
             </Form>
                    <div dangerouslySetInnerHTML={ {__html: htmlText}}></div>
                </div>
            </Collapse>
        </div>
        </>
    )
}
export default InputComp;