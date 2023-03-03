import { createElement, useRef, useEffect } from "react";

export function RandomText({ dataText, tagType, timeGap, fontSize, fontColor }) {
    const txtRef = useRef();
    const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let dataSet = null;
    let dataDuplicateSet = null;

    let interval = null;
    const getData = () => {
        dataSet = txtRef.current.getAttribute("data-board");
        dataDuplicateSet = dataSet.split(" ").join("+");
    };

    const fontStyle = {
        fontSize: fontSize,
        color: fontColor
    };

    useEffect(() => {
        getData();
    }, []);

    const textEffect = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            if (txtRef?.current?.innerText) {
                txtRef.current.innerText = txtRef.current.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return dataSet[index];
                        }

                        if (dataDuplicateSet[index] == "+") {
                            if (dataSet[index] == dataSet[index].toUpperCase()) {
                                if (dataSet[index] == dataSet[index].toLowerCase()) return " ";
                            }
                        }

                        if (dataSet[index] == dataSet[index].toUpperCase()) {
                            return Letters[Math.floor(Math.random() * 26)];
                        } else {
                            return letters[Math.floor(Math.random() * 26)];
                        }
                    })
                    .join("");

                if (iteration >= dataSet.length) {
                    clearInterval(interval);
                }

                iteration += 1;
            } else {
                clearInterval(interval);

            }
        }, timeGap);
    };


    switch (tagType) {
        case "span":
            return (
                <span
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </span>
            );
        case "p":
            return (
                <p style={fontStyle} className="monospace" ref={txtRef} data-board={dataText} onMouseLeave={textEffect}>
                    {dataText}
                </p>
            );
        case "h1":
            return (
                <h1
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </h1>
            );
        case "h2":
            return (
                <h2
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </h2>
            );
        case "h3":
            return (
                <h3
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </h3>
            );
        case "h4":
            return (
                <h4
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </h4>
            );
        case "h5":
            return (
                <h5
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </h5>
            );
        case "h6":
            return (
                <h6
                    style={fontStyle}
                    className="monospace"
                    ref={txtRef}
                    data-board={dataText}
                    onMouseLeave={textEffect}
                >
                    {dataText}
                </h6>
            );
    }
}
