import * as React from "react";
import * as ReactDom from "react-dom";
import { GenerationRequest } from "./Components/GenerationRequest";
import { DataGenerator } from "./Services/DataGenerator";

ReactDom.render(
    <div>
        <GenerationRequest />
    </div>,
    document.getElementById("root")
)

