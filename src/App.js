import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home';
import AddTechno from './pages/AddTechno';
import TechnoList from './pages/TechnoList';
import { v4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {valideString, valideTextarea} from './assets/Regex/Regex';

function App() {

  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

    useEffect(() => {

      setTechnos(storedTechnos);
    }, []);

    useEffect(() => {
      
      setStoredTechnos(technos);
    }, [technos]);
    
  
  function submit(id) {
    confirmAlert({
      title: "Suppression",
      message: "Voulez vous supprimer cette tache ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => handleDeleteTechno(id)
        },
        {
          label: "Non"
        }
      ]
    });
  };

  function handleAddTechno(techno) {
     if (techno.technoname !== "" && techno.technocategory !== "") {
      if (valideString.test(techno.technoname) && valideString.test(techno.technocategory)) {
        if (techno.technodescription !=="" && valideTextarea.test(techno.technodescription) === true) {
          setTechnos([...technos, {...techno, technoid: v4()}]);
          return true
        }
        else {
          setTechnos([...technos, {...techno, technoid: v4()}]);
          return true;
        }
      }
    }
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id))
  }

  return (
    <>
      <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajouter" element={<AddTechno handleAddTechno={handleAddTechno}/>} />
        <Route path="/liste" element={<TechnoList technos={technos} submit={submit}/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
