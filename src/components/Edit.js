import { Box, Button, FormControl, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
// import { data } from '../assets/data'
import { realData } from '../assets/prodata'
import styled from 'styled-components'

const Edit = () => {
    const [record, setRecord] = useState()
    const {uid} = useParams()

   

    //handle update
    const onSubmit = async (data) => {
        console.log("here is your data", data)
    }

    

    useEffect(() => {
        const getData = () => {
            const found = realData.find((i) => i.ipAddress.toLocaleString() === uid.toLocaleString())
            setRecord(found)
        }
        getData()
    }, [record, uid])
    console.log(record)

    const editform = useForm()
    const {handleSubmit, register} = editform
    
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' label="Update first Name" id='firstName' value={record?.firstName} type="text" {...register("firstName", {
                        required: {
                            value: true,
                            message: "Enter a first name"
                        },
                    })} />
        </FormControl>
    </Box>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' value={record?.lastName} label="Update last name" id='lastName' type="text" {...register("lastName", {
                        required: {
                            value: true,
                            message: "Enter a last name"
                        },
                    })} />
        </FormControl>
    </Box>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' value={record?.email} label="Update email" id='email' type="email" {...register("email", {
                        required: {
                            value: true,
                            message: "Enter an email"
                        },
                    })} />
        </FormControl>
    </Box>
    <Box>
        <FormControl size='small' fullWidth>
             <TextField variant='outlined' value={record?.ipAddress} label="Update IP Address" id='ip_address' type="text" {...register("ipAddress", {
                        required: {
                            value: true,
                            message: "Enter a valid IP Address"
                        },
                    })} />
        </FormControl>
    </Box>
    
    <Box mt={3} width="100%">
        <Button fullWidth variant='contained'type='submit'>
            Upload Changes
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

export default Edit