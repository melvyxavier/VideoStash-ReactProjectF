import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addCategory, getCategories, getVideo, removeCategory, updateCategory } from '../service/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'react-feather';

function Categories() {

    const [catInputs, setCatInputs] = useState({
        id: "",
        title: "",
        videos: []
    })

    const [categories, setCategories] = useState([])



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SetData = (e) => {
        const { value, name } = e.target
        setCatInputs({ ...catInputs, [name]: value })
    }

    const handleAdd = async () => {

        let id = uniqid()
        setCatInputs({ ...catInputs, ["id"]: id })
        const { title } = catInputs
        if (title == "") {
            toast.error('Please enter a category name.', {
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
            const result = await addCategory(catInputs)
            if (result.status >= 200 && result.status < 300) {
                toast.success(`${result.data.title} category created!`, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                setShow(false)
                getAllCategories()
            }
        }
    }

    const getAllCategories = async () => {
        const result = await getCategories()
        setCategories(result.data);
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    console.log(categories);

    const handleDelete = async (id) => {
        const result = await removeCategory(id)
        getAllCategories()
    }

    const draggedover = (e, id) => {
        e.preventDefault()
        console.log("dragged over category -" + id);
    }

    const dropped = async (e, id) => {
        console.log("dropped category id -" + id);

        //access dragged video id
        let videoId = e.dataTransfer.getData('cardId')
        console.log("dropped video id-" + videoId);

        //video
        const { data } = await getVideo(videoId)
        console.log(data);

        //category
        let category = categories.find(i => i.id == id)
        console.log(category);

        //add videos to videos array of category
        category.videos.push(data)
        console.log(category);

        //update category
        await updateCategory(id, category)
        await getAllCategories()
    }

    return (
        <div id='n3' className='mt-3 me-2'>

            <Button className='w-100 p-3' style={{ backgroundColor: 'black', color: '#d580e8', border: '2px solid #d580e8' }} variant="primary" onClick={handleShow}>
                Add New Category
            </Button>

            {
                categories?.length > 0 && categories.map(i => (
                    <div droppable onDragOver={e => draggedover(e, i?.id)} onDrop={e => dropped(e, i?.id)} className='mt-3'>
                        <h4 className='p-3' style={{ textAlign: 'center', border: '2px solid black', borderRadius: '100px' }}>{i.title}
                            <Trash2 onClick={() => handleDelete(i.id)} className='ms-4 btn' size={50} color='red'></Trash2></h4>


                        <marquee>
                            <div className='d-flex justify-content-evenly'>
                                {
                                    i?.videos?.map(item => (
                                        <div className='ms-2'>
                                            <img style={{ height: '60px', width: '80px', border: '2px solid #d580e8' }} src={item?.coverImage} alt="" />
                                        </div>
                                    ))
                                }
                            </div>

                        </marquee>
                    </div>
                ))
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: 'black' }} closeButton>
                    <Modal.Title style={{ color: '#d580e8' }}>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black' }}>

                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Category Name">
                        <Form.Control onChange={e => SetData(e)} name='title' type="text" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'black' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: '#d580e8', color: 'black', border: '2px white solid' }}
                        variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />

        </div>
    )
}

export default Categories