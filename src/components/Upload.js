import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allApis';



function Upload(updateData) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //create a new state to hold input datas
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    coverImage: '',
    videoUrl: ''
  })

  const takeInput = (e) => {
    const { name, value } = e.target
    // console.log(value);
    // console.log(name);
    setInputs({ ...inputs, [name]: value })

  }

  const convertURL = (e) => {
    var url = e.target.value
    url = url.slice(-11,)
    console.log(url);
    var convertedURL = `https://www.youtube.com/embed/${url}?autoplay=1`
    const { name } = e.target
    setInputs({ ...inputs, [name]: convertedURL })
  }

  const handleAdd = async () => {
    //id
    let id = uniqid()
    // console.log(id);
    setInputs({ ...inputs, ["id"]: id })

    //input entered or not
    const { title, coverImage, videoUrl } = inputs
    if (title == "" || coverImage == "" || videoUrl == "") {
      toast.error('Please fill all fields', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      const result = await addVideo(inputs)

      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        toast.success(`${result.data.title} added successfully!`, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        handleClose()

        updateData(result.data)

      }
    }

  }

  console.log(inputs);


  return (
    <div>
      <Card id='c2' style={{ width: '18rem' }}>
        <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/fT8p96nr/Feed-the-Cloud.gif" />
        <Card.Body>
          <Card.Title style={{ color: 'darkorchid', fontSize: '40px', textAlign: 'center' }}>
            <Button onClick={handleShow} style={{ border: 'black solid 2px', backgroundColor: '#d580e8', color: 'black' }}
              className='p-3 btn btn'>Upload Videos</Button></Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: 'black' }} closeButton>
          <Modal.Title style={{ color: '#d580e8' }}>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black' }}>

          <FloatingLabel controlId="floatingInput" label="Caption" className="mb-3">
            <Form.Control name='title' onChange={(e) => takeInput(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingPassword" label="Cover Image Url">
            <Form.Control name='coverImage' onChange={(e) => takeInput(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingPassword" label="Video Url">
            <Form.Control name='videoUrl' onChange={(e) => convertURL(e)} type="text" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'black' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: '#d580e8', color: 'black', border: '2px white solid' }}
            variant="primary" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />

    </div>
  )
}

export default Upload