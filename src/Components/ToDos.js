import ToDo from "./ToDo";
const ToDos = (props) => {
    return (<div>
        <ToDo name={props.todos[0].name} text={props.todos[0].text} />
    </div>);
}

export default ToDos;