import React from 'react'
import { UserCard } from './UserCard'
import { Loader } from './Loader'

export const Users = (props) => {
  
  let {users} = props

  return (
    <div style={{"height":"80vh"}} className='d-flex flex-wrap justify-content-center align-items-center '>
        {
           (users.length) ?  users.map((user)=>{
                return (
                    <UserCard avatar={user.avatar} firstName={user.first_name} email={user.email}/>
                )
            }) : <Loader />
        }
    </div>
  )
}
