import React, { useState } from 'react';
import DynamicIcon from "../elements/DynamicIcon";
import {
    BsCardText,
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill,
    BsFillTrashFill
} from "react-icons/bs";
import styles from "./SchemeItem.module.css";

const schemeStyle = {
    padding: "10px",
    backgroundColor: "#f2feff",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10
};

// TODO: improve css styling

export function Scheme({
   blocks = [],
   onChange,
   onDelete,
   onDirectionChange,
   ...props
}) {
    return (
        <main style={schemeStyle}>
            {blocks.map(({ id, render, value, ...settings }, index) => {
                return (
                    <SchemeItem
                        key={id}
                        iconProps={settings}
                        renderItem={(value, handler) => render(value, handler)}
                        onChange={({ target }) => onChange(target, index)}
                        onDelete={() => onDelete(id)}
                        onDirectionChange={(dir) => onDirectionChange(dir, index)}
                        value={value}
                        {...props}
                    />
                );
            })}
        </main>
    );
}

function SchemeItem({
    iconProps,
    renderItem,
    onDirectionChange,
    onDelete,
    onChange,
    value
}) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div
            className={isEditing ? `${styles.scheme} ${styles.editing}` : styles.scheme}
        >
            <DynamicIcon
                onClick={() => setIsEditing(!isEditing)}
                customStyles={{ backgroundColor: "none" }}
                {...iconProps}
            />
            { isEditing && renderItem(value, onChange) }
            <div className={styles.tools}>
                <BsFillTrashFill onClick={onDelete} />
                <BsFillArrowDownCircleFill onClick={() => onDirectionChange(1)} />
                <BsFillArrowUpCircleFill onClick={() => onDirectionChange(-1)} />
                <BsCardText onClick={() => navigator.clipboard.writeText(value)} />
            </div>
        </div>
    );
}