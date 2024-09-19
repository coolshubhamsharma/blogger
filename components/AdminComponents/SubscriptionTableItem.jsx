import React from 'react'

const SubscriptionTableItem = ({email , mongoId , date , deleteEmail}) => {

    const timestamp = Date.parse(date);
    const dateOnly = timestamp ? new Date(timestamp).toISOString().split('T')[0] : 'Invalid Date';

  return (
    <tr className='bg-white border-b text-left '>
        <th scope='row' className='px-4 py-4 font-medium text-gray-900 whitespace-nowrap' >
            {email ? email:"No Email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>
           {dateOnly}
        </td>
        <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>
           x
        </td>
    </tr>
  )
}

export default SubscriptionTableItem