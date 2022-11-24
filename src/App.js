import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import { v1 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {valideString, valideTextarea} from './assets/Regex/Regex';
import { useNavigate } from "react-router-dom";

function App() {

  const [tasks, setTasks] = useState([]);
  const STORAGE_KEY = "tasks";
  const [storedTasks, setStoredTasks] = useLocalStorage(STORAGE_KEY, []);

  const navigate = useNavigate();

    useEffect(() => {
      setTasks(storedTasks);
    }, []);

    useEffect(() => {
      setStoredTasks(tasks);
    }, [tasks]);
    
  
  function submit(id) {
    confirmAlert({
      title: "Suppression",
      message: "Voulez vous supprimer cette tache ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => handleDeleteTask(id)
        },
        {
          label: "Non"
        }
      ]
    });
  }

  function handleAddTask(task) {
     if (task.taskname !== "" && task.taskplace !== "") {
      if (valideString.test(task.taskname) && valideString.test(task.taskplace)) {
        if (task.taskdescription !=="" && valideTextarea.test(task.taskdescription) === true) {
          setTasks([...tasks, {...task, taskid: v1()}]);
          return true
        }
        else {
          setTasks([...tasks, {...task, taskid: v1()}]);
          return true;
        }
      }
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((tech) => tech.taskid !== id))
  }

  function sendIdtoUrl(id) {
    navigate('/liste/details/'+id);
  }

  return (
    <>
      <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajouter" element={<AddTask handleAddTask={handleAddTask}/>} />
        <Route path="/liste" element={<TaskList tasks={tasks} submit={submit} sendIdtoUrl={sendIdtoUrl}/>} />
        <Route path="/liste/details/:id" element={<TaskDetails tasks={tasks}/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
