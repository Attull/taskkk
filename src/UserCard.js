import React from 'react'

export const UserCard = (props) => {

    const {email, avatar, firstName} = props

    return (
        <div className="card" style={{"width": "15rem", "margin":"20px"}}>
            <img src={avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{firstName}</h5>
                
                    <a href="#" className="btn btn-primary">{email}</a>
                </div>
        </div>
    )
}
