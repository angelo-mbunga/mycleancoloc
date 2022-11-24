import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GalleryAvatar from "../components/GalleryAvatar";

export default function AddTask(props) {

    const [task, setTask] = useState({
        taskname : '',
        taskplace : '',
        tasktarget : '',
        taskdescription : '',
    });
    const [error, setError] = useState({
        errorMsg: ""
    });

    const navigate = useNavigate();
    
    const {handleAddTask} = props;

    function handleSubmit(evt) {
        evt.preventDefault();
        if (handleAddTask(task)) {
            setTask({
                taskname : '',
                taskplace : '',
                tasktarget : '',
                taskdescription : '',
            });
            setError({errorMsg : ""})
            navigate('/liste');    
        } else {
            setError({errorMsg : "Vérifiez la conformité des champs saisis"})
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setTask({...task, [name] : value});
    }

    return (
        <>
            <div className="add-task-header">
                <GalleryAvatar/>
            </div>
            <div className="add-task">
                <h1>Ajouter une nouvelle tâche </h1>
                    <div>
                        <span className="form-msg-error">{error.errorMsg}</span>
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <label htmlFor="taskname">Titre de la tâche * :</label>
                                <input type="text" name="taskname" id="taskname" required value={task.taskname} onChange={ (evt) => handleChange(evt) }/>
                                <div className="select-group">
                                    <div className="select-input">
                                        <label htmlFor="taskplace">Piece de la maison * :</label>
                                        <br />
                                        <select name="taskplace" id="taskplace" required value={task.taskplace} onChange={ (evt) => handleChange(evt) }>
                                            <option value="">Selectionner</option>
                                            <option value="Salon">Salon</option>
                                            <option value="Cuisine">Cuisine</option>
                                            <option value="Salle de bain">Salle de bain</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>
                                    <div className="select-input">
                                        <label htmlFor="tasktarget">Assigner à :</label>
                                        <br />
                                        <select name="tasktarget" id="tasktarget" value={task.tasktarget} onChange={ (evt) => handleChange(evt) }>
                                            <option value="">Selectionner</option>
                                            <option value="Anna">Anna</option>
                                            <option value="Kim">Kim</option>
                                            <option value="Clara">Clara</option>
                                        </select>
                                    </div> 
                                </div>
                                <label htmlFor="taskdescription">Commentaire :</label>
                                <textarea name="taskdescription" id="taskdescription" cols="3" rows="5" value={task.taskdescription} onChange={ (evt) => handleChange(evt) }></textarea>
                                <span className="required-input-text">*Champs obligatoires</span>
                                <div className="form-footer">
                                    <button type="button" href="/" className="btn-form-footer cancel-btn-form"><NavLink to="/" >Annuler</NavLink></button>
                                    <input type="submit" value="Valider" className="btn-form-footer submit-btn-form"></input>
                                </div>
                            </form>
                    </div>
            </div>
        </>
    )
}