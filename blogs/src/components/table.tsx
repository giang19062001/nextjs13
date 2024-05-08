import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Update from './update.modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
  blogs: IBlog[] // vì đặt tên file là .d.ts nên typescript tự quét và hiểu nên ko cần import
}
const initialProp = {
  id: 0,
  content: '',
  author: '',
  title: '',
  image:''
}
function Tables(props : IProps) {
  const [show, setShow] = useState<boolean>(false)
  const [blog, setBlog] = useState<IBlog>(initialProp)
  const router = useRouter()

  const {blogs} = props

  
  const gotoDetal = (id: number) =>{
        router.push('/'+id)
  }

  const deleteBlog = async(id: number) => {
    axios.delete(`${process.env.NEXT_PUBLIC_BACKEND}/blogs/${id}` ).then(res => {   
      toast.success("deleted success fully")
      mutate(`${process.env.NEXT_PUBLIC_BACKEND}/blogs`)  // kêu nó get lại api này
   })
  }
  return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>author</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map((blog)=>{
          return (
            <tr key={blog.id}>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.author}</td>
            <td>
              <Button onClick={()=>gotoDetal(blog.id)}>View</Button>
              <Button variant='warning' className='mx-3' onClick={()=>{ setBlog(blog);setShow(true) }}>Edit</Button>
              <Button variant='danger' onClick={()=>deleteBlog(blog.id)}>Delete</Button>
            </td>
          </tr>
          )
        })}
      
     
      </tbody>
    </Table>
     <Update show={show} setShow={setShow} blog={blog} setBlog={setBlog}></Update>

    </>
   
  );

}

export default Tables;