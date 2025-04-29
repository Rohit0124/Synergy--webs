import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './HomePage';
import CompanyList from './Components/SideComponents/CompanyList';
import StructureList from './Components/SideComponents/StructureList';
import FranchisesList from './Components/SideComponents/FrachisesList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="master/company/companylist" element={<CompanyList />} />
          <Route path='master/structure/structurelist' element={<StructureList/>}/>
          <Route path='master/franchises/franchiseslist' element={<FranchisesList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
