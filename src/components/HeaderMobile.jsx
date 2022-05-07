import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu'
import './header.scss'

import {AiFillGithub } from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'


function HeaderMobile() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='header__mobile-main'>

        <div className='header__mobile'>

            <div className="header__item">
                <button className='header__hamburger header-link' onClick={() => setShowMenu(!showMenu)}>
                <GiHamburgerMenu className='svg'/>
                </button >
            </div>

            <div className="header__item flex-auto mobile-logo">
          <div className="header-link">
            <AiFillGithub className='svg'/>
          </div>
        </div>

         <div className="header__item notification-icon">
          <div className="notification-indicator header-link">
            <span className="blue-dot"></span>
            <BsBell/>
          </div>
        </div>

        </div>
        {showMenu && <HeaderMenu />}
    </div>
  )
}

export default HeaderMobile