import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import uniqid from 'uniqid';
import { addHistory, removeVideo } from '../service/allApis';
import { format } from 'date-fns';

function VideoCard({ video, updateData }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);

        //history

        //id
        let id = uniqid()

        //date
        let date = format(new Date(), 'MM/dd/yyyy h:mm a')
        // console.log(date);

        //title
        let title = video.title

        //videoUrl
        let videoUrl = video.videoUrl

        var body = {
            id, time: date, title, videoUrl
        }
        // console.log(body);
        await addHistory(body)
    }

    const handleDelete = async (id) => {
        const result = await removeVideo(id)
        if (result.status >= 200 && result.status < 300) {
            updateData(result.data)
        }
    }

    const dragStarted = (e, id) => {
        console.log("drag started...video id is - " + id);
        
        //store dragged data
        e.dataTransfer.setData('cardId', id)

    }


    return (
        <div className='p-3'>


            <Card draggable onDragStart={(e) => dragStarted(e, video?.id)} id='b1' className='mt-3 ms-3' style={{ width: '18rem' }}>
                <Card.Img className='w-100' style={{ height: '200px' }} onClick={handleShow} variant="top" src={video.coverImage} />
                <Card.Body>
                    <Card.Title style={{ color: 'darkorchid', fontWeight: '900' }}>
                        {video?.title.length > 20 ? video.title.slice(0, 20) + "..." : video?.title}
                    </Card.Title>
                    <div className='text-end'>
                        <Trash2 onClick={() => handleDelete(video.id)} size={45} className='text-danger btn'></Trash2>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: 'black' }} closeButton>
                    <Modal.Title style={{ color: '#d580e8' }}>{video.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black' }}>
                    <iframe width="100%" height="300px"
                        src={video.videoUrl}
                        frameborder="0"
                        allow="accelerometer; autoplay;
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'black' }}>
                    <Button style={{ backgroundColor: '#d580e8', color: 'black', border: '2px white solid' }}
                        variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default VideoCard