import iconCorbeille from '../images/bin.png';
import iconPreview from '../images/preview.png';

export default function TechnoItem(props) {
    
    const { techno, submit } = props;

    return (
        <>
            <div className="card">
                    <input type="radio" id="contactChoice3" name="contact" value={techno.technoid}></input>
                <div className="task-details">
                    <div className='task-category'>
                        <span className='badge-task badge-task-category'>{techno.technocategory}</span>
                            {(() => {
                                if (techno.technotarget !== "") {
                                    return (
                                        <span className='badge-task badge-task-target'>{techno.technotarget}</span>
                                    )
                                }
                            })()}
                    </div>
                    <div className='task-name'>
                        <p>{techno.technoname}</p>
                    </div>
                </div>
                <div className="task-icons">
                    <img className="btn-preview" src={iconPreview} alt='Apercu'/>
                    <img className="btn-delete" src={iconCorbeille} alt='Corbeille' onClick={() => submit(techno.technoid)}/>
                </div>
            </div>
        </>

    )
}          