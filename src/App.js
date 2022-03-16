import logo from './logo.svg';
import './App.css';


const Hello = (props) => { //React components must be capitalized
    return (
        <div>
            <h2>Hello {props.name} you are {props.age} from hello component</h2>
        </div>
    )
}

/* Using a root element is not the only working option.
   An array of components is also a valid solution:

    return [
            <h1>Greetings from App component</h1>
            <Hello name="Jaime" age={age}/>
            <Hello name={name} age={30 + 15}/>
    ]
 */

function App() {
    const name = "Luis"
    const age = 25
    return (
        <div>
            <h1>Greetings from App component</h1>
            <Hello name="Jaime" age={age}/>
            <Hello name={name} age={30 + 15}/>
        </div>
    );
}

export default App;
