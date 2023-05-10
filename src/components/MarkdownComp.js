import React, {useState} from "react";
import { marked } from "marked";
import Collapse from "react-bootstrap/Collapse";
import ToggleButtonComp from "./ToggleButtonComp";


function MarkdownComp() {

    const [openPreview, setOpenPreview] = useState(true);
    const htmlText = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

    return (
        <>
        <div className="container w-50 border border-success mt-auto fs-1 text-center">
           <div className="row border border-success bg-primary">
                <div className="col-1"></div>
                <p className="col-10">Previewer</p>
                <div className="col-1">
                    <ToggleButtonComp 
                        open={openPreview} 
                        onClick={() => setOpenPreview(!openPreview)}
                    />
                </div>
            </div> 
            <Collapse in={openPreview}>
                <div id="editor-text">
                    <p>
                        <h2>The text below is marked down </h2><hr></hr>
                        <div dangerouslySetInnerHTML={ {__html: htmlText}}></div>
                    </p>
                </div>
            </Collapse>
        </div>  
        </>
    )
}
export default MarkdownComp;