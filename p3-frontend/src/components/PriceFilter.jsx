import React, { useContext } from 'react';
import { DataContext } from './DataContext';


function PriceFilter(props) {

    const {formStateMinMax,
            setFormStateMinMax,
            inputMinMax,
            setInputMinMax,
            initialStateMinMax} = useContext(DataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputMinMax.min < inputMinMax.max){
            setFormStateMinMax(inputMinMax)
            setInputMinMax(initialStateMinMax)
        }
        else{
            alert("Min must be lower than Max")
            setInputMinMax(initialStateMinMax)
        }

    }
    const handleChange = (event) => {
        
        setInputMinMax({...inputMinMax, [event.target.id]: event.target.value})

    }
    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <input type = "number" placeholder= "min" value = { inputMinMax.min } id = "min" onChange = { handleChange }/>
                <input type = "number" placeholder= "max" value = { inputMinMax.max } id = "max" onChange = { handleChange }/>
                <button onClick = { handleSubmit }>Filter</button>
            </form>
        </div>
    );
}

export default PriceFilter;