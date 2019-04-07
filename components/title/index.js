import React from "react";
import "./style.css";
import { prependOnceListener } from "cluster";

function Title(props) {
    return <h1 className = "title">
    {props.children}
    </h1>;
}

export default Title;