import React, { useEffect, useState } from 'react'
import ManagerNavbar from '../navbars/ManagerNavbar'
import { IoIosAddCircleOutline } from 'react-icons/io';
import Loder from '../loader/Loder';

const ProductsList = () => {
    // code for Enter new product starts here

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState('')
    const [input, setinput] = useState({
        name: '', description: '', price: ''
    })
    const handleInput = (e) => {
        var value = e.target.value
        setinput({ ...input, [e.target.name]: value })
        if (e.target.name === "name") {
            setname(value)
        } else if (e.target.name === "description") {
            setdescription(value)
        } else if (e.target.name === "price") {
            setprice(value)
        }
    }
    const submit = async (e) => {
        e.preventDefault();
        setoverfolw('visible')
        try {
            const res = await fetch('/bproducts', {
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
                setprice('')
                load()
            } else if (data.message === 'fields does not filled') {
                setdisplayErr1('block')
                setoverfolw('hidden')
            }
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    const [displayErr1, setdisplayErr1] = useState('none')

    // code for enter new product ends here

    // code for products list starts here

    const [productList, setproductList] = useState([])
    const load = () => {
        setoverfolw('visible')
        try {
            fetch('bproducts')
                .then((response) => response.json())
                .then((data) => {
                    setproductList(data)
                    setoverfolw('hidden')
                });
        } catch (error) {
            alert("Something went wrong.PLease try checking your internet connection")
        }
    }
    // code for products list ends here
    // updating of products code starts here
    const update = async (id) => {
        setoverfolw('visible')
        try {
            const res = await fetch('/bsoldproducts', {
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
                <div className='bg-dak pb-1' style={{ background: '#dbdbdb' }}>
                    <div className="container pb-5 mb-4">
                        <div className="row pt-5">
                            <div className="col mt-5 rounded" style={{ background: '#333333' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-light text-center my-3 fw-bolder fs-5">
                                            <IoIosAddCircleOutline /> Add Products
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 p-4 mb-5" style={{ background: '#444444' }}>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label text-light">Name</label>
                                                    <input type="text" value={name} name="name" className="form-control" onClick={() => { setdisplayErr1('none') }} onChange={handleInput} autoComplete='off' id="name" placeholder='Enter Name Here...' />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label text-light">Description</label>
                                                    <input type="text" value={description} name="description" className="form-control" onClick={() => { setdisplayErr1('none') }} onChange={handleInput} autoComplete='off' id="description" placeholder='Enter Description Here...' />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="price" className="form-label text-light">Price</label>
                                                    <input type="number" value={price} name="price" className="form-control" onClick={() => { setdisplayErr1('none') }} onChange={handleInput} autoComplete='off' id="price" placeholder='Enter Price Here...' />
                                                </div>
                                                <div style={{ display: displayErr1 }} className='bg-danger p-2 rounded text-light text-center mt-4'>Fill The Fields Properly</div>
                                                <button onClick={submit} type="submit" className="btn btn-primary w-100 mt-4">Add <IoIosAddCircleOutline style={{ fontSize: 'larger' }} /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ background: '#dbdbdb' }}>
                    <div className="row">
                        <div className="col">
                            <div className="container rounded" style={{ background: '#333333' }}>
                                <div className="row">
                                    <div className="col my-4 text-center text-light fw-bolder fs-4">
                                        All Avalible Products
                                        {/* <div style={{ display: loadData }} className='btn btn-primary mt-3' onClick={load}>Load Data</div> */}
                                    </div>
                                </div>
                                <div className="row mb-5 pb-5">
                                    {
                                        productList.map((data, index) => {
                                            if (data.status === 'avalible') {
                                                return (
                                                    <div key={index}>
                                                        <div className="border border-2 text-light col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 p-4 mb-1">
                                                            <div className='d-flex justify-content-between'>
                                                                <div className='fw-bold border-bottom'>{data.name}</div>
                                                                <div className='fw-bold'>{data.price}/-Rs.</div>
                                                            </div>
                                                            {/* <div>{data.description}</div> */}
                                                            <img src={data.description} alt="" />
                                                            <div onClick={() => update(data._id)} className="w-100 btn btn-success">Sold</div>
                                                        </div>
                                                    </div>
                                                )
                                            }
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

export default ProductsList
