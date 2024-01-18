import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FaStoreAlt } from 'react-icons/fa';
import './style.css'

import React from 'react'
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <div className='bg-light'>
            <div className="container bg-light">
                <div className='row mainNavbar d-flex align-items-center'>
                    <div className='col-12 text-secondary col-sm-8 fs-3 d-flex'>
                        <div className='col-2 col-md-1'><FaStoreAlt /></div>
                        <div className=''>Store Management App</div>
                    </div>
                    <div className='col-4 d-none d-sm-flex'>
                        <div className='col-4 border-start border-dark text-center p-2'>
                            <Link to={'/'} className='links'>
                                Home
                            </Link>
                        </div>
                        <div className='col-4 border-start border-dark text-center p-2'>
                            <Link to={'/adminregister'} className='links' >
                                Admin
                            </Link>
                        </div>
                        <div className='col-4 border-start border-dark border-end text-center p-2'>
                            <Link to={'/managerregister'} className='links'>
                                Manager
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar
