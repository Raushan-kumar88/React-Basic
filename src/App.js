// import logo from './logo.svg';
import './App.css';
// import Conta from './Components/Container';
import Container from './Components/Container';
import Card from './Components/Card';
import ToDos from './Components/ToDos';
function App() {
  // const date = new Date(2021, 3, 4).toLocaleString
  const todo_data = [{
    name: 'Node js',
    text: 'study about creating local host'
  },
  {
    name: 'react js',
    text: 'study about props and state'
  }]
  const student_data = [{ name: 'najmuddin ansari wowo' }]
  return (
    <div className="App">
      <Container >
        <Card >
          <ToDos todos={todo_data} />
        </Card>

      </Container>
      {/* <ToDos todos={[todo_data]} /> */}
      {/* <h1>kdjfk</h1> */}

    </div>
  );

}
export default App;
