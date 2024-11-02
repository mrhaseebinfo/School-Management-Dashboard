'use client'
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  
  {
    name: 'Mon',
    present: 60,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 20,
  },
  {
    name: 'Thus',
    present: 90,
    absent: 10,
  },
  {
    name: 'Fri',
    present: 80,
    absent: 10,
  },

];




const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      {/* Body */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name"  axisLine={false} tick={{fill:'#d1d5db'}}/>
          <YAxis  axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:'10px', borderColor:'lightgray'}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
          <Bar dataKey="present" fill="#CFCEFF" legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
