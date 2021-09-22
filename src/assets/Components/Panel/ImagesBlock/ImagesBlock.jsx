import React from "react";

import style from './ImagesBlock.module.css';

const ImagesBlock = (props) => {

    return (
        <div className={style.body}>
            {/*<Scrollbars style={{display: 'flex', height: '100%', width: '100%'}} >*/}
                {props.image.map((data) => (
                    <img src={data} alt={'image_' + data} />
                ))}
            {/*</Scrollbars>*/}
        </div>
    )
};

export default ImagesBlock;