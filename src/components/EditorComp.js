import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import ToggleButtonComp from "./ToggleButtonComp";




function EditorComp() {

    const [openEditor, setOpenEditor] = useState(true);
    const htmlText = '# Marked in Node.js\n\nRendered by **marked**.';

    return (
        <>  
        <div className="container mb-auto fs-1 text-center justify-content-center">
            <h1>Editor </h1>
            
                <ToggleButtonComp
                    open={openEditor}
                    onClick={() => setOpenEditor(!openEditor)}
                />
                <p>
                        <h2>This is NOT marked down </h2>
                        {htmlText}
                    </p>
                <Collapse in={openEditor}>
                    <div id="editor-text">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={10} />
                        </Form.Group>
                    </Form>
                    
                    </div>
                </Collapse>
        </div>
        </>
    )
}
export default EditorComp;