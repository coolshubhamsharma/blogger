'use client'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async ()=>{
    const response = await axios.get('/api/blog');
    // console.log(response); //debug codeline
    setBlogs(response.data);
  }

  const deleteBlog = async(mongoId)=>{ // we have created the option to delete in the other file that is blogTableItem so we have to pass this function inside the blogTableItem Component so that when inside the BlogTableItem component the delete option in clicked this functions runs with the id of the blog clicked and send it to the delete request in the route.js file
    const response =  await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.message);
    fetchBlogs(); //we are calling this function again so that the page gets refreshed after deleteing a particular blogItem and updated data is showed on the page
  }

  useEffect(()=>{
    fetchBlogs();
  } , [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 '>
      <h1>All Blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-grey-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author name
              </th>
              <th scope='col' className=' px-6 py-3'>
                Blog Title
              </th>
              <th scope='col' className=' px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index)=>{
              return <BlogTableItem deleteBlog={deleteBlog} key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} />
            })}
            
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default page