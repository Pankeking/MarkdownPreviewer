import React, {useState} from "react";

import MarkdownComp from "./MarkdownComp";
import EditorComp from "./EditorComp";

// import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
    const InitText = '# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n### And here\'s some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.';
    const [markdownText, setMarkdownText] = useState(InitText);
    const handleTextChange = (text) => {
        setMarkdownText(text);
    }
    return(
        <React.Fragment>
            <div className="container mt-4">
                <EditorComp onChange={handleTextChange} InitText={InitText}/>
                <div className="m-5"></div>
                <MarkdownComp markdownText={markdownText} />
            </div>
        </React.Fragment>
    )
}
export default MainComp;
