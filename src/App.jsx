import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Layout from './Components/Layout';
import LoginPage from './Components/Login/LoginPage';
import HomePage from './HomePage';
import CompanyList from './Components/SideComponents/Master/CompanyList';
import StructureList from './Components/SideComponents/Master/StructureList';
import FranchiseList from './Components/SideComponents/Master/FranchiseList';
import UserGroupList from'./Components/SideComponents/Master/UserGroupList';
import MasterTemplate from'./Components/SideComponents/Master/MasterTemplateList';
import UserTemplate from'./Components/SideComponents/Master/UserTemplatesList';
import CustomerList from './Components/SideComponents/Customer/CustomerList';
import ReceiveFuelReports from './Components/SideComponents/MIS/ReceiveFuelReports';
import Reconciliation from './Components/SideComponents/MIS/ReconciliationReport';
import FranchiseDetail from './Components/SideComponents/MIS/Sales/FranchiseDetailedReport';
import FranchiseSummary from './Components/SideComponents/MIS/Sales/FranchiseSummaryReport';
import DispenserDetail from './Components/SideComponents/MIS/Sales/DispenserDetailedReport';
import DispenserSummary from './Components/SideComponents/MIS/Sales/DispenserSummaryReport';
import ProductDetail from './Components/SideComponents/MIS/Sales/ProductDetailedReport';
import ProductSummary from './Components/SideComponents/MIS/Sales/ProductSummaryReport';
import DSMDetail from './Components/SideComponents/MIS/Sales/DSMDetailReport';
import DSMSummary from './Components/SideComponents/MIS/Sales/DSMSummaryReport';
import PaymentDetail from './Components/SideComponents/MIS/Sales/PaymentDetailReport';
import PaymentSummary from './Components/SideComponents/MIS/Sales/PaymentSummaryReport';
import OpenClose from './Components/SideComponents/MIS/Sales/OpenCloseReport';
import ShiftDetail from './Components/SideComponents/MIS/Sales/ShiftDetailReport';
import ShiftSummary from './Components/SideComponents/MIS/Sales/ShiftSummaryReport';
import CountryList from './Components/SideComponents/General Settings/CountryList';
import StateList from './Components/SideComponents/General Settings/StateList';
import DistrictList from './Components/SideComponents/General Settings/DistrictList';
import OilCompanyList from './Components/SideComponents/General Settings/OilCompanyList';
import ProductList from './Components/SideComponents/General Settings/ProductList';
import ProductFamily from './Components/SideComponents/General Settings/ProductFamilyList';
import DeviceMaster from './Components/SideComponents/General Settings/DeviceMasterList';
import DeviceMake from './Components/SideComponents/General Settings/DevicesMakeList';
import ProtocolList from './Components/SideComponents/General Settings/ProtocolList';
import BaudRateList from './Components/SideComponents/General Settings/BaudRateList';
import CompanyUpdateList from './Components/UpdateList/CompanyUpdateList';
import StructureUpdateList from './Components/UpdateList/StructureUpdateList';
import FranchiseUpdateList from './Components/UpdateList/FranchiseUpdateList';
import UserGroupUpdateList from './Components/UpdateList/UserGroupUpdateList';
import MasterTemplateUpdateList from './Components/UpdateList/MasterTemplatesUpdateList';
import UserTemplateUpdateList from './Components/UpdateList/UserTemplatesUpdateList';
import CustomerUpdateList from './Components/UpdateList/CustomerUpdateList';
import CountryUpdateList from './Components/UpdateList/CountryUpdateList';
import StateUpdateList from './Components/UpdateList/StateUpdateList';
import DistrictUpdateList from './Components/UpdateList/DistrictUpdateList';
import OilCompanyUpdateList from './Components/UpdateList/OilCompanyUpdateList';
import ProductFamilyUpdateList from './Components/UpdateList/ProductFamilyUpdateList';
import ProductUpdateList from './Components/UpdateList/ProductUpdateList';
import DeviceMasterUpdateList from './Components/UpdateList/DeviceMasterUpdateList';
import DeviceMakeUpdateList from './Components/UpdateList/DeviceMakeUpdateList';
import ProtocolUpdateList from './Components/UpdateList/ProtocolUpdateList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="master/company/companylist" element={<CompanyList/>}/>
          <Route path='master/structure/structurelist' element={<StructureList/>}/>
          <Route path='master/franchises/franchiseslist' element={<FranchiseList/>}/>
          <Route path='master/usergroups/usergrouplist' element={<UserGroupList/>}/>
          <Route path='master/mastertemplate/mastertemplatelist' element={<MasterTemplate/>}/>
          <Route path='master/mastertemplate/usertemplatelist' element={<UserTemplate/>}/>
          <Route path='customer/customerlist' element={<CustomerList/>}/>
          <Route path='MIS/receivefuelreports' element={<ReceiveFuelReports/>}/>
          <Route path='MIS/reconciliation' element={<Reconciliation/>}/>
          <Route path='MIS/sales/franchisedetailreport' element={<FranchiseDetail/>}/>
          <Route path='MIS/sales/franchisesummaryreport' element={<FranchiseSummary/>}/>
          <Route path='MIS/sales/dispenserdetailreport' element={<DispenserDetail/>}/>
          <Route path='MIS/sales/dispensersummaryreport' element={<DispenserSummary/>}/>
          <Route path='MIS/sales/productdetailreport' element={<ProductDetail/>}/>
          <Route path='MIS/sales/productsummaryreport' element={<ProductSummary/>}/>
          <Route path='MIS/sales/DSMdetailreport' element={<DSMDetail/>}/>
          <Route path='MIS/sales/DSMsummaryreport' element={<DSMSummary/>}/>
          <Route path='MIS/sales/paymentdetailreport' element={<PaymentDetail/>}/>
          <Route path='MIS/sales/paymentsummaryreport' element={<PaymentSummary/>}/>
          <Route path='MIS/sales/openclosereport' element={<OpenClose/>}/>
          <Route path='MIS/sales/shiftdetailreport' element={<ShiftDetail/>}/>
          <Route path='MIS/sales/shiftsummaryreport' element={<ShiftSummary/>}/>
          <Route path='generalsetting/countrylist' element={<CountryList/>}/>
          <Route path='generalsetting/statelist' element={<StateList/>}/>
          <Route path='generalsetting/districtlist' element={<DistrictList/>}/>
          <Route path='generalsetting/oilcompany/oilcompanylist' element={<OilCompanyList/>} />
          <Route path='generalsetting/product/productlist' element={<ProductList/>}/>
          <Route path='generalsetting/product/productfamilylist' element={<ProductFamily/>}/>
          <Route path='generalsetting/device/devicemasterlist' element={<DeviceMaster/>}/>
          <Route path='generalsetting/device/devicemakelist' element={<DeviceMake/>}/>
          <Route path='generalsetting/protocol/protocollist' element={<ProtocolList/>}/>
          <Route path='generalsetting/baudrate/baudratelist' element={<BaudRateList/>}/>
          <Route path='CompanyUpdateList' element={<CompanyUpdateList/>}/>
          <Route path='StructureUpdateList' element={<StructureUpdateList/>}/>
          <Route path='FranchiseUpdateList' element={<FranchiseUpdateList/>}/>
          <Route path='usergroupupdatelist' element={<UserGroupUpdateList/>}/>
          <Route path='MasterTemplateUpdateList' element={<MasterTemplateUpdateList/>}/>
          <Route path='UserTemplateUpdateList' element={<UserTemplateUpdateList/>}/>
          <Route path='CustomerUpdateList' element={<CustomerUpdateList/>}/>
          <Route path='CountryUpdateList' element={<CountryUpdateList/>}/>
          <Route path='StateUpdateList' element={<StateUpdateList/>}/>
          <Route path='DistrictUpdateList' element={<DistrictUpdateList/>}/>
          <Route path='OilCompanyUpdateList' element={<OilCompanyUpdateList/>}/>
          <Route path='ProductFamilyUpdateList' element={<ProductFamilyUpdateList/>}/>
          <Route path='ProductUpdateList' element={<ProductUpdateList/>}/>
          <Route path='DeviceMasterUpdateList' element={<DeviceMasterUpdateList/>}/>
          <Route path='DeviceMakeUpdateList' element={<DeviceMakeUpdateList/>}/>
          <Route path='ProtocolUpdateList' element={<ProtocolUpdateList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
