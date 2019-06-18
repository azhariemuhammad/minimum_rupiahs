import React from 'react'
import './Card.css'
 
export const Card = ({fraction, left, amount}) => {
    return (
        <div>
            <h1>{amount}</h1>
            {fraction 
            && fraction.map((key, idx) => {
                return (
                    <div key={idx} className="flex-beetween box">
                        <h3>{key.count} X</h3>
                        <h1>Rp{key.value}</h1>
                    </div>
                )
            })
            }
            {left && 
            <div className="flex-beetween box">
                <div className="box2">
                    <h3>Left: </h3><h1>Rp{left}</h1>
                </div>
                <p className="is-danger">*No available fraction</p>
            </div>
            }
        </div>
    )
}

