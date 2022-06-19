import style from './ToDo.module.css'
const ToDo = (props) => {
    return (<div className={style.todo}>
        <div className={style.text}>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </div>
        <div className={style.button}>
            <button>close</button>
        </div>
    </div>);
}

export default ToDo;