import { Fragment } from "react";

const pStyle = {
    textIndent: "30px"
};

const buttonStyle = {
    backgroundColor: "#0095ff",
    border: "1px solid transparent",
    borderRadius: "3px",
    boxShadow: "rgba(255, 255, 255, .4) 0 1px 0 0 inset",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 400,
    outline: "none",
    padding: "8px .8em",
    textAlign: "center",
    textDecoration: "none"
};

const contentTypes = {
    headline: (text, styles = {}) => <h1 style={styles}>{text}</h1>,
    button: (text, styles = {}) => <button style={{ ...buttonStyle, ...styles }}>{text || "click"}</button>,
    paragraph: (text, styles = {}) => <p style={{ ...pStyle, ...styles }}>{text}</p>,
    image: (src, styles = {}) => <img style={{ width: 400, height: 200, ...styles }} src={src} alt="" />
};

const formatters = {
    paragraph: (text) => text,
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