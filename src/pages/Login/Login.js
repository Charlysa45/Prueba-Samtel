import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { postUser } from '../../services/UserService'

import { BiError } from 'react-icons/bi'

import './Login.css'

const Login = () => {

const navigate = useNavigate()

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const [loading, setLoading] = useState(false)
const [success, setSuccess] = useState(false)
const [error, setError] = useState(false)

const handleLogin = async(e) =>{
    e.preventDefault();

    setLoading(true)
    setError(false)
    await postUser({username, password})
    .then(({data}) => {
        let userInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            image: data.image
        }
        window.localStorage.setItem("loggedUserOnApp", JSON.stringify(userInfo))
        setTimeout(() => {
            setLoading(false)
            setSuccess(true)
        }, 3000);
        setTimeout(() => {
            navigate('/Home')
        }, 4000);
    }).catch((err) => {
        console.error(err);
        setLoading(false)
        setError(true)
    })
}

  return (
    <section id='login'>
        <div id='login-banner'>
            <h1 id='login-banner-title'>To Do List!</h1>
        </div>
        <form onSubmit={handleLogin}>
            <motion.div id='login-card' initial={{y: 50}} animate={{y:0}}>
                <h2>Login</h2>
                <div>
                    <p className='login-card-text'>Username:</p>
                    <input className='login-card-input' type="text" onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div>
                    <p className='login-card-text'>Password:</p>
                    <input className='login-card-input' type="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div id='login-message'>
                    {loading &&
                        <div id='login-loader'>
                            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                    }
                    {success &&
                        <div id='login-success'>
                            <p>{`Welcome, ${username}!`}</p>
                        </div>
                    }
                    {error &&
                        <div id='login-error'>
                            <BiError/>
                            <p>Wrong user and/or password</p>
                        </div>
                    }
                </div>
                <button id='login-btn'>Sign Up</button>
            </motion.div>
        </form>
    </section>
  )
}

export default Login