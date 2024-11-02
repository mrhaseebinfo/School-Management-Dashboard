import FormModel from '@/components/FormModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { role, subjectsData } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';



type Subjects = {
  id: number;
  name: string;
  teachers: string[];
}

const columns = [
  {
    header: 'Subject Name', accessor: 'name'
  },
  { header: 'Teachers', accessor: 'techers', className: 'hidden md:table-cell' },

  {
    header: 'Action', accessor: 'action'
  },
]

const SubjectsList = () => {
  const renderRow = (item: Subjects) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaSkyLight'>
      <td className='flex items-center gap-4 p-4'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.teachers.join(',')}</td>


      <td>
        <div className='flex items-center gap-2'>
          {/* <Link href={`/list/teacher/${item.id}`}><button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'><Image src='/edit.png' alt='' width={16} height={16} /></button></Link> */}
          {role === 'admin' && (
            // <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'><Image src='/delete.png' alt='' width={16} height={16} /></button>
            <>
              <FormModel table='subject' type='update' data={item} />
              <FormModel table='subject' type='delete' id={item.id} />
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
        <h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>
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

              <FormModel table='subject' type='create' />
            )}
          </div>
        </div>
      </div>

      {/* Body Teacher List */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* Buttom Pagination */}

      <Pagination />

    </div>
  )
}

export default SubjectsList;
