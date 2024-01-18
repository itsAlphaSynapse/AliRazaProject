import React, { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Loder from '../loader/Loder'
import ManagerNavbar from '../navbars/ManagerNavbar'

const EnterNewEmploy = () => {

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [phone, setphone] = useState('')
    const [input, setinput] = useState({
        name: '', description: '', phone: ''
    })
    const handleInput = (e) => {
        var value = e.target.value
        setinput({ ...input, [e.target.name]: value })
        if (e.target.name === "name") {
            setname(value)
        } else if (e.target.name === "description") {
            setdescription(value)
        } else if (e.target.name === "phone") {
            setphone(value)
        }
    }
    const submit = async (e) => {
        setoverfolw('visible')
        e.preventDefault();
        try {
            const res = await fetch('/bemploy', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            })
            const data = await res.json()
            if (data.message === 'done') {
                setname('')
                setdescription('')
                setphone('')
                setoverfolw('hidden')
            } else if (data.message === 'fields does not filled') {
                setoverfolw('hidden')
                setdisplayErr1('block')
            }
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    const [displayErr1, setdisplayErr1] = useState('none')
    const [overfolw, setoverfolw] = useState('hidden')
    return (
        <div>
            <div style={{ position: 'sticky', width: '100%', top: '0px', overflow: overfolw, height: '0' }}>
                <Loder />
            </div>
            <div>
                <ManagerNavbar />
                <div className='bg-dak pb-5' style={{ background: '#dbdbdb' }}>
                    <div className="container pb-5 mb-4">
                        <div className="row pt-5">
                            <div className="col mt-5 rounded" style={{ background: '#333333' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-light text-center my-3 fw-bolder fs-5">
                                            <IoIosAddCircleOutline /> Add Employ
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 p-4 mb-5" style={{ background: '#444444' }}>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label text-light">Name</label>
                                                    <input value={name} type="text" className="form-control" name='name' autoComplete='off' onChange={handleInput} onClick={() => { setdisplayErr1('none') }} id="name" placeholder='Enter Name Here...' />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label text-light">Description</label>
                                                    <input value={description} type="text" className="form-control" name='description' autoComplete='off' onChange={handleInput} onClick={() => { setdisplayErr1('none') }} id="description" placeholder='Enter Description Here...' />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label text-light">Phone No.</label>
                                                    <input value={phone} type="number" className="form-control" name='phone' autoComplete='off' onChange={handleInput} onClick={() => { setdisplayErr1('none') }} id="phone" placeholder='Enter Phone No. Here...' />
                                                </div>
                                                <div style={{ display: displayErr1 }} className='bg-danger p-2 rounded text-light text-center mt-4'>Fill The Fields Properly</div>
                                                <button type="submit" className="btn btn-primary w-100 mt-4" onClick={submit}>Add <IoIosAddCircleOutline style={{ fontSize: 'larger' }} /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterNewEmploy