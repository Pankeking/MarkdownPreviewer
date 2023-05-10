import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import TitleWithToggle from "./TitleWithToggle";




function EditorComp() {

    const [openEditor, setOpenEditor] = useState(true);

    return (
        <>  
        <div className="container w-50 shadow-lg mb-auto border border-success fs-1 text-center">
                <TitleWithToggle 
                    title={"Text Editor"}
                    open={openEditor}
                    onClick={() => setOpenEditor(!openEditor)}
                />
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