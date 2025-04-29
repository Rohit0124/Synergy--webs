import React from 'react'
import SelectLevel from './Components/Home/SelectLevel'
import PumpStatus from './Components/Home/PumpStatus'
import TodaySales from './Components/Home/TodaySales'
import TodayTransaction from './Components/Home/TodayTransaction'
import GrowthParameter from './Components/Home/GrowthParameter'
import SalesParameter from './Components/Home/SalesParameter'

const MainPage = () => {
  return (
    <div className='home-content'>
      <div className='saleslevel-comp'><SelectLevel /></div>
      <div className='flexcomp'>
        <div className='pumpstatus-comp'><PumpStatus /></div>
        <div className='mid-comp'>
          <div className='today-comp'>
            <TodaySales />
            <TodayTransaction />
          </div>
          <GrowthParameter />
          <SalesParameter />
        </div>
      </div>
    </div>
  )
}

export default MainPage