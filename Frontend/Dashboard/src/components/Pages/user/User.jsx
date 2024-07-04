import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { baseUrl } from '../../util/api'

const User = () => {
  const [user, setUser] = useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}/get-users`)
    .then((res)=>{
      console.log("userrrrrrr",res.data.data)
      setUser(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Textarea</th>
          </tr>
        </thead>

        <tbody>
          {
            user &&
            user.map((e,i)=>{
              return(
                <tr key={i}>
                  <td>{++i}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.contact}</td>
                  <td>{e.textarea}</td>

                </tr>
              )
            })
            
          }
        </tbody>

      </Table>

    </div>
  )
}

export default User