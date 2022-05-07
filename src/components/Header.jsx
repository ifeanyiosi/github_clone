import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { connect } from 'react-redux';
import './header.scss';
import HeaderDropdown from './HeaderDropdown';
import HeaderMobile from './HeaderMobile';

function Header({ avatarUrl }) {

    const [dropdown, setDropdown] = useState(false)

  return (
    <header className="header">
      <div className="header-desktop">
        <div className="header-item github-icon">
          <div className="header-link">
            <AiFillGithub className='svg git' />
          </div>
        </div>
        <div className="header-item flex-auto">
          <div className="header-search">
            <form className="header-form flex-auto">
              <input
                type="text"
                className="header-search-input"
                placeholder="Search or jump to..."
              />
              <img
                src="https://github.githubassets.com/images/search-key-slash.svg"
                className="header-search-key-slash"
                alt="search"
              />
            </form>
            <nav className="header-nav">
              <div className="header-link">
                Pull <span className="hide">requests</span>
              </div>
              <div className="header-link">Issues</div>
              <div className="header-link">Marketplace</div>
              <div className="header-link">Explore</div>
            </nav>
          </div>
        </div>
        <div className="header-item notification-icon">
          <div className="notification-indicator header-link">
            <span className="blue-dot"></span>
            <svg
              className="octicon octicon-bell"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
              <path
                fillRule="evenodd"
                d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-item plus-icon">
          <div className="header-link">
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16">
              <path
                fillRule="evenodd"
                d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
              ></path>
            </svg>
            <span className="dropdown-caret">
              <i className="fas fa-caret-down"></i>
            </span>
          </div>
        </div>
        <div className="header-item">
          <div className="profile-icon" onClick={() => setDropdown(!dropdown)}>
            {/* IMAGE SRC FROM API */}
            <img
              id="profile-image-desktop"
              alt=""
              width="20"
              height="20"
              src={avatarUrl}
              className="avatar avatar-user"
            />
            <span className="dropdown-caret">
              <i className="fas fa-caret-down"></i>
            </span>
            {dropdown && <HeaderDropdown />}
          </div>
        </div>
      </div>

      <HeaderMobile />
    </header>
  )
}

export default Header

