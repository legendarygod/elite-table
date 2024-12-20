//import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Wrapper>
        <Link to={`/table`} style={{textDecoration:"none"}}>
            <SidebarItem>
                <p>View Logs</p>
            </SidebarItem>
        </Link>
        {/* <Link to={`/landing`} style={{textDecoration:"none"}}>
            <SidebarItem>
                <p>Add Product</p>
            </SidebarItem>
        </Link> */}
        <Link to={`/add`} style={{textDecoration:"none"}}>
            <SidebarItem>
                <p>Add log</p>
            </SidebarItem>
        </Link>
    </Wrapper>
  )
}

// @media(max-width: 1280px) {
//    }
//     @media(max-width: 1024px){
//    }
//     @media(max-width:800px) {
        
//    }
//     @media(max-width:500px) {
    
//    }

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 20px;
    width: 100%;
    max-width: 250px;
    height: 100vh;
    background: #fff;

//     @media(max-width: 1280px) {
//    }
//     @media(max-width: 1024px){
//    }
//     @media(max-width:800px) {
//         padding: 30px 0px;
//         flex-direction: row;
//         width: 100%;
//         max-width: none;
//         height: auto;
//         justify-content: center;
//    }
//     @media(max-width:500px) {
    
//    }
`
const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20px;
    padding: 5px 10px;
    border-radius: 6px;
    gap: 20px;
    border: 1px solid #000;

    @media(max-width: 1280px) {
   }
    @media(max-width: 1024px){
   }
    @media(max-width:800px) {
        margin: 0px;
   }
    @media(max-width:500px) {
    
   }
`
// const AddIcon = styled.img``


export default Sidebar