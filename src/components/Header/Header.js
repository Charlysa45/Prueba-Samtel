import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AuthContext from '../../context/AuthContext';
import {MdArrowDropDown} from 'react-icons/md'
import {AiOutlineLogout} from 'react-icons/ai'

import './Header.css'

const Header = () => {
    const {auth, logout} = useContext(AuthContext);
    const {firstName, lastName, username, image} = auth
    
    const ref = useRef()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (isOpen && ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpen])

  return (
    <header>
        <div ref={ref}>
            <div id='header-card' onClick={() => setIsOpen(!isOpen)}>
                <div id='header-card-avatar'>
                    <img src={image} id='header-card-avatar-img' alt="user-icon" />
                </div>
                <div id='header-card-content'>
                    <div id="header-card-content-fullname">
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <p id='header-card-content-username'>{`@${username}`}</p>
                </div>
                <div id='header-card-content-dropdown' >
                    <p><MdArrowDropDown/></p>
                </div>
                {isOpen &&
                    <motion.button animate={{y: 30}} id='header-card-logout' onClick={logout}>
                        <AiOutlineLogout/>
                        <p>Logout</p>
                    </motion.button>
                } 
            </div>
        </div>
    </header>
  )
}

export default Header