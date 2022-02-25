import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makePostToServer } from '../../../api/index';
import { setRefresh } from '../../../App/slices/tasks/tasksSlice';

import generateObjectToSend from '../../../utils/generateObjectToSend';
import './CreateTask.css';

import addIcon from '../../../images/icons/add_icon.svg';

function CreateTask() {
  const user = useSelector((state) => state.tasksState.user);
  const refresh = useSelector((state) => state.tasksState.refresh);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const [userName, setUserName] = useState('');
  const initialStatus = 'pending';

  useEffect(() => {
    const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : getUserFromLocalStorage);
    console.log(userName);
  }, [inputText]);

  const handleChange = ({ target }) => {
    setInputText(target.value);
  };

  const handleClick = async () => {
    const objectGenerated = await generateObjectToSend(
      userName,
      inputText,
      initialStatus
    );

    await makePostToServer(objectGenerated);

    dispatch(setRefresh(!refresh));
  };

  return (
    <div className="main-content-input-task">
      <div className="main-content-form">
        <label htmlFor="create-task-input" className="create-task-input">
          <input
            type="text"
            name="create-task-input"
            className="create-input-task"
            value={inputText}
            onChange={handleChange}
          />
          <button
            type="button"
            name="create-task-button"
            className="create-button"
            onClick={handleClick}
          >
            <img
              className='add-icon'
              src={addIcon}
              alt="add task icon"
            />
          </button>
        </label>
      </div>
    </div>
  );
}

export default CreateTask;