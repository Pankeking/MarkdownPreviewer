import React from "react";

import MarkdownComp from "./MarkdownComp";
import EditorComp from "./EditorComp";

// import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
    return(
        <React.Fragment>
            <div className="container mt-4">
                <EditorComp />
                <MarkdownComp />
            </div>
        </React.Fragment>
    )
}
export default MainComp;
