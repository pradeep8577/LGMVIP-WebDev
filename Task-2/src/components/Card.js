import React from 'react';

export default function Card({pic,lname,fname,email}) {
    
    return (
        <div className="card">
            <img src={pic} alt={`${fname} pic`} />
            <div className="card-content">
               <h4>{fname} {lname}</h4>
               <h5>{email}</h5>
            </div>
        </div>
    )
}
