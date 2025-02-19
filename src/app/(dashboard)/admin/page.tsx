import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalander from '@/components/EventCalander'
import FinanceChart from '@/components/FinanceChart'
import UserCards from '@/components/UserCards'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left Side */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
        <UserCards type='student'/>
        <UserCards type='teacher'/>
        <UserCards type='parent'/>
        <UserCards type='staff'/>
        </div>
         {/* Middle Chart */}
        <div className=' flex gap-4 flex-col lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
          </div>

          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendanceChart/>
          </div>
        </div>
        {/* Buttom Chart */}
        <div className='w-full h-[500px]'>
           <FinanceChart/>
        </div>
      </div>

      {/*Right Side  */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'><EventCalander/><Announcements/></div>
    </div>
  )
}

export default AdminPage