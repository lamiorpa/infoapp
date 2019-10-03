import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

/**
 * Navbar that utilizes bootstrap
 */
class NavbarFancy extends Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to={'/'}>
                    Info app
                </Link>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to={'/'} className='nav-link'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to={`/lights-out`} className='nav-link'>
                                Lights out
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to={`/weather`} className='nav-link'>
                                Weather
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavbarFancy;
