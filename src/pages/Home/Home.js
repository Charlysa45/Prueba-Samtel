import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Header from '../../components/Header/Header'
import AuthContext from '../../context/AuthContext'
import api from '../../json/task.json'

import './Home.css'

let taskList = api.tasks

const Home = () => {
    const {auth} = useContext(AuthContext)

  if (!auth) {
    return <Navigate to={'/'}/>
  } 

  return (
    <>
        <Header/>
        <main>
          <section id='todo-banner'>
            <h1 id='todo-banner-title'>To Do List!</h1>
            <h3 id='todo-banner-subtitle'>What do you do today?</h3>
          </section>
          <section id='todo-list'>
            <div id='todo-list-content'>
              <div id='todo-list-content-new'>
                <p>add a new task</p>
                <AiOutlinePlusCircle/>
              </div>
              <div id='todo-list-content-tasks'>
                {taskList.map(({id, task, description}) => {
                  return (
                    <div key={id} className='todo-list-content-tasks-task'>
                      <input type="checkbox" name="task-status" id='task-check' className="todo-list-content-tasks-task-check" />
                      <div>
                        <p className='todo-list-content-tasks-task-name'>{task}</p>
                        <p className='todo-list-content-tasks-task-description'>{description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default Home