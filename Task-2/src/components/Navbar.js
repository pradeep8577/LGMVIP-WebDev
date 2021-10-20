import React from 'react';


export default function Navbar(props) {


    return (
      <div className="container-fluid nav_bg">
      <div className="row">
          <div className=" col-10 mx-auto">
            <div className="navbar">
              <div className="brand">
             <h4>Zippy</h4>
             </div>
             <ul className="nav-links">
             <button className="btn active" onClick={()=>{ props.handleClick(true);}} className="btn">Get Users</button>
           </ul>           
        </div>
        </div>
      </div>
  </div>
    )
}
