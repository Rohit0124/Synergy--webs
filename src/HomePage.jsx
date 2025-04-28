import React from 'react'
import SelectLevel from './Coponents/Home/SelectLevel'
import PumpStatus from './Coponents/Home/PumpStatus'
import TodaySales from './Coponents/Home/TodaySales'
import TodayTransaction from './Coponents/Home/TodayTransaction'
import GrowthParameter from './Coponents/Home/GrowthParameter'
import SalesParameter from './Coponents/Home/SalesParameter'

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