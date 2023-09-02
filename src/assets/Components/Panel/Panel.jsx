import React from "react";

import style from './Panel.module.css';
import TitleBlock from "./TitleBlock/TitleBlock";
import TextBlock from "./TextBlock/TextBlock";
import ImagesBlock from "./ImagesBlock/ImagesBlock";

const Panel = (props) => {

    const data = props.status.data;

    return (
        props.status ? <div className={style.body} onClick={props.close}>
            <div onClick={e => e.stopPropagation()} className={style.panel}>
                <TitleBlock
                    name={data.name}
                    text={data.text}
                    logo={data.logo}
                    image={data.image}
                    buttons={data.buttons}
                />
                <TextBlock
                    text={data.text}
                />
                <ImagesBlock
                    image={data.image}
                />

            </div>
        </div> : ''
    )
};

export default Panel;