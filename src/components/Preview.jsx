import {Fragment} from "react";

const contentTypes = {
    headline: (text, styles = {}) => <h1 style={styles}>{text}</h1>,
    button: (text, styles = {}) => <button style={styles}>{text || "click"}</button>,
    paragraph: (text, styles = {}) => <p style={styles}>{text}</p>,
    image: (src, styles = {}) => <img style={{ width: 400, height: 200, ...styles }} src={src} alt="" />
};

export function Preview({ content }) {
    const elements = content.map(({ id, value, type }, i) => {
        return <Fragment key={id}>{contentTypes[type](value)}</Fragment>
    });

    return (
        <div style={{ padding: "0 10px", width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
            {elements}
        </div>
    );
}