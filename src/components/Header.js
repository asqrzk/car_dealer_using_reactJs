import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    render()
    {
        return(
            <div class="header">
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/#">Ashique's Car Dealership</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to="/" ><a class="nav-link" href="/#">Catalogue</a> </Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/add" ><a class="nav-link" href="/#">Add new car</a> </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}