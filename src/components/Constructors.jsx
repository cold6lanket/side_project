import React from 'react';
import DynamicIcon from "../elements/DynamicIcon";
import styles from "./Constructors.module.css";

export function Constructors({ onChange, items }) {
    return (
        <aside style={styles.constructors}>
            {items.map(({ type, ...item }) => {
                return (
                    <DynamicIcon
                        key={type}
                        onClick={() => onChange(type)}
                        {...item}
                    />
                );
            })}
        </aside>
    );
}