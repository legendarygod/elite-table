import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Table from './components/Table';
import Edit from './components/Edit';
import Add from './components/Add';


function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/table' element={<Table />}/>
        </Routes>
      </BrowserRouter> */}
      <Wrapper>
       <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />}/> 
          <Route path='/landing/:uid' element={<Landing />}/> 
          <Route path='/edit/:uid' element={<Edit />}/> 
          <Route path='/table' element={<Table />}/> 
          <Route path='/' element={<Main />}/> 
        </Routes>
      </Wrapper>

      
    </div>
 
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default App;
