import React from 'react'

import {MdArrowDropDown} from 'react-icons/md'

function HeaderDropdown() {
  return (
    <div className='header__dropdown'>

     <div className='signin'>

     <div className='username__container'>

     </div>

     </div>

     <div className='dropdown__divider'></div>

     <div className='status__container'>
         <div className='status__inner'>
             <div className='status__details'>
                 <div className='emoji__container'>
                    <MdArrowDropDown className='dropdown__icon'/>
                 </div>

            <div className="message__wrapper">
              <span className="text__gray">Set status</span>
            </div>

             </div>
         </div>
     </div>

      <div className="dropdown__divider"></div>
      <div className="dropdown__item">Your profile</div>
      <div className="dropdown__item">Your repositories</div>
      <div className="dropdown__item">Your organizations</div>
      <div className="dropdown__item">Your projects</div>
      <div className="dropdown__item">Your stars</div>
      <div className="dropdown__item">Your gists</div>
      <div className="dropdown__divider"></div>

      <div className="dropdown__item">Upgrade</div>

      <div className="hide-sm hide-md feature-preview-details position-relative">
        <div className="dropdown__item btn-link">Feature preview</div>
        <span
          className="feature-preview-indicator js-feature-preview-indicator"
          hidden=""
        ></span>
      </div>

      <div className="dropdown__item">Help</div>
      <div className="dropdown__item">Settings</div>

       <button className="dropdown__item dropdown__signout">
        Sign out
      </button>

    </div>
  )
}

export default HeaderDropdown