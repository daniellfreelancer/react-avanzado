
import './App.css';
import TaskListComponent from './components/container/Task_list';
import Ejemplo1 from './hooks/Ejemplo1';


function App() {
  console.log("Los componentes deben ser reactivos")
  return (
    <div className="App">
      <TaskListComponent/>

      <Ejemplo1/>
    </div>
  );
}

export default App;
