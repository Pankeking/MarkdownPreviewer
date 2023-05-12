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

    // Override tables and images to proper bootstrap
    renderer.table = (header, body) => {
        return `
          <table class="table-dark table-hover table">
            <thead>${header}</thead>
            <tbody>${body}</tbody>
          </table>
        `;
      };
      renderer.image = function (href, title, text) {
        return (
          '<img class="img-fluid" src="' +
          href +
          '" alt="' +
          text +
          '" title="' +
          title +
          '">'
        );
      };

    const markedDownText = {__html: marked(markdownText, {sanitize: true})};

    return (
        <>
        <div className="container w-75 shadow-lg border border-success mb-5 mt-auto fs-1 text-center">
           <TitleWithToggle
                title={"Markdown Preview"}
                open={openPreview}
                onClick={() => setOpenPreview(!openPreview)}
           />
            <Collapse in={openPreview}>
                <div className="text text-start fs-4" id="editor-text">
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