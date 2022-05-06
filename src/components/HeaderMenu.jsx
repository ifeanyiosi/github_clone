import React from 'react'
import './header.scss'

import {FaSignOutAlt} from 'react-icons/fa'


function HeaderMenu() {

    

  return (
    
    <>
        <div className='mobile__nav-items' id='mobile__nav'>
            <div className='mobile__header-search'>
                <form className="header__form mobile__header-form">
                <input
                 type="text"
                 className="header-search-input"
                placeholder="Search or jump to..."
                />
                 <img
                 src="https://github.githubassets.com/images/search-key-slash.svg"
                alt=""
                className="header-search-key-slash"
                 />
                </form>

                <nav className='header__nav mobile-nav'>
                    <div className='nav__mobile header-link'>
                        Dashboard
                    </div>
                    <div className="nav__mobile header-link">
                    Pull requests
                    </div>
                    <div className="nav__mobile header-link">
                     Issues
                    </div>
                     <div className="nav__mobile header-link">
                     Marketplace
                    </div>
                     <div className="nav__mobile header-link">
                     Explore
                    </div>
                    <div className="nav__mobile header-link">
                     Settings
                    </div>
                    <div className="nav-mobile header-link nav-mobile-profile">

              {/* <!-- Images are fetches from API --> */}
                    <img
                     src='{avatarUrl}'
                    id="profile-image-mobile"
                    width="20"
                    height="20"
                     alt=""
                     />
                    'username'
                     </div>
                     <div className="sign-out-form">
                    <button className="sign-out nav-mobile header-link" >
                     <FaSignOutAlt/>
                     Sign out
                     </button>
            </div>

                </nav>

            </div>
        </div>
    </>
       
    
  )
}

export default HeaderMenu