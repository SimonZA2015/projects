import React from "react";

import style from './TextBlock.module.css';

const TextBlock = (props) => {

    return (
        <div className={style.body}>
            <span>
                {props.text}
            </span>
        </div>
    )
};

export default TextBlock;