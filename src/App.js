import logo from './logo.svg';
import './App.css';


const Hello = () => {
  return (
      <div>
        <p>Hello world from Hello component!!</p>
      </div>
  )
}


function App() {
  return (
   <div>
     <h1>Greetings from App component</h1>
     <Hello />
   </div>
  );
}

export default App;
