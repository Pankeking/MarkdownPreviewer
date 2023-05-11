import React, {useState} from "react";

import MarkdownComp from "./MarkdownComp";
import EditorComp from "./EditorComp";

// import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {

    const [markdownText, setMarkdownText] = useState('');
    const handleTextChange = (text) => {
        setMarkdownText(text);
    }
    return(
        <React.Fragment>
            <div className="container mt-4">
                <EditorComp onChange={handleTextChange} />
                <div className="m-5"></div>
                <MarkdownComp markdownText={markdownText} />
            </div>
        </React.Fragment>
    )
}
export default MainComp;
