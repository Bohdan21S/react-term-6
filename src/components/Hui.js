import React, {useState} from 'react'
import '../assets/styles/Hui.css'

const Hui = ({children}) => {
    const [color, setColor] = useState("primary");

    const handleClick = () => {
        setColor(prevColor => (prevColor === "primary" ? "secondary" : "primary"));
    };

    return (
        <button className={"btn btn-" + color} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Hui;