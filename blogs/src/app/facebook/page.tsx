"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Container } from 'react-bootstrap'
const Facebook = () => {
     const router = useRouter()
    const handleBack = () =>{
        router.push('/')
    }
  return (
    <Container style={{marginTop:20, marginBottom:20}}>
        <Button variant='primary' onClick={()=> handleBack()} >BACK HOME</Button>
    </Container>
  )
}

export default Facebook