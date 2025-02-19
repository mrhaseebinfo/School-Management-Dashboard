import FormModel from '@/components/FormModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { resultsData, role } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';



type Result = {
  id: number;
  subject: string;
  student: string;
  score: number;
  class: string;
  teacher: string;
  date: string
  type: "exam" | "assigment"
}

const columns = [
  {
    header: 'Subjects Name', accessor: 'name'
  },
  { header: 'Student', accessor: 'student' },
  { header: 'Score', accessor: 'score', className: 'hidden md:table-cell' },
  { header: 'Teacher', accessor: 'teacher', className: 'hidden md:table-cell' },
  { header: 'Class', accessor: 'class', className: 'hidden md:table-cell' },
  { header: 'Date', accessor: 'date', className: 'hidden md:table-cell' },

  {
    header: 'Action', accessor: 'action'
  },
]

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaSkyLight'>
      <td className='flex items-center gap-4 p-4'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.subject}</h3>
        </div>
      </td>

      <td className=''>{item.student}</td>
      <td className='hidden md:table-cell'>{item.score}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item.date}</td>



      <td>
        <div className='flex items-center gap-2'>
          {/* <Link href={`/list/teacher/${item.id}`}><button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'><Image src='/view.png' alt='' width={16} height={16} /></button></Link> */}
          {role === 'admin' && (
            // <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'><Image src='/delete.png' alt='' width={16} height={16} /></button>

            <>
              <FormModel table='result' type='update' data={item} />
              <FormModel table='result' type='delete' id={item.id} />
            </>
          )}
        </div>
      </td>

    </tr>
  )


  return (
    <div className=' bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Results</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center  rounded-full bg-lamaYellow'>
              <Image src='/filter.png' alt='' width={14} height={14} />
            </button>


            <button className='w-8 h-8 flex items-center justify-center  rounded-full bg-lamaYellow'>
              <Image src='/sort.png' alt='' width={14} height={14} />
            </button>

            {role === 'admin' && (
              // <button className='w-8 h-8 flex items-center justify-center  rounded-full bg-lamaYellow'>
              //   <Image src='/plus.png' alt='' width={14} height={14} />
              // </button>


              <FormModel table='result' type='create' />

            )}
          </div>
        </div>
      </div>

      {/* Body Teacher List */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* Buttom Pagination */}

      <Pagination />

    </div>
  )
}

export default ResultListPage;
