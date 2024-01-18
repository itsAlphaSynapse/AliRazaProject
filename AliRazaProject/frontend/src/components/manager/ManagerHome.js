import React, { useEffect, useState } from 'react'
import Loder from '../loader/Loder'
import ManagerNavbar from '../navbars/ManagerNavbar'

const ManagerHome = () => {
    const [loadeddata, setloadeddata] = useState([{ name: '' }])
    const load = () => {
        setoverfolw('visible')
        try {
            fetch('bmanager')
                .then((response) => response.json())
                .then((data) => {
                    setloadeddata(data)
                    setoverfolw('hidden')
                });
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    useEffect(() => {
        load();
    }, []);
    const [overfolw, setoverfolw] = useState('hidden')
    return (
        <div>
            <div style={{ position: 'sticky', width: '100%', top: '0px', overflow: overfolw, height: '0', zIndex: '1' }}>
                <Loder />
            </div>
            <div>
                <ManagerNavbar />
                <div className='managerbg'>
                    <div className='mainText'>
                        <div className="fw-bolder text-center text-light">Welcome Back <br /> {loadeddata[0].name} </div>
                        <div className='fs-5 text-light text-center w-50 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta accusantium, voluptatum at consequuntur aspernatur neque earum repellat quaerat blanditiis expedita! Quasi facere porro ut nobis quas asperiores a hic.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagerHome
