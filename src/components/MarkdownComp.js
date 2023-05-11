import React, {useState} from "react";
import { marked } from "marked";
import Collapse from "react-bootstrap/Collapse";
import TitleWithToggle from "./TitleWithToggle";


function MarkdownComp({ markdownText }) {

    const [openPreview, setOpenPreview] = useState(true);
    
    const markedDownText = marked(markdownText, {sanitize: true});

    return (
        <>
        <div className="container w-75 shadow-lg border border-success mt-auto fs-1 text-center">
           <TitleWithToggle
                title={"Markdown Preview"}
                open={openPreview}
                onClick={() => setOpenPreview(!openPreview)}
           />
            <Collapse in={openPreview}>
                <div className="text text-start" id="editor-text">
                    <p>
                        <h2>The text below is marked down </h2><hr></hr>
                        <div dangerouslySetInnerHTML={ {__html: markedDownText}}></div>
                    </p>
                </div>
            </Collapse>
        </div>  
        </>
    )
}
export default MarkdownComp;