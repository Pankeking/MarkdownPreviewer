import React, {useState} from "react";
import { marked } from "marked";
import Collapse from "react-bootstrap/Collapse";
import TitleWithToggle from "./TitleWithToggle";


function MarkdownComp({ markdownText }) {

    const [openPreview, setOpenPreview] = useState(true);
    
    const renderer = new marked.Renderer();
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      breaks: true,
    });

    const markedDownText = {__html: marked(markdownText, {sanitize: true})};

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
                    <p id="preview"
                        dangerouslySetInnerHTML={ markedDownText}>
                    </p>
                </div>
            </Collapse>
        </div>  
        </>
    )
}
export default MarkdownComp;