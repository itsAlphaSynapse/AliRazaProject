import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loder from '../loader/Loder';
import MainNavbar from '../navbars/MainNavbar'
import Ali from '../pics/ali.png'
import R from '../pics/R.png'

const ManagerRegister = () => {
    const navigate = useNavigate();
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [input, setinput] = useState({
        name: '', password: ''
    })
    const handleInput = (e) => {
        var value = e.target.value
        setinput({ ...input, [e.target.name]: value })
        if (e.target.name === "name") {
            setname(value)
        } else if (e.target.name === "password") {
            setpassword(value)
        }
    }
    const submit = async (e) => {
        e.preventDefault();
        setoverfolw('visible')
        try {
            const res = await fetch('/bmanager', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            })
            const data = await res.json()
            if (data.message === 'done') {
                setname('')
                setpassword('')
                navigate('/managerlogin')
            } else if (data.message === 'fields does not filled') {
                setdisplayErr1('block')
                setoverfolw('hidden')
            }
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    const [displayErr1, setdisplayErr1] = useState('none')
    const load = () => {
        setoverfolw('visible')
        try {
            fetch('bmanager')
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        navigate('/managerlogin')
                    }
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
                <div>
                    <MainNavbar />
                </div>
                <div className='div05'>
                    <img src={Ali} alt="" />
                    <div className='div02' onClick={submit} ><button className='btnlogin'>REGISTER</button></div>
                    <div className='div01'>
                        <div><input value={name} name="name" onClick={() => { setdisplayErr1('none') }} onChange={handleInput} autoComplete='off' className='div03' type="text" placeholder='Name' /></div>
                        <div><input value={password} name="password" onClick={() => { setdisplayErr1('none') }} onChange={handleInput} autoComplete='off' className='div04' type="password" placeholder='Password' /></div>
                        <div style={{ display: displayErr1 }} className='bg-danger p-2 rounded text-light text-center mt-4'>Fill The Fields Properly</div>
                    </div>
                </div>
                <div className="logo"><img src={R} width={"100px"} alt="" /></div>
            </div>
        </div>
    )
}

export default ManagerRegister
