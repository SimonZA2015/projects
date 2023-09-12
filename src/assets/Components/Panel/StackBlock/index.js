import style from "./StackBlock.module.css";

const StackBlock = ({texts}) => {

    if (!texts && texts?.length < 1 ) {
        return <></>
    }

    return (
        <div className={style.body}>
            {texts?.map((lang, index) => (<div key={index} className={style.item} >{lang}</div>))}
        </div>
    )
}

export default StackBlock;