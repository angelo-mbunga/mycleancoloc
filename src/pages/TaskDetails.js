import { NavLink, useParams } from "react-router-dom";
import iconBack from '../images/back-btn.png';

export default function TaskList(props) {

    const {tasks} = props;
    const params = useParams();
    const taskId = params.id;
    const task = tasks.find(e => e.taskid === taskId);

    return (
        <>
            <div className='list-task-footer'>
                <p>qui ?</p>
                <span>{task.tasktarget}</span>
                <p>quoi ?</p>
                <span>{task.taskname}</span>
                <p>quoi ?</p>
                <span>{task.taskdescription}</span>
                <p>ou ?</p>
                <span>{task.taskplace}</span>
            </div>
            <div className='back-btn'>
                <NavLink to="/liste" >
                    <img src={iconBack} alt="close"/>
                </NavLink>
            </div>
        </>
    )
}