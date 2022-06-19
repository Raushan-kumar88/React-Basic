import style from './ToDo.module.css'
import Card from './Card';
const ToDo = (props) => {
    return (<Card>
        <div className={style.todo}>
            <div className={style.text}>
                <h1>{props.heading}</h1>
                <p>{props.subtittle}</p>
            </div>
            <div className={style.button}>
                <button>Done</button>
            </div>
        </div>
    </Card>);
}

export default ToDo;