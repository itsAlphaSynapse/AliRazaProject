import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loder from '../loader/Loder'
import MainNavbar from '../navbars/MainNavbar'
import "./style.css"
import Ali from '../pics/ali.png'
import R from '../pics/R.png'

const AdminLogin = () => {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const handleInput = (e) => {
        var value = e.target.value
        if (e.target.name === "name") {
            setname(value)
        } else if (e.target.name === "password") {
            setpassword(value)
        }
    }
    const validation = () => {
        if (name === '' || password === '') {
            setdisplayErr1('block')
        } else {
            try {
                setoverfolw('visible')
                fetch('badmin')
                    .then((response) => response.json())
                    .then((data) => {
                        if (data[0].name === name && data[0].password === password) {
                            navigate('/adminhome')
                        } else {
                            setdisplayErr2('block')
                        }
                        setoverfolw('hidden')
                    });
            } catch (error) {
                alert("Something went wrong.PLease try checking your internet connection")
            }
        }
    }
    const navigate = useNavigate();
    const [displayErr1, setdisplayErr1] = useState('none')
    const [displayErr2, setdisplayErr2] = useState('none')
    const [overfolw, setoverfolw] = useState('hidden')
    return (
        <div>
            <div style={{ position: 'sticky', width: '100%', top: '0px', overflow: overfolw, height: '0', zIndex: '1' }}>
                <Loder />
            </div>
            <div>
                <div>
                    <MainNavbar />
                </div>
                <div className='div05'>
                    <img src={Ali} alt="" />
                    <div className='div02'><button onClick={() => { validation() }} className='btnlogin'>LOGIN</button></div>
                    <div className='div01'>
                        <div><input onClick={() => { setdisplayErr1('none'); setdisplayErr2('none') }} onChange={handleInput} autoComplete='off' name='name' value={name} className='div03' type="text" placeholder='Email ID' /></div>
                        <div><input onClick={() => { setdisplayErr1('none'); setdisplayErr2('none') }} onChange={handleInput} autoComplete='off' name='password' value={password} className='div04' type="password" placeholder='Password' /></div>
                        <div style={{ display: displayErr1 }} className='bg-danger p-2 rounded text-light text-center mt-4'>Fill The Fields Properly</div>
                        <div style={{ display: displayErr2 }} className='bg-danger p-2 rounded text-light text-center mt-4'>Invalid Identity</div>
                    </div>
                </div>
                <div className="logo"><img src={R} width={"100px"} alt="" /></div>
            </div>
        </div>
    )
}

export default AdminLogin
