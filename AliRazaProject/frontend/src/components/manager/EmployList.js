import React, { useEffect, useState } from 'react'
import Loder from '../loader/Loder'
import ManagerNavbar from '../navbars/ManagerNavbar'

const EmployList = () => {

    // code for products list starts here

    const [employlist, setemploylist] = useState([])
    const load = () => {
        setoverfolw('visible')
        try {
            fetch('bemploy')
                .then((response) => response.json())
                .then((data) => {
                    setemploylist(data)
                    setoverfolw('hidden')
                });
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    // code for products list ends here
    // code for deleting employ starts here
    const delet = async (id) => {
        setoverfolw('visible')
        try {
            const res = await fetch('/bseleteemploy', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            })
            const data = await res.json()
            if (data.message === 'done') {
                load()
            }
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    // code for deleting employ ends here
    const [overfolw, setoverfolw] = useState('hidden')
    useEffect(() => {
        load();
    }, []);
    return (
        <div>
            <div style={{ position: 'sticky', width: '100%', top: '0px', overflow: overfolw, height: '0' }}>
                <Loder />
            </div>
            <div>
                <ManagerNavbar />
                <div className="container-fluid" style={{ background: '#dbdbdb' }}>
                    <div className="row">
                        <div className="col">
                            <div className="container rounded" style={{ background: '#333333' }}>
                                <div className="row mt-5">
                                    <div className="col my-4 text-center text-light fw-bolder fs-4">
                                        Employs List
                                    </div>
                                </div>
                                <div className="row mb-5 pb-5">
                                    {
                                        employlist.map((data, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="border border-2 text-light col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 p-4 mb-1">
                                                        <div className='d-flex justify-content-between'>
                                                            <div className='fw-bold border-bottom'>{data.name}</div>
                                                            <div className='fw-bold'>Ph No. {data.phone}</div>
                                                        </div>
                                                        <div>{data.description}</div>
                                                        <div onClick={() => delet(data._id)} className="w-100 btn btn-danger">Delete Employ</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployList
