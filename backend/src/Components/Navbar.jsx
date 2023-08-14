import React from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

export function Navbar(props) {

    const username = Cookies.get('accessToken');

    return (
        <div style={{width:"100%",height:"50px",background:"grey",color:"white",
        boxShadow: "rgb(182, 182, 182) 0px 3px 8px",fontWeight:"bold",
        position:"fixed",top:0,zIndex:99999,
        display:"flex",justifyContent:"space-around",alignItems:"center"
        }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {!username && <NavLink to="/signup">Signup</NavLink>}
            {!username && <NavLink to="/login">Login</NavLink>}
            {username && <h3>{username}</h3>}
            {username && <button>Logout</button>}
        </div>
    )
}
