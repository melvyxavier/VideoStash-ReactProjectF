import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../service/allApis'
import { Col, Row } from 'react-bootstrap'
import Loader from './Loader'

function Videos(data) {

    const [allVideos, setVideos] = useState([])
    const [deleteUpdate, setDeleteUpdate] = useState("")

    const getAllVideos = async () => {
        const result = await getVideos()
        setVideos(result.data);
    }

    useEffect(() => {
        getAllVideos()
    }, [data, deleteUpdate])

    console.log(allVideos);

    return (


        <Row>

            <h1 className='text-center mb-3'>Watch Video</h1>

            {
                allVideos.length > 0 ?
                    allVideos.map(i => (
                        <Col lg={4} md={12} sm={12} xs={12}><VideoCard updateData={setDeleteUpdate} video={i}></VideoCard></Col>
                    ))
                    : <Loader></Loader>
            }
        </Row>


    )
}

export default Videos