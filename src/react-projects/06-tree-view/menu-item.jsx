/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import MenuList from "./menu-list";

import './style.css';

const MenuItem = ({ item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (currentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel]: !displayCurrentChildren[currentLabel],
        });
    }

    console.log('displayCurrentChildren', displayCurrentChildren);

    return (
        <li>
            <div className="menu-item">
                <p>{item.label} </p>
                { item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                    { 
                        displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                    }
                </span> : null }
            </div>
           { item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
           <MenuList list={item.children}/> : null }
        </li>
    );
};

export default MenuItem;