import React, { useState } from 'react';
import cl from './MySelectedButton.module.css';
import {setActiveCategory} from "../../../../../actions.js";
import {useDispatch, useSelector} from "react-redux";

const MySelectedButton = ({ className, children, isRed, onClick, ...props }) => {
    const dispatch = useDispatch()
    const actCat = useSelector(state => state.title.activeCat)


    const buttonStyle = {
        background: isRed ? '#FB527B' : 'white',
        color: isRed ? 'white' : 'black',
    };


    return (
        <div className={cl.button__block}>
            <button {...props} style={buttonStyle} className={cl.myBtn} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default MySelectedButton;