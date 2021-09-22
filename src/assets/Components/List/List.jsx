import React from "react";
import ItemList from "./ItemList/ItemList";
import {Scrollbars} from 'react-custom-scrollbars';

import style from './List.module.css';

const List = (props) => {

    return (
        <div className={style.body}>
            <Scrollbars
                style={{height: '100%', width: '100%'}}
            >
                {props.list ? props.list.map((data) => (
                    <ItemList
                        id={data.id}
                        url={data.url}
                        logo={data.logo}
                        name={data.name}
                        onClick={props.onClick}
                    />
                )) : ''}
            </Scrollbars>
        </div>
    )
};

export default List;