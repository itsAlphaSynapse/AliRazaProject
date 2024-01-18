import React from 'react'
import { FaStoreAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <div>
            <div className='bg-light'>
                <div className="container bg-light">
                    <div className='row mainNavbar d-flex align-items-center'>
                        <div className='col-12 text-secondary col-xl-4 fs-3 d-flex'>
                            <div className='col-2 col-md-1'><FaStoreAlt /></div>
                            <div className=''>Store Management App</div>
                        </div>
                        <div className='col-12 col-xl-8 d-none d-md-flex'>
                            <div className='col-2 border-start border-dark text-center p-2'><Link to={'/'} className='links'>Home Page</Link></div>
                            <div className='col-2 border-start border-dark text-center p-2'><Link to={'/adminhome'} className='links'>Admin Home</Link></div>
                            <div className='col-2 border-start border-dark text-center p-2'><Link to={'/adminproducts'} className='links'>Products</Link></div>
                            <div className='col-2 border-start border-dark text-center p-2'><Link to={'/adminsoldproducts'} className='links'>Sold Products</Link></div>
                            <div className='col-2 border-start border-dark text-center p-2'><Link to={'/adminemploys'} className='links'>Employs</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar
