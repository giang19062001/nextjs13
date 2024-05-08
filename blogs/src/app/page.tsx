'use client'
import Image from 'next/image'
import Link from 'next/link'
import x from '../styles/text.module.css'
import Tables from '@/components/table'
import { Button, Container } from 'react-bootstrap'
import useSWR from 'swr'
import Create from '@/components/create.modal'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND}/blogs`, fetcher)

  const [show, setShow] = useState<boolean>(false)

  // const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher,
  // {
  //   revalidateIfStale: false,  
  //   revalidateOnFocus: false,  
  //   revalidateOnReconnect: false 
  // }) 
  // cach này ko gọi lại API khi connect lại và lấy data từ cache

  if(isLoading || !data){
    return  <Container style={{marginTop:20, marginBottom:20}}>
              <p>loading...</p>
            </Container>
  }
  return (
    <Container style={{marginTop:20, marginBottom:20}}>
        <div className='flex flex-col'>

            {/* <p className={x['red']}>Hello world</p> */}
            {/* <Link href="/facebook">FACEBOOX</Link> */}

            <div className='mb-3'
            style={{display:'flex', justifyContent:"space-between"}}>
              <h3>BLOGS</h3>
              <Button variant='secondary' onClick={()=>setShow(true)}>ADD</Button>
            </div>
            <Tables blogs={data} ></Tables>
            <Create show={show} setShow={setShow}></Create>

          </div>
    </Container>

   
  )
}
