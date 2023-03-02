import { createElement } from "react";

import { RandomText } from "./components/RandomText";

import "./ui/RandomTextEffect.css";

export function RandomTextEffect({ renderMode, dataText, timeGap, fontSize, fontColor }) {
    return (
        <RandomText
            tagType={renderMode}
            dataText={dataText.value}
            timeGap={timeGap}
            fontSize={fontSize}
            fontColor={fontColor}
        />
    );
}
