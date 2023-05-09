import React from "react";

import MarkdownComp from "./MarkdownComp";
import InputComp from "./InputComp";

// import {Routes, Route, Link, Navigate, withRouter} from 'react-router-dom';

function MainComp() {
    return(
        <main style={{width: "100vw",height: "100vh", color: "red"}}>
        <React.Fragment>
            <InputComp />
            <MarkdownComp />
        </React.Fragment>
        </main>
    )
}
export default MainComp;
