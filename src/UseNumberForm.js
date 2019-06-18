import {useState, useEffect} from 'react'

import {miniumFaction} from './countFraction'
import validate from './validationRules'

const UseNumberForm = () => {
    const [values, setValues ] = useState({})
    const [fraction, setFraction] = useState({})
    const [errors, setErrors] = useState({status: false})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if ((Object.keys(errors).length === 0) && isSubmitting) {
          console.log('react update')
        }
      }, [errors]);
      
    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        const err = validate(values.number)
        setErrors(err)
        setIsSubmitting(true)
        calculateFraction(values.number, err)
    }

    const handleChange = (event) => {
      event.persist();
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
      setFraction({})
    };

    function calculateFraction (val, errors) {
      if (errors.status == false) {
        const num = val.replace(/[.,\s|^a-zA-Z]|/g,'').replace(/\b0+/g, '')
        return setFraction(miniumFaction(num))
      }
    }

    return {
        handleSubmit,
        handleChange,
        setValues,
        values,
        errors,
        fraction,
        calculateFraction
    }
}

export default UseNumberForm
