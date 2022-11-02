import avatar1 from '../images/Ellipse1.png';
import avatar2 from '../images/Ellipse2.png';
import avatar3 from '../images/Ellipse3.png';
import avatarAdd from '../images/add-roomate-icon.png';

export default function GalleryAvatar() {

    return (
        <div className="gallery-avatar">
            <p>Mes Coloc'</p>
            <img className="avatar" src={avatar1} alt="avatar 1"/>
            <img className="avatar" src={avatar2} alt="avatar 2"/>
            <img className="avatar" src={avatar3} alt="avatar 3"/>
            <img className="avatar btn-add-roomate" src={avatarAdd} alt="icone ajouter un membre"/>
        </div>
    )
}