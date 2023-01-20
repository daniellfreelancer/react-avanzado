
import './App.css';
import TaskListComponent from './components/container/Task_list';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';


function App() {
  console.log("Los componentes deben ser reactivos")
  return (
    <div className="App">
      <TaskListComponent/>

      {/* <Ejemplo1/> */}
      <Ejemplo2/>
      <MiComponenteConContexto/>
    </div>
  );
}

export default App;
