
import './App.css';
// import Greeting from './pure/greeting';
import GreetingF from './pure/greetingF';

function App() {
  console.log("Los componentes deben ser reactivos")
  return (
    <div className="App">
      <header className="App-header">
         {/* <Greeting name="Daniel" /> */}
         <GreetingF name="Martin"/>
      </header>
    </div>
  );
}

export default App;
