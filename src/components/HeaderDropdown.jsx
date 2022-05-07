import React from 'react'
import './HeaderDropdown.scss'

import { connect } from 'react-redux';
import {MdArrowDropDown} from 'react-icons/md'
import { signOut } from '../redux/actions'
import { useNavigate } from 'react-router-dom';

function HeaderDropdown({signOut, username}) {

  const navigate = useNavigate();
  const handleClick = () => {
    // auth.signOut();
    signOut();
    navigate.push('/');
  };

  return (
    <div className='header__dropdown'>

     <div className='signin'>

     <div className='username__container'>

       Signed in as <strong className="username__header">username</strong>

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

       <button onClick={handleClick} className="dropdown__item dropdown__signout">
        Sign out
      </button>

    </div>
  )
}

const mapStateToProps = ({ data }) => ({
  username: data ? data.login : '',
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);