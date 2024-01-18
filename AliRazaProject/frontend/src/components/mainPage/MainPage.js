import React from 'react'
import './style.css'
import MainNavbar from '../navbars/MainNavbar'

const MainPage = () => {
    return (
        <div>
            <MainNavbar />
            <div className="bg"></div>
            <div className='mainText'>
                <div className="fw-bolder text-center text-light">Welcome To the Best <br /> Store Management App</div>
                <div className='fs-5 text-light text-center w-50 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta accusantium, voluptatum at consequuntur aspernatur neque earum repellat quaerat blanditiis expedita! Quasi facere porro ut nobis quas asperiores a hic.</div>
            </div>
        </div>
    )
}

export default MainPage
