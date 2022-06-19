import Card from "./Card";
import ToDo from "./ToDo";
const ToDos = (props) => {
    return (<div>
        {/* <ToDo name={props.todos[0].name} text={props.todos[0].text} />
        <ToDo name={props.todos[1].name} text={props.todos[1].text} /> */}
        {props.todos.map(todo => {
            <Card heading={todo.name}
                subtittle={todo.text} />
        })}
    </div>);
}

export default ToDos;