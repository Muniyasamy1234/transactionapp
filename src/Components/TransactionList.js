import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TransactionList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/transaction")
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
    }, [])


    const getColor = (name , money) => {
        switch (name) {
            case "Aokiji":
                return <p className='three'>{money}</p>
            case "Kizaru":
                return <p className='nine'>{money}</p>
            case "Akaninu":
                return <p className='three'>{money}</p>
            default:
                return null
        }
    }
    return (
        <div className='box'>
            <div className='box1'>
                <h1 className='h11'>Last Transactions</h1>
                <h1 className='h1'>See All</h1>
            </div>
            <div className='box2'>
                {
                    data.map(x => (
                        <div className='content'>
                            <div className='image'>
                                <div className='imagee'>
                                    <img src={x.img} width="30px" height="30px" alt='image' />
                                </div>
                                <div className='detail'>
                                    <h2 className='money'>{x.name}</h2>
                                    <p className='money moneies'>{x.time}</p>
                                </div>
                            </div>
                            <div className='detail1'>
                                <h1>{getColor(x.name,x.money)}</h1>
                                <h1>{x.update}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TransactionList