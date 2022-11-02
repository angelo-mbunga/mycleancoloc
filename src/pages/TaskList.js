import { NavLink } from "react-router-dom";
import TaskItem from '../components/TaskItem'; 
import GalleryAvatar from "../components/GalleryAvatar";
import iconAdd from '../images/add.png';
import iconBack from '../images/back-btn.png';

export default function TaskList(props) {

    const { tasks, submit } = props;

    return (
        <>
            <div className="list-task-header">
                <GalleryAvatar/>
            </div>
            <div className="task-list">
                <h1>Liste des tâches</h1>
                <div>
                    {
                        tasks.map(task => (
                            <TaskItem task={task} key={task.taskid} submit={submit}/>
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