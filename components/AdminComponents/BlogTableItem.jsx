import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({deleteBlog , author , authorImg , title , date , mongoId}) => {

    const blogDate = new Date(date); //this date is a timestamp using this time stamp we have created this date object . This variable should be a Date object in JavaScript, representing a specific point in time.
  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} alt=''/>
            {author}
        </th>
        <td className='px-6 py-4'>
            {title?title:"No Title"}
        </td>
        <td className='px-6 py-4'>
            {blogDate.toDateString()} {/*This method converts the Date object into a human-readable string format that contains the date portion, excluding the time*/}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default BlogTableItem