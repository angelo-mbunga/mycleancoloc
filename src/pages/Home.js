import { NavLink } from "react-router-dom";
import img from '../images/teamspirit.svg';

export default function Home() {


    return (
        <div className="home">
            <div className="img-header">
                <img src={img} srcSet={img} className="img" alt="groupe"/>
            </div>
            <div className="app-details">
                <h1 className="app-slogan">Une maison propre, une colocation heureuse</h1>
                <p className="app-description">Créer et traiter les tâches ménagères nécessaires pour votre colocation</p>
            </div>
            <div className="home-nav">
                <button className="cta-home btn-wiew-task"><NavLink to="ajouter" >Créer une tâche</NavLink></button>
                <button className="cta-home btn-add-task"><NavLink to="liste" >Voir les tâches</NavLink></button>
            </div>
        </div>
    )
}