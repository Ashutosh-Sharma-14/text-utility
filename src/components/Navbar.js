import React from 'react'
// importing Proptypes using the shortcut "impt"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Note: to use react router replace "a" with link and href with "to"

export default function Navbar(props) {
    // props are properties passed in the component
  return (
    <>
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light' }`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

// assigning proptypes, so that it will be validated before passing to the function based component
Navbar.propType = {
    // defining the proptype as string
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// setting default props if user has not passed one
Navbar.defaultProps = {
    title: "Title Here",
    aboutText: "About text here"
}
