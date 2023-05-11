import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import TitleWithToggle from "./TitleWithToggle";
import InputComp from "./InputComp";




function EditorComp({ onChange, InitText }) {

    const [openEditor, setOpenEditor] = useState(true);

    const handleInputChange = (text) => {
        onChange(text);
    } 

    return (
        <>  
        <div className="container w-50 h-75 shadow-lg mb-auto border border-success fs-1 text-center">
                <TitleWithToggle 
                    title={"Text Editor"}
                    open={openEditor}
                    onClick={() => setOpenEditor(!openEditor)}
                />
                <Collapse in={openEditor}>
                    <div id="editor-text" className="ms-2 p-0">
                    <InputComp onChange={handleInputChange} InitText={InitText}/>
                    
                    </div>
                </Collapse>
        </div>
        </>
    )
}
export default EditorComp;