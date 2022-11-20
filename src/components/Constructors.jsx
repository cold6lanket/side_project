import React from 'react';
import DynamicIcon from "../elements/DynamicIcon";

const styles = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "column"
};

export function Constructors({ onChange, items }) {
    return (
        <aside style={styles}>
            {items.map(({id, ...item}) => {
                return (
                    <DynamicIcon
                        key={id}
                        onClick={() => onChange(id)}
                        {...item}
                    />
                );
            })}
        </aside>
    );
}