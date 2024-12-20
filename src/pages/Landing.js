import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { data } from '../assets/data'
import styled from 'styled-components'
import { Button } from '@mui/material'
// import { realData } from '../assets/prodata'


const Landing = () => {
    const [record, setRecord] = useState()
    const [foundData, setFoundData] = useState()
    const {uid} = useParams()

    console.log(record)

    
    useEffect(() => {
        const getInternalData = () => {
            const stored = localStorage.getItem("Tabloid")
            if (stored) {
                try {
                    const parsedData = JSON.parse(stored)
                    setRecord(parsedData)
                    console.log("added")
                } catch (error) {
                    console.log("error", error)
                }
            }
        }
        getInternalData()
    }, [])

    useEffect(() => {
        const getData = () => {
            const found = record?.find((i) => i.ipAddress.toLocaleString() === uid.toLocaleString())
            setFoundData(found)
        }
        getData()
    }, [uid, record])
    
    console.log(record)
  return (
    <Wrapper>
        <HeadTitle>USER INFO</HeadTitle>
        <Item>
            <TextInfo>Name:{foundData?.firstName}</TextInfo>
        </Item>
        <Item>
        <TextInfo>Email:{foundData?.email}</TextInfo>
        </Item>
        <Item>
            <TextInfo>IP address: {foundData?.ipAddress}</TextInfo>
        </Item>
        <Item>
            <TextInfo>Login Time: 10/3/2028</TextInfo>
        </Item>
        <ActionBox>
            <Link to={`/edit/${uid}`}>
                <Button>Edit</Button>
            </Link>
            <Button>Delete</Button>
        </ActionBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Item = styled.div`
    padding: 0 20px;
`
const TextInfo = styled.h3`
    font-weight: 500;
`
const ActionBox = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
    button {
        background: blue;
        color: #fff;

    }
`
const HeadTitle = styled.h3`
    padding: 0 20px;
`


export default Landing