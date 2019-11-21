import React from 'react';
import logo from './../images/vanhack.svg'

function navbar() {
    let userRole = false;
    if (localStorage.getItem('role')) {
        userRole = localStorage.getItem('role');
    }
    return (
        <nav className="navbar navbar-expand-sm bg-white navbar-dark">

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="/"><img src={logo} alt="Vanhack Logo" /></a>

            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav ">

                    {userRole === 'admin' ?
                        <li className="nav-item">
                            <a className="nav-link" href="create-class" >Create Class</a>
                        </li>
                        :
                        ''
                    }

                    {userRole ?
                        <li className="nav-item">
                            <a className="nav-link" href="view-class" >Classes</a>
                        </li>
                        :
                        ''
                    }

                    {!userRole ?
                        <li className="nav-item">
                            <a className="nav-link" href="login" >Login</a>
                        </li>
                        :
                        <li className="nav-item">
                            <a className="nav-link" href="logout" >Logout</a>
                        </li>
                    }



                </ul>
            </div>
        </nav>

    )
}

export default navbar;