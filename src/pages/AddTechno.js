import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GalleryAvatar from "../components/GalleryAvatar";

export default function AddTechno(props) {

    const [techno, setTechno] = useState({
        technoname : '',
        technocategory : '',
        technotarget : '',
        technodescription : '',
    });
    const [error, setError] = useState({
        errorMsg: ""
    });

    const navigate = useNavigate();
    
    const {handleAddTechno} = props;

    function handleSubmit(evt) {
        evt.preventDefault();
        if (handleAddTechno(techno)) {
            setTechno({
                technoname : '',
                technocategory : '',
                technotarget : '',
                technodescription : '',
            });
            setError({errorMsg : ""})
            navigate('/liste');    
        } else {
            setError({errorMsg : "Vérifiez la conformité des champs saisis"})
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setTechno({...techno, [name] : value});
    }

    return (
        <>
            <div className="add-task-header">
                <GalleryAvatar/>
            </div>
            <div className="add-techno">
                <h1>Ajouter une nouvelle tâche </h1>
                    <div>
                        <span className="form-msg-error">{error.errorMsg}</span>
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <label htmlFor="technoname">Titre de la tâche * :</label>
                                <input type="text" name="technoname" id="technoname" required value={techno.technoname} onChange={ (evt) => handleChange(evt) }/>
                                <div className="select-group">
                                    <div className="select-input">
                                        <label htmlFor="technocategory">Piece de la maison * :</label>
                                        <br />
                                        <select name="technocategory" id="technocategory" required value={techno.technocategory} onChange={ (evt) => handleChange(evt) }>
                                            <option value="">Selectionner</option>
                                            <option value="Salon">Salon</option>
                                            <option value="Cuisine">Cuisine</option>
                                            <option value="Salle de bain">Salle de bain</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>
                                    <div className="select-input">
                                        <label htmlFor="technotarget">Assigner à :</label>
                                        <br />
                                        <select name="technotarget" id="technotarget" value={techno.technotarget} onChange={ (evt) => handleChange(evt) }>
                                            <option value="">Selectionner</option>
                                            <option value="Anna">Anna</option>
                                            <option value="Kim">Kim</option>
                                            <option value="Clara">Clara</option>
                                        </select>
                                    </div> 
                                </div>
                                <label htmlFor="technodescription">Commentaire :</label>
                                <textarea name="technodescription" id="technodescription" cols="3" rows="5" value={techno.technodescription} onChange={ (evt) => handleChange(evt) }></textarea>
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