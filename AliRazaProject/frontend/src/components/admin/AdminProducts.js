import React, { useEffect, useState } from 'react'
import Loder from '../loader/Loder'
import AdminNavbar from '../navbars/AdminNavbar'

const AdminProducts = () => {
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
        <AdminNavbar />
        <div className="container-fluid" style={{ background: '#dbdbdb' }}>
          <div className="row">
            <div className="col">
              <div className="container rounded" style={{ background: '#333333' }}>
                <div className="row">
                  <div className="col my-4 text-center text-light fw-bolder fs-4">
                    All Avalible Products
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
                              <div>{data.description}</div>
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

export default AdminProducts