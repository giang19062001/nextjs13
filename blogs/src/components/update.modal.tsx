'use client'
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import useSWR, { mutate } from 'swr';

interface IProps {
  show: boolean;
  setShow: (value: boolean) => void;
  blog: IBlog | null,
  setBlog: (value: IBlog | any) => void;
}
const initialProp = {
  id: 0,
  content: '',
  author: '',
  title: '',
  image:''
}
function Update(props : IProps) {

  const { show, setShow, blog, setBlog } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setBlog((prevState: IBlog) => ({
        ...prevState,
        [name]: value,
    }));
  };

  const handleSave = () =>{
    console.log(blog);
    axios.put(`${process.env.NEXT_PUBLIC_BACKEND}/blogs/${blog?.id}`, blog ).then(res => {   
       toast.success("update success fully")
       mutate(`${process.env.NEXT_PUBLIC_BACKEND}/blogs`)  // kêu nó get lại api này
       closeModal()
    })
  }

  const closeModal = () =>{
    setShow(false)
    setBlog(initialProp)
  }

  return (
    <>
      <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name='title' value={blog?.title}  onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" name='author' value={blog?.author}  onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} name='content'  value={blog?.content}  onChange={handleChange}/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>        
          <Button variant="primary" onClick={handleSave}>SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update;