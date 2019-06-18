import React from 'react'

import UseNumberForm from './UseNumberForm'
import {Card} from './Card'
import './Form.css'

export const Form = () => {
    const {values, fraction, handleChange, handleSubmit, errors} = UseNumberForm()
    return (
        <div>
            <div className="form-style-1">
                <h1>Insert Money</h1>
                <form id="form1">
                    <input 
                        type="text" 
                        name="number" 
                        onChange={e => handleChange(e)} 
                        value={values.number || ''}
                        className={`input ${errors.msg && 'is-danger'}`}
                        aria-labelledby="input-label"
                        data-testid="input-number"
                    >
                    </input>
                    {errors.msg && (
                        <span 
                            className="help is-danger" 
                            data-testid="error-msg"
                        >*{errors.msg}
                        </span>
                    )}
                    <input 
                        data-testid="submit-number"
                        type="submit"
                        onClick={handleSubmit} 
                        disabled = {(values.number === undefined || values.number === "")
                        && true}/>
                </form>
            </div>
            <Card 
                fraction={fraction.fraction} 
                left={fraction.left} 
                amount={values.number}
            />
        </div>
    )
}
