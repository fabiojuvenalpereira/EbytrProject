import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './EditTask.css';

import { makePutToServer } from '../../api';
import generateObjectToSend from '../../utils/generateObjectToSend';
import { setEditTask, setRefresh } from '../../App/slices/tasks/tasksSlice';


function EditTask() {
  const dispatch = useDispatch();
  const selectedTask = useSelector(state => state.tasksState.selectedTask);
  const refresh = useSelector(state => state.tasksState.refresh);

  const [userTextInput, setUserTextInput] = useState('');

  const handleChange = ({ target }) => {
    setUserTextInput(target.value)
  }

  const handleClick = async () => {
    const { _id, userName, statusTask } = selectedTask
    
    const prepareTaskToUpdate = await generateObjectToSend(
      userName,
      userTextInput,
      statusTask,
    );

    const taskWithId = { ...prepareTaskToUpdate, _id };

    await makePutToServer(taskWithId)

    dispatch(setEditTask(false));
    dispatch(setRefresh(!refresh))
  }

  return (
    <div className="main-edit-task">
      <input
        className="edit-task-input"
        type="text"
        value={ userTextInput }
        onChange={ (event) => handleChange(event) }
      />
      <button
        type="button"
        onClick={ handleClick }
      >
        Editar
      </button>
    </div>
  )
}

export default EditTask