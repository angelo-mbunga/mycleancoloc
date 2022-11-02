import { NavLink } from "react-router-dom";
import TechnoItem from '../components/TechnoItem'; 
import GalleryAvatar from "../components/GalleryAvatar";
import iconAdd from '../images/add.png';
import iconBack from '../images/back-btn.png';

export default function TechnoList(props) {

    const { technos, submit } = props;

    return (
        <>
            <div className="list-task-header">
                <GalleryAvatar/>
            </div>
            <div className="techno-list">
                <h1>Liste des tâches</h1>
                <div>
                    {
                        technos.map(techno => (
                            <TechnoItem techno={techno} key={techno.technoid} submit={submit}/>
                        ))
                    }
                </div>
            </div>
            <div className='list-task-footer'>
                <div className='back-btn'>
                    <NavLink to="/" >
                        <img src={iconBack} alt="Ajouter une tache"/>
                        <p>Retour à l'accueil</p>
                    </NavLink>
                </div>
                <div className='add-task-btn'>
                    <NavLink to="/ajouter" >
                        <img src={iconAdd} alt="Ajouter une tache"/>
                        <p>Ajouter une tâche</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}