import React from "react";

import style from './ItemList.module.css';

const ItemList = (props) => {

    return (
        <div className={style.body} onClick={() => props.onClick(props.id)}>
            <img src={props.logo} alt={'logo_' + props.name} />
            <h4>{props.name}</h4>
        </div>
    )
};

export default ItemList;