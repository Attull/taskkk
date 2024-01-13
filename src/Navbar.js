import React, { useState } from 'react'

export const Navbar = (props) => {
   

    const fetchData = async () =>{
        const res =  await fetch("https://reqres.in/api/users?page=1")
        const data =  await res.json()
        props.setUsers(data.data)
    }


    function submit(e){
        e.preventDefault()
        fetchData()
    }

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" onClick={(e)=> submit(e)}>Get Users</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
