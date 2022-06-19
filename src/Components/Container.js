import style from './Container.module.css'
const Container = (props) => {
    return (<div className={style.card}>{props.children}</div>);
}

export default Container;