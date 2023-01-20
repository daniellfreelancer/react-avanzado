
import './App.css';
import TaskListComponent from './components/container/Task_list';


function App() {
  console.log("Los componentes deben ser reactivos")
  return (
    <div className="App">
      <TaskListComponent/>
    </div>
  );
}

export default App;
