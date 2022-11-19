import React from 'react';
import DynamicIcon from "../elements/DynamicIcon";
import {
    BsFillImageFill,
    BsTextParagraph,
    BsParagraph,
    BsMenuButton
} from "react-icons/bs";

const items = [
    { title: "Headline", icon: <BsTextParagraph size="1.2em" />, id: "headline" },
    { title: "Image", icon: <BsFillImageFill size="1.2em" />, id: "image" },
    { title: "Button", icon: <BsMenuButton size="1.2em" />, id: "button" },
    { title: "Paragraph", icon: <BsParagraph size="1.2em" />, id: "paragraph" }
];

const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    gap: 10,
    alignItems: "center",
};

export function Constructors({ onChange }) {
    return (
        <div style={styles}>
            {items.map(({id, ...item}) => {
                return (
                    <DynamicIcon
                        key={id}
                        onClick={() => onChange(id)}
                        {...item}
                    />
                );
            })}
        </div>
    );
}