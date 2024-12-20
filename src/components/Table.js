import DataTable from 'react-data-table-component';
// import {data} from '../assets/data.js'
import styled from 'styled-components';
import "../App.css"
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { realData } from '../assets/prodata.js';


const columns = [
    { name: "First Name", selector: row => row.firstName, sortable: true},
    { name: "Last Name", selector: row => row.lastName, sortable: true },
    { name: "Email", selector: row => row.email, sortable: true },
    // { name: "Gender", selector: row => row.gender, sortable: true },
    { name: "IP Address", selector: row => row.ipAddress, sortable: true },
    // { name: "Log In Time", selector: row => row.login_time, sortable: true },
  ];

  const customStyles = {
    headCells: {
        style: {
            backgroundColor: "blue",
            color: "white",
            fontSize: "17px",
            fontWeight: "bolder",
        }
    },
    cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
            width: '250px'
		},
	},
  }

  
  
  const Table = () => {

    const navigate = useNavigate()
    //state that holds the filter results
    const [records, setRecords] = useState(realData)

    //search filter function
    const handleChange = (e) => {
        let q = e.target.value
        const newRecord = realData.filter((item) => item.first_name.toLocaleLowerCase().includes(q.toLocaleLowerCase()))
        setRecords(newRecord)
    }

    //handle clicking rows
    const handleRowClicked = (e) => {
        console.log(e.id)
        navigate(`/landing/${e.ipAddress}`)
    }

    useEffect(() => {
        const stored = localStorage.getItem("Tabloid")
        if (stored) {
            try {
                const parsedData = JSON.parse(stored)
                setRecords(parsedData)
                console.log("added")
            } catch (error) {
                console.log("error", error)
            }
        }
    }, [])

    return (
        <Container>
            <Search>
                <h2>Log</h2>
                <TextField variant='outlined' label="Enter Search Term"  onChange={handleChange}/>
            </Search>
            
            
            <DataTable pagination striped responsive columns={columns} data={records} customStyles={customStyles} 
                onRowClicked={handleRowClicked}
            />
        </Container>
    )
}

const Container = styled.div`
    margin: 30px;
    /* button {
        margin: 2px 2px;

    } */
`

const Search = styled.div`
    height: 20px;
    margin: 40px;
    display: flex;
    justify-content: space-between;
`

export default Table;