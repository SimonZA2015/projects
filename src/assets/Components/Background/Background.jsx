import React from "react";
import imagesConfig from './../../configs/images-config';

import style from './Background.module.css';

const Background = (props) => {

    return (
        <div className={style.body}>
            <img src={imagesConfig.background} alt={''} />
        </div>
    )
};

export default Background;