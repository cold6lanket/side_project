import React from 'react';

const iconStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    paddingTop: 15,
    width: 90,
    height: 90,
    borderRadius: 7,
    flexDirection: "column",
    backgroundColor: "#b3d9f2",
    color: "black",
    cursor: "pointer",
};

function DynamicIcon({ icon, title, customStyles = {}, onClick }) {
    return (
        <div onClick={onClick} style={{ ...iconStyle, ...customStyles }}>
            {icon}
            {title}
        </div>
    );
}

export default DynamicIcon;