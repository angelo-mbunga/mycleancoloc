import iconCorbeille from '../images/bin.png';
import iconPreview from '../images/preview.png';

export default function TaskItem(props) {
    
    const { task, submit, sendIdtoUrl } = props;

    return (
        <>
            <div className="card">
                    <input type="radio" id="contactChoice3" name="contact" value={task.taskid}></input>
                <div className="task-details">
                    <div className='task-place'>
                        <span className='badge-task badge-task-place'>{task.taskplace}</span>
                            {(() => {
                                if (task.tasktarget !== "") {
                                    return (
                                        <span className='badge-task badge-task-target'>{task.tasktarget}</span>
                                    )
                                }
                            })()}
                    </div>
                    <div className='task-name'>
                        <p>{task.taskname}</p>
                    </div>
                </div>
                <div className="task-icons">
                        <img className="btn-preview" src={iconPreview} alt='Apercu' onClick={() => sendIdtoUrl(task.taskid)}/>
                        <img className="btn-delete" src={iconCorbeille} alt='Corbeille' onClick={() => submit(task.taskid)}/>
                </div>
            </div>
        </>

    )
}          