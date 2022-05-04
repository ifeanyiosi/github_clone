import React from 'react'

import {AiFillGithub } from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'


function HeaderMenu() {
  return (
    <div className='header__mobile-main'>

        <div className='header__mobile'>

            <div className="header__item">
                <button>
                <GiHamburgerMenu/>
                </button>
            </div>

            <div className="header__item flex-auto mobile-logo">
          <div className="header-link">
            <AiFillGithub/>
          </div>
        </div>

         <div className="header__item notification-icon">
          <div className="notification-indicator header-link">
            <span className="blue-dot"></span>
            <BsBell/>
          </div>
        </div>

        </div>

    </div>
  )
}

export default HeaderMenu