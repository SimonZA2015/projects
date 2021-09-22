import React from "react";

import style from './TitleBlock.module.css';

const TitleBlock = (props) => {
    debugger

    function open(url) {
        window.open(url);
    }

    return (
        <div className={style.body}>
            <div className={style.images}>
                <img src={props.logo} alt={'logo_' + props.name} />
            </div>

            <div className={style.name}>
                <h4>{props.name}</h4>
                <div className={style.buttons}>
                    {props.buttons.map((data) => (
                        <span onClick={() => open(data.url)}>{data.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default TitleBlock;