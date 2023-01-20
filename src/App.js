
import './App.css';
import TaskListComponent from './components/container/Task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';


function App() {
  console.log("Los componentes deben ser reactivos")
  return (
    <div className="App">
      <TaskListComponent/>

      {/* <Ejemplo1/> */}
      <Ejemplo2/>
    </div>
  );
}

export default App;
