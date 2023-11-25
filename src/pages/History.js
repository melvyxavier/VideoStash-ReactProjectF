import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import Loader from '../components/Loader';
import { getHistory, removeHistory } from '../service/allApis';

function History() {

  const [history, setHistory] = useState([])

  const getHistories = async () => {
    const result = await getHistory()
    setHistory(result.data)
  }

  useEffect(() => {
    getHistories()
  }, [])


  // console.log(history);

  const removeItem = async (id) => {
    await removeHistory(id)
    await getHistories()
  }

  return (
    <div>
      {
        history?.length > 0 ?
          <div>

            <h1 className='text-center mt-5'>Watch History</h1>
            <Table id='j3' className='container w-75 my-5' striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Video</th>
                  <th>Date</th>
                  <th>Video Url</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  history?.map((i, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i?.title}</td>
                      <td>{i?.time}</td>
                      <td>{i?.videoUrl}</td>
                      <td className='text-center'>
                        <Trash2 onClick={() => removeItem(i?.id)} className='text-center text-danger'>
                        </Trash2></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
          : <Loader></Loader>
      }
    </div>
  )
}

export default History