import React ,{useState}from 'react';
import "./App.css"//to add css
import Taskform from './components/taskform';
import Taskcolumn from './components/Taskcolumn';
import Todo from './assets/direct-hit.png';
import Doing from './assets/glowing-star.png' ;
import Done from './assets/check-mark-button.png';
//import bg from './assets/background1.jpeg';
const App=()=> {
  const[tasks,settasks]=useState([]);
  console.log("tasks",tasks);
  const handleDelete = (index) => {
    const nt=tasks.filter((task,i)=> i!==index);
    settasks(nt);
  };
  return (
    <div className="App">
      <Taskform settasks={settasks} />
      <main className='app_main' >
       <Taskcolumn TagName="Todo" icon={Todo} tasks={tasks} status="todo" handleDelete={handleDelete} />
      <Taskcolumn TagName="Doing" icon={Doing} tasks={tasks} status="doing" handleDelete={handleDelete}/>
      <Taskcolumn TagName="Done" icon={Done} tasks={tasks} status="done" handleDelete={handleDelete}/>
      {/*<img src={bg} className='bg'/>*/}
      </main>
    </div>
  );
}

export default App;
