import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    color: "",
    code: {
      hex: "#"
    }
}

const AddColorForm = (props) => {
    const { colors, updateColors } = props;
    const [values, setValues] = useState(initialValues)

    const handleChanges = (e) => {
        e.persist();

        if(e.target.name === 'hex'){
            setValues({
                ...values,
                code: {hex: e.target.value},
            });  
        }else{
            const { name, value } = e.target;
            setValues({
                ...values,
                [name]: value,
            });  
        }
    };

    const postNewColor = (newColor) => {
        axiosWithAuth()
        .post('/colors', newColor)
            .then((res) => {
                console.log('add color: ', res)
                updateColors(res.data)
                console.log('new color list: ', res)
            })
            .catch((err) => {
                console.log('Add color error: ', err)
            })
    };

    //const { push } = useHistory();

    const submitValues = (e) => {
        e.preventDefault()
        const newColor = {
            id: Math.random(),
            color: values.color.trim(),
            code: {
                hex: values.code.hex.trim()
            }
        };
        postNewColor(newColor);
        setValues(initialValues);
    }


    return(
        <div>
            <h2>Add form:</h2>
            <form className = 'Color-form' onSubmit = {submitValues}>
                <label>Color: 
                    <input 
                        type = 'text'
                        name = 'color'
                        onChange = {handleChanges}
                        value = {values.color}
                        placeholder = 'enter color'
                    />
                </label>

                <label>Hex: 
                    <input 
                        type = 'text'
                        name = 'hex'
                        onChange = {handleChanges}
                        value = {values.code.hex}
                        placeholder = 'enter hex'
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddColorForm;
