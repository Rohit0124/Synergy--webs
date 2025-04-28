import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Coponents/Layout';
import HomePage from './HomePage';
import CompanyList from './Coponents/CompanyList';
import StructureList from './Coponents/StructureList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="master/company/companylisting" element={<CompanyList />} />
          <Route path='master/structure/StructureList' element={<StructureList/>}/>
          {/* <Route path="master/structure/StructureList" element={<StructureList />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
