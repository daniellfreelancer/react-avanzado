
import './App.css';
import Greeting from './pure/greeting';

function App() {
  console.log("Los componentes deben ser reactivos")
  return (
    <div className="App">
      <header className="App-header">
         <Greeting name="Daniel" />
      </header>
    </div>
  );
}

export default App;
