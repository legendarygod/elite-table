import { Box, Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { realData } from '../assets/prodata'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const nav = useNavigate()

    //function that stores data in a localstorage
    const storeData = (arrName, arrData) => {
        try {
            localStorage.setItem(arrName, JSON.stringify(arrData))
            console.log("local storage updated")
        } catch (error) {
            console.log("error occured", error)   
        }
    }

     //handle update
     const onSubmit = async (data) => {
        console.log("here is your data", data);
        realData.push(data)
        console.log(realData)
        storeData("Tabloid", realData)

        nav("/table")
    }

    const addForm = useForm();
    const {handleSubmit, register} = addForm


  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' label="Enter first Name" id='firstName' type="text" {...register("firstName", {
                        required: {
                            value: true,
                            message: "Enter a first name"
                        },
                    })} />
        </FormControl>
    </Box>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' label="Enter last name" id='lastName' type="text" {...register("lastName", {
                        required: {
                            value: true,
                            message: "Enter a last name"
                        },
                    })} />
        </FormControl>
    </Box>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' label="Enter email" id='email' type="email" {...register("email", {
                        required: {
                            value: true,
                            message: "Enter an email"
                        },
                    })} />
        </FormControl>
    </Box>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' label="Enter IP Address" id='ip_address' type="text" {...register("ipAddress", {
                        required: {
                            value: true,
                            message: "Enter a valid IP Address"
                        },
                    })} />
        </FormControl>
    </Box>
    
    
    <Box mt={3} width="100%">
        <Button fullWidth variant='contained'type='submit'>
           Add Information
        </Button>
    </Box>
    </Form>
  )
}

const Form = styled.form`
    width: 60%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    @media (max-width: 768px){
        width: 98%;
        padding: 20px;
    }
`

export default Add